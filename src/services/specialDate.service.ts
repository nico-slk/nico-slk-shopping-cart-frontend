
export const getSpecialDate = async () => {
  try {
    const fetchDate = await fetch(`localhost:8090/api/date/`);
    return await fetchDate.json();
  } catch (error) {
    throw new Error("Error at fetch date.");
  }
};
