window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.transition = "0.6s";

        setTimeout(() => {
            loader.style.display = "none";
        }, 600);

    }, 1200);

});

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
".fighter-card,.weight-card,.rank-item,.event-card"
).forEach((el) => {

    el.style.opacity = "0";
    el.style.transform = "translateY(60px)";
    el.style.transition = "all .8s ease";

    observer.observe(el);

});

const fighterCards = document.querySelectorAll(".fighter-card");

fighterCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 20;
        const rotateX = ((y / rect.height) - 0.5) * -20;

        card.style.transform =
        `perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0)";

    });

});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({
            behavior:"smooth"
        });

    });

});

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(0,0,0,0.92)";

    } else {

        navbar.style.background =
        "rgba(0,0,0,0.70)";

    }

});

setInterval(() => {

    document.querySelectorAll(".hero-btn").forEach(btn => {

        btn.animate([
            {
                boxShadow:
                "0 0 20px rgba(225,6,0,.3)"
            },
            {
                boxShadow:
                "0 0 50px rgba(225,6,0,.8)"
            },
            {
                boxShadow:
                "0 0 20px rgba(225,6,0,.3)"
            }
        ], {
            duration: 2000
        });

    });

}, 2200);
