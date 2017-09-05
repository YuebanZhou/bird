(function (fb) {
    var Bird = function (ctx, birdImg) {
        this.ctx = ctx;
        this.birdImg = birdImg;
        this.x = 100;
        this.y = 100;
        this.birdWidth = this.birdImg.width / 3;
        this.birdHeight = this.birdImg.height;
        this.index = 0;
        this.v0 = 0;
        this.acc = 0.0005;
        this.startTime = Date.now();
        this.maxSpeed = 0.3;
        this.maxAngle = Math.PI / 4;
        this.initFly();
    }
    Bird.prototype.draw = function () {
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        var currentTime = Date.now();
        var deltaTime = currentTime - this.startTime;
        this.startTime = currentTime;
        var h = this.v0 * deltaTime + this.acc * deltaTime * deltaTime / 2;
        this.y += h;
        this.v0 += this.acc * deltaTime;
        var angle = this.v0 / this.maxSpeed * this.maxAngle;
        if(angle > this.maxAngle){
            angle = this.maxAngle;
        }
        this.ctx.rotate(angle);
        this.ctx.drawImage(this.birdImg,Math.floor(this.index/5) * this.birdWidth,0,
            this.birdWidth,this.birdHeight,
            -this.birdWidth / 2,-this.birdHeight / 2,
            this.birdWidth,this.birdHeight
        )
        this.index++;
        if (this.index > 14) {
            this.index = 0;
        }
        this.ctx.restore();
    }
    Bird.prototype.initFly = function () {
        var that = this;
        this.ctx.canvas.onclick = function () {
            that.v0 = - 0.3;
        }
    }
    fb.Bird = Bird;
})(fb)