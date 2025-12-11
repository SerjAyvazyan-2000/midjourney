document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const fadeAnimations = [
    { selector: ".fade-left", from: { x: -60 } },
    { selector: ".fade-right", from: { x: 60 } },
    { selector: ".fade-top", from: { y: -60 } },
    { selector: ".fade-bottom", from: { y: 60 } },
  ];

  fadeAnimations.forEach(({ selector, from }) => {
    gsap.utils.toArray(selector).forEach((el) => {
      gsap.fromTo(
        el,
        { ...from, opacity: 0, visibility: "visible" },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "bottom 10%",
            once: true,
          },
        }
      );
    });
  });
});

jQuery.event.special.touchstart = {
  setup: function (_, ns, handle) {
    this.addEventListener("touchstart", handle, { passive: false });
  },
};
jQuery.event.special.touchmove = {
  setup: function (_, ns, handle) {
    this.addEventListener("touchmove", handle, { passive: false });
  },
};

// document.addEventListener("DOMContentLoaded", () => {
//   const gVideo = document.querySelector("#gHeroVideo");
//   if (gVideo) {
//     const gSource = gVideo.querySelector("source");

//     const observer = new IntersectionObserver((entries) => {
//       if (entries[0].isIntersecting) {
//         gSource.src = gSource.dataset.src;
//         gVideo.load();
//         observer.disconnect();
//       }
//     });

//     observer.observe(gVideo);
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".animate-item");
    if (!items.length) return; 

    const observer = new IntersectionObserver((entries) =>
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const index = [...items].indexOf(entry.target);
            entry.target.style.transitionDelay = `${ 0.15}s`;
            entry.target.classList.add("visible");

            observer.unobserve(entry.target);
        })
    , { threshold: 0.1 });

    items.forEach(item => observer.observe(item));
});
