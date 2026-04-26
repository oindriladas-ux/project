let todolist=[];
displaytask();

function addtask() {
    let input=document.querySelector('.input-text');
    let todoitem=input.value;
    todolist.push(todoitem);
    input.value='';
    displaytask();
}

function displaytask() {
        let containerelement=document.querySelector('#todo-container');
       
        let newhtml ='';

        for(let i=0;i<todolist.length;i++) {
            newhtml+=`
            <div>
            <span> <i class="fa-solid fa-heart"></i> ${todolist[i]}</span>
            <button id="delete-button" onclick="
               todolist.splice(${i},1);
               displaytask();
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
    console.log(todoitem);

