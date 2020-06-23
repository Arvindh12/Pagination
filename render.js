var table = document.createElement("table")
table.setAttribute("class","table")
var thead = document.createElement("thead")
var row =  document.createElement("tr")
var th =  document.createElement("th")
th.setAttribute("scope","col")
th.innerText="#"
row.appendChild(th)
th =  document.createElement("th")
th.setAttribute("scope","col")
th.innerText="First Name"
row.appendChild(th)
th =  document.createElement("th")
th.setAttribute("scope","col")
th.innerText="Last Name"
row.appendChild(th)
th =  document.createElement("th")
th.setAttribute("scope","col")
th.innerText="Email"
row.appendChild(th)
thead.appendChild(row)
table.appendChild(thead)
tbody = document.createElement("tbody")
tbody.setAttribute("id","tb")
table.appendChild(tbody)

var parent = document.getElementById("root")
parent.appendChild(table)
var div = document.createElement("div")
div.setAttribute("class","row")
var div1 = document.createElement("div")
div1.setAttribute("class","col-md-3")
div.appendChild(div1)
var div1 = document.createElement("div")
div1.setAttribute("class","col-md-4")
var nav = document.createElement("nav")
nav.setAttribute("aria-label","Page navigation example")
var ul = document.createElement("ul")
ul.setAttribute("class","pagination justify-content-center")
ul.setAttribute("id","nav")
nav.appendChild(ul)
div1.appendChild(nav)
div.appendChild(div1)
var div1 = document.createElement("div")
div1.setAttribute("class","col-md-2")
var div2 = document.createElement("div")
div2.setAttribute("class","input-group justify-content-center")
var div3 = document.createElement("div")
div3.setAttribute("class","input-group-prepend")
var span = document.createElement("span")
span.setAttribute("class","input-group-text")
span.innerText = "Entries per page";
div3.appendChild(span)
div2.appendChild(div3)
var entry = document.createElement("input")
entry.setAttribute("type","number")
entry.setAttribute("id","quantity")
entry.setAttribute("class","form-control")
entry.setAttribute("min","1")
entry.setAttribute("max","100")
entry.setAttribute("onchange","changeEntries(this)")
entry.setAttribute("value","10")
div2.appendChild(entry)
div1.appendChild(div2)
div.appendChild(div1)
var div1 = document.createElement("div")
div1.setAttribute("class","col-md-3")
div.appendChild(div1)
parent.appendChild(div)

