var toolloader = {
    run: function() {
        console.log('Loading...');
		for (var ksp in Game.spawns) {
				var sou=Game.spawns[ksp].room.find(FIND_SOURCES)
				for (var kso in sou) {
					console.log(JSON.stringify(sou[kso]);
				}
		}
    }

}

module.exports = toolloader
