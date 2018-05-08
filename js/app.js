const live = document.querySelector('#live') // span class live is stored in variable

var Enemy = function (x, y, z) {      // enemy constructor is made with properties
    this.x = x;
    this.y = y;
    this.z = z;
    this.sprite = 'images/enemy-bug.png';    // Image is inserted
};

Enemy.prototype.update = function (dt) {   //enemy prototpe has a function update        
    this.x += this.z * (player.level) * dt;     //  to increase the speed
    if (this.x > 505) {                         
        this.x = -100;
    }
    if (this.x + 80 > player.x && this.x < player.x + 80 && this.y + 80 > player.y && this.y < player.y + 80) { // condtion that perform collision
        player.x = 200, player.y = 400 // palyer return to initail position
        live.textContent--;          // icraese level by 1
        if (live.textContent == 0) {
            alert("PLAY AGAIN YOU LOST ALL LIVES"), game.textContent++; // alert message
            level.textContent = 1
            live.textContent = 3
        }
        if(live.textContent == 0){      // to drease speed if game is over
            palyer.level = 0
        }

    }

}

Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);    // for images of enemies
};

const Player = function (x, y, z) {  // player constructor
    this.x = x;
    this.y = y;
    this.z = z;
    this.sprite = 'images/char-boy.png'; // player image
    this.level = 1
}

Player.prototype.update = function () {    
    if (this.x > 580) {                 // condition that palyer donot goes out of canvas
        this.x = -90;
    }
    if (this.y < 50) {
        this.level++                    // this increase the level by 1
        document.getElementById('level').innerHTML = this.level      // level id is selected
        this.x = 200, this.y = 400
    }
    document.getElementById('high').innerHTML = this.level              // id class high is selected
}

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);   // player image is selected
}

const enemy1 = new Enemy(0, 60, 80);     // new instace of enemy is made
const enemy2 = new Enemy(0, 140, 120);  // new instace of enemy is made
const enemy3 = new Enemy(0, 220, 180);  // new instace of enemy is made

const allEnemies = [enemy1, enemy2, enemy3];     // stored in variable

const player = new Player(220, 400);             // new palyer instaces is made

Player.prototype.handleInput = function (direction) {
    if (direction == "left" && this.x > 50) {              /// consditions that our player move with keyboard keys
        this.x = this.x - 100;
    } else if (direction == "right" && this.x < 375) {
        this.x = this.x + 100;
    } else if (direction == "up" && this.y > 0) {
        this.y = this.y - 85;
    } else if (direction == "down" && this.y < 370) {
        this.y = this.y + 85;
    }

}

document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});