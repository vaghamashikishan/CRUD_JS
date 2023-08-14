let form1 = document.getElementById("form1");
let updaterow = null;

function formHandler(e) {
    e.preventDefault();

    let formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["age"] = document.getElementById("age").value;
    formData["city"] = document.getElementById("city").value;
    formData["gender"] = document.querySelector(
        'input[name="gender"]:checked'
    ).value;
    formData["email"] = document.getElementById("email").value;
    formData["password"] = document.getElementById("password").value;


    formValidation(formData);
}

function formValidation(formData) {
    resetForm();
    let a, b, c, d;
    formData["name"] === ""
        ? document.querySelector("label.name").classList.remove("hide")
        : a = 1;

    formData["age"] === ""
        ? document.querySelector("label.age").classList.remove("hide")
        : d = 1;

    formData["city"] === "-1"
        ? document.querySelector("label.city").classList.remove("hide")
        : d = 1;

    formData["email"] === "" || !formData["email"].toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
        ? document.querySelector("label.email").classList.remove("hide")
        : b = 1;

    formData["password"] === ""
        ? document.querySelector("label.password").classList.remove("hide")
        : c = 1;

    if (a == b == c == d == 1) {
        if (updaterow === null) {
            insertRecord(formData);
        } else {
            updateRecord(formData);
        }

        resetForm();
        console.log(formData);
    }
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("city").value = "-1";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

    document.querySelector("label.name").classList.add("hide");
    document.querySelector("label.age").classList.add("hide");
    document.querySelector("label.city").classList.add("hide");
    document.querySelector("label.email").classList.add("hide");
    document.querySelector("label.password").classList.add("hide");
    updaterow = null;
}

function insertRecord(formData) {
    let table = document.getElementById("list").querySelector("tbody");
    const newRow = table.insertRow(table.length);

    const cell1 = newRow.insertCell(0);
    cell1.innerHTML = formData.name;

    const cell2 = newRow.insertCell(1);
    cell2.innerHTML = formData.age;

    const cell3 = newRow.insertCell(2);
    cell3.innerHTML = formData.city;

    const cell4 = newRow.insertCell(3);
    cell4.innerHTML = formData.gender;

    const cell5 = newRow.insertCell(4);
    cell5.innerHTML = formData.email;

    const cell6 = newRow.insertCell(5);
    cell6.innerHTML = formData.password;

    const cell7 = newRow.insertCell(6);
    cell7.innerHTML =
        '<button onClick="updateButtonHandler(this)" id="updateBtn">Update</button>';

    const cell8 = newRow.insertCell(7);
    cell8.innerHTML = '<button id="deleteBtn">Delete</button>';

    resetForm();
}

function updateButtonHandler(td) {
    updaterow = td.parentElement.parentElement;
    document.getElementById("name").value = updaterow.cells[0].innerHTML;
    document.getElementById("age").value = updaterow.cells[1].innerHTML;
    document.getElementById("city").value = updaterow.cells[2].innerHTML;

    gender = updaterow.cells[3].innerHTML;
    document.getElementById(gender).checked = true;

    document.getElementById("email").value = updaterow.cells[4].innerHTML;
    document.getElementById("password").value = updaterow.cells[5].innerHTML;
}

function updateRecord(formData) {
    updaterow.cells[0].innerHTML = formData.name;
    updaterow.cells[1].innerHTML = formData.age;
    updaterow.cells[2].innerHTML = formData.city;
    updaterow.cells[3].innerHTML = formData.gender;
    updaterow.cells[4].innerHTML = formData.email;
    updaterow.cells[5].innerHTML = formData.password;
}

const tbody = document.getElementById("tbody");
tbody.addEventListener("click", (e) => {
    if (e.target.id === "deleteBtn") {
        e.target.parentElement.parentElement.remove();
        resetForm();
    }
});

form1.addEventListener("submit", formHandler);
document.getElementById('reset').addEventListener('click',resetForm);

const a = [];
a.splice