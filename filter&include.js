"use strict";

import fs from "fs";
const data1 = fs.readFileSync("./data/data1.csv", "utf8")
const data2 = fs.readFileSync("./data/data2.csv", "utf8")

const getRowData = (data) => {
  let rowData = []
  let splitData = data.split("\r" + "\n" )

  for (let i = 1; i < splitData.length; i++) {
    const row = splitData[i].split(',')
    rowData.push(row[0].toString())
  }
  return rowData;
}
 
const CSVToObject = () => {

  const rowData1 = getRowData(data1)
  const rowData2 = getRowData(data2)
  let rowsObj;

 return rowsObj = rowData1.filter(value  => rowData2.includes(value));
  
}

let newData = CSVToObject()
 
console.log(newData);
