import { getContainer } from "../components/container.js";
import { getMainTitle } from "../components/mainTitle.js";
import { getDescr } from "../components/descr.js";

// create catalog-page
export function getCatalogPage() {
  const page = document.createElement("div");
  page.classList.add("main__catalog", "catalog");
  const container = getContainer("catalog__container");
  page.append(container);
  const mainTitle = getMainTitle("Catalog Page", "catalog");
  const descr = getDescr("page catalog under construction");
  container.append(mainTitle, descr)
  return page
}


