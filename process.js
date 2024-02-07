let tasks=[];
let completedtasks=[];
const form=document.getElementById("addtask");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    tasks.push(document.getElementById("taskinput").value);
    displayTask();
    document.getElementById("taskinput").value="";
});
function displayTask()
{
    const list=document.getElementById("todolist");
    list.innerHTML="";
    for(let i=0;i<tasks.length;i++)
    {
        const item=document.createElement("li");
        const deletebtn=`<button type=button class="btn btn-danger text-light" onclick="deleteTask(${i})"><i class="fa-solid fa-xmark"></i></button>`;
        const addbtn=`<button type=button class="btn btn-success text-light" onclick="completeTask(${i})"><i class="fa-solid fa-check"></i></button>`;
        item.innerHTML=`${tasks[i]}  ${deletebtn}   ${addbtn}`;
        item.style.marginBottom="10px";
        list.appendChild(item);
    }
}
function deleteTask(index)
{
    tasks.splice(index,1);
    displayTask();
}
function displayCompletedTask()
{
    const list=document.getElementById("finishtask");
    list.innerHTML="";
    for(let i=0;i<completedtasks.length;i++)
    {
        const item=document.createElement("li");
        item.innerHTML=`${completedtasks[i]}`;
        item.style.marginBottom="10px";
        list.appendChild(item);
    }

}
function completeTask(index)
{
    completedtasks.push(tasks[index]);
    deleteTask(index);
    displayTask();
    displayCompletedTask();
}