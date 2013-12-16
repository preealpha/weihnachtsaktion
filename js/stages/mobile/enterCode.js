/**
 * User: Martin Fünning (JAKOTA Design Group GmbH)
 * Date: 16.12.13
 * Time: 16:17
 */

var EnterCode = function (parent) {
    this.parent = parent;
};
EnterCode.prototype = {
    initialize: function () {

        this.image = this.parent.svg.image('img/interface_no-server.png', 0, 0);
        this.image.attr({
            opacity: 0
        });
        this.resize({width: $(window).width(), height: $(window).height()});

        this.image.animate({opacity: 1}, 500, mina.easeout, function () {
        });
    },

    resize: function (size) {
        if (_.isUndefined(this.image.normalSize)) {
            this.image.normalSize = this.image.getBBox();
        }
        var ratio = this.image.normalSize.width / this.image.normalSize.height;

        var fitHorizontal = {
            width: size.height * ratio,
            height: size.height
        }

        var fitVertical = {
            width: size.width,
            height: size.width / ratio
        }

        var actualSize = {};

        if (fitHorizontal.width <= size.width && fitHorizontal.height <= size.height) {
            this.image.normalSize.attr({
                width: fitHorizontal.width + 'px',
                height: fitHorizontal.height + 'px'
            });
            actualSize = fitHorizontal;
        } else {
            this.image.normalSize.attr({
                width: fitVertical.width + 'px',
                height: fitVertical.height + 'px'
            });
            actualSize = fitVertical;
        }

        var position = {
            x: (size.width / 2) - (actualSize.width / 2),
            y: (size.height / 2) - (actualSize.height / 2)
        }
        this.image.normalSize.attr(position);
    },

    destroy: function (callback) {
        this.image.animate({opacity: 1}, 500, mina.easeout, function () {
            this.remove();
            callback();
        });
    }
}


/*
 $(window).bind('orientationchange resize', function(event){
 if(event.orientation) {
 if (event.orientation == 'landscape') {
 if (window.rotation == 90) {
 rotate(this, -90);
 } else {
 rotate(this, 90);
 }
 }
 });

 function rotate(el, degs) {
 iedegs = degs/90;
 if (iedegs < 0) iedegs += 4);
 transform = 'rotate('+degs+'deg)';
 iefilter = 'progid:DXImageTransform.Microsoft.BasicImage(rotation='+iedegs+')';
 styles = {
 transform: transform,
 '-webkit-transform': transform,
 '-moz-transform': transform,
 '-o-transform': transform,
 filter: iefilter,
 '-ms-filter': iefilter
 };
 $(el).css(styles);
 }
 */