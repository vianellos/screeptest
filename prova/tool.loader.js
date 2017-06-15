var toolloader = {
    run: function() {
        console.log('Loading...');
		for (var ksp in Game.spawns) {
				sou=Game.spawns[ksp].room.find(FIND_SOURCES)
				for (var kso in sou) {
					console.log(sou[kso]);
				}
		}
    }

}

module.exports = toolloader
