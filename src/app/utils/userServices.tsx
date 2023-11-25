const isLoggedIn = () => {
  return localStorage.getItem("accessToken");
}

export { isLoggedIn };