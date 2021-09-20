console.log("========== Question 1 ==========")

function searchElement(array,value){

    // var myArray = array.indexOf(value.toLowerCase() === array.toLowerCase() )

    var myArray = array.indexOf(value)
    // var result = array.find(key => key.toUpperCase() === findCountry.to )
    if (myArray == -1){
      return  `Value not found in Array of Country`
    }
    else{
      return `Value found at Position ${myArray+1} and value is "${value}" `
    }
    
}

var nameArray = ["Paris","Australia", "Bangladesh", "Brazil", "Canada",	"China", "Cuba","Germany", "Iceland", "India", "Pakistan", "Russia", "America","London","New York"]

//document.getElementById("countryName").append(nameArray)

var findCountry = document.getElementById("input-id").value;
function findCountry(){
    // var findCountry = document.getElementById("input-id").value;
    // var fC = findCountry.toUpperCase();
    var resultCountry = document.getElementById("result-id");
    return resultCountry.innerText = searchElement(nameArray,findCountry)    
}



