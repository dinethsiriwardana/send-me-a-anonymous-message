import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

import { app } from "./firebase.js";
const db = getDatabase(app);

function sendMessage() {
  const message = document.getElementById("textmsg").value;
  const dateTime = new Date().toLocaleString();

  // Push data to Firebase

  if (message != "") {
    const datatimeteplace = dateTime.replaceAll("/", "-");
    set(ref(db, message + " " + datatimeteplace), {
      message: message,
      dateTime: dateTime, // Replace 2 with the new value you want to set for "gate"
    });
  }

  // Clear the textarea after sending
  document.getElementById("textmsg").value = "";
}

// Add click event listener to the send button
document.getElementById("sendbtn").addEventListener("click", sendMessage);
