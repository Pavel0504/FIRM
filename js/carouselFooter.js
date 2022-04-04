let footer = document.querySelector(".footer_fl"),
  footerList = footer.querySelector(".footer_fl_fist"),
  footerTrack = footer.querySelector(".footer_fl_fist_frack"),
  flides = footer.querySelectorAll(".footer_fl_fist_frack_flid"),
  frrows = footer.querySelector(".footer_fl_fut"),
  frev = frrows.children[0],
  fext = frrows.children[1],
  flideWidth = flides[0].offsetWidth,
  flIndex = 0,
  fosInit = 0,
  fosX1 = 0,
  fosX2 = 0,
  fosY1 = 0,
  fosY2 = 0,
  fosFinal = 0,
  isFwipe = false,
  isFroll = false,
  flowSwipe = true,
  fransition = true,
  fextTrf = 0,
  frevTrf = 0,
  flastTrf = --flides.length * flideWidth,
  fosTrhesold = flides[0].offsetWidth * 0.35,
  fRegExp = /([-0-9.]+(?=px))/,
  fStartTime,
  fEndTime,
  getF = function () {
    return event.type.search("touch") !== -1 ? event.touches[0] : event;
  },
  slidef = function () {
    if (fransition) {
      footerTrack.style.fransition = "transform .5s";
    }
    footerTrack.style.transform = `translate3d(-${
      flIndex * flideWidth
    }px, 0px, 0px)`;

    frev.classList.toggle("disabled", flIndex === 0);
    fext.classList.toggle("disabled", flIndex === --flides.length);
  },
  fswipeStart = function () {
    let evt = getF();

    if (flowSwipe) {
      fStartTime = Date.now();

      fransition = true;

      fextTrf = (flIndex + 1) * -flideWidth;
      frevTrf = (flIndex - 1) * -flideWidth;

      fosInit = fosX1 = evt.clientX;
      fosY1 = evt.clientY;

      footerTrack.style.fransition = "";

      document.addEventListener("touchmove", fswipeAction);
      document.addEventListener("mousemove", fswipeAction);
      document.addEventListener("touchend", fswipeEnd);
      document.addEventListener("mouseup", fswipeEnd);

      footerList.classList.remove("frab");
      footerList.classList.add("frabbing");
    }
  },
  fswipeAction = function () {
    let evt = getF(),
      style = footerTrack.style.transform,
      transform = +style.match(fRegExp)[0];

    fosX2 = fosX1 - evt.clientX;
    fosX1 = evt.clientX;

    fosY2 = fosY1 - evt.clientY;
    fosY1 = evt.clientY;

    if (!isFwipe && !isFroll) {
      let posY = Math.abs(fosY2);
      if (posY > 7 || fosX2 === 0) {
        isFroll = true;
        flowSwipe = false;
      } else if (posY < 7) {
        isFwipe = true;
      }
    }

    if (isFwipe) {
      if (flIndex === 0) {
        if (fosInit < fosX1) {
          fsetTransform(transform, 0);
          return;
        } else {
          flowSwipe = true;
        }
      }

      // запрет ухода вправо на последнем слайде
      if (flIndex === --flides.length) {
        if (fosInit > fosX1) {
          fsetTransform(transform, flastTrf);
          return;
        } else {
          flowSwipe = true;
        }
      }

      if (
        (fosInit > fosX1 && transform < fextTrf) ||
        (fosInit < fosX1 && transform > frevTrf)
      ) {
        freachEdge();
        return;
      }

      footerTrack.style.transform = `translate3d(${
        transform - fosX2
      }px, 0px, 0px)`;
    }
  },
  fswipeEnd = function () {
    fosFinal = fosInit - fosX1;

    isFroll = false;
    isFwipe = false;

    document.removeEventListener("touchmove", fswipeAction);
    document.removeEventListener("mousemove", fswipeAction);
    document.removeEventListener("touchend", fswipeEnd);
    document.removeEventListener("mouseup", fswipeEnd);

    footerList.classList.add("frab");
    footerList.classList.remove("frabbing");

    if (flowSwipe) {
      fEndTime = Date.now();
      if (
        Math.abs(fosFinal) > fosTrhesold ||
        fEndTime - fStartTime < 300
      ) {
        if (fosInit < fosX1) {
          flIndex--;
        } else if (fosInit > fosX1) {
          flIndex++;
        }
      }

      if (fosInit !== fosX1) {
        flowSwipe = false;
        slidef();
      } else {
        flowSwipe = true;
      }
    } else {
      flowSwipe = true;
    }
  },
  fsetTransform = function (transform, comapreTransform) {
    if (transform >= comapreTransform) {
      if (transform > comapreTransform) {
        footerTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
      }
    }
    flowSwipe = false;
  },
  freachEdge = function () {
    fransition = false;
    fswipeEnd();
    flowSwipe = true;
  };

footerTrack.style.transform = "translate3d(0px, 0px, 0px)";
footerList.classList.add("frab");

footerTrack.addEventListener("fransitionend", () => (flowSwipe = true));
footer.addEventListener("touchstart", fswipeStart);
footer.addEventListener("mousedown", fswipeStart);

frrows.addEventListener("click", function () {
  let target = event.target;

  if (target.classList.contains("fext")) {
    flIndex++;
  } else if (target.classList.contains("frev")) {
    flIndex--;
  } else {
    return;
  }

  slidef();
});
