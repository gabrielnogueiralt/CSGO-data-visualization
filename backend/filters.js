const loading = document.getElementsByClassName("loader");
const externalContainer = document.getElementsByClassName("external-container");

export async function getSVGNormal(mapName) {
  document.getElementById("lado1").textContent = "Visualização geral do " + mapName;
  const path = "./../assets/maps_svgs/" + mapName + "_normal.svg";
  d3.select("#left-mapcard").select("svg").remove();
  d3.xml(path, function (data) {
    d3.select("#left-mapcard").node().append(data.documentElement);
  });

  loading[0].style.display = "none";
  externalContainer[0].style.pointerEvents = "inherit";
  externalContainer[0].style.opacity = "inherit";
}

export async function getSVGA(mapName) {
  document.getElementById("lado1").textContent = "Rank A do " + mapName;
  const path = "./../assets/maps_svgs/" + mapName + "_a.svg";
  d3.select("#left-mapcard").select("svg").remove();
  d3.xml(path, function (data) {
    d3.select("#left-mapcard").node().append(data.documentElement);
  });

  loading[0].style.display = "none";
  externalContainer[0].style.pointerEvents = "inherit";
  externalContainer[0].style.opacity = "inherit";
}

export async function getSVGB(mapName) {
  document.getElementById("lado1").textContent = "Rank B do " + mapName;
  const path = "./../assets/maps_svgs/" + mapName + "_b.svg";
  d3.select("#left-mapcard").select("svg").remove();
  d3.xml(path, function (data) {
    d3.select("#left-mapcard").node().append(data.documentElement);
  });

  loading[0].style.display = "none";
  externalContainer[0].style.pointerEvents = "inherit";
  externalContainer[0].style.opacity = "inherit";
}

export async function getSVGC(mapName) {
  document.getElementById("lado1").textContent = "Rank C do " + mapName;
  const path = "./../assets/maps_svgs/" + mapName + "_c.svg";
  d3.select("#left-mapcard").select("svg").remove();
  d3.xml(path, function (data) {
    d3.select("#left-mapcard").node().append(data.documentElement);
  });

  loading[0].style.display = "none";
  externalContainer[0].style.pointerEvents = "inherit";
  externalContainer[0].style.opacity = "inherit";
}

export async function getSVGCT(mapName) {
  document.getElementById("lado1").textContent = "Lado CT do " + mapName;
  const path = "./../assets/maps_svgs/" + mapName + "_ct.svg";
  d3.select("#left-mapcard").select("svg").remove();
  d3.xml(path, function (data) {
    d3.select("#left-mapcard").node().append(data.documentElement);
  });

  loading[0].style.display = "none";
  externalContainer[0].style.pointerEvents = "inherit";
  externalContainer[0].style.opacity = "inherit";
}

export async function getSVGTR(mapName) {
  document.getElementById("lado1").textContent = "Lado TR do " + mapName;
  const path = "./../assets/maps_svgs/" + mapName + "_tr.svg";
  d3.select("#left-mapcard").select("svg").remove();
  d3.xml(path, function (data) {
    d3.select("#left-mapcard").node().append(data.documentElement);
  });

  loading[0].style.display = "none";
  externalContainer[0].style.pointerEvents = "inherit";
  externalContainer[0].style.opacity = "inherit";
}
