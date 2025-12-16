export const loginApi = async () => {
  const res = await fetch('/login');
  return res.json();
}