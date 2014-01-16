/**
 * User: Martin Fünning (JAKOTA Design Group GmbH)
 * Date: 18.12.13
 * Time: 17:56
 */
/**
 * User: Martin Fünning (JAKOTA Design Group GmbH)
 * Date: 18.12.13
 * Time: 17:49
 */
var Game = function (parent) {
    this.parent = parent;
};
Game.prototype = {
    initialize: function () {
        this.buttonLeft = this.parent.svg.rect(0, 0, 100, 100)
        this.buttonLeft.attr({
            fill: '#000000'
        });

        this.buttonRight = this.parent.svg.rect(0, 0, 100, 100)
        this.buttonRight.attr({
            fill: '#000000'
        });

        this.buttonCancel = this.parent.svg.rect(0, 0, 100, 100)
        this.buttonCancel.attr({
            fill: '#000000'
        });

        _.delay(_.bind(this.resize, this, {width: $(window).width(), height: $(window).height()}), 100);
    },

    buttonaction: function (action) {
        switch (action) {
            case 'RIGHT_DOWN':
                this.buttonRight.attr({fill: '#00ff00'});
                break;
            case 'RIGHT_UP':
                this.buttonRight.attr({fill: '#000000'});
                break;
            case 'LEFT_DOWN':
                this.buttonLeft.attr({fill: '#0000ff'});
                break;
            case 'LEFT_UP':
                this.buttonLeft.attr({fill: '#000000'});
                break;
        }
    },

    ping: function () {
        this.buttonCancel.attr({fill: '#ff0000'});
        this.buttonCancel.animate({fill: '#000000'}, 100);
    },

    resize: function (size) {

        this.buttonCancel.attr({
            x: 0,
            y: 0,
            width: (size.height / 2),
            height: 30
        });

        this.buttonLeft.attr({
            x: 0,
            y: 30,
            width: (size.height / 2) / 2,
            height: size.height - 30
        });

        this.buttonRight.attr({
            x: (size.height / 2) / 2,
            y: 30,
            width: (size.height / 2) / 2,
            height: size.height - 30
        });
    },
    destroy: function (callback) {
        this.buttonLeft.remove();
        this.buttonRight.remove();
        this.buttonCancel.remove();
        callback();
    }
}