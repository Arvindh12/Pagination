var storedData;
var entriesPerPage = 10;
var currentPage = 0;
var totalpages ;

fetch('https://raw.githubusercontent.com/angular-ui/ui-grid/master/misc/site/data/100.json')
  .then(response => response.json())
  .then(data => {
      storedData=data;
      totalpages=Math.ceil(storedData.length / entriesPerPage);
      pagination(data);
    });



function pagination (data){
    var table = document.getElementById("tb")
    table.innerHTML = "";
    for(let i=currentPage*entriesPerPage;i<currentPage*entriesPerPage+entriesPerPage;i++){
        if (i>=storedData.length) return
        table.innerHTML += `<tr>
        <th scope="row">${i+1}</th>
        <td>${data[i].name}</td>
        <td>${data[i].gender}</td>
        <td>${data[i].company}</td>
      </tr>`
    }
}

function updateNav(val){
    if (val == "p" ) {
        if (currentPage == 0) return;
        currentPage--;}
    else if (val == "n") {
        if(currentPage>=totalpages-1) return;
        currentPage++}
    else {
        currentPage=val;
    }
    
    renderNav(currentPage)
    pagination(storedData)
}

function renderNav(val){
    var nav = document.getElementById("nav")
    nav.innerHTML = ""
    totalpages =  Math.ceil(storedData.length / entriesPerPage)

    nav.innerHTML += ` <li class="page-item ${val == 0 ? "disabled": " "}" id="" onclick="updateNav('p')"><a class="page-link" href="#">Previous</a></li>`
    if (val == 0 ){
        nav.innerHTML += ` <li class="page-item active" id="" onclick="updateNav(0)"><a class="page-link" href="#">1</a></li>
          <li class="page-item" id="" onclick="updateNav(1)"><a class="page-link" href="#">2</a></li>
          <li class="page-item" id="" onclick="updateNav(2)"><a class="page-link" href="#">3</a></li> `
    }
    else if( val == totalpages-1){
        nav.innerHTML += ` <li class="page-item" id="" onclick="updateNav(${val-2})"><a class="page-link" href="#">${val-1}</a></li>
        <li class="page-item" id="" onclick="updateNav(${val-1})"><a class="page-link" href="#">${val}</a></li>
        <li class="page-item active" id="" onclick="updateNav(${val})"><a class="page-link" href="#">${val+1}</a></li> `
    }
    else{
    for(let i=-1 ; i<2 ;i++){
        console.log((i == 0) ? "active" : "")
        nav.innerHTML += `<li class="page-item ${ (i == 0) ? "active" : ""}" id="" onclick="updateNav(${i+val})"><a class="page-link" href="#">${val+i+1}</a></li>`
    }
    }
    nav.innerHTML += `<li class="page-item  ${val == totalpages-1 ? "disabled": " "}" id="" onclick="updateNav('n')"><a class="page-link" href="#">Next</a></li>`
}

function changeEntries(e){
console.log(e.value)
}