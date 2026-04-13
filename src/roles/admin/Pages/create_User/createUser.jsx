import PersonalInfoCard from "./components/PersonalInfoCard";
import RolesAccessCard from "./components/RolesAccessCard";

const CreateUser = () => {
  return (
    <div className="p-4 min-h-screen">

      <h1 className="text-[#242424] font-inter text-[28px] font-medium leading-[36.711px] tracking-[-1.748px]">Add New User</h1>
      <p className="text-[#484848] font-urbanist text-[16px] font-semibold">
        Please provide details for the new user you would like to add.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-3">
        <PersonalInfoCard />
        <RolesAccessCard />
      </div>

    </div>
  );
};

export default CreateUser;