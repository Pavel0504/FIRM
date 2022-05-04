const controller = new ScrollMagic.Controller();
const scrollingClass = ".slider";
const scrollingElement = document.getElementsByClassName(
  scrollingClass.split(".")[1]
)[0];

console.log(scrollingElement);
const getElementHeight = (className) => {
  const elem = scrollingElement.getElementsByClassName(className)[0];

  const { clientHeight, clientWidth } = elem;
  return { h: clientHeight, w: clientWidth };
};

const scrollingInit = () => {
  const vwWidth = window.innerWidth;
  const vwHeight = window.innerHeight;

  const elemA = getElementHeight("a");
  const elemB = getElementHeight("b");
  const elemC = getElementHeight("c");
  const elemD = getElementHeight("d");

  scrollingElement.style.height = `${vwHeight}px`;
  scrollingElement.style.width = `${vwWidth}px`;

  //scene 2 with horizontal scroll
  //for horizontal scrollingА
  const horizontalSlide = new TimelineMax()
    .to(scrollingClass, 0.2, { x: 0, ease: Power1.easeOut }) //1 start
    .to(scrollingClass, 1, { x: -vwWidth, ease: Power1.easeOut }) //2 right
    .to(scrollingClass, 0.2, { x: -vwWidth * 2, ease: Power1.easeOut }) //3 down

  new ScrollMagic.Scene({
    triggerElement: scrollingClass,
    duration: "350%",
    offset: 0,
    triggerHook: -0.02,
  })
    .setPin(scrollingClass)
    .setTween(horizontalSlide)
    .addTo(controller);
};

scrollingInit();
window.addEventListener("resize", scrollingInit);
