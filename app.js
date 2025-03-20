import { order } from "./request/POST.js";
import { getOrder } from "./request/GET.js";
import { editOrder } from "./request/PUT.js";

const orderButton = document.querySelector("#add-order-form");
const orderList = document.querySelector("#orders");

orderButton.addEventListener("submit", async (e) => {
  orderList.innerHTML = "";
  e.preventDefault();

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
    const order = document.createElement("h4");
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    deleteBtn.innerText = "slett ❌";
    editBtn.innerText = "Edit ✍️";
    order.innerText = `${item.order} - ${item.antall}`;
    orderList.appendChild(order);
    orderList.appendChild(editBtn);
    orderList.appendChild(deleteBtn);

    // endrings logikk
    editBtn.addEventListener("click", async () => {
      editOrder(item._uuid);
      orderList.innerHTML = "";
      console.log("Edit button clicked");
      console.log(item._uuid);
    });

    // slett logikk
    deleteBtn.addEventListener("click", async () => {
      console.log("Delete button clicked");
      console.log(item._uuid);
    });
  });
}
