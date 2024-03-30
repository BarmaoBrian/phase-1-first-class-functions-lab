//const arrayDrivers = ["Antonia", "Nuru"];
function returnFirstTwoDrivers(arr){
    return [arr[0],arr[1]]
    }
    
    function returnLastTwoDrivers(arr){
        return [arr[arr.length-2],arr[arr.length-1]]
    }
    
    let selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]
    
    function createFareMultiplier(val){
        function mult(val2){
            return val * val2
        }
        return mult
    }
    function  fareDoubler(fare){
        return fare * 2
    
    }
    function  fareTripler(fare){
        return fare * 3
    
    }
    function selectDifferentDrivers(arrayOfDrivers, func){
    
        if(func===returnFirstTwoDrivers){
            return returnFirstTwoDrivers(arrayOfDrivers)
        }
        if(func===returnLastTwoDrivers){
            return returnLastTwoDrivers(arrayOfDrivers)
        }
    }