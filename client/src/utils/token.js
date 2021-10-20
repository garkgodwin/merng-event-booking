export const getTokenFromLocal = () => {
  return localStorage.getItem("token") || "";
};

export const setTokenToLocal = (token) => {
  localStorage.setItem("token", token);
};
