import { showError } from "@/lib/toast";
import { useAstroAdminRegistration } from "@/roles/admin/api_Queries/Authentication/query";
import { useRolesAndPermissions } from "@/roles/admin/api_Queries/RoleAndPermissions/query";
import { useCreateUserStore } from "@/roles/admin/store/useCreateUserStore";
import { buildFormData } from "@/roles/admin/Utility/buildFormData";
import { buildAdminPayload } from "@/roles/admin/Utility/payloadBuilders";

const RolesAccessCard = () => {
  const { data: roles, isLoading, isError } = useRolesAndPermissions();
  const {
    selectedRole,
    setSelectedRole,
    personalInfo,
    resetUserForm
  } = useCreateUserStore();
  const { mutate: registerAdmin, isPending } = useAstroAdminRegistration();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading roles</div>;

  const handleFromatData = () => {
    if (!selectedRole) {
      showError("Please Select Role")
      return;
    }
    const payload = buildAdminPayload(personalInfo, selectedRole);
    const formData = buildFormData(payload);

    registerAdmin(formData, {
      onSuccess: () => {
        resetUserForm();
      }
    });

  }






  return (
    <div className="bg-white p-6 rounded-md shadow-card flex flex-col justify-between">

      <div>

        <h2 className="text-[#43157C] font-urbanist text-[20px] font-bold leading-normal py-5">
          Roles & Access Control
        </h2>

        {/* Roles */}
        <p className="text-[#252525] font-inter text-base font-semibold">Roles Selection</p>

        <div className="space-y-3 mb-6 w-full p-4 max-h-75 vertical-scrollbar overflow-y-scroll border-b">
          {roles?.data?.map((role) => (
            <label key={role.name} className="flex items-center gap-3">
              <input
                type="radio"
                name="role"
                className="accent-primary"
                checked={selectedRole?.name === role.name}
                onChange={() => setSelectedRole(role)}
              />
              {role.label}
            </label>
          ))}
        </div>
        {/* Permissions */}
        <p className="text-[#252525] font-inter text-base font-semibold pb-3">Custom Permissions</p>

        <div className="space-y-3 p-3 w-full max-h-75 vertical-scrollbar overflow-y-scroll border-b">
          {selectedRole?.permissions?.map((perm) => (
            <label key={perm.key} className="flex items-center gap-3 hover:bg-gray-100 rounded-md px-4 py-1">
              <input
                type="checkbox"
                className="accent-primary "
                checked={perm.enabled}
                readOnly
              />
              {perm.key}
            </label>
          ))}
        </div>

      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4 mt-8">

        <button className="px-6 py-2 border rounded-lg text-gray-600">
          Cancel
        </button>

        <button
          onClick={handleFromatData}
          disabled={isPending}
          className="px-6 py-2 bg-primary text-white rounded-lg"
        >
          {isPending ? "Creating..." : "Create User"}
        </button>

      </div>

    </div>
  );
};

export default RolesAccessCard;