const form1 = document.getElementById("form1");

const rows =document.getElementById("rows");

let itemsleft = document.querySelector("#itemsleft");


let counter = -1;
let checkcounter = 0;
let numremoved = 0;

form1.addEventListener("keyup", function (e) {

    if (e.keyCode == 13) {

        counter++;

        const task = document.createElement("li");
        
        task.id = counter;

        const check = document.createElement("input");

        const text = document.createElement("label");

        const del  = document.createElement("button");

        del.id = counter;
        del.classList.add("delbutton");

       // const del  = document.createElement("img");
        text.textContent = form1.value;
        check.type = "checkbox";

       // text.for = "task";

        rows.appendChild(task);

        task.appendChild(check);

        task.appendChild(text);

        task.appendChild(del);

        del.textContent ="X";

        


        del.addEventListener("click", event =>
        {
              task.remove();
              numremoved++;
        });

        
        check.addEventListener("click", event =>
        {
            
            checkcounter++;
            let sum = document.createElement("span");
            sum.textContent = " " + ((counter + 1)-numremoved-checkcounter);
            itemsleft.appendChild(sum);

        })
    }

});


/*
var thebuttons = document.querySelectorAll('.delbutton');

thebuttons.forEach((b)=>{
  b.addEventListener('click',(e)=>{prompt(this.id)},false);
});
*/
