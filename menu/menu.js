function buildMenu(){
  var data = localStorage.menu_data;

  if(data){
    // If data is in localStorage, use it
    console.log("Using items from localStorage API");

    // JSON is turned into a string for storage in localStorage API. Here
    // JSON.parse is used to read the data as a JSON object
    writeMenu(JSON.parse(data));
  } else {
    // If no data is cached, fetch it via Ajax
    console.log("Fetching items with Ajax");
    fetchMenuItems();
  }
}

function writeMenu(json){
  var menu = document.getElementById('menu');

  // Once the data is fetched (from either source), write it to the DOM
  for(var name in json){
    var list_item = document.createElement('li');
    var item = json[name];
    list_item.innerText = name + ' - ' + item['desc'] + ' - $' + item['price'];
    menu.appendChild(list_item);
  }
}

function fetchMenuItems(){
  var ajax = new XMLHttpRequest();

  // Ajax request to file system to retrive JSON
  ajax.onreadystatechange = function(){
    if(ajax.readyState === 4 && ajax.status === 200){
      json = JSON.parse(ajax.responseText);

      // Store JSON data as string, as localStorage will not accept an object
      localStorage.menu_data = JSON.stringify(json);

      // Write to menu
      writeMenu(json);
    }
  }

  ajax.open("GET", 'items.json', true);
  ajax.send();
}
