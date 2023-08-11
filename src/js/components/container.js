// create container
export function getContainer(addClass) {
  const container = document.createElement("div");
  container.classList.add(`${addClass}`, "container");
  return container
}