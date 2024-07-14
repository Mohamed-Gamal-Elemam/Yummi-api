
export const inputUser = document.getElementById("uName");
export const inputEmail = document.getElementById("uEmail");
export const inputPhone = document.getElementById("uPhone");
export const inputAge = document.getElementById("uAge");
export const inputPassword = document.getElementById("uPassword");
export const inputRePassword = document.getElementById("uRePassword");
export const btnSubmit= document.getElementById('btnSubmit');
export const rowData=document.getElementById('rowData');

export function contact(){
rowData.innerHTML=`
<div class="col-lg-6">
<input id="uName" class="form-control" type="text" placeholder="Enter your Name">
<p id="alertName" class="d-none form-control my-2 py-3 text-center text-brown border-0 bg-pink">Special characters and numbers not allowed</p>
</div> 
<div class="col-lg-6">
<input id="uEmail" class="form-control" type="email" placeholder="Enter your Email">
<p id="alertEmail" class="d-none form-control my-2 py-3 text-center text-brown border-0 bg-pink">Email not valid *exemple@yyy.zzz</p>

</div>
<div class="col-lg-6">
<input id="uPhone" class="form-control" type="tel" placeholder="Enter your Phone">
<p id="alertPhone" class="d-none form-control my-2 py-3 text-center text-brown border-0 bg-pink">Enter valid Phone Number</p>
</div>
<div class="col-lg-6">
<input id="uAge" class="form-control" type="number" placeholder="Enter your Age">
<p id="alertAge" class="d-none form-control my-2 py-3 text-center text-brown border-0 bg-pink">Enter valid Age </p>

</div>
<div class="col-lg-6">
<input id="uPassword" class="form-control" type="password"
    placeholder="Enter your Password">
<p id="alertPassword" class="d-none form-control my-2 py-3 text-center text-brown border-0 bg-pink">Enter valid password *Minimum eight characters, at least one letter and one number:*</p>

</div>
<div class="col-lg-6">
<input id="uRePassword" class="form-control" type="password" placeholder="RePassword">
<p id="alertRePassword" class="d-none form-control my-2 py-3 text-center text-brown border-0 bg-pink">Enter valid repassword</p>

</div>
<button id="btnSubmit" type="button" class="btn text-capitalize col-lg-1 mx-auto text-danger border border-danger"
disabled>submit</button>.

`
}
export function isNameValid() {
  const uRegex = /^[A-za-z]{3,10}(\s?[A-za-z]{3,10})?$/;
  return uRegex.test(inputUser.value);
}

inputUser.onkeyup = function () {
  if (!isNameValid() || inputUser.value == "") {
    $("#alertName").removeClass("d-none");
  } else {
    $("#alertName").addClass("d-none");
  }
    if(isCheck()){
        btnSubmit.removeAttribute('disabled');
    }else{
        btnSubmit.setAttribute('disabled',true);
    }
};

// function isEmailValid() {
//   const eRegex = /^[A-za-z]{3,20}([0-9]{1,4})?@[a-z]{3,7}\.[a-z]{3}$/;
//   return eRegex.test(inputEmail.value);
// }
// inputEmail.onkeyup = function () {
//   if (!isEmailValid() || inputEmail.value == "") {
//     $("#alertEmail").removeClass("d-none");
//     if (inputUser.value == "") {
//       $("#alertName").removeClass("d-none");
//     }
//   } else {
//     $("#alertEmail").addClass("d-none");
//   }
//   if(isCheck()){
//     btnSubmit.removeAttribute('disabled');
// }else{
//     btnSubmit.setAttribute('disabled',true);
// }
// };

// function isPhoneValid() {
//   const phoneRegex = /^[0-9]{12}$/;
//   return phoneRegex.test(inputPhone.value);
// }
// inputPhone.onkeyup = function () {
//   if (!isPhoneValid() || inputPhone.value == "") {
//     $("#alertPhone").removeClass("d-none");
//     if (inputUser.value == "") {
//       $("#alertName").removeClass("d-none");
//     }
//     if (inputEmail.value == "") {
//       $("#alertEmail").removeClass("d-none");
//     }
//   } else {
//     $("#alertPhone").addClass("d-none");
//   }
//   if(isCheck()){
//     btnSubmit.removeAttribute('disabled');
// }else{
//     btnSubmit.setAttribute('disabled',true);
// }
// };

// function isAgeValid() {
//   const ageRegex = /^[0-9]{2}$/;
//   return ageRegex.test(inputAge.value);
// }
// inputAge.onkeyup = function () {
//   if (!isAgeValid() || inputAge.value == "") {
//     $("#alertAge").removeClass("d-none");
//     if (inputUser.value == "") {
//       $("#alertName").removeClass("d-none");
//     }
//     if (inputEmail.value == "") {
//       $("#alertEmail").removeClass("d-none");
//     }
//     if (inputPhone.value == "") {
//       $("#alertPhone").removeClass("d-none");
//     }
//   } else {
//     $("#alertAge").addClass("d-none");
//   }
//   if(isCheck()){
//     btnSubmit.removeAttribute('disabled');
// }else{
//     btnSubmit.setAttribute('disabled',true);
// }
// };

// function isPasswordValid() {
//   const passwordRegex = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}/;
//   return passwordRegex.test(inputPassword.value);
// }
// inputPassword.onkeyup = function () {
//   if (!isPasswordValid() || inputPassword.value == "") {
//     $("#alertPassword").removeClass("d-none");
//     if (inputUser.value == "") {
//       $("#alertName").removeClass("d-none");
//     }
//     if (inputEmail.value == "") {
//       $("#alertEmail").removeClass("d-none");
//     }
//     if (inputPhone.value == "") {
//       $("#alertPhone").removeClass("d-none");
//     }
//     if (inputAge.value == "") {
//       $("#alertAge").removeClass("d-none");
//     }
//   } else {
//     $("#alertPassword").addClass("d-none");
//   }
//   if(isCheck()){
//     btnSubmit.removeAttribute('disabled');
// }else{
//     btnSubmit.setAttribute('disabled',true);
// }
// };

// function isRePasswordValid() {
//   return inputPassword.value == inputRePassword.value;
// }

// inputRePassword.onkeyup = function () {
//   if (!isRePasswordValid() || inputRePassword.value == "") {
//     $("#alertRePassword").removeClass("d-none");
//     if (inputUser.value == "") {
//       $("#alertName").removeClass("d-none");
//     }
//     if (inputEmail.value == "") {
//       $("#alertEmail").removeClass("d-none");
//     }
//     if (inputPhone.value == "") {
//       $("#alertPhone").removeClass("d-none");
//     }
//     if (inputAge.value == "") {
//       $("#alertAge").removeClass("d-none");
//     }
//     if (inputPassword.value == "") {
//       $("#alertPassword").removeClass("d-none");
//     }
//   } else {
//     $("#alertRePassword").addClass("d-none");
//   }
//   if(isCheck()){
//     btnSubmit.removeAttribute('disabled');
// }else{
//     btnSubmit.setAttribute('disabled',true);
// }
// };

// function isCheck() {
//   if (
//     isNameValid() &&
//     isEmailValid() &&
//     isPhoneValid() &&
//     isAgeValid() &&
//     isPasswordValid() &&
//     isRePasswordValid()
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }
