DBCollection.prototype.findTS = function(query , fields , limit , skip ){
     var result=this.find(query , fields , limit , skip ).toArray();
     for (var i=0;i<result.length;i++){
     	result[i]._id.getTimestamp();
     	result[i]['__TS__']=result[i]._id.getTimestamp();
     }
     return result
}





//Removes data from all collections (except system.indexes) of current database
function removeData
  var list=db.getCollectionNames();
    for (var i = 0; i < list.length; i++) { 
    if (list[i]!="system.indexes") db.getCollection(list[i]).remove();
  }
