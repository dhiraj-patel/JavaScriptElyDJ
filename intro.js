//addList adds a new button
var addList = function(e){
    var ol = document.getElementsByTagName('ol')[0];
    var li = document.createElement('li');
    li.innerHTML = "Some text"
    li.addEventListener('click', removeList);
    ol.appendChild(li);
};

//removeList removes an element from the list
var removeList = function(e){
    this.remove();
};

var theButton = document.getElementById('b');
theButton.addEventListener('click', addList);
var list = document.getElementsByTagName('li');
var i = 0;
var li;
while(i<list.length){
    li = document.getElementsByTagName('li')[i];
    li.addEventListener('click', removeList);
    i++;
}
