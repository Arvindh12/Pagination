var storedData;
var entriesPerPage = 10;
var currentPage = 0;
var totalpages ;

fetch('https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json')
  .then(response => response.json())
  .then(data => {
      storedData=data;
      totalpages=Math.ceil(storedData.length / entriesPerPage);
      pagination(data);
      renderNav(0)
    });



function pagination (data){
    var table = document.getElementById("tb")
    table.innerHTML = "";
    for(let i=currentPage*entriesPerPage;i<currentPage*entriesPerPage+entriesPerPage;i++){
        console.log(i)
        if (i>=storedData.length) return
        table.innerHTML += `<tr>
        <th scope="row">${i+1}</th>
        <td>${data[i].name.split(" ")[0]}</td>
        <td>${data[i].name.split(" ")[1]}</td>
        <td>${data[i].email}</td>
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

    nav.innerHTML += ` <li class="page-item ${val == 0 ? "disabled": " "}"  onclick="updateNav('p')"><a class="page-link" href="#">Previous</a></li>`
    if (val == 0 ){
        nav.innerHTML += ` <li class="page-item active"  onclick="updateNav(0)"><a class="page-link" href="#">1</a></li>
          <li class="page-item" onclick="updateNav(1)"><a class="page-link" href="#">2</a></li>
          <li class="page-item" onclick="updateNav(2)"><a class="page-link" href="#">3</a></li> `
    }
    else if( val == totalpages-1){
        nav.innerHTML += ` <li class="page-item" onclick="updateNav(${val-2})"><a class="page-link" href="#">${val-1}</a></li>
        <li class="page-item" onclick="updateNav(${val-1})"><a class="page-link" href="#">${val}</a></li>
        <li class="page-item active" onclick="updateNav(${val})"><a class="page-link" href="#">${val+1}</a></li> `
    }
    else{
    for(let i=-1 ; i<2 ;i++){
        console.log((i == 0) ? "active" : "")
        nav.innerHTML += `<li class="page-item ${ (i == 0) ? "active" : ""}" onclick="updateNav(${i+val})"><a class="page-link" href="#">${val+i+1}</a></li>`
    }
    }
    nav.innerHTML += `<li class="page-item  ${val == totalpages-1 ? "disabled": " "}" onclick="updateNav('n')"><a class="page-link" href="#">Next</a></li>`
}

function changeEntries(e){
entriesPerPage = Number(e.value);
console.log(entriesPerPage,e.value)
currentPage = 0;
renderNav(currentPage)
    pagination(storedData)

}