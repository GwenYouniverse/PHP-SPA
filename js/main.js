let inputName = document.querySelector('[name = "name"]');
let inputDeposit = document.querySelector('[name = "deposit"]');
let inputCreditCard = document.querySelector('[name = "credit_card"]');

const addView = document.querySelector('#addView');

const http = new DB;


http.get('get_data.php')
    .then(data => {
        createTable(data)
    })
    .catch(err => console.log(err));

//Display acc view
document.getElementById('accBtn').addEventListener('click', displayAccView);

function displayAccView() {
    addView.style.display = "none";
    accView.style.display = "block";
}

function createTable(data) {
    let output = '';
    data.forEach(function (data) {
        output += `
                <tr>
                    <td>${data.id}</td>
                    <td>${data.name}</td>
                    <td>${data.deposit}</td>
                    <td>${data.credit_card}</td>
                    </tr>
                `;
    });
    document.getElementById('main-body').innerHTML = output;
}

//Display Add view
document.getElementById('addBtn').addEventListener('click', displayAddView)

function displayAddView() {
    addView.style.display = "block";
    accView.style.display = "none";
}

document.getElementById('saveBtn').addEventListener('click', saveNewAccount)

function saveNewAccount() {
    //validacija
    let newAccount = {
        name: inputName.value,
        deposit: inputDeposit.value,
        credit_card: inputCreditCard.value
    };
    DB.save(newAccount).then(() => {
        http.get('get_data.php').then((data) => {
            createTable(data);
            displayAccView();
        }, (error) => {
            console.log(error);
        })
    }, (err) => {
        console.log(err);
    });
}
