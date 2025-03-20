import { APIurl } from "./auth.js";
import { apiKey } from "./auth.js";

export async function getOrder() {
  try {
    const response = await axios.get(APIurl, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    console.log("hentet bestillinger");
    return response.data.items;
  } catch (error) {
    console.log("Error med å legge inn bestilling", error);
  }
}
