$(document).ready(function() {
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
    
    

    console.log(newFriend);
    
    $.post("/api/friends", newFriend, function(data) {
      console.log(data);
      $("#bestFriend").html(data.name);
      
       $("#friend").html("<img src=" + data.photo + " class=img-fluid>");
       
      
    })
    
  })

});


