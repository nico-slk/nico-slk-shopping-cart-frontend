
export const getUserByName = async (name: string) => {
  try {
    const fetchUser = await fetch(`http://localhost:8090/api/user/${name}`);
    return await fetchUser.json();
  } catch (error) {
    throw new Error("Error at fetch user.");
  }
};
