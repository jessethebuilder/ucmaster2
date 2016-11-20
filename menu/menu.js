function buildMenu(){
  fetchMenuItems();
}

function writeMenu(json){
  var menu = document.getElementById('menu');

  for(var name in json){
    var list_item = document.createElement('li');
    var item = json[name];
    list_item.innerText = name + ' - ' + item['desc'] + ' - $' + item['price'];
    menu.appendChild(list_item);
  }
  // for(var i = 0; i < json.length; i++){
  //
  // }
}

function fetchMenuItems(){
  var ajax = new XMLHttpRequest();

  ajax.onreadystatechange = function(){
    if(ajax.readyState === 4 && ajax.status === 200){
      json = JSON.parse(ajax.responseText);
      writeMenu(json);
    }
  }

  ajax.open("GET", 'items.json', true);
  ajax.send();
}
