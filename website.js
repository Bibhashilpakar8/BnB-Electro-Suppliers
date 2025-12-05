window.addEventListener("scroll", function () {
    const banner = document.querySelector(".top-banner");
    let scrollPos = window.scrollY;

    // Fade when scrolling
    let opacity = Math.max(1 - scrollPos / 300, 0.6);
    banner.style.opacity = opacity;

    // Shrink effect
    let scale = Math.max(1 - scrollPos / 1000, 0.9);
    banner.style.transform = `scale(${scale})`;
});
