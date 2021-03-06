(function () {
    
'use strict';
    
    
// There are 3 aircraft manufactures, each with different requirements 
    
//  for when the tires need to be changed
    
//      FooPlane: 120 landings
    
//      BarPlane: 75 landings
    
//      BazPlane: 200 landings

    
// Based on the above information and the data available in the data.js file,
    
//  this function is supposed to return an array of aircrafts due for a tire change.
    
function getAircraftsDueForTireChange(allAircraftData) {
        
var aircraftDueForTireChanges = [];
        
for (var i = 0; i < allAircraftData.length; i++) {

    //landingsSinceLastTireChange can be just a variable (int in specific) and not an array since we just need the count of the landings 
    //to find if an aircraft is due for change and not the dates of the landings
	var landingsSinceLastTireChange = 0;
            
	for (var j = 0; j < allAircraftData[i].landings.length; j++) {

	    if (allAircraftData[i].landings[j] >= allAircraftData[i].lastTireChange)
	        landingsSinceLastTireChange++;

	}

            
	if (allAircraftData[i].manufacturer == 'FooPlane' && landingsSinceLastTireChange >= 120)
                
		aircraftDueForTireChanges.push(allAircraftData[i]);
            
	else if (allAircraftData[i].manufacturer == 'BarPlane' && landingsSinceLastTireChange >= 75)
                
		aircraftDueForTireChanges.push(allAircraftData[i]);
            
	else if (allAircraftData[i].manufacturer == 'BazPlane' && landingsSinceLastTireChange >= 200)
                
		aircraftDueForTireChanges.push(allAircraftData[i]);
        
}
        
	return aircraftDueForTireChanges;
    
}

    
// Test the function 
    
//  To keep things simple, we are just going to check the ids and display a pass/fail.
    
//  Feel free to use Jasmine or any other test framework if you're more comfortable with that,
    
//  but it is NOT required.  This should be a quick exercise.
    
var expected = [1, 3, 5];
    
var actual = getAircraftsDueForTireChange(window.CAMP.aircraftData).map(function (aircraft) 
{ return aircraft.id; }).sort();
    
var passed = (JSON.stringify(expected) === JSON.stringify(actual));

    
document.body.innerHTML += passed ? 'PASS' : 'FAIL';
    
document.body.innerHTML += '<br />';
    document.body.innerHTML += 'Expected: ' + expected;
    document.body.innerHTML += '<br />';
    document.body.innerHTML += 'Actual: ' + actual;
})();