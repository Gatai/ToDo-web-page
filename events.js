const form1 = document.getElementById("form1");

const rows =document.getElementById("rows");

let itemsLeft = document.querySelector("#itemsLeft");




let counter = -1;
let checkcounter = 0;
let numremoved = 0;
let checkedCounter = 0;
//let checkedCounter2 =0;



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
            
            checkList.forEach(function(i) {
       
                if (i.checked == 1){
                          
                  checkedCounter ++;

                 };
       
                itemsLeft.textContent = checkList.length - checkedCounter; 
                        
                        
                });
       
                                
         checkedCounter =0;   

        });
        //checkedCounter2 =0;

       
        
    
        }
});


    
    


 