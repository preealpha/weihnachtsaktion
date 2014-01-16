/**
 * User: Martin Fünning (JAKOTA Design Group GmbH)
 * Date: 18.12.13
 * Time: 17:49
 */
var GameController = function (parent) {
    this.parent = parent;
};
GameController.prototype = {
    initialize: function () {
        this.buttonLeft = this.parent.svg.rect(0, 0, 100, 100)
        this.buttonLeft.attr({
            fill: '#0000ff'
        });
        this.buttonLeft.mousedown(function () {
            this.parent.trigger('PUSHBUTTON', 'LEFT_DOWN');
        }.bind(this));
        this.buttonLeft.mouseup(function () {
            this.parent.trigger('PUSHBUTTON', 'LEFT_UP');
        }.bind(this));

        this.buttonRight = this.parent.svg.rect(0, 0, 100, 100)
        this.buttonRight.attr({
            fill: '#00ff00'
        });
        this.buttonRight.mousedown(function () {
            this.parent.trigger('PUSHBUTTON', 'RIGHT_DOWN');
        }.bind(this));
        this.buttonRight.mouseup(function () {
            this.parent.trigger('PUSHBUTTON', 'RIGHT_UP');
        }.bind(this));

        this.buttonCancel = this.parent.svg.rect(0, 0, 100, 100)
        this.buttonCancel.attr({
            fill: '#ff0000'
        });
        this.buttonCancel.click(function () {
            this.parent.trigger('CLOSE');
        }.bind(this));

        this.timeout = window.setInterval(function () {
            this.parent.trigger('PING');
        }.bind(this), 1000);

        _.delay(_.bind(this.resize, this, {width: $(window).width(), height: $(window).height()}), 100);
    },
    resize: function (size) {
        this.buttonCancel.attr({
            x: 0,
            y: 0,
            width: size.width,
            height: 70
        });

        this.buttonLeft.attr({
            x: 0,
            y: 70,
            width: size.width / 2,
            height: size.height - 30
        });

        this.buttonRight.attr({
            x: size.width / 2,
            y: 70,
            width: size.width / 2,
            height: size.height - 30
        });
    },
    destroy: function (callback) {
        window.clearTimeout(this.timeout);
        this.buttonLeft.remove();
        this.buttonRight.remove();
        this.buttonCancel.remove();
        callback();
    }
}