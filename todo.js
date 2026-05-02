let todolist= JSON.parse(localStorage.getItem('todolist')) || [];
displaytask();

function savetolocal(){
    localStorage.setItem('todolist', JSON.stringify(todolist));
}

function addtask() {
    if (notask()) {
        return;
    }

    let input=document.querySelector('.input-text');
    let todoitem=input.value.trim();
    todolist.push({item: todoitem});
    savetolocal();
    input.value='';
    displaytask();
}

function displaytask() {
     
        let containerelement=document.querySelector('#todo-container');
       
        let newhtml ='';

        for(let i=0;i<todolist.length;i++) {
            let item=todolist[i].item;
            newhtml+=`
            <div id="input-container">
            <span> <i class="fa-solid fa-heart"></i> ${item}</span>
            <button id="delete-button" onclick="
               todolist.splice(${i},1);
               displaytask();
               savetolocal();
               ">Done! </button>
            </div>
            `;
            
        }
         
        containerelement.innerHTML= newhtml;
         
}

function showdate(){
    let todaydate= new Date();
    let datecontainer=document.querySelector('#show-date');

    let months=['January','February','March','April','May','June','July',"August",'September','October','November','December'];
    
    let monthname=months[todaydate.getMonth()];
    let day=todaydate.getDate();
    let year=todaydate.getFullYear();
    datecontainer.innerHTML=`Date: ${day} ${monthname}, ${year}`;
}

function notask(){
    let input=document.querySelector('.input-text');
    let task=input.value.trim();
    if(input.value==='') {
        alert('Please enter a task!');
        return true;
    }
    return false;
}
  
// document.querySelector('#add-button').addEventListener('click', notask);
