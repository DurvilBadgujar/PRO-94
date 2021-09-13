
var firebaseConfig = {
      apiKey: "AIzaSyAyXxrdYcnBgyCifmx2iHKpAVfVZb5BSTs",
      authDomain: "project-kwitter-fa6b8.firebaseapp.com",
      databaseURL: "https://project-kwitter-fa6b8-default-rtdb.firebaseio.com",
      projectId: "project-kwitter-fa6b8",
      storageBucket: "project-kwitter-fa6b8.appspot.com",
      messagingSenderId: "476878175796",
      appId: "1:476878175796:web:ac20914fd03d2630d19461"
    };
    
    
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
