//Part 1

let data = [
 
       {month : "April", visitors:"600"},
       {month : "May", visitors:"745"},
       {month : "June", visitors:"879"},
       {month : "July", visitors:"1004"},
       {month : "August", visitors:"1200"},
       {month : "September", visitors:"1130"},
];


let statistics = document.querySelector("#visitordata");
let table=document.createElement("table");

statistics.appendChild(table);


let headerSection=document.createElement("thead");
table.appendChild(headerSection);

let headerRow=document.createElement("tr");
headerSection.appendChild(headerRow);


let headerMonth=document.createElement("th");
let headerVisitors=document.createElement("th");

headerRow.appendChild(headerMonth);
headerRow.appendChild(headerVisitors);


let monthText=document.createTextNode("Month");
let visitorText=document.createTextNode("No. of Visitors");


headerMonth.appendChild(monthText);
headerVisitors.appendChild(visitorText);

let body=document.createElement("tbody");
table.appendChild(body);





for(let i=0;i<data.length;i++){

    let row=document.createElement("tr");
    body.appendChild(row);

    let month=document.createElement("td");
    let number=document.createElement("td");


    row.appendChild(month);
    row.appendChild(number);


    let aTextNode=document.createTextNode(data[i].month);
    let textnode=document.createTextNode(data[i].visitors);

    month.appendChild(aTextNode);
    number.appendChild(textnode);

   
}
































 












