const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});

const sandata = (count, srate) => {
  if (srate === count) {
    // alert('registration successful!');

    Swal.fire({
      title: "Dear " + username.value + "\n Your Registration Successful!",
      icon: "success",
      draggable: true,
    });
  }
};

const successMsg = () => {
  const formcon = document.getElementsByClassName("form-control");
  var count = formcon.length - 1;
  for (let i = 0; i < formcon.length; i++) {
    if (formcon[i].className === "form-control success") {
      var srate = 0 + i;
      console.log(srate);
      sandata(count, srate);
    } else {
      false;
    }
  }
};

const validate = () => {
  const usernameRegex = /^[a-zA-Z0-9_ ]{3,16}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9-]{2,}(\.[a-zA-Z]{2,})+$/;

  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const phoneNumberVal = phoneNumber.value.trim();
  const passwordVal = password.value.trim();
  const confirmPasswordVal = confirmPassword.value.trim();

  if (usernameVal === "") {
    setErrormsg(username, "Username can`t be blank");
  } else if (!usernameRegex.test(usernameVal)) {
    setErrormsg(username, "Provide Valid Username or Min 3 char");
  } else if (usernameVal.length >= 16) {
    setErrormsg(username, "Username under 16 character");
  } else {
    setSuccess(username);
  }

  if (emailVal === "") {
    setErrormsg(email, "Email can`t be blank");
  } else if (!emailRegex.test(emailVal)) {
    setErrormsg(email, "Provide Valid Email");
  } else {
    setSuccess(email);
  }
  if (phoneNumberVal === "") {
    setErrormsg(phoneNumber, "Phone Number can`t be blank");
  } else if (phoneNumberVal.length < 10) {
    setErrormsg(phoneNumber, "Provide 10 digit Phone Number");
  } else {
    setSuccess(phoneNumber);
  }
  if (passwordVal === "") {
    setErrormsg(password, "Password can`t be blank");
  } else if (passwordVal.length < 5) {
    setErrormsg(password, "Provide Atleast 5 charter password");
  } else {
    setSuccess(password);
  }
  if (confirmPasswordVal === "") {
    setErrormsg(confirmPassword, "Password can`t be blank");
  } else if (confirmPasswordVal !== passwordVal) {
    setErrormsg(confirmPassword, "Password not match");
  } else {
    setSuccess(confirmPassword);
  }

  successMsg();
};

function setErrormsg(input, Errormsgs) {
  const formcontrol = input.parentElement;
  const small = formcontrol.querySelector("small");
  formcontrol.className = "form-control error";
  small.innerText = Errormsgs;
}

function setSuccess(inp) {
  const formcontrol = inp.parentElement;
  formcontrol.className = "form-control success";
}
