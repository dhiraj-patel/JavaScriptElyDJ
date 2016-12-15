var addList = function(e){
    console.log('hello');
    document.appendChild(document.getElementsByTagName('<li>')[0]);
};

var event = addEventListener('click', addList);
