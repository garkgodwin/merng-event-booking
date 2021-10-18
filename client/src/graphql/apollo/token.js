export const getTokenFromLocal = () => {
  return localStorage.getItem("token") || "";
};
