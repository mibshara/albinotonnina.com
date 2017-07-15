import $ from 'jquery';

export default {
    iskey: 0,
    keylast: 0,
    keyfreq: Math.floor(Math.random() * (7 - 4 + 1)) + 4,
    lightfreq: Math.floor(Math.random() * (30 - 10 + 1)) + 10,
    lightlast: 'none',
    islight: 0,
    mousefreq: Math.floor(Math.random() * (50 - 30 + 1)) + 30,
    ismouse: 0,
    mouselast: 0,
    minY: 3600,
    maxY: 5800,
    newq: [0, 0],

    render: function (pos, obj) {

        // console.log('obj.curTop',obj.curTop);

        if (obj.curTop > 5550 && obj.curTop < 5900) {

            if (document.getElementById('vimeoPlayer') == null) {
                Site.addVideoPlayer();
            }

            const rect = document.getElementById('iphone5positionpath').getBoundingClientRect();

            $('#videoPlayer').css({
                left: rect.left + 'px',
                top: rect.top + 'px',
                width: rect.width + 'px',
                height: rect.height + 'px'
            });

        }

        if (obj.curTop > this.minY && obj.curTop < this.maxY) {
            if (obj.curTop - this.iskey > this.keyfreq && obj.direction == "down" || this.iskey - obj.curTop > this.keyfreq && obj.direction == "up") {
                $('#scene5 #keyboard rect:eq( ' + this.keylast + ' )').css('fill', '#ccd1d9');
                $('#scene5 #keyboard2 rect:eq( ' + this.keylast + ' )').css('fill', '#f7f9f8');
                $('#scene5 #keyboard3 rect:eq( ' + this.keylast + ' )').css('fill', '#f7f9f8');
                this.keylast = Math.floor((Math.random() * 50) + 1);
                $('#scene5 #keyboard rect:eq( ' + this.keylast + ' )').css('fill', '#aab2bd');
                $('#scene5 #keyboard2 rect:eq( ' + this.keylast + ' )').css('fill', '#aab2bd');
                $('#scene5 #keyboard3 rect:eq( ' + this.keylast + ' )').css('fill', '#aab2bd');
                this.iskey = obj.curTop;

            }
            if (obj.curTop - this.islight > this.lightfreq && obj.direction == "down" || this.islight - obj.curTop > this.lightfreq && obj.direction == "up") {
                this.lightlast = this.lightlast == 'none' ? 'inline' : 'none';
                $('#imaclight').css('display', this.lightlast);
                this.islight = obj.curTop;
            }
        }
    }
};