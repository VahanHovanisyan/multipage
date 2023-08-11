import { getContainer } from "../components/container.js";
import { getMainTitle } from "../components/mainTitle.js";
import { getDescr } from "../components/descr.js";

// create cart-page
export function getCartPage() {
  const page = document.createElement("div");
  page.classList.add("main__cart", "cart");
  const container = getContainer("cart__container");
  page.append(container);
  const mainTitle = getMainTitle("Cart Page", "cart");
  const descr = getDescr("page cart under construction");
  container.append(mainTitle, descr)
  return page
}


