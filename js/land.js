(function (fb) {
    var Land = function (ctx, landImg, x,speed) {
        this.ctx = ctx;
        this.landImg = landImg;
        this.x = x;
        this.y = this.ctx.canvas.height - this.landImg.height;
        this.speed = speed;
    }
    Land.prototype.draw = function () {
        this.ctx.drawImage(this.landImg, this.x, this.y);
        this.x -= this.speed;
        if (this.x <= -this.landImg.width) {
            this.x += 4 * this.landImg.width;
        }
    }
    fb.Land = Land;
})(fb);