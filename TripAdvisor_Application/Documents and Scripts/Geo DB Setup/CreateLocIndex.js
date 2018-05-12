conn= new Mongo("localhost",27017);
db= conn.getDB("TripAdvisor");
coll= db.getCollection("Restaurants");
db.Restaurants.createIndex( { loc : "2dsphere" }, { sparse: true });