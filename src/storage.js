export const getData = () => {
  const data = localStorage.getItem("data");
  if (data) return JSON.parse(data);
  return [];
};

export const removeData = () => {
  localStorage.removeItem("data");
};

export const saveData = (data) => {
  localStorage.setItem("data", JSON.stringify(data));
};
