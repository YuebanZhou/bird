;(function (w) {
    w.fb={};
    var ImgLoad=function () {};
    ImgLoad.prototype.loadImage=function (callback) {
        var imgarr=['birds', 'land', 'pipe1', 'pipe2', 'sky'];
        var imgobj={};
        var index=0;
        imgarr.forEach(function (item) {
            var img=new Image();
            img.onload=function () {
                index++;
                imgobj[item]=img;
                if(index==imgarr.length) {
                    callback&&callback(imgobj);
                }
            }
            img.src='images/' + item + '.png';
        })
    }
    fb.ImgLoad=ImgLoad;
})(window)