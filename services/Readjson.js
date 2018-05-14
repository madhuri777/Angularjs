app.service('jsonRead', function($http) {
  return{
  read: function() {
     return $http.get('products.json')
    // $http.get('products.json').then(function(response) {
    //   // console.log(response);
    //   // return response;
    // });
  }
  };
  //this.array=[];
});
