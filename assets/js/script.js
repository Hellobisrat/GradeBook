var student = document.getElementById("student-names")
var grade = document.getElementById('grades')
var comment = document.getElementById('msg')
var saveButton = document.getElementById('save')
var saveName = document.getElementById('save-name')


function saveLastGrade() {
  var studentGrade = {
    student: student.value,
    grade:grade.value,
    comment:comment.value.trim()
  }

  localStorage.setItem('studentGrade',JSON.stringify(student))
}

function renderLastGrade() {
  var lastGrade = JSON.parse(localStorage.getItem("studentGrade"))

  if(lastGrade !== null) {
    document.getElementById('saved-name').innerHTML =lastGrade.student
    document.getElementById('saved-grade').innerHTML=lastGrade.innerHTML
    document.getElementById('save-comment').innerHTML=lastGrade.comment
  }
  else
  {
    return;
  }
} 


saveButton.addEventListener("click",function(event){
  event.preventDefault();
  saveLastGrade();
  renderLastGrade()
});

function init() {
  renderLastGrade()

}

init()