var Character = function(){
    
};

Character.prototype.update = function(dt){
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    alert('update ' + dt.contructor);
};

Character.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);    
};

// Enemies our player must avoid
var Enemy = function() {
    Enemy = Character.call(this);
    
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype = Object.create(Character.prototype);
Enemy.prototype.contructor = Enemy;


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(sprite){
    this.sprite = sprite;   
    this.x = getRandomInit();
    this.y = 400;
    Character.call(this);
    
    function getRandomInit(){
        var max = 5;
        var min = 0;
        
        var init = Math.floor(Math.random() * (max - min)) + min;
        
        while (init > 4) init -= 1;
        
        init *= 100;
        
        if (init % 100 != 0)
        {
            init -= (init % 100);
        }
        
        return init;
    }
};

Player.prototype = Object.create(Character.prototype);
Player.prototype.constructor = Player;

Player.prototype.handleInput = function(key){
    if (key = )
};

Player.prototype.update = function(){};

allEnemies = [];
player = new Player('images/char-boy.png');


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
