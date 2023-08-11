import Navigo from "navigo";

// components
import { getHeader } from "./components/header.js";
import { getMain } from "./components/main.js"

const app = document.getElementById("app");
export const router = new Navigo('/')
const header = getHeader();
const main = getMain();


router.on('/', async () => {
  main.innerHTML = "";
  const pageModuleMain = await import("./pages/mainPage.js");
  const mainPage = pageModuleMain.getMainPage()
  main.append(mainPage)
});
router.on('/catalog', async () => {
  main.innerHTML = "";
  const pageModuleCatalog = await import("./pages/catalogPage.js");
  const catalogPage = pageModuleCatalog.getCatalogPage();
  main.append(catalogPage)
});
router.on('/cart', async () => {
  main.innerHTML = "";
  const pageModuleCart = await import("./pages/cartPage.js");
  const cartPage = pageModuleCart.getCartPage()
  main.append(cartPage)
});
router.on('/product/:title', async ({ data }) => {
  main.innerHTML = "";
  const pageModuleProduct = await import("./pages/productPage.js");
  const productPage = pageModuleProduct.getProductPage(data.title)
  main.append(productPage)
});

router.resolve();

app.append(header, main);