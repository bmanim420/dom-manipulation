/* Task 1 */

var heading = document.getElementById('heading');
console.log(heading.innerText);



/* Task 2 using plain JavaScript */
//TASK 2a
var textBtn = document.getElementById('textBtn2');
textBtn.addEventListener('click', function(){
    var task2 = document.getElementById('task2a');
    var paragraph = document.createElement('p');
    paragraph.innerText = "Hello World";
    //append the paragraph
    task2.appendChild(paragraph);
});
//TASK 2b


/* Task 4 using jQuery */
