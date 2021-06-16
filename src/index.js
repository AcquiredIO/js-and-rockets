import { prepareData, renderData } from "./solution";

/* 
  PLEASE DO NOT MODIFY THIS FILE
*/

const filterParams = {
  year: 2018,
  customerName: "NASA"
};

fetch("https://api.spacexdata.com/v3/launches/past")
  .then(response => response.json())
  .then(prepareData(filterParams))
  .then(renderData);
