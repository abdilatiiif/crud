import { order } from "./request/POST.js";
import { getOrder } from "./request/GET.js";

const orderButton = document.querySelector("#add-order-form");
const orderList = document.querySelector("#orders");

orderButton.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("clicked");

  orderList.innerHTML = "";

  const bestilling = {
    order: document.querySelector("#order").value,
    antall: document.querySelector("#antall").value,
  };

  document.querySelector("#order").value = "";
  document.querySelector("#antall").value = "";

  if (!bestilling) return;

  order(bestilling);
});

export async function renderFood() {
  const items = await getOrder();
  items.forEach((item) => {
    const html = `<li class="item">${item.order} - ${item.antall} <button>slett</button> <button>Edit</button></li>`;
    orderList.innerHTML += html;
  });

  console.log("items", items);
}
