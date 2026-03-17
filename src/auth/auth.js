export const getuser = () => {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
};
export const saveUser = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

//signup

export const signup = (newUser) => {
  const users = getuser();

  const exist = users.find((u) => u.email === newUser.email);

  if (exist) {
    return { success: false, message: "User is already exist" };
  }

  users.push(newUser);
  saveUser(users);

  return { success: true, message: "Signup Successful" };
};
//token

export const token = (user) => {
  const payload = {
    email: user.email,
  };
  return btoa(JSON.stringify(payload));
};

//login
export const login = (email, password) => {
  const users = getuser();
  const userExist = users.find(
    (u) => u.email === email && u.password === password,
  );

  if (!userExist) {
    return { success: false, message: "Invalid credentials" };
  } else {
    const userToken = token(userExist);
    localStorage.setItem("currentUser", JSON.stringify(userExist));
    localStorage.setItem("token", JSON.stringify(userToken));

    return { success: true, message: "logged In " };
  }
};
//loggedIn
export const currentUser = () => {
  const user = localStorage.getItem("currentUser");
  return user ? JSON.parse(user) : null;
};

//logged Out

export const logout = () => {
  localStorage.removeItem("currentUser");
  localStorage.removeItem("token");
};
