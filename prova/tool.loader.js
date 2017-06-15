var toolloader = {
    run: function() {
        console.log('Loading...');
		for (var ksp in Game.spawns) {
				var sou=Game.spawns[ksp].room.find('FIND_SOURCES')
				console.log(JSON.stringify(sou))
		}

    }

}

module.exports = toolloader
