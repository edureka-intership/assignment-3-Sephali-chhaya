                     //Answer 1//
                    //restaurant name//                    

var restaurantlist = [
    {
      name : "restaurant1",
      address : "xyz1",
      city : "delhi"
    },
     {
      name : "restaurant2",
      address : "xyz2",
      city : "mumbai"
    },
     {
      name : "restaurant3",
      address : "xyz3",
      city : "kolkata"
    },
     {
      name : "restaurant4",
      address : "xyz4",
      city : "delhi"
    },
  ]
class Restramng {
    constructor(restarr) {
        this.restarr = restarr;
    }
    printAllrestanames =() => {
        return this.restarr.map((resturant) => resturant.name);
    }
}
var restarr = new Restramng(restaurantlist);
restarr.printAllrestanames();

                    // city//
 var restaurantlist = [
    {
      name : "restaurant1",
      address : "xyz1",
      city : "delhi"
    },
     {
      name : "restaurant2",
      address : "xyz2",
      city : "mumbai"
    },
     {
      name : "restaurant3",
      address : "xyz3",
      city : "kolkata"
    },
     {
      name : "restaurant4",
      address : "xyz4",
      city : "delhi"
    },
  ]                   
class Restramng {
    constructor(restarr) {
        this.resta = restarr;
    }
    filterByCity = (city) => {
        return restaurantlist.filter(restaurantlist =>
            restaurantlist.city === city);
        }
    }

var restarr = new Restramng(restaurantlist);
restarr.filterByCity("delhi");

                    //Answer 2//
  
  var OrderData ={
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
  };
                     //Answer 2a//
  var sum = 0;
const order = Object.values(OrderData);
order.forEach(val => {
    sum = sum+val; 
});
console.log('Total number of orders placed ='+sum);
                   //Answer 2b//
var orderProportions = order.length;
console.log('Total number of order proportions ='+orderProportions);


                    //Answer 2c//   
var OrderData ={
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
  };
  var values = Object.values(OrderData);
  var total = values.reduce(function(a,b)
  { return a+b;},0);    
  var result = []
  var i = 0
  var keys = Object.keys(OrderData);
  keys.forEach(key => {
    var value = OrderData[key];
    value = (value/total)*100;
    var item = {
        id : 1+i,
        order : key,
        order_Percentage : value.toFixed(2),
        name : "Punjabi Tadka"
    }
    i++
    result.push(item)
  })   
  console.log(result)           

