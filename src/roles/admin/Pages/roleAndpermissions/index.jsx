import ContentLayout from '@/common/layouts/admin-layouts/AdminLayout'
import { UserCog } from 'lucide-react'
import React, { useState } from 'react'
import RoleLibrary from './components/RoleLibrary'
import PermissionsList from './components/PermissionsList'
import { useRolesAndPermissions } from '../../api_Queries/RoleAndPermissions/query'

const RoleAndPermission = () => {

  const { data: roles, isLoading, isError } = useRolesAndPermissions();
  const [selectedRole, setSelectedRole] = useState(() => {
    return roles?.data?.[0];
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading roles!</p>;



  const rolesData = roles.data

  return (
    <ContentLayout>


      <div className="p-2 ">

        <div className="p-4 flex items-center gap-4">

          <div className=" bg-[#E4D9F0] p-3 rounded-xl">
            <UserCog size={36} color='#5856D6' />
          </div>
          <div className="">
            <h1 className="text-[#242424] font-inter text-[28px] font-medium leading-[36.711px] tracking-[-1.748px]">Roles & Permission</h1>
            <p className="text-[#484848] font-urbanist text-[16px] font-semibold ">
              You can view roles & update permision here.
            </p>
          </div>

        </div>


        <div className="p-5 shadow-card rounded-md">
          <div className="flex flex-col lg:flex-row w-full gap-5">
            <RoleLibrary
              roles={rolesData}
              selectedRole={selectedRole}
              setSelectedRole={setSelectedRole}
            />

            <PermissionsList
              selectedRole={selectedRole}
            />
          </div>


        </div>

      </div>

    </ContentLayout>
  )
}

export default RoleAndPermission
