var toolloader = {
    run: function() {
        console.log('Loading...');
		for (var ksp as Game.spawns) {
				sou=Game.spawns[ksp].room.find('FIND_SOURCES');
				consol.log(JSON.stringify(sou))
		}

    }

}

module.exports = toolloader
