 var matches = document.getElementById('marks');
 matches[1].style.fontSize = '35px';
 matches[1].style.color = "Red";


var matches = document.getElementsByTagName('div');
for (var ele in matches) {
    matches[ele].style.background = 'yellow';
}
var matches = document.getElementsByClassName('test');
document.write('Number of elements selected:' + matches.length); 
matches[0].style.fontWeight = "bold";  //first element
matches[0].style.color = 'Blue';
matches[matches.length - 1].style.fontStyle = "italic";

for(var ele in matches){
    matches[ele].style.background = 'pink';
}

//querySelectorAll
var listsEle = document.querySelectorAll('ul li');
for(var ele of listsEle){
    document.write(ele.innerHTML + '<br>');
}
listsEle = document.querySelectorAll('ul li.tick');
listsEle[0].style.backgroundColor = 'grey';
listsEle[1].style.backgroundColor = 'orange';


// QuerySelector

var paraEle = document.querySelector('.test');
paraEle.style.color = 'Blue';
paraEle.style.fontSize = '20px';
