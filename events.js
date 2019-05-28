const form1 = document.getElementById("form1");
const rows = document.getElementById("rows");
let itemsLeft = document.querySelector("#itemsLeft");
let resetButton = document.querySelector("#reset");
let activeButton = document.querySelector("#activeButton");
let completedButton = document.querySelector("#completedButton");
let allButton = document.querySelector("#allButton");
let clearComleted = document.querySelector("#clearButton");

let idCounter = -1;
let checkcounter = 0;
let numremoved = 0;
let checkedCounter = 0;
let checkedCounter2 = 0;
let checkedCounter3 = 0;
let checkedCounter4 = 0;

let status = "all";

// ENTER BUTTON EVENT
form1.addEventListener("keyup", function (e) {

    if (e.keyCode == 13 && form1.value.replace(/\s+/g, '').length != 0) {
        idCounter++;
        
        
        const task = document.createElement("li");
        task.id = idCounter;

        const checkBoxLabel = document.createElement("label");
        checkBoxLabel.classList.add("myCheckbox");

        const check = document.createElement("input");
        check.type = "checkbox";
        check.id = idCounter;
        check.classList.add("checkBox");
        const checkBoxSpan = document.createElement("span");
        checkBoxSpan.classList.add("checkSpan");

        checkBoxLabel.appendChild(check);
        checkBoxLabel.appendChild(checkBoxSpan);


        const text = document.createElement("label");
        text.classList.add("taskText");
        const del = document.createElement("button");
        del.id = idCounter;
        del.classList.add("delbutton");

        text.textContent = form1.value;

        rows.appendChild(task);
        task.appendChild(checkBoxLabel);
        
        checkBoxLabel.appendChild(text);
        task.appendChild(del);

        del.textContent = "";


        // DEL BUTTON CLICK EVENT
        del.addEventListener("click", event => {
            task.remove();
            numremoved++;

            let checkList3 = Array.from(document.querySelectorAll(".checkBox"));

            if (checkList3.length == 0) {
                itemsLeft.textContent = 0;
            }

            checkList3.forEach(function (i) {
                if (i.checked == 1) {
                    checkedCounter3++;
                };
                itemsLeft.textContent = checkList3.length - checkedCounter3;

            });

            checkedCounter3 = 0;
        });
        
        let checkList = Array.from(document.querySelectorAll(".checkBox"));

        checkList.forEach(function (i) {
            if (i.checked == 1) {
                checkedCounter++;
            };

            itemsLeft.textContent = checkList.length - checkedCounter;
        });
      
        checkedCounter = 0;

        // CHECK CLICK EVENT
        check.addEventListener("click", event => {
            let checkList2 = Array.from(document.querySelectorAll(".checkBox"));

            checkList2.forEach(function (i) {

                if (i.checked == 1) {
                    checkedCounter2++;
                };

                itemsLeft.textContent = checkList2.length - checkedCounter2;
            });

            checkedCounter2 = 0;

            display();
        });
       form1.value = "";
       display();
    }

});

 // RESET BUTTON CLICK EVENT
 let n = 2;
 resetButton.addEventListener("click", event => {
     let checkList4 = Array.from(document.querySelectorAll(".checkBox"));
     

     checkList4.forEach(function (i) {
         if (n % 2 == 0) {
             i.checked = 1;
             
         }
         else {
             i.checked = 0;

         }
     });
     n++;


     let checkList8 = Array.from(document.querySelectorAll(".checkBox"));
     checkList8.forEach(function (i) {

         if (i.checked == 1) {
             checkedCounter4++;
         };

         itemsLeft.textContent = checkList8.length - checkedCounter4;

     });
     checkedCounter4 = 0;

     display();
 });

 // ACTIVE BUTTON CLICK EVENT

 activeButton.addEventListener("click", event => {

     status = "active";
     display();

 });


 //COMLETED BUTTON CLICK EVENT FUNKAR
 completedButton.addEventListener("click", event => {

     status = "completed";
     display();

 });

 //ALL BUTTON CLICK EVENT

 allButton.addEventListener("click", event => {

     status = "all";
     display();

 });

 // CLEAR COMPLETED BUTTON CLICK EVENT
 clearComleted.addEventListener("click", event => {

     let checkList7 = Array.from(document.querySelectorAll(".checkBox"));
     let liList = Array.from(document.querySelectorAll("li"));
     checkList7.forEach(function (i) {
         if (i.checked == 1) {
             liList.forEach(function (a) {
                 if (a.id == i.id) {
                     a.remove();
                 }
             })
         };
     });
 })

function display() {
    let checkList7 = Array.from(document.querySelectorAll(".checkBox"));
    let liList = Array.from(document.querySelectorAll("li"));

    if (status === "all") {
       
        liList.forEach(function (a) {
            a.style.display = "";

        });
    }
    else if (status === "active") {
        //FIRST STEG GJORA ALLA LI-AR VISIBLE
        liList.forEach(function (a) {
            a.style.display = "";

        });

        // ANDRA STEG GJORA BARA LI-AR SOM HAR CHECKBOXAR CHECKED UNVISIBLE
        checkList7.forEach(function (i) {
            if (i.checked == 1) {
                liList.forEach(function (a) {
                    if (a.id == i.id) {
                        a.style.display = "none";
                    }

                })
            }
        });
    }

    else if(status === "completed"){
        //FIRST STEG GJORA ALLA LI-AR UNVISIBLE 
        liList.forEach(function (a) {
            a.style.display = "none";
        });

        // ANDRA STEG GJORA BARA LI-AR SOM HAR CHECKBOXARNA CHECKED VISIBLE
        checkList7.forEach(function (i) {
            if (i.checked == 1) {
                liList.forEach(function (a) {
                    if (a.id == i.id) {
                        a.style.display = "";
                    }


                })
            };
        });
    }
    
}






