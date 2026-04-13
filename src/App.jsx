import { Route, Routes } from 'react-router-dom'
import './App.css'
import { routeGroups } from './routes/Route'
import AdminLayout from './common/layouts/admin-layouts'
// import PrivateRoute from './routes/PrivateRoute'
import AdminRouteGuard from './routes/AdminRouteGuard'
import { Toaster } from 'sonner'
import AstrologerLayout from './common/layouts/astrologer-layout'

function App() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <Routes>
        {routeGroups.map((group) => {
          let Layout;
          let GuardRoute;
          // console.log("Group", group);

          if (group.role === "admin") {
            Layout = AdminLayout;
            GuardRoute = AdminRouteGuard;
          }
          if (group.role === "astrologer") {
            Layout = AstrologerLayout;
            GuardRoute = AdminRouteGuard;
          }
          if (group.role === "user"){
              GuardRoute = AdminRouteGuard;
          }

          return (
            <Route key={group.role}>
              {/* Public routes */}
              {group.routes.map((item) => {
                if (!item.privetRoute) {
                  return (
                    <Route element={<GuardRoute isPrivate={false} role={group.role} />}>
                      <Route
                        key={item.path}
                        path={item.path}
                        element={<item.component />}
                      />
                    </Route>
                  );
                }
              })}

              {/* Private routes */}
              <Route element={<GuardRoute isPrivate={true} role={group.role} />}>
                <Route element={<Layout />}>
                  {group.routes.map((item) => {
                    if (item.privetRoute) {
                      return (
                        <Route
                          key={item.path}
                          path={item.path}
                          element={<item.component />}
                        />
                      );
                    }
                  })}
                </Route>
              </Route>
            </Route>
          );
        })}
      </Routes>
    </>

  )
}

export default App