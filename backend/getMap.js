import {
  CalculatePointToResolutionXCache,
  CalculatePointToResolutionXInferno,
  CalculatePointToResolutionXMirage,
  CalculatePointToResolutionYCache,
  CalculatePointToResolutionYInferno,
  CalculatePointToResolutionYMirage,
} from "./convertCoordinates.js";
import { kMeans } from "./clustering.js";

const loading = document.getElementsByClassName("loader");
const externalContainer = document.getElementsByClassName("external-container");

export function drawDeathCircles(mapName) {
  const dataSrc = "./../data/" + mapName + "_data_filtered.csv";
  d3.csv(dataSrc, function (data) {
    d3.select("svg").remove();
    var sampleSVG = d3
      .select("#left-mapcard")
      .append("svg")
      .attr("width", 450)
      .attr("height", 450);

    if (mapName == "de_cache") {
      const pos = [];
      for (let i = 0; i < data.length; i++) {
        pos[i] = [
          CalculatePointToResolutionXCache(data[i].vic_pos_x),
          CalculatePointToResolutionYCache(data[i].vic_pos_y),
        ];
      }
      const clusters = kMeans(pos, 50);

      drawClusters(clusters, sampleSVG);
    } else if (mapName == "de_inferno") {
      const pos = [];
      for (let i = 0; i < data.length; i++) {
        pos[i] = [
          CalculatePointToResolutionXInferno(data[i].vic_pos_x),
          CalculatePointToResolutionYInferno(data[i].vic_pos_y),
        ];
      }
      const clusters = kMeans(pos, 35);

      drawClusters(clusters, sampleSVG);
    } else {
      const pos = [];
      for (let i = 0; i < data.length; i++) {
        pos[i] = [
          CalculatePointToResolutionXMirage(data[i].vic_pos_x),
          CalculatePointToResolutionYMirage(data[i].vic_pos_y),
        ];
      }
      const clusters = kMeans(pos, 35);

      drawClusters(clusters, sampleSVG);
    }
    loading[0].style.display = "none";
    externalContainer[0].style.pointerEvents = "inherit";
    externalContainer[0].style.opacity = "inherit";
  });
}

function normalizeClusterArray(arr) {
  const count = [];
  const normalizedVector = [];

  arr.forEach((element) => {
    count[element] = (count[element] || 0) + 1;
  });

  const max = Math.max(...count);
  const min = Math.min(...count);

  for (let i = 0; i < count.length; i++) {
    normalizedVector[i] = (count[i] - min) / (max - min);
  }

  return normalizedVector;
}

function drawClusters(clusters, sampleSVG) {
  const normalizedArray = normalizeClusterArray(clusters.classes);
  for (let i = 0; i < clusters.centroids.length; i++) {
    sampleSVG
      .append("circle")
      .style("stroke", "gray")
      .style("fill", "red")
      .attr("cx", clusters.centroids[i][0])
      .attr("cy", clusters.centroids[i][1])
      .attr("r", normalizedArray[i] * 15);
  }
}
