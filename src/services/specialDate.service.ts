
export const getSpecialDate = async () => {
  try {
    const fetchDate = await fetch(`http://localhost:8090/api/date/`);
    return await fetchDate.json();
  } catch (error) {
    throw new Error("Error at fetch date.");
  }
};

export const genrateSpecialDate = async (body: unknown) => {
  try {
    const fetchDate = await fetch(`http://localhost:8090/api/date/`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    return await fetchDate.json();
  } catch (error) {
    throw new Error("Error at generate special date.");
  }
};
