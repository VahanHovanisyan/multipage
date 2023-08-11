// create descr
export function getDescr(text) {
  const descr = document.createElement("p");
  descr.classList.add("descr");
  descr.textContent = text;
  return descr
}