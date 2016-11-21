var elUsername = document.getElementById('username');
elUsername.onblur = checkUsername;

function checkUsername(){

    if (elUsername.value.length < 5) {
      var feedback = document.getElementById('feedback');
      feedback.innerHTML = "UserName is too short";
    }
}
