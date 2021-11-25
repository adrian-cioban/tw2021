let evenCollection = document.querySelectorAll("tbody tr:nth-child(even)");
let oddCollection = document.querySelectorAll("tbody tr:nth-child(odd)");

if (evenCollection && oddCollection.length > 0) {
  for (let item of evenCollection) {
    item.bgColor = "white";
  }
}

if (oddCollection && oddCollection.length > 0) {
  for (let item of oddCollection) {
    item.bgColor = "violet";
  }
}

let firstRow = document.querySelectorAll("tbody tr:first-child");
if (firstRow && firstRow.length > 0) {
  for (let item of firstRow) {
    item.bgColor = "blue";
  }
}

let lastRow = document.querySelectorAll("tbody tr:last-child");
if (lastRow && lastRow.length > 0) {
  for (let item of lastRow) {
    item.bgColor = "green";
  }
}
