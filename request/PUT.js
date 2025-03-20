import { APIurl } from "./auth.js";
import { apiKey } from "./auth.js";
import { renderFood } from "../app.js";

export async function editOrder(id) {
  const newFood = prompt("Skriv inn navnet på maten du vil bestille");
  if (!newFood) return;

  try {
    const response = await axios.put(
      `${APIurl}/${id}`,
      { order: newFood },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    console.log("endret bestillinger");
    renderFood();
  } catch (error) {
    console.log("Error med å endre bestilling", error);
  }
}
