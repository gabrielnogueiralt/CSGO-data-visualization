import {
  getSVGNormal,
  getSVGA,
  getSVGB,
  getSVGC,
  getSVGCT,
  getSVGTR,
} from "./filters.js";

var currentMap = "";

const leftMapcard = document.getElementById("left-mapcard");
const rightMapCard = document.getElementById("right-mapcard");

const loading = document.getElementsByClassName("loader");
const externalContainer = document.getElementsByClassName("external-container");

const cacheButton = document.getElementById("cache-button");
cacheButton.addEventListener("click", async () => {
  loading[0].style.display = "inherit";
  externalContainer[0].style.pointerEvents = "none";
  externalContainer[0].style.opacity = "0.5";
  leftMapcard.style.backgroundImage = "url('./../assets/maps/de_cache.png')";
  currentMap = "de_cache";
  await draw("de_cache");
});

const infernoButtondocument = document.getElementById("inferno-button");
infernoButtondocument.addEventListener("click", async () => {
  loading[0].style.display = "inherit";
  externalContainer[0].style.pointerEvents = "none";
  externalContainer[0].style.opacity = "0.5";
  leftMapcard.style.backgroundImage = "url('./../assets/maps/de_inferno.png')";
  currentMap = "de_inferno";
  await draw("de_inferno");
});

const mirageButtondocument = document.getElementById("mirage-button");
mirageButtondocument.addEventListener("click", async () => {
  loading[0].style.display = "inherit";
  externalContainer[0].style.pointerEvents = "none";
  externalContainer[0].style.opacity = "0.5";
  leftMapcard.style.backgroundImage = "url('./../assets/maps/de_mirage.png')";
  currentMap = "de_mirage";
  await draw("de_mirage");
});

const rankAButton = document.getElementById("rank-a-button");
rankAButton.addEventListener("click", async () => {
  loading[0].style.display = "inherit";
  externalContainer[0].style.pointerEvents = "none";
  externalContainer[0].style.opacity = "0.5";
  leftMapcard.style.backgroundImage =
    "url('./../assets/maps/" + currentMap + ".png')";
  await getByRankA(currentMap);
});

const rankBButton = document.getElementById("rank-b-button");
rankBButton.addEventListener("click", async () => {
  loading[0].style.display = "inherit";
  externalContainer[0].style.pointerEvents = "none";
  externalContainer[0].style.opacity = "0.5";
  leftMapcard.style.backgroundImage =
    "url('./../assets/maps/" + currentMap + ".png')";
  await getByRankB(currentMap);
});

const rankCButton = document.getElementById("rank-c-button");
rankCButton.addEventListener("click", async () => {
  loading[0].style.display = "inherit";
  externalContainer[0].style.pointerEvents = "none";
  externalContainer[0].style.opacity = "0.5";
  leftMapcard.style.backgroundImage =
    "url('./../assets/maps/" + currentMap + ".png')";
  await getByRankC(currentMap);
});

const teamCTButton = document.getElementById("team-ct-button");
teamCTButton.addEventListener("click", async () => {
  loading[0].style.display = "inherit";
  externalContainer[0].style.pointerEvents = "none";
  externalContainer[0].style.opacity = "0.5";
  leftMapcard.style.backgroundImage =
    "url('./../assets/maps/" + currentMap + ".png')";
  await getByCT(currentMap);
});

const teamTRButton = document.getElementById("team-tr-button");
teamTRButton.addEventListener("click", async () => {
  loading[0].style.display = "inherit";
  externalContainer[0].style.pointerEvents = "none";
  externalContainer[0].style.opacity = "0.5";
  leftMapcard.style.backgroundImage =
    "url('./../assets/maps/" + currentMap + ".png')";
  await getByTR(currentMap);
});

const compareButton = document.getElementById("compare-button");
compareButton.addEventListener("click", async () => {
  compare();
});

async function draw(map) {
  await getSVGNormal(map);
}

async function getByRankA(map) {
  await getSVGA(map);
}

async function getByRankB(map) {
  await getSVGB(map);
}

async function getByRankC(map) {
  await getSVGC(map);
}

async function getByCT(map) {
  await getSVGCT(map);
}

async function getByTR(map) {
  await getSVGTR(map);
}

function compare() {
  document.getElementById("lado2").textContent = document.getElementById("lado1").textContent;
  document.getElementById("lado1").textContent = 'Lado 1';
  rightMapCard.innerHTML = '';
  rightMapCard.style.backgroundImage = "url('./../assets/maps/" + currentMap + ".png')";
  rightMapCard.innerHTML = leftMapcard.innerHTML;
  leftMapcard.innerHTML = '';
  leftMapcard.style = 'none'
}
