conn = new Mongo('localhost:27017');
db =  conn.getDB("TripAdvisor");
coll = db.getCollection("Restaurants");
db.Restaurants.find().snapshot().forEach(
   function (e) {
     // update document, using its own properties
     // for test printjson(e.text)
     //if(e.hasOwnProperty('latitude'))
     //if(e.hasOwnProperty('latitude'))
     if ('Latitude' in e && e.Latitude !== "")
     {
     var ll = {Longitude : e.Longitude, Latitude: e.Latitude};
     var lla =[];
     
     Object.keys(ll).forEach(function(key) {
     	//	printjson(key)
     	var val = ll[key];
     	//	printjson(val)
     	lla.push(val);
    
     })
	 
     var p = "Point";
     // Create location variable in document
     e.loc = {type: p, coordinates: lla};     	
     	
     // remove old properties
     //delete e.latitude;
     //delete e.longitude;
     
     // save the updated document
     db.Restaurants.save(e);
     //printjson(ll)
     //printjson(lla)
     //printjson(e.loc)
   	}
   }
 )