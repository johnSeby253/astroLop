import axiosInstance from "@/Services/axiosInstance"

// <<<<......Authentication.......>>>>

// <<<<..... Admin Login.......>>>>
export const astroAdmin_Login = (details) => {
   return axiosInstance.post(`/admin/login`, details,{withCredentials: true})
}

// <<<<......Admin Creation .......>>>>
export const astroAdmin_Registration = (details) => {
   return axiosInstance.post(`/admin/register`, details)
}

// <<<<...... Get Admin By Id ......>>>>
export const getAdminById = (id) => {
   return axiosInstance.get(`/admin/getAdminById/${id}`)
}



// <<<<----- Roles & Permissions ----->>>> //

// <<<<......Create Roles & Permissions.......>>>>
export const createRolesAndPermissions = (details) => {
   return axiosInstance.post(`/admin/create_roles`, details);
}

// <<<<......Create Roles & Permissions.......>>>>
export const getRolesAndPermissions = () => {
   return axiosInstance.get(`/admin/getallRolesAndPermissions`);
}

// <<<<......Edit Roles & Permissions.......>>>>
export const editRolesAndPermissions = (details) => {
   return axiosInstance.put(`/admin/editRolesAndPermissions`, details);
}

// <<<<......Edit Roles & Permissions.......>>>>
export const getRolesById = (_id) => {
   return axiosInstance.get(`/admin/getRolesAndPermissionById`, {
      params: { _id },
   });
};



// <<<<----- Wallet Packages ----->>>> //

// <<<<...... Create Wallet Packages .......>>>>
export const createAdminWallet = (details) => {
   return axiosInstance.post(`/admin/createAdminWallet`, details)
}

// <<<<...... Get All wallet packageList .......>>>>
export const getAllWalletPackages = () => {
   return axiosInstance.get(`/admin/getAllWalletPackagesList`);
}

// <<<<...... Edit wallet packageList .......>>>>
export const editWalletPackagesValues = ({ id, data }) => {
   return axiosInstance.patch(`/admin/updateWallet/${id}`, data);
}

// <<<<...... Delete wallet packageList .......>>>>
export const deleteWalletPackagesValues = (id) => {
   return axiosInstance.delete(`/admin/deleteWalletById/${id}`);
}



// <<<<----- Settings ----->>>> //

// <<<<...... Update financial setting .......>>>>
export const updateFinancialSettings = (details) => {
   console.log("Details:",details);
   
   return axiosInstance.put(`/admin/updatedFinancialSettings`, details);
}

// <<<<...... Update financial setting .......>>>>
export const getFinancialSettings = () => {
   return axiosInstance.get(`/admin/getFinancialSettings`);
}

// <<<<...... Update financial setting .......>>>>
export const updateSystemSettings = (details) => {
   console.log("Details:",details);
   
   return axiosInstance.put(`/admin/updatedSystemSettings`, details);
}

// <<<<...... Update financial setting .......>>>>
export const getSystemSettings = () => {
   return axiosInstance.get(`/admin/getSystemSettings`);
}