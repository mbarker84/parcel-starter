const sections = [...document.querySelectorAll("section")];

let options = {
  root: document.querySelector(".scroll-container"),
  rootMargin: "0px",
  threshold: 1.0
};

const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio >= 0.75) {
      const { target } = entry;
      target.classList.toggle("is-visible");

      // const sectionChildren = [
      //   ...target.querySelector("[data-content]").children
      // ];

      // sectionChildren.forEach((el, index) => {
      //   el.style.setProperty("--delay", `${index * 100}ms`);
      // });

      // console.log(sectionChildren);
    }
  });
};

const observer = new IntersectionObserver(callback, options);

sections.forEach((section, index) => {
  const sectionChildren = [...section.querySelector("[data-content]").children];

  sectionChildren.forEach((el, index) => {
    el.style.setProperty("--delay", `${index * 100}ms`);
  });

  observer.observe(section);
});
