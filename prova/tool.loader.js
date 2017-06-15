var toolloader = {
    run: function() {
        console.log('Loading...');
		for (var ksp in Game.spawns) {
				console.log(JSON.stringify(Game.spawns[ksp]))
				var sou=Game.spawns[ksp].room.find('FIND_SOURCES')
				console.log(JSON.stringify(sou))
		}

		for (var kro in Game.rooms) {
				console.log(JSON.stringify(Game.rooms[kro]))
				var sou=Game.rooms[ksp].find('FIND_SOURCES')
				console.log(JSON.stringify(sou))
		}

    }

}

module.exports = toolloader
