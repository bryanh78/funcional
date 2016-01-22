var game = new Phaser.Game(640, 360, Phaser.AUTO);

var GameState = {
	preload: function() {
		this.load.image('background', 'images/isogrid.png');
		this.load.image('ghost', 'image/white-ghost.png')

	},
	create: function() {
		this.background = this.game.add.sprite(0, 0, 'background');
		this.ghost = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'ghost');
		this.ghost.anchor.setTo(0.5);
	},
	update: function() {

	}
};


game.state.add('GameState' , GameState) ;
game.state.start('GameState');