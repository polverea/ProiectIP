const username=document.getElementById("username_patient_field");
const parola=document.getElementById("password_patient_field");
const nume=document.getElementById("name_patient_field");
const prenume=document.getElementById("surname_patient_field");
const CNP=document.getElementById("cnp_patient_field");
const adresa=document.getElementById("adress_patient");
const telefon=document.getElementById("phone_number_field");
const job=document.getElementById("job_field");
const istoric=document.getElementById("medical_history_field");
const alergii=document.getElementById("allergies_field");
const cardio=document.getElementById("cardio_field");

const addButton=document.getElementById("add_button");

const database=firebase.firestore();
const pacientiCollection = database.collection("pacienti");

addButton.addEventListener("click",e => {
    e.preventDefault();
    pacientiCollection.doc(username.value).set(
        {
            nume: nume.value,
            prenume: prenume.value,
            CNP: CNP.value,
            adresa: adresa.value,
            numar_telefon: telefon.value,
            job: job.value,
            istoric_medical: istoric.value,
            alergii: alergii.value,
            cons_cardiologice: cardio.value,
            tip_utilizator: "pacient"

        }).then(()=> {
            document.getElementById("username_patient_field").value="";
            document.getElementById("password_patient_field").value="";
            document.getElementById("name_patient_field").value="";
            document.getElementById("surname_patient_field").value="";
            document.getElementById("cnp_patient_field").value="";
            document.getElementById("adress_patient").value="INTRODUCETI ADRESA...";
            document.getElementById("phone_number_field").value="";
            document.getElementById("job_field").value="";
            document.getElementById("medical_history_field").value="";
            document.getElementById("allergies_field").value="";
            document.getElementById("cardio_field").value="";
            console.log("succes!");
        }).catch(error => {
            console.error(error)
        });
});

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