button.onclick = () => {
  if (!document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.add("dark");
  } else document.documentElement.classList.remove("dark");
};

function toggleDropdown() {
  let dropdown = document.querySelector("#dropdownButton #dropdown");
  dropdown.classList.toggle("hidden");
}
