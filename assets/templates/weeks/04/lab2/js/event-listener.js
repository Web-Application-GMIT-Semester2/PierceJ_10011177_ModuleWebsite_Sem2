var elUsername = document.getElementById('username');
elUsername.addEventListener('blur', checkUsername, false);

function checkUsername(){

    if (elUsername.value.length < 5) {
      var feedback = document.getElementById('feedback');
      feedback.innerHTML = "UserName is too short";
    }
}
