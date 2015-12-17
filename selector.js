window.venues = null;
window.spaces = null;
window.usages = null;
window.choice = [];
window.mapSpacesId = []; 
window.mapUsagesId = [];

var afterVenueLoad = function() {
	 HireSpace.GetAllSpaces(function (spaces) {
	window.spaces = spaces;
	for (var i in spaces) {
		s = spaces[i];
		window.mapSpacesId[s.VenueId]  window.mapSpacesId[s.VenueId].push(s)  window.mapSpacesId[s.VenueId] = [s];
	}
 });

 HireSpace.GetAllUsages(function (usages) {
	window.usages = usages;
	for (var i in usages) {
		u = usages[i];
		window.mapUsagesId[u.VenueId]  window.mapUsagesId[u.VenueId].push(u)  window.mapUsagesId[u.VenueId] = [u];
	}
 });
};

HireSpace.GetAllVenues(function (venues){
  window.venues = {};
  for (var i in venues) {
	  var v = venues[i];
	  window.venues[v.VenueId] = v;
  }
  console.log(window.venues);
  afterVenueLoad();
  console.log(ready);
  document.getElementById(submit).style = ;
 });
 HireSpace.Search({Capacity window.numberOfPeople, MaximumPrice window.budget, FloorSpaceInSqMetres window.surface, 
                  CanProvideHalal window.dietary, CanProvideKosher window.dietary, ParkingSpaces window.parking,
                  HasDisabledAccess window.disabledAccess, HasWifi window.wifi, ExternalCatering window.externalCatering, 
				  ExternalAlcohol window.externalAlcohol}, function (search){
 HireSpace.Search(GetAllVenues(function (venues){, function (results) {
  results.Capacity = 100;
  window.search = search;
  window.search = search;
  alert(search[0].VenueName);
 });
 

 
function test() {
	if (venues == null) {
		alert('Venues are not loaded yet!');
		return;
	}
	
var numberOfPeople = document.getElementById('capacity').value;
var budget =  document.getElementById('budget').value;
var surface =  document.getElementById('surface').value;
var dietary =  document.getElementById('dietary').value;
var parking =  document.getElementById('parkspaces').value;
var disabledAccess =  document.getElementById('disabledaccess').value;
var wifi =  document.getElementById('wifi').value;
var externalCatering =  document.getElementById('externalcatering').value;
var externalAlcohol =  document.getElementById('externalalcohol').value;

 var choice = [];
var name = document.getElementById('name').value;
var name2 = document.getElementById('name2').value;
var name3 = document.getElementById('name3').value;
var k = 0;

 for (var i in venues) {
	 var v = venues[i];
     if (!(v.VenueName).localeCompare(name)) {
		choice.push(v);
	 } 
	  if (!(v.VenueName).localeCompare(name2)) {
		choice.push(v);
	 } 
	  if (!(v.VenueName).localeCompare(name3)) {
		choice.push(v);
	 } 
 }
	console.log(choice);

code main ...
HireSpace.Search(searchObject, callback)
var venues = [];
venues.push()


var marks = [];
marks[0] = document.getElementById('icapacity').value;
marks[1] = document.getElementById('ibudget').value;
marks[2] = document.getElementById('isurface').value;
marks[3] = document.getElementById('idietary').value;
marks[4] = document.getElementById('iparkspaces').value;
marks[5] = document.getElementById('idisabledaccess').value;
marks[6] = document.getElementById('iwifi').value;
marks[7] = document.getElementById('iexternalcatering').value;
marks[8] = document.getElementById('iexternalalcohol').value;

var total = [];
var id;

	for(var i in choice){ 
	    c = choice[i];
	    total[i] = 0;
		console.log(c.VenueId);
	    id = c.VenueId;
		console.log(mapUsagesId[id]);
		total[i]+=(marks[0]mapUsagesId[id][0].Capacities[0].Value100)numberOfPeople;
     	total[i]+=(marks[1]budget100)mapUsagesId[id][0].Prices[0].Price;    
		total[i]+=(marks[2](mapSpacesId[id][0].SpaceAreaSqm  mapSpacesId[id][0].SpaceAreaSqft0.1)100)surface;

		if(c.HalalCatering&&c.KosherCatering&&dietary.localeCompare(yes)){
			total[i]+=(marks[3]90);
		}
		else
			total[i]+=(marks[3]10);
		
		if(c.Parking && parking.localeCompare(yes)){
			total[i]+=(marks[4]90);
		}
		else
			total[i]+=(marks[4]10);
		
		if(mapSpacesId[id][0].DisabledAccess && disabledAccess.localeCompare(yes)){
			total[i]+=(marks[5]90);
		}
		else
			total[i]+=(marks[5]10);
		
		
		if(mapSpacesId[id][0].FreeWifi && wifi.localeCompare(yes)){
			total[i]+=(marks[6]90);
		}
		else
			total[i]+=(marks[6]10);

		
		if(c.AllowsExternalCatering && externalCatering.localeCompare(yes)){
			total[i]+=(marks[7]90);
		}
		else
			total[i]+=(marks[7]10);
		
		if(c.AllowsExternalAlcohol&&externalAlcohol.localeCompare(yes)){
			total[i]+=(marks[8]90);
		}
		else
			total[i]+=(marks[8]10);
		
	}
	var max = 0;
	var pos = 0;
	for(i=0;itotal.length;i++)
		if(total[i]max){
			max = total[i];
			pos = i;
		}
	alert(choice[pos].VenueName);
	document.location = dancing.htmlimage=bg.jpg;

 }
 
 
