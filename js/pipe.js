(function (fb) {
    var Pipe=function (ctx,topImg,botImg,x,speed) {
        this.ctx=ctx;
        this.topImg=topImg;
        this.botImg=botImg;
        this.x=x+400;
        this.speed=speed;
        this.space=200;
        this.imgHeight = this.topImg.height;
        this.imgWidth = this.topImg.width;
        this.initHeight();
    };
    Pipe.prototype.draw=function () {
        this.ctx.drawImage(this.topImg,this.x,this.topY);
        this.ctx.drawImage(this.botImg,this.x,this.botY);
        this.ctx.rect(this.x,this.topY,this.imgWidth,this.imgHeight);
        this.ctx.rect(this.x,this.botY,this.imgWidth,this.imgHeight);
        this.x-=this.speed;
        if(this.x<=-this.topImg.width) {
            this.x+=18*this.imgWidth;
        }
    }
    Pipe.prototype.initHeight=function () {
        var randomH = 80 * Math.random();
        var minH = 140;
        var h = randomH + minH;
        this.topY = -this.imgHeight + h;
        this.botY = h + this.space;
    }
    fb.Pipe=Pipe;
})(fb)
