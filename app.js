const inputBox = document.querySelector('#input-box');
const containerList = document.querySelector('#containerList');


function addTask(){
  if(inputBox.value === ""){
    alert("Write your works")
  } else{
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    containerList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span)
  }
  inputBox.value = "";
  saveData()
}

containerList.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
      e.target.classList.toggle("checked");
      saveData();
    }
    else if (e.target.tagName === "SPAN"){
      e.target.parentElement.remove();
      saveData();
    }
}, false);

function saveData(){
  localStorage.setItem("data", containerList.innerHTML);
}

function showData(){
  localStorage.innerHTML = localStorage.getItem("data");
}