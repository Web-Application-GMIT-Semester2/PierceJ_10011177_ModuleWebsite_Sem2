function checkUsername(){
    var elUsername = document.getElementById('username')
    if (elUsername.value.length < 5) {
      var feedback = document.getElementById('feedback')
      feedback.innerHTML = "UserName is too short"
    }
}
