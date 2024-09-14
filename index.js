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
        name: document.getElementsByName("name")[0].value,
        email: document.getElementsByName("email")[0].value,
        password: document.getElementsByName("paswd")[0].value,
        dob: document.getElementsByName("dob")[0].value,
        accept: document.getElementsByName("accept")[0].checked ? "Yes" : "No"
    };
    add(formData);
    display();
    document.getElementById("form").reset();
}
window.onload = display;
