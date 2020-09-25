export default function AuthHeader() {
  const data = localStorage.getItem("user");

  if (data.user && data.token) {
    return { Authorization: "bearer " + data.token };
  } else {
    return {};
  }
}
