import { APIurl } from "./auth.js";
import { apiKey } from "./auth.js";
import { renderFood } from "../app.js";

export async function order(order) {
  try {
    const response = await axios.post(APIurl, [order], {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    console.log("Lagt til bestilling", response);
    renderFood();
  } catch (error) {
    console.log("Error med å legge inn bestilling", error);
  }
}
