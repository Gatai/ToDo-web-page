const form1 = document.getElementById("form1");

const rows =document.getElementById("rows");

form1.addEventListener("keyup", function (e) {

    if (e.keyCode == 13) {

        const task = document.createElement("li");

        const check = document.createElement("input");

        const text = document.createElement("label");

        const del  = document.createElement("button");

       // const del  = document.createElement("img");
        text.textContent = form1.value;
        check.type = "checkbox";

        text.for = "task";

        rows.appendChild(task);

        task.appendChild(check);

        task.appendChild(text);

        task.appendChild(del);

        del.textContent ="X";

    }

});