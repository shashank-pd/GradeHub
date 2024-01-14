grade_points = {
  "O": 10,
  "A+": 9,
  "A": 8,
  "B+": 7,
  "B": 6,
  "C": 5,
  "W": 0,
  "F": 0,
  "Ab": 0,
  "I": 0,
  "*": 0
};


$(document).ready(function () {
  var count = 5;
  $("#more").on("click", function (event) {
    count += 1;
    $("#myTable").append("<tr><td>" + count + ".</td><td><select class='grade'><option>O</option><option>A+</option><option>A</option><option>B+</option><option>B</option><option>C</option><option>W</option><option>F</option><option>Ab</option><option>I</option><option>*</option></select></td><td><input type='number' class='credit'/></td></tr>");
  });
});

$("#set").on("click", function () {
  $("#myTable tr:gt(5)").remove();
});


$("#cal").on("click", calculate);

function calculate(event) {
  var grade_list = $(".grade");
  var credit_list = $(".credit");
  var points = 0;
  var sum_credits = 0;

  for (var i = 0; i < credit_list.length; i++) {
    if (credit_list[i].value === "") {
      var credit = 0;
    } else {
      var credit = Number(credit_list[i].value);
    }
    sum_credits += credit;
    var gradept = grade_points[grade_list[i].value];
    points += credit * gradept;
  }

  var gpa = (points / sum_credits);
  $("#result").removeClass("hidden");
  $("#gpa").text(gpa.toFixed(2));
  window.scrollTo(0, 0);
}




$(document).ready(function () {
  $("#cal_2").on("click", function () {
    var maxOriginalMarks = parseFloat($(".original").val());
    var marksObtained = parseFloat($(".obtain").val());
    var maxWeightageMarks = parseFloat($(".weight").val());
    var weightedScore = (marksObtained / maxOriginalMarks) * maxWeightageMarks;
    $("#result #gpa").text(weightedScore.toFixed(2));
    $("#result #obt").text(maxWeightageMarks.toFixed(2));
    $("#result").removeClass("hidden");
  });
});





// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

