app.filter('dashboardFilter', function() {
  return function(data, manifactoreArray, storageArray, osArray, cameraArray) {
    var ArrayList = [],
      sortList = [];
    if (data != undefined) {
      ArrayList = data;
      if (manifactoreArray.length > 0) {
        for (var i = 0; i < ArrayList.length; i++) {
          var item = ArrayList[i];
          for (var j = 0; j < manifactoreArray.length; j++) {
            if (manifactoreArray[j] == item.specs.manufacturer) {
              sortList.push(item);
              // console.log("sortlist ", sortList);
            }
          }
        }
        ArrayList = sortList;
        sortList = [];
      }

      if (storageArray.length > 0) {
        for (var t = 0; t < ArrayList.length; t++) {
          var item1 = ArrayList[t];
          for (var q = 0; q < storageArray.length; q++) {
            if (storageArray[q] == item1.specs.storage) {
              sortList.push(item1);
            }
          }
        }
        ArrayList = sortList;
        sortList = [];
      }

      if (osArray.length > 0) {
        for (var i = 0; i < ArrayList.length; i++) {
          var item3 = ArrayList[i];
          for (var j = 0; j < osArray.length; j++) {
            if (osArray[j] == item3.specs.os) {
              sortList.push(item3);
            }
          }
        }
        ArrayList = sortList;
        sortList = [];
      }

      if (cameraArray.length > 0) {
        for (var i = 0; i < ArrayList.length; i++) {
          var item4 = ArrayList[i];
          for (var j = 0; j < cameraArray.length; j++) {
            if (cameraArray[j] == item4.specs.camera) {
              sortList.push(item4);
            }
          }
        }
        ArrayList = sortList;
        sortList = [];
      }
    //  console.log("gdffgf ", ArrayList);
      return ArrayList;
    };
  };

});
