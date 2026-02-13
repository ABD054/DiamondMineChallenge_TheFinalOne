import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyA3MawCs1VbJZnl0DzPhFJ9a5RaBvAmg_c",
    authDomain: "newproject-ac6ae.firebaseapp.com",
    databaseURL: "https://newproject-ac6ae-default-rtdb.firebaseio.com",
    projectId: "newproject-ac6ae",
    storageBucket: "newproject-ac6ae.firebasestorage.app",
    messagingSenderId: "158454382141",
    appId: "1:158454382141:web:42ebc0bc6ef728c592f454"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };