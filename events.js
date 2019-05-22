const form1 = document.getElementById("form1");
const rows =document.getElementById("rows");
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

form1.addEventListener("keyup", function (e) {

    if (e.keyCode == 13) {

        idCounter++;

        const task = document.createElement("li");
        task.id = idCounter;

        const check = document.createElement("input");
        check.id = idCounter;

        const text = document.createElement("label");

        const del  = document.createElement("button");

        del.id = idCounter;
        del.classList.add("delbutton");

        text.textContent = form1.value;
        
        check.type = "checkbox";
        check.classList.add("checkBox");
       
        rows.appendChild(task);

        task.appendChild(check);

        task.appendChild(text);

        task.appendChild(del);

        del.textContent ="X";

        



        del.addEventListener("click", event =>
        {
            
            task.remove();
            numremoved++;
            
            let checkList3 = Array.from(document.querySelectorAll(".checkBox"));
            
            if (checkList3.length == 0){
                itemsLeft.textContent  = 0;
            }

            checkList3.forEach(function(i) {
                
                if (i.checked == 1){
                    
                    checkedCounter3++;
                    
                }; 
                itemsLeft.textContent = checkList3.length  - checkedCounter3; 
            });
            
            checkedCounter3 =0;   

        });

        let checkList = Array.from(document.querySelectorAll(".checkBox"));

        checkList.forEach(function(i) {
       
         if (i.checked == 1){
                    checkedCounter ++;
                            };

                 itemsLeft.textContent = checkList.length - checkedCounter;
                 
                         });
      
                         checkedCounter = 0;
        
        check.addEventListener("click", event => 
        {
            let checkList2 = Array.from(document.querySelectorAll(".checkBox"));

            
            checkList2.forEach(function(i) {
       
                if (i.checked == 1){
                          
                  checkedCounter2++;

                 };
       
                itemsLeft.textContent = checkList2.length - checkedCounter2; 
                        
                });
                                
         checkedCounter2 =0;   
                /* skapar en klass som heter completed till alla li element som har CheckBoxes som är checked */
         let allTasks = Array.from(document.querySelectorAll("li"));
        let allCheckBoxes = Array.from(document.querySelectorAll(".checkBox"));
        allTasks.forEach(function(a) {
                
            allCheckBoxes.forEach(function(i){
                    if (i.checked == 1 && (a.id == i.id)){
                        a.classList.add("comleted");
                    }
                    })
                
            });
            

         });
         

       let n = 2;
       resetButton.addEventListener("click", event => {
       let checkList4 = Array.from(document.querySelectorAll(".checkBox"));
     
       
       checkList4.forEach(function(i) {
            if(n%2==0) {
                i.checked = 1;
              //  itemsLeft.textContent = 0;
            }
            else {
                i.checked = 0;
            }
                 
            });
          n++;
        
          let checkList8 = Array.from(document.querySelectorAll(".checkBox"));            
          checkList8.forEach(function(i) {
     
              if (i.checked == 1){
                        
                checkedCounter4++;

               };
     
              itemsLeft.textContent = checkList8.length - checkedCounter4; 
                      
              });
              checkedCounter4 = 0;
       })

       activeButton.addEventListener("click", event => {
        
        let liList = Array.from(document.querySelectorAll("li"));
                  
            liList.forEach(function(a)
            {
                if(a.className =="comleted") {
                     a.style.display = "none";
                }
                else 
                {
                    a.style.display ="";
                }
           

            });

            
        });

        completedButton.addEventListener("click", event =>{
            let liList = Array.from(document.querySelectorAll("li"));
                  
            liList.forEach(function(a)
            {
                if(a.className !="comleted") {
                     a.style.display = "none";
                }
                else
                {
                    a.style.display ="";
                }

            });


        });

             allButton.addEventListener("click", event => {
               
                 let liList = Array.from(document.querySelectorAll("li"));
                  
                    liList.forEach(function(a)
                    {
                    a.style.display = "";

                    });
            });


     clearComleted.addEventListener("click", event =>{

        let checkList7 = Array.from(document.querySelectorAll(".checkBox"));
             let liList = Array.from(document.querySelectorAll("li"));
                 checkList7.forEach(function(i) {
                     if (i.checked == 1){
                         liList.forEach(function(a)
                         {
                         if (a.id == i.id){
                             a.remove();
                         }
                         })
                     };
                 });
    })




     }
});


    
    


 