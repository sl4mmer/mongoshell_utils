
/**

Show stats of all collections in current db

**/
DB.prototype.allCollStats = function(_scale, _verbose){
    var list=db.getCollectionNames();
    for (var i = 0; i < list.length; i++) { 
    printjson(this.runCommand({ collStats: list[i] , scale : _scale, verbose: _verbose }));
}
 
}


DBCollection.prototype.findTS = function(query , fields , limit , skip ){
     var result=this.find(query , fields , limit , skip ).toArray();
     for (var i=0;i<result.length;i++){
     	result[i]._id.getTimestamp();
     	result[i]['__TS__']=result[i]._id.getTimestamp();
     }
     return result
}

/**

Show stats of all DBs at current mongo instance

**/

allDBstats = function(_scale){
    var m= db.getMongo()
    var list= m.getDBs()['databases']
    for (var i = 0; i < list.length; i++) { 
    printjson(m.getDB(list[i]['name']).stats(_scale));
} 
}

/**

 Removes data from all collections (except system.indexes) of current database

**/
function removeData
  var list=db.getCollectionNames();
    for (var i = 0; i < list.length; i++) { 
    if (list[i]!="system.indexes") db.getCollection(list[i]).remove();
  }
