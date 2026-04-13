export const buildAdminPayload = (personalInfo, selectedRole) => {
  return {
    first_name: personalInfo.first_name,
    second_name: personalInfo.second_name,
    email: personalInfo.email,
    phone_number: personalInfo.phone_number,
    gender: personalInfo.gender,
    dob: personalInfo.dob,
    designation: selectedRole?._id,
    admin_password: "123456",
    admin_profile_pic: personalInfo.admin_profile_pic
  };
};