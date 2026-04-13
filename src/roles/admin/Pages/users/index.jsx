import ContentLayout from "@/common/layouts/admin-layouts/AdminLayout";
import UserTable from "./components/UserTable";
import UserTableHead from "./components/UserTableHead";
import { Users } from "lucide-react";

const UserPage = () => {



  return (
    <ContentLayout>


      <div className="p-2 ">

        <div className="p-4 flex items-center gap-4">

          <div className=" bg-[#FFF1B7] p-3 rounded-xl">
            <Users size={36} className="text-[#BD8100]" />
          </div>
          <div className="">
            <h1 className="text-[#242424] font-inter text-[28px] font-medium leading-[36.711px] tracking-[-1.748px]">Users</h1>
            <p className="text-[#484848] font-urbanist text-[16px] font-semibold ">
              You can view & manage users here.
            </p>
          </div>

        </div>


        <div className="p-2 shadow-card rounded-md">

          <UserTableHead />
          <UserTable />
        </div>

      </div>

    </ContentLayout>
  );
};

export default UserPage;