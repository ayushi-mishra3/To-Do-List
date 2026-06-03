const ib=document.getElementById("input-box");
const lc=document.getElementById("list-container");

function addTak(){
    if(ib.value===""){
        alert("Task can't be empty");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=ib.value;
        lc.appendChild(li);
        ib.value="";

        let span=document.createElement("span");
        span.innerHTML="&#10008";
        li.appendChild(span);

    }
    saveData();
}

 lc.addEventListener("click", function(e) {
        if(e.target.tagName==="LI"){
            e.target.classList.toggle("completed");
            saveData();
        }

        else if(e.target.tagName==="SPAN"){
            e.target.parentElement.remove();
            saveData();
        }
 },false);
        
function saveData(){
    localStorage.setItem("tasks", lc.innerHTML);
}
function showTask(){
    lc.innerHTML=localStorage.getItem("tasks") ||"";
}
showTask();