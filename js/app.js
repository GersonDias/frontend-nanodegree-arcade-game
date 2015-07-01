var Character = function(){
    this.x = 0;
};

Character.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);    
};

Character.prototype.getRandomInit = function(min, max, factor){
        var init = Math.floor(Math.random() * (max - min)) + min;
        
        while (init > 4) init -= 1;
        
        init *= 100;
        
        if (init % factor != 0)
        {
            init -= (init % factor);
        }
        
        return init;
};

// Enemies our player must avoid
var Enemy = function() {
    Enemy = Character.call(this);
    this.correction = +30;
    this.x = -200;
    this.y = 0;
    this.y = this.getRandomInit(0, 3, 100) + this.correction;
    
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype = Object.create(Character.prototype);
Enemy.prototype.contructor = Enemy;

Enemy.prototype.update = function(dt){
    this.x += 500 * dt;
    if (this.x > 500) this.reset();
};

Enemy.prototype.reset = function(){
    this.x = -200;
    this.y = this.getRandomInit(0, 3, 100) + this.correction;
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(sprite){
    Character.call(this);
    this.sprite = sprite;   
    this.x = this.getRandomInit(0, 5, 100);
    this.y = 400;
};

Player.prototype = Object.create(Character.prototype);
Player.prototype.constructor = Player;

Player.prototype.handleInput = function(key){
    switch(key){
        case 'up':
            if (this.y == 0) this.y = 500;
            this.y -= 100;
            break;
        case 'down':
            if (this.y < 400) this.y += 100;
            break;
        case 'right':
            if (this.x < 400) this.x += 100;
            break;
        case 'left':
            if (this.x > 0) this.x -= 100;
            break;
    }
    
    return;       
};

Player.prototype.update = function(){};

allEnemies = [new Enemy()];
player = new Player('images/char-boy.png');


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        65: 'left',
        38: 'up',
        87: 'up',
        39: 'right',
        68: 'right',
        40: 'down',
        83: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
