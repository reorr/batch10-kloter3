var firebaseConfig = {
  apiKey: "AIzaSyBv4TtByUOH27sLz2rsjo4RFbNt-QichdM",
  authDomain: "arkademy-kloter3.firebaseapp.com",
  databaseURL: "https://arkademy-kloter3.firebaseio.com",
  projectId: "arkademy-kloter3",
  storageBucket: "arkademy-kloter3.appspot.com",
  messagingSenderId: "207977589662",
  appId: "1:207977589662:web:1f4be1215037b570"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const dbRef = firebase.database().ref();
const usersRef = dbRef.child('users');

const userListUI = document.getElementById("userList");



usersRef.on("child_added", snap => {
   let user = snap.val();
   let row = document.createElement('div');
   row.className = "row";
   let col7 = document.createElement('div');
   col7.className = "col-7";

   let col5 = document.createElement('div');
   col5.className = "col-5";
   let iptgroup = document.createElement('div');
   iptgroup.className = "input-group";
   let input = document.createElement('input');
   input.className = "form-control";
   input.placeholder = "Skill";
   input.setAttribute("type", "text");
   input.id = snap.key;
   let span = document.createElement('span');
   span.className = "input-group-btn";
   let btn = document.createElement('button');
   btn.className = "btn btn-primary add-skill";
   btn.setAttribute("type", "button");
   btn.setAttribute("child-key", snap.key);
   btn.innerHTML = "add";

   let h5 = document.createElement("h5");
   let p = document.createElement('p');
   h5.innerHTML = user.name;
   p.innerHTML = user.skills;
   if (typeof user.skills === 'undefined') {
    p.innerHTML = '-';
   }
   //h5.setAttribute("child-key", snap.key);
   //h5.addEventListener("click", userClicked)
   userListUI.appendChild(row).appendChild(col7).appendChild(h5);
   userListUI.appendChild(row).appendChild(col7).appendChild(p);
   userListUI.appendChild(row).appendChild(col5).appendChild(iptgroup).appendChild(input);
   userListUI.appendChild(row).appendChild(col5).appendChild(iptgroup).appendChild(span).appendChild(btn);
});

addUser = document.querySelector("#add-user");
addUser.addEventListener("click", addNewUser);

function addNewUser() {
  let value = document.getElementById('programmer').value;
  let userID = usersRef.push().key;
  var newUser = {};
  var postData = {name : value};
  newUser['/'+userID]=postData;
  usersRef.update(newUser);
  document.getElementById('programmer').value = '';
}

addSkill = document.querySelector("button");
//console.log(addSkill.dataset.key);
addSkill.addEventListener("click", addNewSkill);

function addNewSkill(e) {
  let userID = e.target.getAttribute("child-key");
  console.log(userID);
  //var value = 
}


/*function userClicked(e) {
  var userID = e.target.getAttribute("child-key");
  const userRef = dbRef.child('users/' + userID);
  const userDetailUI = document.querySelector("#userList p");
  userDetailUI.innerHTML = ""
  userRef.on("child_added", snap => {
    var $p = document.createElement("p");
    $p.innerHTML = snap.key  + " : " +  snap.val()
    userDetailUI.append($p);
  });
}*/