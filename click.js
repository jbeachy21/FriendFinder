
$("#submit").on("click", function() {
    
    var answers = [];
    
    var name = $("#name").val();
    var photo = $("#photo").val();
    
    for (var i = 0; i<10; i++) {
      answers[i] = $("#question" + i).val();
    }
    var newFriend = {
      name: name,
      photo: photo,
      scores: answers,
    }
    
    module.exports(newFriend);
    
    
    
    return newFriend;
  })





$(document).ready(function() {

  document.getElementById('submit').onclick = function getInfo(){
    
    var answers = [];
    var name = document.getElementById("name").innerText();
    var photo = document.getElementById("photo").innerText();

    for (var i = 0; i<10; i++) {
        
        answers[i] = document.getElementById("question" + i).innerText();
      }

    var newFriend = {
        name: name,
        photo: photo,
        scores: answers,
      }


      module.exports(newFriend);
      return newFriend;
    
}

})
