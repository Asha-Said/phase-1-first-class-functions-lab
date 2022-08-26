// Code your solution in this file!
let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    const returnFirstTwoDrivers = function (){ 
        let FirstTwoDrivers = [... drivers]
        return (FirstTwoDrivers.slice(0,2))
    }

const  returnLastTwoDrivers = function (){  
    let lastTwoDrivers = [... drivers]
    return (lastTwoDrivers.slice(2,4))
}
const selectingDrivers =  [returnFirstTwoDrivers, returnLastTwoDrivers]




const createFareMultiplier  = function (FareMultiplier){
    return(function(value){
        return FareMultiplier * value
    
    })
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

  const selectDifferentDrivers = function(drivers,func){
    return func((returnFirstTwoDrivers ||  returnLastTwoDrivers));
  }