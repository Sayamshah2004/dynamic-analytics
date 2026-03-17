export const validateName = (name) => {
  if (!name.trim()) return "Name is required";
  return "";
};
export const validateEmail = (email) => {
  if (!email.trim()) return "Email is required";
  const check = email.includes("@") && email.includes(".");

  if (!check) return "Email format is not valid";

  return "";
};

export const validatePassword = (password) => {
  if (!password.trim()) return "Password is required";

  if (password.length < 6) return "Password must contain 6 letters";

  return "";
};
