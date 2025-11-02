var Pname = document.getElementById("Sname");
var Surl = document.getElementById("url");

 allURL=[]

 if(localStorage.getItem("products")){
     allURL= JSON.parse(localStorage.getItem("products"))
     displayData()
 }

function addURL(){
    var site = {
        name:Pname.value,
        url:Surl.value,
    }
// console.log(site);

allURL.push(site);



localStorage.setItem("products" , JSON.stringify(allURL))

// console.log(allURL);

displayData();



}


function displayData(){

    var bookmark = "";

    for( var i= 0 ;  i < allURL.length ;  i++  ){

        bookmark += `

        <tr>
      <td>${i+ 1}</td>
      <td>${allURL[i].name}</td>
      <td>
        <a href="${allURL[i].url}" target="_blank">
          <button onclick="setData" class="visit-btn btn  text-white ">
          <i class="fa-regular fa-eye"></i>
            Visit
          </button>
        </a>
      </td>
      <td>
        <button onclick="deleteitem()" class= "delete-btn btn  text-white">
        <i class="fa-solid fa-trash"></i>
         Delete
        </button>
      </td>
    </tr>
        
        `
    }
document.getElementById("rowData").innerHTML= bookmark;
}



function deleteitem(index){
   
    allURL.splice( index , 1)

    localStorage.setItem("products" , JSON.stringify(allURL))

    displayData()
    

}



function setData(index){

  console.log(allURL[index]);
  Pname.value = allURL[index].name;
  Surl.value = allURL[index].url;

  

}
    
  

