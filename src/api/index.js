export const getData = async ({ apiUrl: API_URL }) => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};
