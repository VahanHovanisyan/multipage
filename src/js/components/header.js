import { router } from "../main.js";

// create header

export function getHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const container = document.createElement("div");
  container.classList.add("header__container", "container");
  header.append(container);

  const nav = document.createElement("nav");
  nav.classList.add("nav");
  container.append(nav);

  const navList = document.createElement("ul");
  navList.classList.add("nav__list");
  nav.append(navList);

  const navItem = document.createElement("li");
  navItem.classList.add("nav__item");

  const navLink = document.createElement("a");
  navLink.href = "/";
  navLink.classList.add("nav__link");
  navLink.textContent = "Main Page";
  navItem.append(navLink)

  navLink.addEventListener("click", function (event) {
    event.preventDefault();
    router.navigate('/');
  })

  const navItem2 = document.createElement("li");
  navItem2.classList.add("nav__item");

  const navLink2 = document.createElement("a");
  navLink2.href = "/catalog";
  navLink2.classList.add("nav__link");
  navLink2.textContent = "Catalog"
  navItem2.append(navLink2)

  navLink2.addEventListener("click", function (event) {
    event.preventDefault();
    router.navigate('/catalog');
  })

  const navItem3 = document.createElement("li");
  navItem3.classList.add("nav__item");

  const navLink3 = document.createElement("a");
  navLink3.href = "/cart";
  navLink3.classList.add("nav__link");
  navLink3.textContent = "Cart";
  navItem3.append(navLink3)

  navLink3.addEventListener("click", function (event) {
    event.preventDefault();
    router.navigate('/cart');
  })

  navList.append(navItem, navItem2, navItem3);

  return header
}