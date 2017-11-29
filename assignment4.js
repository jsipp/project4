//Task 1

$(document).ready(function(){
  $("#ex1").text(task1(1));
    });
//Task 2
$(document).ready(function(){
  $("#ex2").text(task2("John","Jacob","Jingleheimer"));
});
//Task 3
$(document).ready(function(){
  $("#ex3").text(task3("3,4"));
});
//Task 4
$(document).ready(function(){
  $("#ex4").text(task4(inp4,pos4));
});
//Task 5

$(document).ready(function(){
  $("#ex5").text(task5());
});

//Task 6
$(document).ready(function(){
  $("#b1").on({
    click: function(){
        $("#b2").css("background-color", "blue");},
        mouseleave: function(){
          $(":button").css("background-color", "#FFFFFF");
        }
      });

  $("#b2").on({
    click: function (){
      $("#b3").css("background-color", "blue");},
      mouseleave: function(){
        $(":button").css("background-color", "#FFFFFF");
    }
    });

  $("#b3").on({
    click: function (){
      $("#b4").css("background-color", "blue");
    },
    mouseleave: function(){
      $(":button").css("background-color", "#FFFFFF");
      }
    });

  $("#b4").on({
    click: function (){
    $("#b5").css("background-color", "blue");
  },
  mouseleave: function(){
    $(":button").css("background-color", "#FFFFFF");
    }
  });

  $("#b5").on({
    click: function (){
    $(":button").css("background-color", "red");
  },
  mouseleave: function(){
    $(":button").css("background-color", "#FFFFFF");
    }
  });
  });
