// localStorage.setItem("users", "ali")
// localStorage.setItem("users", "alixx")
// console.log(localStorage.getItem("users"))


//Localstorage tablosu
const localStorageKey = "users_list_5"

// eğer içi dolu ise karışma, yoksa boş obje olsun
let users = JSON.parse(localStorage.getItem(localStorageKey)) || [];

console.log(users);

function temizle() {
    localStorage.clear()
}

function displayUsers() {
    const userList = document.getElementById("userList");
    userList.innerHTML = "";

    users.forEach(user => {
        const listItem = document.createElement("li")
        listItem.innerHTML = `
           Kullanıcı Adı:  ${user.name}
           </br>
           E-Posta Adresi: ${user.email}
           </br>
            <button class="bt" onclick="editUser('${user.email}')">Edit</button>
            <button class="bt" onclick="deleteUser('${user.email}')">Delete</button>
           </br>
           </br>
           
           <div>------------------------------</div>
        `
        userList.appendChild(listItem)
    })


}

displayUsers()

//Kullanıcı Düzenleme Fonksiyonu
function editUser(email){
    const userToEdit = users.find(user => user.email === email)

    if (userToEdit) {
        document.getElementById("username").value = userToEdit.name
        document.getElementById("email").value = userToEdit.email
    }
}

//Kullanıcı Silme Fonksiyonu
function deleteUser(email){
    users = users.filter(user => user.email !== email)
    localStorage.setItem(localStorageKey, JSON.stringify(users))
    displayUsers()
}


function addUser() {
    // html kodu içinden elementleri aldık
    const name = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    if (name == "") {
        alert("username boş bırakılamaz :(")
    } else if (email == "") {
        alert("e-posta adresi boş bırakılamaz :(")
    } else {
        const mevcutUser = users.find(user => user.email === email)
        if (mevcutUser) {
            mevcutUser.name = name
        } else {
            // mevcutta kullanıcı yoksa ekle
            users.push({ name, email })
        }

        //Kullanıcıdan alınan verileri locale kaydet
        localStorage.setItem(localStorageKey, JSON.stringify(users))
    }



    console.log(localStorage.getItem(localStorageKey))
}