//<---------selectors--------->
const todoinput = document.querySelector(".todo-input");
const todobutton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");
const filteroption = document.querySelector(".filter-tudo")





// <---------events listeners--------->
todobutton.addEventListener("click", addtodo);
todolist.addEventListener("click", deletecheck);
filteroption.addEventListener("click", filtertodo);






// <-------functions------>

function addtodo(event){
    // <------prevent form submitting------->
    event.preventDefault();


   // <------todo Div------->
   const todoDiv = document.createElement("div");
   todoDiv.classList.add("todo");

    
   // <------create li------>
   const newtodo = document.createElement("li");
   newtodo.innerText = todoinput.value;
   newtodo.classList.add("todo-item");
   todoDiv.appendChild(newtodo);


   //<------ check mark button ------>
   const completedbutton = document.createElement("button");
   completedbutton.innerHTML = '<i class="fas fa-check"></i>';
   completedbutton.classList.add("complete-btn");
   todoDiv.appendChild(completedbutton);
   

    // <-----trash button------->
   const trashbutton = document.createElement("button");
   trashbutton.innerHTML = '<i class="fas fa-trash"></i>';
   trashbutton.classList.add("trash-btn");
   todoDiv.appendChild(trashbutton);


   // < ------append div to list ------ >
   todolist.appendChild(todoDiv);

   // <------ clear todo input value----->
   todoinput.value = "";

  
}

function deletecheck(e){
    const item = e.target;
    // < ------- delete todo ----- >
    if (item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        // <------- animation ------>
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function(){
            todo.remove()
        })
        
   }



   // <------ check mark-------->
   if (item.classList[0]=== "complete-btn"){
       const todo = item.parentElement;
       todo.classList.toggle("completed")
   } 

}

function filtertodo(e){
    const todos = todolist.childNodes;
    console.log(todos)

}