function add_alert(){
  document.getElementById("alerts_div").style.display = "block";
  console.log("alerta")
  document.getElementById("user_doctor_div").style.display = "none";
  document.getElementById("doctor_add").style.display = "none";
  document.getElementById("menu-span").style.display = "block";
  document.getElementById("info_pacient").style.display = "none";
  document.getElementById("details_pacient").style.display = "none";
  document.getElementById("table_pacient").style.display = "none";

  usersCollection.get()
  .then(snapshot =>{
    var catOptions = "";
    snapshot.forEach(patient => {
      catOptions += "<option>" + patient.id + "</option>";
    });
    document.getElementById("patient_select").innerHTML = catOptions;
  })    
}
/*function selected_patient(){
  usersCollection.get()
  .then(snapshot =>{
    snapshot.forEach(patient => {
      if(patient.id==document.getElementById("patient_select").value){
        document.getElementById("username_patient").innerHTML=patient.data().nume;
        document.getElementById("name_patient").innerHTML=patient.data().prenume;
        console.log(document.getElementById("patient_select").value);
      }

    });
  })
}*/