const apiUrl = "http://localhost:8000/";

async function get(url) {
  return (await axios.get(url)).data;
}

async function getData() {
  let id = document.getElementById("inputId").value;
  let item = await get(apiUrl + `student/${id}`);

  let tableDiv = document.getElementById("tableData");

  if (!item || !tableDiv) {
    return;
  }

  let myTable = document.getElementById("myTable");
  if (myTable) {
    myTable.remove();
  }

  let myHtmlCode = [];
  myHtmlCode.push("<table id='myTable'>");
  myHtmlCode.push("<thead>");
  myHtmlCode.push("<tr> <th hidden> Id </th> <th> Name </th> <th> Age </th>");
  myHtmlCode.push("</thead>");
  myHtmlCode.push("<tbody>");

  myHtmlCode.push(
    `<tr> <td hidden> ${item.id} </td> <td> ${item.name} </td> <td> ${item.age} </td>`
  );

  myHtmlCode.push("</tbody>");
  myHtmlCode.push("</table>");

  tableDiv.innerHTML = myHtmlCode.join("");
}
