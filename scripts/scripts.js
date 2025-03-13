window.addEventListener("scroll", function () {
    let overlay = document.querySelector(".overlay");

    if (window.scrollY > 100) { // Ajusta el número según cuándo quieres que se fije
        overlay.classList.add("fixed");
    } else {
        overlay.classList.remove("fixed");
    }
});
