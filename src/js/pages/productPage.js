import { getContainer } from "../components/container.js";
import { getMainTitle } from "../components/mainTitle.js";
import { getDescr } from "../components/descr.js";

// create product-page

export function getProductPage(title) {
  const page = document.createElement("div");
  page.classList.add("main__product", "product");
  const container = getContainer("product__container");
  page.append(container);
  const mainTitle = getMainTitle(title, "product");
  const descr = getDescr("page product under construction");
  container.append(mainTitle, descr)
  return page
}