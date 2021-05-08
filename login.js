firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      
      document.getElementById("login_div").style.display = "none";
  
      document.getElementById("loggedin-header").style.display = "block";
      document.getElementById("login-header").style.display = "none";
      document.getElementById("doctor_add").style.display = "none";
      

      var user = firebase.auth().currentUser;
  
      if(user != null){
  
        var email_id = user.email;
        document.getElementById("user_doctor").innerHTML = "Bine ai venit : " + email_id;
        if(email_id=="polverea1998@yahoo.com"){
          document.getElementById("user_patient_div").style.display = "block";
          document.getElementById("user_doctor_div").style.display = "none";
        }
        if(email_id=="ionutpuiu@yahoo.com"){
          document.getElementById("user_patient_div").style.display = "none";
          document.getElementById("user_doctor_div").style.display = "block";
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
  }

  function cancel_add(){
    document.getElementById("user_doctor_div").style.display = "block";
    document.getElementById("doctor_add").style.display = "none";
  }
  function logout(){
    firebase.auth().signOut();
  }