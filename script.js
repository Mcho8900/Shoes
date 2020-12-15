$( document ).ready(function() {
      
      var photos = ["https://www.mildtowildshoes.com/image/cache/catalog/shoes/amuse-20-red-5-inch-high-heel-pump-700x900.jpg", //high-heels

      "https://i.pinimg.com/originals/3b/c5/89/3bc5894cb123bd49cc1d333e52573309.jpg", //wedges
                 
      "https://www.tillys.com/dw/image/v2/BBLQ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw66d63e45/tillys/images/catalog/1000x1000/334379100.jpg?sw=539&sh=693&sm=fit"]; //combat-boots

//Array for the photos

var caption = ["Red High Heels ", "Ice cream wedges ", " Black Combat boots"];


//Array for the captions




photos.forEach(function(a,b){
    
$(".pictures").append("<img src=" + photos[b] + ">");
    
    });

 //This appends my images from the array called "photos" into the div class called "pictures". The div class wraps around the images, but is above and seperate from the input-box/button. The input box/button are in the div class called "block"

caption.forEach(function(c,d){
    $(".captions").append("<p>" + caption[d] + "</p>");
    
    });

//This appends the captions from the array called "caption" into the div class called "captions". 

$("button").click(function(){
 
 var storage = $(".box").val();
 photos.push(storage);
$(".pictures").empty();
    
    photos.forEach(function(a,b){
    
$(".pictures").append("<img src=" + photos[b] + ">");

    });
    
    
 $(".box").val("");
    
    //The .val("") sends the information into the variable "storage" as well as clearing the input-box the moment that the button is clicked.
    
    //When I click the button "Add Picture!", it sends the link that the user put into the input-box, (which the class is "box"), into this new variable I created called "storage". The link is then added to the end of the "photos" array. Then, the link is appended from the the storage variable, as an image due to the forEachloop function, into the div class "pictures".
  
 console.log(storage);
    
    
    //Just testing to make sure whatever the user types into the input-box is stored into the variable "Storage" by checking the console.log

 });

 console.log(photos);

 //Just testing to make sure that the user's link is added into the "photos" array. 
});
