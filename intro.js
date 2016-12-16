var addList = function(e){
    var ol = document.getElementsByTagName('ol')[0];
    var li = document.createElement('li');
    li.innerHTML = "Some text"
    ol.appendChild(li);
};

var removeList = function(index){
    var ol = document.getElementsByTagName('ol')[0];
    ol.remove(index);
    console.log('hello');
}

var theButton = document.getElementById('b');
theButton.addEventListener('click', addList);
var li = document.getElementsByTagName('li')[0];
var index = 0;
while index < 8:

li.addEventListener("click",removeList(index);
