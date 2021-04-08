var firebaseConfig = {
    apiKey: "AIzaSyCOFysMDqXqmwbg0-VusjD3uOYrv90L1s8",
    authDomain: "project-kwitter-b424d.firebaseapp.com",
    databaseURL: "https://project-kwitter-b424d-default-rtdb.firebaseio.com",
    projectId: "project-kwitter-b424d",
    storageBucket: "project-kwitter-b424d.appspot.com",
    messagingSenderId: "708792581996",
    appId: "1:708792581996:web:2bc9f8588125fff47c3d49"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);








user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "3.index.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
