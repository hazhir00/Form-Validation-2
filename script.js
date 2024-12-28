const errorFirstName = document.getElementById("errorFirstName");
const errorLastName = document.getElementById("errorLastName");
const errorEmail = document.getElementById("errorEmail");
const errorSubject = document.getElementById("errorSubject");
const errorMessage = document.getElementById("errorMessage");
const errorSubmit = document.getElementById("errorSubmit");

function validateFirstName() {
   const firstName = document.getElementById("firstName").value;

   if (firstName.length === 0) {
      errorFirstName.textContent = "Name is requierd";
      errorFirstName.style.display = "block";
      return false;
   }

   if (!firstName.match(/^[a-z ,.'-]+$/i)) {
      errorFirstName.textContent = "Write a proper name";
      errorFirstName.style.display = "block";
      return false;
   }
   return true;
}

function validateFirstName() {
   const firstName = document.getElementById("firstName").value;

   if (firstName.length === 0) {
      errorFirstName.textContent = "Name is requierd";
      errorFirstName.style.display = "block";
      return false;
   }

   if (!firstName.match(/^[a-z ,.'-]+$/i)) {
      errorFirstName.textContent = "Write a proper name";
      errorFirstName.style.display = "block";
      return false;
   }
   return true;
}

function validateLastName() {
   const lastName = document.getElementById("lastName").value;

   if (lastName.length === 0) {
      errorLastName.textContent = "Name is requierd";
      errorLastName.style.display = "block";
      return false;
   }

   if (!lastName.match(/^[a-z ,.'-]+$/i)) {
      errorLastName.textContent = "Write a proper name";
      errorLastName.style.display = "block";
      return false;
   }

   return true;
}

function validateEmail() {
   let email = document.getElementById("email").value;

   if (email.length === 0) {
      errorEmail.innerHTML = "Email address is required";
      errorEmail.style.display = "block";

      return false;
   }

   if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      errorEmail.innerHTML = "Invalid Email";
      errorEmail.style.display = "block";
      return false;
   }

   return true;
}

function validateSubject() {
   const subject = document.getElementById("subject").value;

   if (subject.length === 0) {
      errorSubject.textContent = "Subject is requierd";
      errorSubject.style.display = "block";
      return false;
   }

   return true;
}

function validateMessage() {
   let message = document.getElementById("message").value;
   let required = 20;
   let left = required - message.length;

   if (left > 0) {
      errorMessage.innerHTML = "More characters required";
      errorMessage.style.display = "block";
      return false;
   }
   errorMessage.style.display = "none";
   return true;
}

function validateSubmit() {
   if (
      !validateFirstName() ||
      !validateLastName() ||
      !validateEmail() ||
      !validateSubject() ||
      !validateMessage() ||
      !validateSubmit()
   ) {
      errorSubmit.style.display = "block";
      errorSubmit.innerHTML = "Please fix error(s) to submit";
      setTimeout(() => {
         errorSubmit.style.display = "none";
      }, 3000);
      return false;
   }
}
