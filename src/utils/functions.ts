export const setAccessToken = (accessToken: string) => {
  const start: { start: number } = { start: Date.now() };
  localStorage.setItem("timeToken", JSON.stringify(start));
  localStorage.setItem("accessToken", accessToken);
};
export const timeToken = (): boolean => {
  const t = localStorage.getItem("timeToken");
  if (t) {
    const dT: number = Date.now() - JSON.parse(t).start;
    return dT >= 1190000;
  }
  return true;
};
