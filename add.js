
const username=document.getElementById("username_patient_field");
const parola=document.getElementById("password_patient_field");
const nume=document.getElementById("name_patient_field");
const prenume=document.getElementById("surname_patient_field");
const CNP=document.getElementById("cnp_patient_field");
const adresa=document.getElementById("adress_patient");
const job=document.getElementById("job_field");
const istoric=document.getElementById("medical_history_field");
const alergii=document.getElementById("allergies_field");
const cardio=document.getElementById("cardio_field");

const addButton=document.getElementById("add_button");

const database=firebase.firestore();
const pacientiCollection = database.collection("pacienti");

function sign_up(){

    firebase.auth().createUserWithEmailAndPassword(username.value, parola.value);
    firebase.auth().signOut().then(() => {
    //chestii
    }).catch((error) => {
    // An error happened.
    });
}

addButton.addEventListener("click",e => {
    e.preventDefault();
    sign_up();
    pacientiCollection.doc(username.value).set(
        {
            name_patient_field: nume.value,
            password_patient_field: parola.value,
            name_patient_field: prenume.value,
            cnp_patient_field: CNP.value,
            adress_patient:adresa.value,
            job_field:job.value,
            medical_history_field:istoric.value,
            allergies_field:alergii.value,
            cardio_field:cardio.value

        }).then(()=> {console.log("succes!");
        }).catch(error => {console.error(error)});

});