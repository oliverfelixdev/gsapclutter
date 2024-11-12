function smootScroll() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#webWindow"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#webWindow", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#webWindow").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
} smootScroll();
function clutterEffect() {
  let allH1 = document.querySelectorAll(".page2 h1");
  allH1.forEach((elem) => {
    let clutter = "";
    let h1Text = elem.textContent;
    let splittedText = h1Text.split("");
    splittedText.forEach((e) => {
      clutter += `<span>${e}</span>`;
    });
    elem.innerHTML = clutter;
  });
  gsap.to(".page2 h1 span", {
    color: "#E3E3C4",
    stagger: 0.1,
    duration: 0.1,
    scrollTrigger: {
      trigger: ".page2 h1",
      scroller: "#webWindow",
      start: "top 50%",
      end: "top -10%",
      scrub: 2,
    },
  });
} clutterEffect();