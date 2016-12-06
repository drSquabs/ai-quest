// === Game Data ===
var gameData = {
	commandCounter : 0,
	gameOver : false,
	introText : 'Hey!... Is this thing on? I can\'t seem to remember what happened...',
	outroText : 'Thanks For playing!',
	player : {
		currentLocation : 'ShipCrashSite',
		inventory : {helmetLight, ai, },
		lightSource : false
	},
	map : {
		'ShipCrashSite' : {
			firstVisit : true,
			displayName : 'Crash Site',
			description : 'Your ship has crashed and you see yourself standing in the center of a large crater. There is some debris scattered amongst the crater',
			interactables : {
				debris : { look : 'It looks like some of your cargo was damaged in the crash. You notice an opened crate filled with mining lasers'},
				ship : { look : 'Man, that sucks...' },
				datapad : { look : 'LOCATION STATUS: OFF COURSE \n CURRENT DESTINATION: TERRAN REPUBLIC COLONY 1313' },
				crater : { look : 'This crater is huge! I think I can climb out through the tracks my ship left during the crash...'}
			},
	}

};