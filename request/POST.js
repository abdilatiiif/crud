import { APIurl } from "./auth.js";
import { apiKey } from "./auth.js";

export async function order(order) {
  console.log("order", order);
  try {
    const response = await axios.post(APIurl, [order], {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    console.log("Lagt til bestilling", response);
  } catch (error) {
    console.log("Error med å legge inn bestilling", error);
  }
}
