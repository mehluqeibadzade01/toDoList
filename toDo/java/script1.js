  // $("button").click(function(){
  //   $("p").hide();
  // });
//   $("button").mouseover(function(){$("p").slideToggle()})
// var netice=document.querySelector("p").style.fontSize="100px"

//children lastElementChild  firstElementChild parentElement nextElementSibling previousElementSibling
// let li=document.querySelector(".li");
// // let netice=ul.firstElementChild
// // let netice =li.parentElement
// let netice =li.previousElementSibling
// console.log(netice);


//to do

// var count=ul.children.length

// var netice=ul.children[0].nextElementSibling.children[0].children[0].checked=true
// console.log(netice);
var worklist=[

             ]
             let isEdit=false;
            let editId;
            let taskinput=document.querySelector("#txtTaskname");
            const btnClear=document.querySelector("#clear")
             displaytask('all')


function displaytask(filter) {
const ul=document.querySelector("#task-list")
    ul.innerHTML="";

    if(worklist.length==0){ul.innerHTML='<p class="p-3 m-0 text-danger"> Worklist is empty</p>'}


    else{for( let work of worklist){
     if(work.status=="completed"){
       let completed="checked"
     }
     else{ var completed=""}
  
if(filter==work.status || filter =='all'){ 
   var netice=` <li class="task list-group-item d-flex justify-content-between align-items-center">
<div class="form-check">
  <input type="checkbox" class="form-check-input " id=" ${work.id} "${completed} onclick="uptadeStatus(this)">
  <label for=" ${work.id}" class="form-check-label ${completed}">${work.workname}</label>
</div>
<div class="dropdown">
<button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
</button>
<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
<li><a class="dropdown-item" href="#" onclick="deleteTask(${work.id})"><i class="fa-solid fa-trash-can"></i>Delete</a></li>
<li><a class="dropdown-item" href="#" onclick='editTask(${work.id},"${work.workname}")'><i class="fa-solid fa-pen"></i>Edit</a></li>

</ul>
</div>
</li>`

ul.insertAdjacentHTML("beforeend",netice)}


      
    
        
    }}

document.querySelector("#btnAddnewtask").addEventListener("keypress",function(){

    if( event.key=="Enter"){btnAdd.click()}
})
    
}

const filter=document.querySelectorAll("span.filter")
for (let span of filter) {
  span.addEventListener("click",function () {
    document.querySelector("span.active").classList.remove("active")
    span.classList.add("active")
    displaytask(document.querySelector("span.active").id)
  })
  
}
const btnAdd=document.querySelector("#btnAddnewtask")
btnAdd.addEventListener("click",newtask)

function newtask(){
   

    if (taskinput.value=="") {alert("deyer daxil edin")
        
    } else { //elave etme
        if(!isEdit){
            worklist.push({"id":worklist.length+1,"workname":taskinput.value})

        }
        else{//guncellemek
      for (let work of worklist) {
        if(work.id==editId){
            work.workname=taskinput.value
        }
        isEdit=false
      }

        }

        
        taskinput.value=""
displaytask(document.querySelector("span.active").id)
    }
  
       
    
}
function deleteTask(id){
   // //usul1
    // let deletedTask=worklist.findIndex(function(work){return work.id==id});
   
    ////usul2
  //   for(let index in worklist){
  //    if(worklist[index].id==id){
  //  let deletedTask=index
  //    }
  //   }

    //usul3
    let deletedTask=worklist.find(work=>work.id==id)
    worklist.splice(deletedTask,1)
    displaytask(document.querySelector("span.active").id)
}
function editTask(taskid,taskname) {
isEdit=true;
editId=taskid;
taskinput.value=taskname;
taskinput.focus()
    taskinput.classList.add("active")
}
function deleteAll() {
    worklist.splice(0,worklist.length)
    displaytask()
}

btnClear.onclick=deleteAll

function uptadeStatus(selectedTask) {
let label=  selectedTask.nextElementSibling;
let status;
if (selectedTask.checked) {
  
 
status="completed"
  
  label.classList.add("checked")
} else {
  label.classList.remove("checked")
  status="pending"
}
for(let work of worklist){
  if(work.id==selectedTask.id)
  {
 work.status=status;

  }
  
}

}

