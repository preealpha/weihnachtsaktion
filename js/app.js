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

        // SVG Bühne erstellen
        this.svg = Snap('100%', '100%');

        var c = this.svg.rect(0, 0, 10, 10);
        c.attr({
            fill: "#bada55",
            stroke: "#000",
            strokeWidth: 0,
            height: '100%'
        });

        // Überprüfen, ob wir uns auf einer Mobil oder Destomumgebung befinden
        this.mode = jQuery.browser.mobile ? BROWSER_MOBILE : BROWSER_DESKTOP;

        //Verbindung zum Socketserver
        this.ws = new WebSocket(this.socketAddr);
        this.ws.onopen = this.events.websocketConnect.bind(this);
        this.ws.onmessage = this.events.websocketMessage.bind(this);
        this.ws.onerror = this.events.websocketError.bind(this);
        this.ws.onclose = this.events.websocketClose.bind(this);

    },
    events: {
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
            console.log('Websocket Close')
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
         * Wird getriggert, wenn der Server eine neue ID schickt
         */
        ID: function (options) {
            console.log(options.data.value);
        }

    }
}

var app = new App();

