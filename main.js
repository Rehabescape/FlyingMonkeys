var map = null;
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;
var markers = [];
var defaultMarker;
function initialize() {
     defaultMarker = new google.maps.Marker({
       
       
       icon : {
         path: google.maps.SymbolPath.CIRCLE,
         scale: 10
         
       }
     });
    		map = new google.maps.Map(document.getElementById("map"), 
    		{
    		  disableDefaultUI: true,
				zoom:5 ,
    			mapTypeId: google.maps.MapTypeId.ROADMAP,
    		center: {lat: 37.09024, lng: -92.71289}
    		});
    		  // Make onload initial toggle side bar
   	
   	 google.maps.event.trigger(map,'resize');
   	 
   	 
   	  google.maps.event.addListener(map, 'click', function(event) {
    clickEvent(event.latLng, map);
  
   
  });
 
		}	
		
		
		



$(document).ready(function() {
 
  $('#toggle').click(function(){
  
     	   $("#side_bar").animate({
     	       width: 'toggle'
     	   });
     	   var value = $("#map")[0].style.width !== "100vw" ? '100vw' : '80vw';
      	  $("#map").animate({
      	      width: value
          }, {step:function(){
              google.maps.event.trigger(map,'resize');
          },
          });
    	});

 $('#');

});

function clickEvent(location , map)
{
 
    addMarker(location, map);
  
}

function sideBarFunction()
{
  var x = document.getElementsByName("sideBaroption");
  
  if(x[0].checked)
  {
    document.getElementById("accountInfo").hidden = false;
    document.getElementById("listView").hidden = true;
    
  }else if (x[1].checked)
  {
    document.getElementById("listView").hidden = false;
    
    document.getElementById("accountInfo").hidden = true;
    
  }
  else
  {
    
  }

}

function addMarker(location, map){
 var marker_shape = {coords: [0,0,50,50], type: "rect"};
  var marker = new google.maps.Marker({
    position: location,

  
    map: map,
    title: "Taco",
   
  cursor : 'crosshair'
  });
  google.maps.event.addListener(marker, 'dragend', function() 
{
    geocodePosition(marker.getPosition());
});

function geocodePosition(pos) 
{
   geocoder = new google.maps.Geocoder();
   geocoder.geocode
    ({
        latLng: pos
    }, 
        function(results, status) 
        {
            if (status == google.maps.GeocoderStatus.OK) 
            {
                $("#mapSearchInput").val(results[0].formatted_address);
                $("#mapErrorMsg").hide(100);
            } 
            else 
            {
                $("#mapErrorMsg").html('Cannot determine address at this location.'+status).show(100);
            }
        }
    );
}
  
  
 
   
  //   markers.push(marker);
  	document.getElementById('sidebarHeader').innerText =" Clickable  "  + marker.getClickable()+ " /// Shape " + defaultMarker.getShape() +" Marker Label \n" +  marker.getLabel() + "   --Position-- " + marker.getPosition()  + "\n"
  	 + " " + marker.getZIndex();
  
  
}


function removeMarker(location, map)
{
  
}

function loadCoords()
{
  
}

function addCoords()
{
  
}

function setMapOnAll(map)
{
  for (var i = 0; i < markers.length; i++)
  {
    markers[i].setMap(map);
  }
}