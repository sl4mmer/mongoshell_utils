//Removes data from all collections (except system.indexes) of current database
function removeData
  var list=db.getCollectionNames();
    for (var i = 0; i < list.length; i++) { 
    if (list[i]!="system.indexes") db.getCollection(list[i]).remove();
  }
