/**
 * User: Martin Fünning (JAKOTA Design Group GmbH)
 * Date: 16.12.13
 * Time: 15:05
 */

var NoServer = function (parent) {
    this.parent = parent;
};
NoServer.prototype = {

    countdown: 10,

    initialize: function () {

        this.image = this.parent.svg.image('img/interface_no-server.png', 0, 0, '100%', '100%');
        this.image.attr({
            opacity: 0
        });

        this.text = this.parent.svg.text('50%', '50%', this.countdown);
        this.text.attr({
            fill: "#fff",
            opacity: 0,
            "font-size": "50px",
            "text-anchor": "middle",
            "font-family": 'DINAlternateMedium'
        });

        this.text.animate({opacity: 1}, 500, mina.easeout, function () {
        });
        this.image.animate({opacity: 1}, 500, mina.easeout, function () {
            for (var i = this.countdown; i > 0; i--) {
                _.delay(_.bind(function (countdown) {
                    countdown = this.countdown - countdown;
                    this.text.attr('text', countdown);
                    if (countdown == 0) {
                        this.parent.connect();
                    }
                }, this, i), (1000 * i))
            }


        }.bind(this));
    },
    destroy: function (callback) {
        this.text.animate({opacity: 0}, 500, mina.easeout, function () {
            this.remove();
        });
        this.image.animate({opacity: 1}, 500, mina.easeout, function () {
            this.remove();
            callback();
        });
    }
}
