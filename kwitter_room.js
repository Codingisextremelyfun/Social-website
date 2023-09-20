// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBsxD2PJggF_JHXFkGo-LjscgbMDGNPk2s",
      authDomain: "socialwebsite-14c1d.firebaseapp.com",
      databaseURL: "https://socialwebsite-14c1d-default-rtdb.firebaseio.com",
      projectId: "socialwebsite-14c1d",
      storageBucket: "socialwebsite-14c1d.appspot.com",
      messagingSenderId: "844822186770",
      appId: "1:844822186770:web:3f313dc160c6ab63a3c1cb"
    };
    
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function removeUser()
{
    user_name = document.getElementById("user_name").value;

    localStorage.removeItem("user_name", user_name);
    window.location = "index.html";
}
