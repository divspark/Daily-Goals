const title = document.getElementById("title");

const description = document.getElementById("description");

const form = document.querySelector("form");

const container = document.querySelector(".container");


const tasks = localStorage.getItem("tasks")? JSON.parse(localStorage.getItem("tasks")): [];                                            //ternary operator 10>5 ?a:b;
showAllTasks();



function showAllTasks () {
    tasks.forEach((value,index)=>{
        const div = document.createElement("div");
        div.setAttribute("class","task");

        const innerDiv = document.createElement("div");
        div.append(innerDiv);

        const p =document.createElement("p");
        p.innerText=value.title;            //value islliye kiya kyonki forEach me value hai first parameter
        innerDiv.append(p);


        const span =document.createElement("span");
        span.innerText=value.description;            //value islliye kiya kyonki forEach me value hai first parameter
        innerDiv.append(span);

        const btn = document.createElement("button");
        btn.setAttribute("class","deleteBtn");

        btn.innerText = "-";

        btn.addEventListener("click",() =>{
            removeTasks();
            tasks.splice(index,1);
            localStorage.setItem("tasks",JSON.stringify(tasks));
            showAllTasks();
        });

        div.append(btn);
        container.append(div);
    })
}

function removeTasks(){
    tasks.forEach(() =>{
        const div = document.querySelector(".task");
        div.remove();
    })
};


form.addEventListener("submit",(e) => {
    e.preventDefault();
    removeTasks();
    tasks.push({
        title: title.value,
        description: description.value
    });
    //console.log(tasks);

    localStorage.setItem("tasks",JSON.stringify(tasks));
    showAllTasks();
})