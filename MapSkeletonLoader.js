export function drawHouseMap(){
	//House Map
		var i;
        var markerCords = [[51.494, 0.15435],
						   [51.4943, 0.15248],
						   [51.494, 0.1548],
						   [51.4935, 0.1542],
						   [51.494105, 0.15562],
						   [51.4931, 0.152],
						   [51.4947, 0.1563],
						   [51.4951, 0.15333],
						   [51.493, 0.1565],
						   [51.49322, 0.1511]];
						   
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
		  center:{lat: 51.494, lng:  0.155},
		  disableDefaultUI: true,
		  gestureHandling: 'none'
		  
        });
		
	        var marker = [];
		
		for  (i = 0; i < markerCords.length; i++) { 
			marker[i] = new google.maps.Marker({
							position: {lat: markerCords[i][0], lng: markerCords[i][1]},
							map: map,
							title: 'Click to view property'
						});
		}
		
		for  (i = 0; i < markerCords.length; i++) { 
		   addMarkerListener(marker[i]);
		}
		
      }
	  
	  function addMarkerListener(marker){
         marker.addListener('click', function() {
			  alert("hi"); //Popup for each different location here
			});
	  }	
	  
	  return;
}