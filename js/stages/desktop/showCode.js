/**
 * User: Martin Fünning (JAKOTA Design Group GmbH)
 * Date: 16.12.13
 * Time: 15:05
 */

var ShowCode = function (parent, code) {
    this.parent = parent;
    this.code = code;
};
ShowCode.prototype = {
    initialize: function () {

        this.image = this.parent.svg.image('img/interface_client.png', 0, 0, '100%', '100%');
        this.image.attr({
            opacity: 0
        });

        this.text = this.parent.svg.text('50%', '90%', this.code);
        this.text.attr({
            fill: "#fff",
            opacity: 0,
            "font-size": "60px",
            "text-anchor": "middle",
            "font-family": 'DINAlternateMedium'
        });


        this.text.animate({opacity: 1}, 500, mina.easeout, function () {
        });
        this.image.animate({opacity: 1}, 500, mina.easeout, function () {
        });
    },
    destroy: function (callback) {

        this.image.animate({opacity: 1}, 500, mina.easeout, function () {
            this.remove();
        });
        this.text.animate({opacity: 0}, 500, mina.easeout, function () {
            this.remove();
            callback()
        });
    }
}