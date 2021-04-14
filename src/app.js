// css
import "./sass/project-name.scss";
import gsap from "gsap";

//  ! uncomment these for babel features.
// import "babel-polyfill/";
// import "core-js/stable";

function init() {
  console.log(gsap);

  const tl = gsap.timeline({
    defaults: {
      duration: 2,
      ease: "power2.out",
    },
  });

  gsap.set(".content p ,.content div ,h1 ,h2 , h3", { opacity: 0 });

  const firstContent = ".content:nth-child(1)";

  const secondContent = ".content:nth-child(2)";
  tl.fromTo("h1", { x: -50 }, { x: 0, opacity: 1, duration: 2 });
  tl.fromTo("h2", { y: 100 }, { y: 0, opacity: 1, duration: 2 });
  tl.fromTo(`${firstContent} p`, { x: -100 }, { opacity: 1, x: 0, delay: 1 })
    .to(`${firstContent} div`, { y: 20, opacity: 1 }, "-=2")
    .fromTo(`${secondContent} p`, { x: -100 }, { opacity: 1, x: 0 })
    .to(`${secondContent} div`, { y: 20, opacity: 1 }, "-=2")
    .fromTo("h3", { y: 100 }, { y: 0, opacity: 1, duration: 2 })
    .to(`${firstContent} div  , ${secondContent} div `, {
      rotate: 5,
      yoyo: true,
      repeat: -1,
      duration: 2,
    });
}
//   const elements = gsap.utils.toArray(".content");
//  ,elements.forEach((element) => {
//     gsap.from(element, { y: 20, opacity: 0 });
//   });
// }
// ! init
init();
