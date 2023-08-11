import { router } from "../main.js";

// create cart-product
export function getProductCard(title, price) {
  const item = document.createElement("li");
  item.classList.add("product-list__item");

  const productTitle = document.createElement("h2");
  productTitle.classList.add("product-list__title");

  const productLink = document.createElement("a");
  productLink.href = "/product"
  productLink.classList.add("product-list__link");
  productLink.textContent = title;
  productLink.setAttribute = "data-navigo", "true";
  productLink.addEventListener("click", function (event) {
    event.preventDefault();
    router.navigate(`/product/${title}`);
  })

  productTitle.append(productLink);

  const productPrice = document.createElement("strong");
  productPrice.classList.add("product-list__price");
  productPrice.textContent = `${price} rub`;

  const addCart = document.createElement("button");
  addCart.classList.add("btn");
  addCart.textContent = "to Cart"

  item.append(productTitle, productPrice, addCart)
  return item
}