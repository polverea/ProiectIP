var ok=false;
var count = 0;
var id_name_reference={};

function view_patient(){
  document.getElementById("user_doctor_div").style.display = "none";
  document.getElementById("doctor_add").style.display = "none";
  document.getElementById("menu-span").style.display = "block";
  document.getElementById("info_pacient").style.display = "block";
  document.getElementById("details_pacient").style.display = "none";
  document.getElementById("table_pacient").style.display = "block";
  var table = document.getElementById("myTable");
  usersCollection.get()
  .then(snapshot =>{
    snapshot.forEach(user => {
        if(ok && count>0){
            document.getElementById("myTable").deleteRow(count);
            count--;
        }
    });
  })
  usersCollection.get()
  .then(snapshot =>{
    snapshot.forEach(user => {
        ok=true;
        var row = table.insertRow(count+1);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);
        var cell5 = row.insertCell(5);
        var cell6 = row.insertCell(6);

        var id=count+1;
        id_name_reference[id]=user.id;

        var viewDetails_btn=document.createElement("button");
        viewDetails_btn.id="btn_details";
        viewDetails_btn.innerHTML='<img src="images/details.png" alt="details" width="25" height="25" class="center">';

        var modify_btn=document.createElement("button");
        modify_btn.id="btn_modify";
        modify_btn.innerHTML='<img src="images/modify.png" alt="modify" width="25" height="25" class="center">';

        var delete_btn=document.createElement("button");
        delete_btn.id="btn_delete";
        delete_btn.innerHTML='<img src="images/delete.png" alt="delete" width="25" height="25" class="center">';

        cell0.innerHTML = count+1;
        cell1.innerHTML = user.id;
        cell2.innerHTML = user.data().nume; 
        cell3.innerHTML = user.data().CNP; 
        cell4.appendChild(viewDetails_btn);
        cell5.appendChild(modify_btn);
        cell6.appendChild(delete_btn);

        count++;

        delete_btn.onclick = function(){
          for (const key in id_name_reference) {
            if(id_name_reference[key] == user.id){
              usersCollection.doc(user.id).delete();
              document.getElementById("myTable").deleteRow(key);
              count--;
              document.querySelector('#modify_btn').click();
            }
          }
        }; 
        
        viewDetails_btn.onclick=function(){
          document.getElementById("table_pacient").style.display = "none";
          document.getElementById("details_pacient").style.display = "block";

          usersCollection.doc(user.id).get()
          .then(user => {
            console.log(user.id, ' => ', user.data());
            document.getElementById("username_patient").value = user.id;
            document.getElementById("name_patient").value = user.data().nume;
            document.getElementById("surname_patient").value = user.data().prenume;
            document.getElementById("cnp_patient").value = user.data().CNP;
            document.getElementById("adress_patient").value = user.data().adresa;
            document.getElementById("phone_number_patient").value = user.data().numar_telefon;
            document.getElementById("job_patient").value = user.data().job;
            document.getElementById("profession_patient").value = user.data().profesie;
            document.getElementById("medical_history_patient").value = user.data().istoric_medical;
            document.getElementById("allergies_patient").value = user.data().alergii;
            document.getElementById("cardio_patient").value = user.data().cons_cardiologice;
          })
          .catch(error =>{
            console.error(error);
          });
        };

        modify_btn.onclick = function(){
          document.getElementById("myTable").style.display = "none";
          document.getElementById("details_pacient").style.display = "block";
          usersCollection.doc(user.id).get()
          .then(user => {
            console.log(user.id, ' => ', user.data());
            document.getElementById("username_patient").value = user.id;
            document.getElementById("username_patient").removeAttribute('readonly');
            
            document.getElementById("name_patient").value = user.data().nume;
            document.getElementById("name_patient").removeAttribute('readonly');
            
            document.getElementById("surname_patient").value = user.data().prenume;
            document.getElementById("surname_patient").removeAttribute('readonly');
        
            document.getElementById("cnp_patient").value = user.data().CNP;
            document.getElementById("cnp_patient").removeAttribute('readonly');
        
            document.getElementById("adress_patient").value = user.data().adresa;
            document.getElementById("adress_patient").removeAttribute('readonly');
        
            document.getElementById("phone_number_patient").value = user.data().numar_telefon;
            document.getElementById("phone_number_patient").removeAttribute('readonly');
        
            document.getElementById("job_patient").value = user.data().job;
            document.getElementById("job_patient").removeAttribute('readonly');
        
            document.getElementById("profession_patient").value = user.data().profesie;
            document.getElementById("profession_patient").removeAttribute('readonly');
        
            document.getElementById("medical_history_patient").value = user.data().istoric_medical;
            document.getElementById("medical_history_patient").removeAttribute('readonly');
        
            document.getElementById("allergies_patient").value = user.data().alergii;
            document.getElementById("allergies_patient").removeAttribute('readonly');
        
            document.getElementById("cardio_patient").value = user.data().cons_cardiologice;
            document.getElementById("cardio_patient").removeAttribute('readonly');
        
            var update_btn = document.createElement("button");
            update_btn.id="btn_update";
            update_btn.innerHTML = "UPDATE";
            document.body.appendChild(update_btn);
            
            update_btn.onclick=function(){
              document.getElementById("myTable").style.display = "none";
              document.getElementById("details_pacient").style.display = "block";
        
              usersCollection.doc(user.id).update({
                nume: document.getElementById("name_patient").value,
                prenume: document.getElementById("surname_patient").value,
                CNP: document.getElementById("cnp_patient").value,
                adresa: document.getElementById("adress_patient").value,
                telefon: document.getElementById("phone_number_patient").value,
                profesie: document.getElementById("profession_patient").value,
                job: document.getElementById("job_patient").value,
                istoric: document.getElementById("medical_history_patient").value,
                alergii: document.getElementById("allergies_patient").value,
                cardio: document.getElementById("cardio_patient").value
              });     
            }
          });
        }; 
    });
  })
}