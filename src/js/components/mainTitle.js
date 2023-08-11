// create main-title
export function getMainTitle(text, addClass) {
  const mainTitle = document.createElement("h1");
  mainTitle.classList.add("main-title", `${addClass}__main-title`);
  mainTitle.textContent = text;
  return mainTitle
}