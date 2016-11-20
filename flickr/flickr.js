function writeFlickr(json){
  var items = json.items;

  for(var i = 0; i < items.length; i++){
    var item = items[i];

    // Create an element for the Flickr item
    var item_box = document.createElement('div');
    $(item_box).addClass('flickr_item');

    // Add the title
    var title_box = document.createElement('h2');
    $(title_box).text(item.title);
    $(item_box).append(title_box);

    // Add the image
    var img_box = document.createElement('img');
    img_box.src = item.media.m;
    $(item_box).append(img_box);

    // Add author
    var author_box = document.createElement('div');
    $(author_box).text("By: " + item.author);
    $(item_box).append(author_box);

    // Append the div to the div with the id flickr in the DOM
    $('#flickr').append(item_box);
  }

  console.log(items);
}

function buildFlickr(){
  var url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=restaurants&format=json&jsoncallback=?";

  // Fetch JSON using JQuery's getJson function
  $.getJSON(url, function(data){
    writeFlickr(data);
  });

}
