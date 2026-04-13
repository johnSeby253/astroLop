import React from 'react'
import login_bg from "../../../../assets/admin-assets/admin-login_bg.svg"
import login_side from "../../../../assets/admin-assets/login-sideImage.png"
import FormFields from '../../../../common/components/FormFields';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../../common/components/Button';
import { useAdminLogin } from '../../api_Queries/Authentication/query';



const Login = () => {
  const [form, setForm] = React.useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const { mutate, isPending } = useAdminLogin();


  const handleLogin = () => {
    mutate(
      {
        email: form.email,
        admin_password: form.password
      },
      {
        onSuccess: () => {
          navigate("/admin-dashboard")
        }
      },
    
    )
  }

  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col sm:flex-row sm:items-center"
      style={{
        backgroundImage: `url("${login_bg}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full hidden h-full sm:flex items-center justify-center p-10 sm:w-[50%] sm:justify-start">
        <img src={login_side} alt="" />
      </div>
      <div className="h-full flex items-center sm:w-[50%]">

        <div className="w-full flex flex-col items-center gap-10 p-5 sm:items-start sm:gap-16 lg:w-[90%] lg:ps-16">
          <div className="w-full flex flex-col gap-3 text-center px-1 sm:text-start sm:p-0">
            <h2 className='font-jakarta text-[30px] sm:text-[64px] font-bold leading-[120%] tracking-[0.64px] text-text-black'>Login</h2>
            <p className='font-lato text-[16px] sm:text-[22px] font-medium leading-[150%] tracking-[0.72px] text-greytext'>Login to powering your platform management.</p>
          </div>

          <div className="w-[80%] sm:w-full md:w-[75%] lg:w-[55%]">
            <FormFields
              type="text"
              label="Enter your registered email or username"
              name="email"
              placeholder="Enter Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <FormFields
              type="password"
              label="Enter your password"
              name="password"
              placeholder="Enter Your password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <div className="flex justify-end">
              <Link to="/admin-forgot_password" className='text-accent hover:underline'>Forget Password ? </Link>
            </div>
            <div className="py-3">
              <Button
                onClick={handleLogin}
                disabled={isPending}
                type="submit"
                variant="primary"
                className='w-full py-3'>
                {isPending ? "Logging in..." : "Login"}
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login
