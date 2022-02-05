export const incEntries = ({ id }) => {
  const data = JSON.parse(localStorage.getItem("data"));
  if (data) {
    const newData = data.map((url) => {
      if (url.id === id) url.entries++;
      return url;
    });
  }
};
