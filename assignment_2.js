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


//Part 2


let acceptance = document.querySelector("#acceptance");
let cookietext = document.querySelector("#cookietext");


let cookieTextNode=document.createTextNode("Accept Cookies");
acceptance.appendChild(cookieTextNode);


acceptance.addEventListener("click", cookieAccept);

function cookieAccept(event) {

    if (acceptance.innerHTML === "Accept Cookies") {
        cookietext.innerHTML = "Cookies were accepted. Would you like to revoke?";
        acceptance.innerHTML = "Revoke";
    } else {
        cookietext.innerHTML = "This website stores cookies on your computer. These cookies are used to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media. To find out more about the cookies we use, see our Privacy Policy.";
        acceptance.innerHTML = "Accept Cookies";
    }
}






























 












