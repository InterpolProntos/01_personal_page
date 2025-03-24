document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("darkModeToggle");

  let darkMode = localStorage.getItem("darkMode");
  if (!darkMode) {
    darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "enabled"
      : "disabled";
  }

  // Apply dark mode if enabled
  if (darkMode === "enabled") {
    document.body.classList.add("dark");
    toggle.checked = true;
  } else {
    toggle.checked = false;
  }

  toggle.addEventListener("change", function () {
    if (toggle.checked) {
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "disabled");
    }
  });
});
