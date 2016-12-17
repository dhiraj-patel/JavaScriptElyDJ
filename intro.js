//addList adds a new button
var addList = function(e){
    var ol = document.getElementsByTagName('ol')[0];
    var li = document.createElement('li');
    li.innerHTML = "Some text"
    ol.appendChild(li);
};

//removeList removes an element from the list
var removeList = function(index){
    this.remove(index);
    console.log('hello');
};

var theButton = document.getElementById('b');
theButton.addEventListener('click', addList);
li = document.getElementsByTagName('li')[0];
li.addEventListener('click', removeList(0));
/*while(index<ol.length){
    li = ol[index];
    console.log('hello');
    li.addEventListener('click', removeList.index);
    index++;
    }*/
//while index < 8:

//li.addEventListener("click",removeList(index));
