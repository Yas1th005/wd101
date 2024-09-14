function add(data) {
    let Data = JSON.parse(localStorage.getItem('formData')) || [];
    Data.push(data);
    localStorage.setItem('formData', JSON.stringify(Data));
}

function display() {
    let Data = JSON.parse(localStorage.getItem('formData')) || [];
    let tbody = document.getElementById("tableBody");
    tbody.innerHTML='';
    Data.map(data => {
        let tr = document.createElement("tr");
        for (let key in data) {
            let td = document.createElement("td");
            td.textContent = data[key];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    });
}

function take(event) {
    event.preventDefault();
    let formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        dob: document.getElementById("dob").value,
        accept: document.getElementById("accept").checked ? "true" : "false"
    };
    add(formData);
    display();
    document.getElementById("form").reset();
}
window.onload = display;
