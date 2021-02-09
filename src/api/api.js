const URL = `https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e`;

export const getProducts = async () => {
  try {
    const request = await fetch(URL);
    
    return await request.json();
  } catch (error) {
    console.error(error);
  }
}
