import { database } from "./config.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-database.js";

function writeUserData(userId, firstName, lastName) {
    set(ref(database, 'users/' + userId), {
        firstName: firstName,
        lastName: lastName,
    })
    .then(() => {
        alert('✅ تم إرسال البيانات بنجاح!');    
    })
    .catch((error) => {
        alert('❌ خطأ: ' + error.message);
        console.error(error);
    });
}

// تأكد أن ID الفورم في HTML هو "userForm"
document.getElementById('userForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const userId = Date.now().toString();
    writeUserData(userId, firstName, lastName);
});