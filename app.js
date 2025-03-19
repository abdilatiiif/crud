import { order } from "./request/POST.js";

const orderButton = document.querySelector("#add-order-form");

orderButton.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("clicked");
  if (!order || !antall) return;

  const bestilling = {
    order: document.querySelector("#order").value,
    antall: document.querySelector("#antall").value,
  };

  order(bestilling);
});
