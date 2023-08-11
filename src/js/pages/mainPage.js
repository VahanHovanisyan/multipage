import { getContainer } from "../components/container.js";
import { getMainTitle } from "../components/mainTitle.js";
import { getProductCard } from "../components/product.js";

// create main-page
export function getMainPage() {
  const page = document.createElement("div");
  page.classList.add("main__home", "home");
  const container = getContainer("home__container");
  page.append(container);
  const mainTitle = getMainTitle("Main Page", "home");
  const list = document.createElement("ul");
  list.classList.add("product-list", "list-reset");

  list.append(
    getProductCard("product_1", 400),
    getProductCard("product_2", 300),
    getProductCard("product_3", 700),
  )
  container.append(mainTitle, list)
  return page
}

