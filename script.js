const menuButton = document.querySelector(".menu");
const navigation = document.querySelector("nav");
const themeButton = document.querySelector(".theme");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        menuButton.setAttribute("aria-expanded", navigation.classList.contains("open"));
    });
}

if (themeButton) {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme === "light") {
        document.body.classList.add("light");
        themeButton.textContent = "☀";
    }

    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("light");
        const isLight = document.body.classList.contains("light");
        themeButton.textContent = isLight ? "☀" : "☾";
        localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
    });
}

document.querySelectorAll(".year").forEach((element) => {
    element.textContent = new Date().getFullYear();
});

const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll("nav a").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});
