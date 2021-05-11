firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById("login_div").style.display = "none";
  
      document.getElementById("loggedin-header").style.display = "block";
      document.getElementById("login-header").style.display = "none";
      document.getElementById("doctor_add").style.display = "none";
      document.getElementById("menu-span").style.display = "none"; 
      document.getElementById("info_pacient").style.display = "none";       

      var user = firebase.auth().currentUser;
  
      if(user != null){
  
        var email_id = user.email;
        document.getElementById("user_doctor").innerHTML = "Bine ai venit : " + email_id;
        if(email_id=="polverea1998@yahoo.com"){
          document.getElementById("user_patient_div").style.display = "block";
          document.getElementById("user_doctor_div").style.display = "none";
          document.getElementById("menu-span").style.display = "none";
          document.getElementById("info_pacient").style.display = "none";   
        }
        if(email_id=="ionutpuiu@yahoo.com"){
          document.getElementById("user_patient_div").style.display = "none";
          document.getElementById("user_doctor_div").style.display = "block";
          document.getElementById("menu-span").style.display = "none";
          document.getElementById("info_pacient").style.display = "none";   
        }
      }
  
    } else {
      // No user is signed in.
      document.getElementById("loggedin-header").style.display = "none";
      document.getElementById("login-header").style.display = "block";

      document.getElementById("login_div").style.display = "block";
      document.getElementById("user_patient_div").style.display = "none";
      document.getElementById("user_doctor_div").style.display = "none";
      document.getElementById("doctor_add").style.display = "none";
      document.getElementById("menu-span").style.display = "none";
      document.getElementById("info_pacient").style.display = "none";   
  
    }
  });
  
  function login(){
  
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
    });
  
  }
  
  function add_patient(){
    document.getElementById("user_doctor_div").style.display = "none";
    document.getElementById("doctor_add").style.display = "block";
    document.getElementById("menu-span").style.display = "block";
    document.getElementById("info_pacient").style.display = "none";   
  }

  function cancel_add(){
    document.getElementById("user_doctor_div").style.display = "block";
    document.getElementById("doctor_add").style.display = "none";
    document.getElementById("menu-span").style.display = "none";
    document.getElementById("info_pacient").style.display = "none";   
  }

  function add()
  {
    firebase.initializeApp(config);
    var firestore = firebase.firestore();
    
    const docRef=firestore.doc("pacienti/");
    const username=document.querySelector("#username_patient");
    const add=document.querySelector("#add_button");
    
    add.addEventListener("click",function()
    {
        const text=username.value;
        docRef.set({
           username_patient: text
        }).then(function(){
            console.log("Saved");
        }).catch(function (error){
            console.log("error ", error);
        });
    })
  }
  const db=firebase.firestore();
  const usersCollection = db.collection('pacienti');
  
  
  function view_patient(){
    document.getElementById("user_doctor_div").style.display = "none";
    document.getElementById("doctor_add").style.display = "none";
    document.getElementById("menu-span").style.display = "block";
    document.getElementById("info_pacient").style.display = "block";
    var table = document.getElementById("myTable");
    usersCollection.get()
    .then(snapshot =>{
      snapshot.forEach(user => {
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML =  user.id;
        cell2.innerHTML = user.data().name_patient_field; 
        cell3.innerHTML = user.data().cnp_patient_field;     
      });
    })
  }

  function logout(){
    firebase.auth().signOut();
  }
