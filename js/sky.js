(function (fb) {
    var Sky=function (ctx,skyImg,x,y,speed) {
        this.ctx=ctx;
        this.img=skyImg;
        this.x=x;
        this.y=y;
        this.speed=speed;
    }
    Sky.prototype.draw=function () {
        this.ctx.drawImage(this.img,this.x,this.y);
        this.x-=this.speed;
        if(this.x<=-this.ctx.canvas.width) {
            this.x+=2*this.img.width;
        }
    }
    fb.Sky=Sky;
})(fb)