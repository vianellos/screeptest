var toolloader = {
    run: function() {
        console.log('Loading...');
		for (var ksp in Game.spawns) {
				console.log(JSON.stringify(Game.spawns[ksp]))
				var sou=Game.spawns[ksp].room.find('FIND_SOURCES_ACTIVE')
				console.log(JSON.stringify(sou))
		}

    }

}

module.exports = toolloader
