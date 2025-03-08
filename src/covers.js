document.addEventListener("DOMContentLoaded", () => {
    const marquee = document.querySelector(".marquee");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                marquee.style.animation = "marquee-left 10s linear infinite";
            } else {
                marquee.style.animationPlayState = "paused";
            }
        });
    }, { threshold: 0.1 });
    observer.observe(marquee);
});