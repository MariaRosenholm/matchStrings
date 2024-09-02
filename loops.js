"use strict";

import fs from "fs";
const data1 = fs.readFileSync("./data/data1.csv", "utf8")
const data2 = fs.readFileSync("./data/data2.csv", "utf8")

const getRowData = (data) => {
  let rowData = []
  let splitData = data.split("\r" + "\n" )

  for (let i = 1; i < splitData.length; i++) {
    const row = splitData[i].split(',')
    rowData.push(row[0])
  }
  return rowData;
}
 
const CSVToObject = () => {

  const rowData1 = getRowData(data1)
  const rowData2 = getRowData(data2)
  let rowsObj = []

  for (let i = 0; i < rowData2.length; i++) {
    for (let j = 0; j < rowData1.length; j++) {
      if(rowData2[i].toString() === rowData1[j].toString()){ 
        console.log(rowData2[i] + " vs "+ rowData1[j])
        console.log(rowData2[i].toString() === rowData1[j].toString())
        rowsObj.push(rowData1[j]);
       } 
       else { 
        console.log("not a match")
      }
    }
    return rowsObj
  }
}

let newData = CSVToObject()
 
console.log(newData);