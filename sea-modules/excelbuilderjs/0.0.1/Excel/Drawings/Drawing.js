/**
 * This is mostly a global spot where all of the relationship managers can get and set
 * path information from/to.
 * @module Excel/Drawing
 */

define(function(require, exports, module) {
    var _ = require("underscore");
    var AbsoluteAnchor = require("./AbsoluteAnchor.js");
    var OneCellAnchor = require("./OneCellAnchor.js");
    var TwoCellAnchor = require("./TwoCellAnchor.js");

    "use strict";
    /**
     * @constructor
     */
    var Drawing = function () {
        this.id = _.uniqueId('Drawing');
    };

    _.extend(Drawing.prototype, {
        /**
         *
         * @param {String} type Can be 'absoluteAnchor', 'oneCellAnchor', or 'twoCellAnchor'.
         * @param {Object} config Shorthand - pass the created anchor coords that can normally be used to construct it.
         * @returns {Anchor}
         */
        createAnchor: function (type, config) {
            config = config || {};
            config.drawing = this;
            switch(type) {
                case 'absoluteAnchor':
                    this.anchor = new AbsoluteAnchor(config);
                    break;
                case 'oneCellAnchor':
                    this.anchor = new OneCellAnchor(config);
                    break;
                case 'twoCellAnchor':
                    this.anchor = new TwoCellAnchor(config);
                    break;
            }
            return this.anchor;
        }
    });

    module.exports = Drawing;
});