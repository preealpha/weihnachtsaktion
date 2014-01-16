/**
 * User: Martin Fünning
 * Company: JAKOTA Design Group GmbH
 * Date: 15.12.13
 * Time: 11:45
 */

var BROWSER_MOBILE = 'MOBILE', BROWSER_DESKTOP = 'DESKTOP';
var App = function () {
    this.initialize();
}
App.prototype = {
    socketAddr: 'ws://91.250.100.78:1337',
    /**
     * Konstruktor
     */
    initialize: function () {
        // Wir erwitern unser Objekt um Events
        _.extend(this, Backbone.Events);
        this.on("all", function (eventName) {
            if (_.isFunction(this.events[eventName])) {
                var func = _.bind(this.events[eventName], this, arguments[1]);
                func();
            } else {
                throw eventName + " is not a Event";
            }
        }.bind(this));

        // Überprüfen, ob wir uns auf einer Mobil oder Destomumgebung befinden
        this.mode = jQuery.browser.mobile ? BROWSER_MOBILE : BROWSER_DESKTOP;

        // Hack, wenn #mobile dann starte im mobile mode
        if (window.location.hash == '#mobile') this.mode = BROWSER_MOBILE;

        // SVG Bühne erstellen
        switch (this.mode) {
            case BROWSER_DESKTOP:
                this.svg = Snap('400', '800');
                var lazyResize = _.debounce(function () {
                    this.trigger('resize', {width: $(window).width(), height: $(window).height()});
                }.bind(this), 10);
                $(window).resize(lazyResize);
                lazyResize();
                break;
            case BROWSER_MOBILE:
                this.svg = Snap('100%', '100%');
                var lazyResize = _.debounce(function () {
                    this.trigger('resize', {width: $(window).width(), height: $(window).height()});
                }.bind(this), 10);
                $(window).resize(lazyResize);
                lazyResize();
                break;
        }


        //Verbindung zum Socketserver
        this.connect();

    },
    connect: function () {
        this.ws = new WebSocket(this.socketAddr);
        this.ws.onopen = this.events.websocketConnect.bind(this);
        this.ws.onmessage = this.events.websocketMessage.bind(this);
        this.ws.onerror = this.events.websocketError.bind(this);
        this.ws.onclose = this.events.websocketClose.bind(this);
    },

    stages: [],
    showStage: function (stage) {
        for (var i in this.stages) {
            this.removeStage(i);
        }
        this.stages.push(stage);
        stage.initialize();
    },

    removeStage: function (pos) {
        console.log(pos)
        this.stages[pos].destroy(_.bind(this.clearStage, this, pos));
    },

    clearStage: function (pos) {
        var newStages = [];
        for (var i in this.stages) {
            if (i != pos) {
                newStages.push(this.stages[i])
            }
        }
        this.stages = newStages;
    },

    events: {
        resize: function (size) {

            for (var i in this.stages) {
                if (_.isFunction(this.stages[i].resize)) {
                    this.stages[i].resize(size);
                }
            }
            if (this.mode == BROWSER_DESKTOP) {
                if (_.isUndefined(this.stage)) {
                    this.stage = {
                        width: parseFloat(app.svg.attr('width')),
                        height: parseFloat(app.svg.attr('height'))
                    }
                }
                var ratio = this.stage.width / this.stage.height;

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
                    this.svg.attr({
                        width: fitHorizontal.width + 'px',
                        height: fitHorizontal.height + 'px'
                    });
                    actualSize = fitHorizontal;
                } else {
                    this.svg.attr({
                        width: fitVertical.width + 'px',
                        height: fitVertical.height + 'px'
                    });
                    actualSize = fitVertical;
                }

                var position = {
                    left: (size.width / 2) - (actualSize.width / 2),
                    top: (size.height / 2) - (actualSize.height / 2)
                }
                $('svg').offset(position);
            }


        },
        /**
         * Events für die Verbindung zum Socketserver
         */
        websocketConnect: function () {
            // Teile des Server den Clientmodus mit
            this.ws.send(JSON.stringify({
                command: 'MODE',
                data: { mode: this.mode }
            }));

            // Wenn Clientmodus == DESKTOP frage eine SessionID an
            if (this.mode == BROWSER_DESKTOP) {
                this.trigger('NEWID');
            } else {
                var stage = new EnterCode(this);
                this.showStage(stage);
            }
        },
        websocketMessage: function (msg) {
            try {
                var jsonMessage = JSON.parse(msg.data);
                if (_.isString(jsonMessage.command)) {
                    this.trigger(jsonMessage.command, {data: jsonMessage.data});
                }
            } catch (e) {
            }
        },
        websocketError: function () {
            console.log('Websocket Error')
        },
        websocketClose: function () {
            var stage = new NoServer(this);
            this.showStage(stage);
        },

        // Events von unf für Befehle vom Socketserver

        /**
         * Muss Aktiv getriggert werden, fordert eine neue ID an. Im Erfolgsfall wird der Event ID getriggert.
         * @constructor
         */
        NEWID: function () {
            this.ws.send(JSON.stringify({
                command: 'HOST'
            }));
        },

        /**
         * Joint einer bestehenden Session
         * @constructor
         */
        DOJOIN: function (id) {
            this.ws.send(JSON.stringify({
                command: 'JOIN',
                data: { id: id + '' }
            }));
        },

        /**
         * Wenn ein Mobilclient Joint
         * @constructor
         */
        JOIN: function (options) {
            if (options.data.status) {
                var stage = new GameController(this);
                this.showStage(stage);
            } else {
                this.stages[0].text.attr('text', '');
                alert('Falscher Code');
            }
        },
        JOINED: function (options) {
            var stage = new Game(this);
            this.showStage(stage);
        },


        PING: function () {
            app.ws.send(JSON.stringify({
                command: 'BUTTON',
                data: {action: 'PING'}
            }));
        },

        PUSHBUTTON: function (action) {
            app.ws.send(JSON.stringify({
                command: 'BUTTON',
                data: {action: action}
            }));
        },

        BUTTON: function (options) {
            switch (options.data.action) {
                case 'PING':
                    this.stages[0].ping();
                    break;
                default:
                    this.stages[0].buttonaction(options.data.action);
            }
        },

        CLOSE: function () {
            this.ws.send(JSON.stringify({
                command: 'LEAVE'
            }));
            var stage = new EnterCode(this);
            this.showStage(stage);
        },

        /**
         * Wird getriggert, wenn der Server eine neue ID schickt
         */
        ID: function (options) {
            var stage = new ShowCode(this, options.data.value);
            this.showStage(stage);
        }

    }
}

var app = new App();

