// darkModeInit.js
export const setDefaultDarkMode = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.documentElement.classList.remove("dark");
  } else {
    // Default to dark if nothing is saved
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
};
