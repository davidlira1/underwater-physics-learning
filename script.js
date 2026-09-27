const backButton = document.querySelector("#back");
const nextButton = document.querySelector("#next");
const revealable = document.querySelectorAll("[data-show-at]");
const forceSource = document.querySelector(".ghost-source-force");
const forceTarget = document.querySelector(".ghost-target-force");
const productSource = document.querySelector(".ghost-source-product");
const productTarget = document.querySelector(".ghost-target-product");
const condenseSource = document.querySelector(".ghost-source-condense");
const condensedProductTarget = document.querySelector(".ghost-target-condensed-product");
const hideable = document.querySelectorAll("[data-hide-at]");
const massGravityTerm = document.querySelector(".mass-gravity-term");
const pressureSource = document.querySelector(".ghost-source-pressure");
const pressureTarget = document.querySelector(".ghost-target-pressure");
const pressureAreaTerm = document.querySelector(".pressure-area-term");
const pressureAreaTermBottom = document.querySelector(".pressure-area-term-bottom");
const pressureAreaBottomTarget = document.querySelector(".ghost-target-pressure-area-bottom");
const topExpandSource = document.querySelector(".ghost-source-top-expand");
const condensedTopProduct = document.querySelector(".ghost-target-condensed-top-product");
const bottomExpandSource = document.querySelector(".ghost-source-bottom-expand");
const condensedBottomProduct = document.querySelector(".ghost-target-condensed-bottom-product");
const depthSource = document.querySelector(".ghost-source-depth");
const depthTarget = document.querySelector(".ghost-target-depth");
const topAreaSource = document.querySelector(".ghost-source-top-area");
const topAreaTarget = document.querySelector(".ghost-target-top-area");
const fractionWrap = document.querySelector(".fraction-wrap");
const crossOut = document.querySelector(".cross-out");
const crossLine = crossOut.querySelector("line");
const cancelTerms = document.querySelectorAll(".cancel-term");
const waterSurface = document.querySelector(".water-surface");
const weightArrow = document.querySelector(".weight-arrow");
const scene = document.querySelector(".scene");
const pressureLabel = document.querySelector(".pressure-label");
const pressureLeader = document.querySelector(".pressure-leader");
const pressureLeaderLine = document.querySelector(".pressure-leader-line");
const forcePressureLabel = document.querySelector(".force-pressure-label");
const forcePressureLeader = document.querySelector(".force-pressure-leader");
const forcePressureLeaderLine = document.querySelector(".force-pressure-leader-line");
const pressureArrows = document.querySelector(".pressure-arrows");
const bottomPressureLabel = document.querySelector(".bottom-pressure-label");
const bottomPressureLeader = document.querySelector(".bottom-pressure-leader");
const bottomPressureLeaderLine = document.querySelector(".bottom-pressure-leader-line");
const bottomPressure = document.querySelector(".bottom-pressure");
const buoyantLabel = document.querySelector(".buoyant-label");
const buoyantLeader = document.querySelector(".buoyant-leader");
const buoyantLeaderLine = document.querySelector(".buoyant-leader-line");
const buoyantArrow = document.querySelector(".buoyant-arrow");
const floaterWeightLabel = document.querySelector(".floater-weight-label");
const floaterWeightLeader = document.querySelector(".floater-weight-leader");
const floaterWeightLeaderLine = document.querySelector(".floater-weight-leader-line");
const floaterWeightArrow = document.querySelector(".floater-weight-arrow");
const forceTopSource = document.querySelector(".ghost-source-force-top");
const forceTopTarget = document.querySelector(".ghost-target-force-top");
const forceBottomSource = document.querySelector(".ghost-source-force-bottom");
const forceBottomTarget = document.querySelector(".ghost-target-force-bottom");
const topProductSource = document.querySelector(".ghost-source-top-product");
const topProductTarget = document.querySelector(".ghost-target-top-product");
const bottomProductSource = document.querySelector(".ghost-source-bottom-product");
const bottomProductTarget = document.querySelector(".ghost-target-bottom-product");
const topDepthSource = document.querySelector(".ghost-source-top-depth");
const topDepthTarget = document.querySelector(".ghost-target-top-depth");
const bottomDepthSource = document.querySelector(".ghost-source-bottom-depth");
const bottomDepthTarget = document.querySelector(".ghost-target-bottom-depth");
const buoyantHeightSource = document.querySelector(".ghost-source-buoyant-height");
const buoyantHeightExpand = document.querySelector(".ghost-source-buoyant-height-expand");
const condensedBuoyant = document.querySelector(".ghost-target-condensed-buoyant");
const buoyantDiffTerm = document.querySelector(".buoyant-diff-term");
const heightFront = document.querySelector(".height-front");
const heightEndSource = document.querySelector(".ghost-source-height-end");
const heightEndTarget = document.querySelector(".ghost-target-height-end");
const areaHeightTerm = document.querySelector(".area-height-term");
const areaHeightSource = document.querySelector(".ghost-source-area-height");
const floaterVolumeTarget = document.querySelector(".ghost-target-floater-volume");
const buoyantHeightTarget = document.querySelector(".ghost-target-buoyant-height");
const floaterMgSource = document.querySelector(".ghost-source-floater-mg");
const floaterMgTarget = document.querySelector(".ghost-target-floater-mg");
const gravityFactors = document.querySelectorAll(".gravity-factor");
const gravityWords = document.querySelectorAll(".gravity-word");
const slideVolume = document.querySelector(".slide-volume");
const slideEq = document.querySelector(".slide-eq");
const slideMass = document.querySelector(".slide-mass");
const depthDiffSource = document.querySelector(".ghost-source-depth-diff");
const heightTarget = document.querySelector(".ghost-target-height");
const buoyantForceSource = document.querySelector(".ghost-source-buoyant-force");
const buoyantForceTarget = document.querySelector(".ghost-target-neutral-buoyant");
const floaterWeightNameSource = document.querySelector(".ghost-source-floater-weight-name");
const floaterWeightNameTarget = document.querySelector(".ghost-target-neutral-weight");
const massCallout = document.querySelector(".mass-callout");
const massProductTarget = document.querySelector(".ghost-target-mass-product");
const volumeCallout = document.querySelector(".volume-callout");
const volumeProductTarget = document.querySelector(".ghost-target-volume-product");
const heightDepthSwap = document.querySelector(".height-depth-swap");
const depthTermSource = document.querySelector(".ghost-source-depth-term");
const heightTermTarget = document.querySelector(".ghost-target-height-term");
const areaSource = document.querySelector(".ghost-source-area");
const areaTarget = document.querySelector(".ghost-target-area");
const pressureCondenseSource = document.querySelector(".ghost-source-pressure-condense");
const pressureCondensedTarget = document.querySelector(".ghost-target-pressure-condensed");
const depthSimplifyTarget = document.querySelector(".ghost-target-depth-simplify");

let step = 1;
const maxStep = 38;
const heightGhostStep = 30;
const buoyantHeightCondenseStep = 31;
const heightEndStep = 32;
const floaterVolumeStep = 33;
const floaterWeightStep = 34;
const neutralLabelGhostStep = 36;
const neutralGhostStep = 37;
const gravityCancelStep = 38;
const buoyantStep = 26;
const buoyantGhostStep = 27;
const buoyantProductGhostStep = 28;
const buoyantDepthGhostStep = 29;
const bottomPressureStep = 22;
const glassStep = 2;
const pressureStep = 12;
const massGhostStep = 6;
const volumeGhostStep = 8;
const condenseStep = 9;
const depthRevealStep = 10;
const depthGhostUpStep = 11;
const forceGhostStep = 13;
const productGhostStep = 14;
const crossStep = 15;
const depthSimplifyStep = 16;
const pressureCondenseStep = 17;
const forcePressureStep = 18;
const pressureGhostStep = 19;
const depthGhostStep = 20;
const topProductCondenseStep = 21;
const pressureAreaBottomGhostStep = 23;
const bottomProductCondenseStep = 25;

function clearGhosts() {
  document.querySelectorAll(".ghost").forEach((el) => el.remove());
  document.querySelectorAll(".ghost-target").forEach((el) => {
    el.classList.remove("is-waiting");
  });
}

function visibleText(el) {
  const clone = el.cloneNode(true);
  clone.querySelectorAll(".is-hidden, [data-show-at]:not(.is-visible)").forEach((node) => node.remove());
  const originals = el.querySelectorAll(".term-swap");
  clone.querySelectorAll(".term-swap").forEach((swap, index) => {
    const swapped = originals[index]?.classList.contains("is-swapped");
    swap.querySelectorAll(".term-from, .term-to").forEach((term) => {
      if (term.classList.contains("term-from") && swapped) {
        term.remove();
      }
      if (term.classList.contains("term-to") && !swapped) {
        term.remove();
      }
    });
  });
  return clone.textContent.replace(/\s+/g, " ").trim();
}

function playGhost(source, target, options = {}) {
  target.classList.add("is-waiting");

  const from = options.fromRect || source.getBoundingClientRect();
  const to = target.getBoundingClientRect();
  const styles = getComputedStyle(target);
  const ghost = document.createElement("span");
  ghost.className = "ghost";
  ghost.textContent = options.text || visibleText(source);
  ghost.style.left = `${from.left}px`;
  ghost.style.top = `${from.top}px`;
  ghost.style.fontSize = styles.fontSize;
  ghost.style.fontFamily = styles.fontFamily;
  ghost.style.fontWeight = styles.fontWeight;
  ghost.style.letterSpacing = styles.letterSpacing;
  ghost.style.lineHeight = styles.lineHeight;
  if (options.text) {
    ghost.style.opacity = "0";
  }
  document.body.appendChild(ghost);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      ghost.style.left = `${to.left}px`;
      ghost.style.top = `${to.top}px`;
      ghost.style.opacity = "1";
    });
  });

  window.setTimeout(() => {
    target.classList.remove("is-waiting");
    window.setTimeout(() => {
      ghost.style.opacity = "0";
      window.setTimeout(() => ghost.remove(), 280);
    }, 40);
  }, 870);
}

function playDepart(fromRect, text) {
  const ghost = document.createElement("span");
  ghost.className = "ghost";
  ghost.textContent = text;
  ghost.style.left = `${fromRect.left}px`;
  ghost.style.top = `${fromRect.top}px`;
  ghost.style.opacity = "1";
  ghost.style.transition =
    "left 0.85s cubic-bezier(0.4, 0, 0.2, 1), top 0.85s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.85s ease";
  document.body.appendChild(ghost);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      ghost.style.top = `${fromRect.top - 42}px`;
      ghost.style.opacity = "0";
    });
  });

  window.setTimeout(() => ghost.remove(), 900);
}

function placeLeader(svg, line, fromEl, toEl) {
  const sceneRect = scene.getBoundingClientRect();
  const from = fromEl.getBoundingClientRect();
  const to = toEl.getBoundingClientRect();

  svg.setAttribute("viewBox", `0 0 ${sceneRect.width} ${sceneRect.height}`);
  line.setAttribute("x1", String(from.left - sceneRect.left - 10));
  line.setAttribute("y1", String(from.top + from.height / 2 - sceneRect.top));
  line.setAttribute("x2", String(to.left + to.width - sceneRect.left));
  line.setAttribute("y2", String(to.top + to.height / 2 - sceneRect.top));
}

function placePressureLeader() {
  placeLeader(pressureLeader, pressureLeaderLine, pressureLabel, waterSurface);
}

function placeForcePressureLeader() {
  placeLeader(forcePressureLeader, forcePressureLeaderLine, forcePressureLabel, pressureArrows);
}

function placeBottomPressureLeader() {
  placeLeader(bottomPressureLeader, bottomPressureLeaderLine, bottomPressureLabel, bottomPressure);
}

function placeBuoyantLeader() {
  placeLeader(buoyantLeader, buoyantLeaderLine, buoyantLabel, buoyantArrow);
}

function placeFloaterWeightLeader() {
  placeLeader(floaterWeightLeader, floaterWeightLeaderLine, floaterWeightLabel, floaterWeightArrow);
}

function placeCrossOut() {
  if (cancelTerms.length < 2) {
    return;
  }

  const wrapRect = fractionWrap.getBoundingClientRect();
  const from = cancelTerms[0].getBoundingClientRect();
  const to = cancelTerms[1].getBoundingClientRect();
  const x1 = from.left + from.width / 2 - wrapRect.left;
  const y1 = from.top + from.height / 2 - wrapRect.top;
  const x2 = to.left + to.width / 2 - wrapRect.left;
  const y2 = to.top + to.height / 2 - wrapRect.top;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const length = Math.hypot(dx, dy) || 1;
  const pad = 18;

  crossOut.setAttribute("viewBox", `0 0 ${wrapRect.width} ${wrapRect.height}`);
  crossLine.setAttribute("x1", String(x1 - (dx / length) * pad));
  crossLine.setAttribute("y1", String(y1 - (dy / length) * pad));
  crossLine.setAttribute("x2", String(x2 + (dx / length) * pad));
  crossLine.setAttribute("y2", String(y2 + (dy / length) * pad));
}

function render(options = {}) {
  revealable.forEach((el) => {
    const required = Number(el.dataset.showAt);
    el.classList.toggle("is-visible", step >= required);
  });

  massGravityTerm.classList.toggle("is-hidden", step >= condenseStep);
  pressureAreaTerm.classList.toggle("is-hidden", step >= topProductCondenseStep);
  pressureAreaTermBottom.classList.toggle("is-hidden", step >= bottomProductCondenseStep);
  buoyantDiffTerm.classList.toggle("is-hidden", step >= buoyantHeightCondenseStep);
  heightFront.classList.toggle("is-hidden", step >= heightEndStep);
  areaHeightTerm.classList.toggle("is-hidden", step >= floaterVolumeStep);
  gravityFactors.forEach((el) => {
    el.classList.toggle("is-hidden", step >= gravityCancelStep);
  });
  heightDepthSwap.classList.toggle("is-swapped", step > depthGhostUpStep);
  heightDepthSwap.classList.toggle("is-open", step >= depthRevealStep && step <= depthGhostUpStep);

  hideable.forEach((el) => {
    const hideAt = Number(el.dataset.hideAt);
    const keepForGhost = options.skipHide && hideAt === step;
    el.classList.toggle("is-hidden", step >= hideAt && !keepForGhost);
  });

  backButton.disabled = step <= 1;
  nextButton.disabled = step >= maxStep;

  if (step < massGhostStep) {
    clearGhosts();
  }

  if (step < condenseStep) {
    condensedProductTarget.classList.remove("is-waiting");
  }

  if (step < depthSimplifyStep) {
    depthSimplifyTarget.classList.remove("is-waiting");
  }

  if (step < pressureCondenseStep) {
    pressureCondensedTarget.classList.remove("is-waiting");
  }

  if (step < depthGhostUpStep) {
    heightTermTarget.classList.remove("is-waiting");
  }

  if (step < productGhostStep) {
    areaTarget.classList.remove("is-waiting");
  }

  if (step < massGhostStep) {
    massProductTarget.classList.remove("is-waiting");
  }

  if (step < volumeGhostStep) {
    volumeProductTarget.classList.remove("is-waiting");
  }

  if (step < pressureGhostStep) {
    pressureTarget.classList.remove("is-waiting");
  }

  if (step < depthGhostStep) {
    depthTarget.classList.remove("is-waiting");
    topAreaTarget.classList.remove("is-waiting");
  }

  if (step < topProductCondenseStep) {
    condensedTopProduct.classList.remove("is-waiting");
  }

  if (step < pressureAreaBottomGhostStep) {
    pressureAreaBottomTarget.classList.remove("is-waiting");
  }

  if (step < bottomProductCondenseStep) {
    condensedBottomProduct.classList.remove("is-waiting");
  }

  if (step < buoyantGhostStep) {
    forceTopTarget.classList.remove("is-waiting");
    forceBottomTarget.classList.remove("is-waiting");
  }

  if (step < buoyantProductGhostStep) {
    topProductTarget.classList.remove("is-waiting");
    bottomProductTarget.classList.remove("is-waiting");
  }

  if (step < buoyantDepthGhostStep) {
    topDepthTarget.classList.remove("is-waiting");
    bottomDepthTarget.classList.remove("is-waiting");
  }

  if (step < heightGhostStep) {
    heightTarget.classList.remove("is-waiting");
  }

  if (step < buoyantHeightCondenseStep) {
    condensedBuoyant.classList.remove("is-waiting");
  }

  if (step < heightEndStep) {
    heightEndTarget.classList.remove("is-waiting");
  }

  if (step < floaterVolumeStep) {
    floaterVolumeTarget.classList.remove("is-waiting");
  }

  if (step < neutralLabelGhostStep) {
    buoyantForceTarget.classList.remove("is-waiting");
    floaterWeightNameTarget.classList.remove("is-waiting");
  }

  if (step < neutralGhostStep) {
    buoyantHeightTarget.classList.remove("is-waiting");
    floaterMgTarget.classList.remove("is-waiting");
  }

  if (step < gravityCancelStep) {
    slideVolume.classList.remove("is-waiting");
    slideEq.classList.remove("is-waiting");
    slideMass.classList.remove("is-waiting");
  }

  waterSurface.classList.toggle("is-pulsing", step >= pressureStep);
  weightArrow.classList.toggle("is-pulsing", step >= glassStep);
  buoyantArrow.classList.toggle("is-pulsing", step >= buoyantStep);
  floaterWeightArrow.classList.toggle("is-pulsing", step >= floaterWeightStep);

  if (step >= pressureStep) {
    requestAnimationFrame(placePressureLeader);
  }

  if (step >= forcePressureStep) {
    requestAnimationFrame(placeForcePressureLeader);
  }

  if (step >= bottomPressureStep) {
    requestAnimationFrame(placeBottomPressureLeader);
  }

  if (step >= buoyantStep) {
    requestAnimationFrame(placeBuoyantLeader);
  }

  if (step >= floaterWeightStep) {
    requestAnimationFrame(placeFloaterWeightLeader);
  }

  if (step >= crossStep) {
    requestAnimationFrame(placeCrossOut);
  }
}

backButton.addEventListener("click", () => {
  if (step > 1) {
    step -= 1;
    render();
  }
});

nextButton.addEventListener("click", () => {
  if (step < maxStep) {
    step += 1;
    if (step === massGhostStep) {
      massProductTarget.classList.add("is-waiting");
    }
    if (step === volumeGhostStep) {
      volumeProductTarget.classList.add("is-waiting");
    }
    if (step === condenseStep) {
      condensedProductTarget.classList.add("is-waiting");
    }
    if (step === depthSimplifyStep) {
      depthSimplifyTarget.classList.add("is-waiting");
    }
    let pressureCondenseFrom = null;
    if (step === pressureCondenseStep) {
      pressureCondensedTarget.classList.add("is-waiting");
      pressureCondenseFrom = pressureCondenseSource.getBoundingClientRect();
    }
    if (step === depthGhostUpStep) {
      heightTermTarget.classList.add("is-waiting");
    }
    if (step === forceGhostStep) {
      forceTarget.classList.add("is-waiting");
    }
    if (step === productGhostStep) {
      productTarget.classList.add("is-waiting");
      areaTarget.classList.add("is-waiting");
    }
    if (step === pressureGhostStep) {
      pressureTarget.classList.add("is-waiting");
    }
    if (step === depthGhostStep) {
      depthTarget.classList.add("is-waiting");
      topAreaTarget.classList.add("is-waiting");
    }
    if (step === topProductCondenseStep) {
      condensedTopProduct.classList.add("is-waiting");
    }
    if (step === pressureAreaBottomGhostStep) {
      pressureAreaBottomTarget.classList.add("is-waiting");
    }
    if (step === bottomProductCondenseStep) {
      condensedBottomProduct.classList.add("is-waiting");
    }
    if (step === buoyantGhostStep) {
      forceTopTarget.classList.add("is-waiting");
      forceBottomTarget.classList.add("is-waiting");
    }
    if (step === buoyantProductGhostStep) {
      topProductTarget.classList.add("is-waiting");
      bottomProductTarget.classList.add("is-waiting");
    }
    if (step === buoyantDepthGhostStep) {
      topDepthTarget.classList.add("is-waiting");
      bottomDepthTarget.classList.add("is-waiting");
    }
    if (step === heightGhostStep) {
      heightTarget.classList.add("is-waiting");
    }
    if (step === buoyantHeightCondenseStep) {
      condensedBuoyant.classList.add("is-waiting");
    }
    let heightEndFrom = null;
    if (step === heightEndStep) {
      heightEndFrom = heightEndSource.getBoundingClientRect();
      heightEndTarget.classList.add("is-waiting");
    }
    let areaHeightFrom = null;
    if (step === floaterVolumeStep) {
      areaHeightFrom = areaHeightSource.getBoundingClientRect();
      floaterVolumeTarget.classList.add("is-waiting");
    }
    if (step === neutralLabelGhostStep) {
      buoyantForceTarget.classList.add("is-waiting");
      floaterWeightNameTarget.classList.add("is-waiting");
    }
    if (step === neutralGhostStep) {
      buoyantHeightTarget.classList.add("is-waiting");
      floaterMgTarget.classList.add("is-waiting");
    }
    const gravityFrom = [];
    const slideFrom = [];
    if (step === gravityCancelStep) {
      gravityWords.forEach((el) => {
        gravityFrom.push(el.getBoundingClientRect());
      });
      [slideVolume, slideEq, slideMass].forEach((el) => {
        slideFrom.push(el.getBoundingClientRect());
      });
    }
    render({
      skipHide:
        step === condenseStep ||
        step === topProductCondenseStep ||
        step === bottomProductCondenseStep ||
        step === buoyantHeightCondenseStep,
    });
    if (step === condenseStep) {
      requestAnimationFrame(() => {
        playGhost(condenseSource, condensedProductTarget);
        render();
      });
    }
    if (step === depthSimplifyStep) {
      requestAnimationFrame(() => {
        playGhost(productTarget, depthSimplifyTarget);
      });
    }
    if (step === pressureCondenseStep) {
      requestAnimationFrame(() => {
        playGhost(pressureCondenseSource, pressureCondensedTarget, {
          fromRect: pressureCondenseFrom,
        });
      });
    }
    if (step === depthGhostUpStep) {
      requestAnimationFrame(() => {
        playGhost(depthTermSource, heightTermTarget, {
          text: "depth of top of floater",
        });
        window.setTimeout(() => {
          heightDepthSwap.classList.add("is-swapped");
          heightDepthSwap.classList.remove("is-open");
        }, 870);
      });
    }
    if (step === massGhostStep) {
      requestAnimationFrame(() => {
        playGhost(massCallout, massProductTarget, {
          text: "density of water * volume of water",
        });
      });
    }
    if (step === volumeGhostStep) {
      requestAnimationFrame(() => {
        playGhost(volumeCallout, volumeProductTarget, {
          text: "height of water column * surface area of top of floater",
        });
      });
    }
    if (step === forceGhostStep) {
      requestAnimationFrame(() => playGhost(forceSource, forceTarget));
    }
    if (step === productGhostStep) {
      requestAnimationFrame(() => {
        playGhost(productSource, productTarget);
        playGhost(areaSource, areaTarget);
      });
    }
    if (step === pressureGhostStep) {
      requestAnimationFrame(() => playGhost(pressureSource, pressureTarget));
    }
    if (step === depthGhostStep) {
      requestAnimationFrame(() => {
        playGhost(depthSource, depthTarget);
        playGhost(topAreaSource, topAreaTarget);
      });
    }
    if (step === topProductCondenseStep) {
      requestAnimationFrame(() => {
        playGhost(topExpandSource, condensedTopProduct);
        render();
      });
    }
    if (step === pressureAreaBottomGhostStep) {
      requestAnimationFrame(() => playGhost(pressureLabel, pressureAreaBottomTarget));
    }
    if (step === bottomProductCondenseStep) {
      requestAnimationFrame(() => {
        playGhost(bottomExpandSource, condensedBottomProduct);
        render();
      });
    }
    if (step === buoyantGhostStep) {
      requestAnimationFrame(() => {
        playGhost(forceBottomSource, forceBottomTarget);
        playGhost(forceTopSource, forceTopTarget);
      });
    }
    if (step === buoyantProductGhostStep) {
      requestAnimationFrame(() => {
        playGhost(bottomProductSource, bottomProductTarget);
        playGhost(topProductSource, topProductTarget);
      });
    }
    if (step === buoyantDepthGhostStep) {
      requestAnimationFrame(() => {
        playGhost(bottomDepthSource, bottomDepthTarget);
        playGhost(topDepthSource, topDepthTarget);
      });
    }
    if (step === heightGhostStep) {
      requestAnimationFrame(() => {
        playGhost(depthDiffSource, heightTarget, { text: "height of floater" });
      });
    }
    if (step === buoyantHeightCondenseStep) {
      requestAnimationFrame(() => {
        playGhost(buoyantHeightExpand, condensedBuoyant);
        render();
      });
    }
    if (step === heightEndStep) {
      requestAnimationFrame(() => {
        playGhost(heightEndSource, heightEndTarget, { fromRect: heightEndFrom });
      });
    }
    if (step === floaterVolumeStep) {
      requestAnimationFrame(() => {
        playGhost(areaHeightSource, floaterVolumeTarget, { fromRect: areaHeightFrom });
      });
    }
    if (step === neutralLabelGhostStep) {
      requestAnimationFrame(() => {
        playGhost(buoyantForceSource, buoyantForceTarget);
        playGhost(floaterWeightNameSource, floaterWeightNameTarget);
      });
    }
    if (step === neutralGhostStep) {
      requestAnimationFrame(() => {
        playGhost(buoyantHeightSource, buoyantHeightTarget);
        playGhost(floaterMgSource, floaterMgTarget);
      });
    }
    if (step === gravityCancelStep) {
      requestAnimationFrame(() => {
        gravityFrom.forEach((from) => playDepart(from, "gravity"));
        [slideVolume, slideEq, slideMass].forEach((el, index) => {
          playGhost(el, el, { fromRect: slideFrom[index] });
        });
      });
    }
  }
});

render();
