// NAVBAR SCROLL EFFECT

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        nav.style.background = "rgba(7,11,20,.55)";
        nav.style.backdropFilter = "blur(14px)";
        nav.style.border = "1px solid rgba(255,255,255,.05)";
        nav.style.padding = "18px 20px";
        nav.style.borderRadius = "18px";
        nav.style.position = "sticky";
        nav.style.top = "10px";
        nav.style.zIndex = "1000";
    } else {
        nav.style.background = "transparent";
        nav.style.backdropFilter = "none";
        nav.style.border = "none";
        nav.style.padding = "24px 0";
        nav.style.borderRadius = "0";
    }
});


// SCROLL REVEAL ANIMATION

const revealItems = document.querySelectorAll(
    ".hero-text, .visual, .card, .cta-box"
);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealItems.forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "all .8s ease";
    revealObserver.observe(item);
});


// CARD GLOW EFFECT

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background = `
            radial-gradient(
                circle at ${x}px ${y}px,
                rgba(0,212,255,.12),
                rgba(255,255,255,.03) 45%
            )
        `;
    });

    card.addEventListener("mouseleave", () => {
        card.style.background = "rgba(255,255,255,.03)";
    });

});


// PARALLAX ORB

const orb = document.querySelector(".orb");

window.addEventListener("mousemove", (e) => {

    if (!orb) return;

    const x = (window.innerWidth / 2 - e.clientX) / 45;
    const y = (window.innerHeight / 2 - e.clientY) / 45;

    orb.style.transform =
        `translate(${ -x }px, ${ -y }px)`;
});


// BUTTON MICRO ANIMATION

const buttons = document.querySelectorAll(".btn, .nav-btn");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "translateY(-3px) scale(1.02)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translateY(0) scale(1)";
    });

});

console.log("Nexora interactive system loaded.");
