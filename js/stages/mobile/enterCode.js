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
        this.image = {};
        this.image.portrait = this.parent.svg.image('img/interface_code_w-mann.png', 0, 0);
        this.image.portrait.normalSize = {width: 400, height: 533};
        this.image.portrait.attr({opacity: 0});

        this.image.landscape = this.parent.svg.image('img/interface_code_w-mann_portrait.png', 0, 0);
        this.image.landscape.normalSize = {width: 533, height: 400};
        this.image.landscape.attr({opacity: 0});

        this.bubble = this.parent.svg.image('img/interface_code_blase.png', 0, 0);
        this.bubble.normalSize = {width: 400, height: 350};

        this.text = this.parent.svg.text(30, 30, '');
        this.text.attr({
            fill: "#000000",
            opacity: 1,
            "font-size": 20,
            "text-anchor": "middle",
            "font-family": 'DINAlternateMedium'
        });

        this.button0 = new this.button(
            this,
            'img/interface_code_0-def.png',
            'img/interface_code_0-act.png',
            0, 0, 120, 60,
            function () {
            }.bind(this),
            function () {
            }.bind(this),
            function () {
                var text = this.text.attr('text');
                if (text.length < 4) {
                    text += '0'
                }
                if (text.length == 4) {
                    this.parent.trigger('DOJOIN', text);
                }
                this.text.attr('text', text);
            }.bind(this)
        );

        this.button1 = new this.button(
            this,
            'img/interface_code_1-def.png',
            'img/interface_code_1-act.png',
            0, 0, 80, 60,
            function () {
            }.bind(this),
            function () {
            }.bind(this),
            function () {
                var text = this.text.attr('text');
                if (text.length < 4) {
                    text += '1'
                }
                if (text.length == 4) {
                    this.parent.trigger('DOJOIN', text);
                }
                this.text.attr('text', text);
            }.bind(this)
        );

        this.button2 = new this.button(
            this,
            'img/interface_code_2-def.png',
            'img/interface_code_2-act.png',
            0, 0, 80, 60,
            function () {
            }.bind(this),
            function () {
            }.bind(this),
            function () {
                var text = this.text.attr('text');
                if (text.length < 4) {
                    text += '2'
                }
                if (text.length == 4) {
                    this.parent.trigger('DOJOIN', text);
                }
                this.text.attr('text', text);
            }.bind(this)
        );

        this.button3 = new this.button(
            this,
            'img/interface_code_3-def.png',
            'img/interface_code_3-act.png',
            0, 0, 80, 60,
            function () {
            }.bind(this),
            function () {
            }.bind(this),
            function () {
                var text = this.text.attr('text');
                if (text.length < 4) {
                    text += '3'
                }
                if (text.length == 4) {
                    this.parent.trigger('DOJOIN', text);
                }
                this.text.attr('text', text);
            }.bind(this)
        );

        this.button4 = new this.button(
            this,
            'img/interface_code_4-def.png',
            'img/interface_code_4-act.png',
            0, 0, 80, 60,
            function () {
            }.bind(this),
            function () {
            }.bind(this),
            function () {
                var text = this.text.attr('text');
                if (text.length < 4) {
                    text += '4'
                }
                if (text.length == 4) {
                    this.parent.trigger('DOJOIN', text);
                }
                this.text.attr('text', text);
            }.bind(this)
        );

        this.button5 = new this.button(
            this,
            'img/interface_code_5-def.png',
            'img/interface_code_5-act.png',
            0, 0, 80, 60,
            function () {
            }.bind(this),
            function () {
            }.bind(this),
            function () {
                var text = this.text.attr('text');
                if (text.length < 4) {
                    text += '5'
                }
                if (text.length == 4) {
                    this.parent.trigger('DOJOIN', text);
                }
                this.text.attr('text', text);
            }.bind(this)
        );

        this.button6 = new this.button(
            this,
            'img/interface_code_6-def.png',
            'img/interface_code_6-act.png',
            0, 0, 80, 60,
            function () {
            }.bind(this),
            function () {
            }.bind(this),
            function () {
                var text = this.text.attr('text');
                if (text.length < 4) {
                    text += '6'
                }
                if (text.length == 4) {
                    this.parent.trigger('DOJOIN', text);
                }
                this.text.attr('text', text);
            }.bind(this)
        );

        this.button7 = new this.button(
            this,
            'img/interface_code_7-def.png',
            'img/interface_code_7-act.png',
            0, 0, 80, 60,
            function () {
            }.bind(this),
            function () {
            }.bind(this),
            function () {
                var text = this.text.attr('text');
                if (text.length < 4) {
                    text += '7'
                }
                if (text.length == 4) {
                    this.parent.trigger('DOJOIN', text);
                }
                this.text.attr('text', text);
            }.bind(this)
        );

        this.button8 = new this.button(
            this,
            'img/interface_code_8-def.png',
            'img/interface_code_8-act.png',
            0, 0, 80, 60,
            function () {
            }.bind(this),
            function () {
            }.bind(this),
            function () {
                var text = this.text.attr('text');
                if (text.length < 4) {
                    text += '8'
                }
                if (text.length == 4) {
                    this.parent.trigger('DOJOIN', text);
                }
                this.text.attr('text', text);
            }.bind(this)
        );

        this.button9 = new this.button(
            this,
            'img/interface_code_9-def.png',
            'img/interface_code_9-act.png',
            0, 0, 80, 60,
            function () {
            }.bind(this),
            function () {
            }.bind(this),
            function () {
                var text = this.text.attr('text');
                if (text.length < 4) {
                    text += '9'
                }
                if (text.length == 4) {
                    this.parent.trigger('DOJOIN', text);
                }
                this.text.attr('text', text);
            }.bind(this)
        );

        this.buttonB = new this.button(
            this,
            'img/interface_code_back-def.png',
            'img/interface_code_back-act.png',
            0, 0, 120, 60,
            function () {
            }.bind(this),
            function () {
            }.bind(this),
            function () {
                var text = this.text.attr('text');
                if (text.length > 0) {
                    text = text.substring(0, text.length - 1)
                }
                this.text.attr('text', text);
            }.bind(this)
        );

        _.delay(_.bind(this.resize, this, {width: $(window).width(), height: $(window).height()}), 100);

    },


    fitScreen: function (screenSize, object) {
        var ratio = object.width / object.height;

        var fitHorizontal = {
            width: screenSize.height * ratio,
            height: screenSize.height
        }

        var fitVertical = {
            width: screenSize.width,
            height: screenSize.width / ratio
        }

        var actualSize = {};

        if (fitHorizontal.width <= screenSize.width && fitHorizontal.height <= screenSize.height) {
            actualSize = fitHorizontal;
        } else {
            actualSize = fitVertical;
        }

        actualSize.x = (screenSize.width / 2) - (actualSize.width / 2);
        actualSize.y = (screenSize.height / 2) - (actualSize.height / 2);
        return actualSize;
    },

    button: function (parent, urlNormal, urlHover, x, y, width, height, callbackMouseDown, callbackMouseUp, callbackClick) {
        this.button = parent.parent.svg.group(
            parent.parent.svg.image(urlNormal, x, y, width, height),
            parent.parent.svg.image(urlHover, x, y, width, height)
        );
        this.button[1].attr({opacity: 0});
        this.button.mousedown(function () {
            this[1].attr({opacity: 1});
            callbackMouseDown();
        });
        this.button.click(function () {
            this[1].attr({opacity: 0});
            callbackClick();
        });
        this.button.mouseup(function () {
            this[1].attr({opacity: 0});
            callbackMouseUp();
        });
        this.button.touchstart(function () {
            this[1].attr({opacity: 1});
            callbackMouseDown();
        });
        this.button.touchend(function () {
            this[1].attr({opacity: 0});
            //callbackClick();
        });
        this.button.touchcancel(function () {
            this[1].attr({opacity: 0});
            callbackMouseUp();
        });

        this.doResize = function (x, y, width, height) {
            this.button[0].attr({x: x, y: y, width: width, height: height});
            this.button[1].attr({x: x, y: y, width: width, height: height});
        }

        this.doRemove = function () {
            this.button.remove();
        }
    },

    resize: function (size) {

        var sizeImagePortrait = this.fitScreen(size, this.image.portrait.normalSize);
        this.image.portrait.attr(sizeImagePortrait);
        var sizeImageLandscape = this.fitScreen(size, this.image.landscape.normalSize);
        this.image.landscape.attr(sizeImageLandscape);

        if (size.width <= size.height) {
            this.image.portrait.attr({opacity: 1});
            this.image.landscape.attr({opacity: 0});
        } else {
            this.image.portrait.attr({opacity: 0});
            this.image.landscape.attr({opacity: 1});
        }

        if (size.width <= size.height) {
            var button3ratio = 80 / 60;
            var button2ratio = 120 / 60;

            var button3Width = size.width / 3;
            var button2Width = size.width / 2;

            var button3Height = button3Width / button3ratio;
            var button2Height = button2Width / button2ratio;

            var button3_1WPosX = 0;
            var button3_2WPosX = button3Width;
            var button3_3WPosX = button3Width * 2;

            var button2_1WPosX = 0;
            var button2_2WPosX = button2Width;

            var button3_1WPosY = size.height - button2Height - (button3Height * 3);
            var button3_2WPosY = size.height - button2Height - button3Height * 2;
            var button3_3WPosY = size.height - button2Height - button3Height;
            var button2_1WPosY = size.height - button2Height;

            var sizeRest = {}
            sizeRest.width = size.width;
            sizeRest.height = size.height - (button2Height + (3 * button3Height));

        } else {
            var button3ratio = 80 / 60;
            var button2ratio = 120 / 60;


            var button3Height = size.height / 4;
            var button2Height = size.height / 4;

            var button3Width = button3Height * button3ratio;
            var button2Width = button2Height * button2ratio;

            var button3_1WPosX = size.width - (button3Width * 3);
            var button3_2WPosX = size.width - (button3Width * 2);
            var button3_3WPosX = size.width - (button3Width * 1);

            var button2_1WPosX = size.width - (button2Width * 2);
            var button2_2WPosX = size.width - (button2Width * 1);

            var button3_1WPosY = size.height - button2Height - (button3Height * 3);
            var button3_2WPosY = size.height - button2Height - button3Height * 2;
            var button3_3WPosY = size.height - button2Height - button3Height;
            var button2_1WPosY = size.height - button2Height;

            var sizeRest = {}
            sizeRest.height = size.height;
            sizeRest.width = size.width - (2 * button2Width);
        }


        var sizeBubble = this.fitScreen(sizeRest, this.bubble.normalSize);
        this.bubble.attr(sizeBubble);

        var fontSizeRatio = sizeBubble.height / this.bubble.normalSize.height;
        this.text.attr({
            x: sizeRest.width / 2,
            y: sizeRest.height / 2 + (20 * fontSizeRatio),
            "font-size": 35 * fontSizeRatio

        });

        this.button1.doResize(button3_1WPosX, button3_1WPosY, button3Width, button3Height);
        this.button2.doResize(button3_2WPosX, button3_1WPosY, button3Width, button3Height);
        this.button3.doResize(button3_3WPosX, button3_1WPosY, button3Width, button3Height);

        this.button4.doResize(button3_1WPosX, button3_2WPosY, button3Width, button3Height);
        this.button5.doResize(button3_2WPosX, button3_2WPosY, button3Width, button3Height);
        this.button6.doResize(button3_3WPosX, button3_2WPosY, button3Width, button3Height);

        this.button7.doResize(button3_1WPosX, button3_3WPosY, button3Width, button3Height);
        this.button8.doResize(button3_2WPosX, button3_3WPosY, button3Width, button3Height);
        this.button9.doResize(button3_3WPosX, button3_3WPosY, button3Width, button3Height);

        this.button0.doResize(button2_1WPosX, button2_1WPosY, button2Width, button2Height);
        this.buttonB.doResize(button2_2WPosX, button2_1WPosY, button2Width, button2Height);

    },

    destroy: function (callback) {
        this.image.portrait.animate({opacity: 1}, 500, mina.easeout, function () {
            this.remove();
            callback();
        });
        this.image.landscape.animate({opacity: 1}, 500, mina.easeout, function () {
            this.remove();
        });

        this.bubble.animate({opacity: 1}, 500, mina.easeout, function () {
            this.remove();
        });
        this.text.animate({opacity: 1}, 500, mina.easeout, function () {
            this.remove();
        });
        this.button0.doRemove();
        this.button1.doRemove();
        this.button2.doRemove();
        this.button3.doRemove();
        this.button4.doRemove();
        this.button5.doRemove();
        this.button6.doRemove();
        this.button7.doRemove();
        this.button8.doRemove();
        this.button9.doRemove();
        this.buttonB.doRemove();
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