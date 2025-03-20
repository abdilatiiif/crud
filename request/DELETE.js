import { APIurl } from "./auth.js";
import { apiKey } from "./auth.js";
import { renderFood } from "../app.js";

export async function deleteOrder(id) {
  try {
    const response = await axios.delete(`${APIurl}/${id}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    console.log("slettet bestillinger");
    renderFood();
  } catch (error) {
    console.log("Error med å slette bestilling", error);
  }
}
