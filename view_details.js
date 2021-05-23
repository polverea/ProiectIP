var ok=false;
var count = 0;
var id_name_reference={};

function populate_table(){
  
}

function view_patient(){
  document.getElementById("user_doctor_div").style.display = "none";
  document.getElementById("doctor_add").style.display = "none";
  document.getElementById("menu-span").style.display = "block";
  document.getElementById("info_pacient").style.display = "block";
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
        viewDetails_btn.onclick = function() {
          console.log(user.id);
        };

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
        delete_btn.onclick = function() {
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
          document.getElementById("myTable").style.display = "none";
          document.getElementById("details_pacient").style.display = "block";
          
          usersCollection.get()
          .then(snapshot=> {
            snapshot.forEach(user =>{
              console.log(user.id, ' => ', user.data());
            });
          })
            .catch(error =>{
              console.error(error);
            });
          }
          
        //}
    });
  })


}
