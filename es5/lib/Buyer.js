'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var assert = require('assert');
var merge = require('merge');
var XMLUtils = require('./XMLUtils');

var defaultOptions = {
  postAddress: {}
};

var Buyer = function () {
  function Buyer(options) {
    _classCallCheck(this, Buyer);

    this._options = merge.recursive(true, defaultOptions, options || {});

    assert(typeof this._options.name === 'string' && this._options.name.trim().length > 0, 'Valid Name field missing from buyer options');

    assert(typeof this._options.zip === 'string', 'Zip field missing from buyer options');

    assert(typeof this._options.city === 'string' && this._options.city.trim().length > 0, 'Valid City field missing from buyer options');

    assert(typeof this._options.address === 'string' && this._options.address.trim().length > 0, 'Valid Address field missing from buyer options');
  }

  _createClass(Buyer, [{
    key: '_generateXML',
    value: function _generateXML(indentLevel) {
      indentLevel = indentLevel || 0;

      return XMLUtils.wrapWithElement('vevo', [['nev', this._options.name], ['orszag', this._options.country], ['irsz', this._options.zip], ['telepules', this._options.city], ['cim', this._options.address], ['email', this._options.email], ['sendEmail', this._options.sendEmail], ['adoszam', this._options.taxNumber], ['adoszamEU', this._options.taxNumberEU], ['postazasiNev', this._options.postAddress.name], ['postazasiOrszag', this._options.postAddress.country], ['postazasiIrsz', this._options.postAddress.zip], ['postazasiTelepules', this._options.postAddress.city], ['postazasiCim', this._options.postAddress.address],
      // TODO: The following feature hasn't implemented yet
      // ['vevoFokonyv', ],
      ['azonosito', this._options.identifier], ['alairoNeve', this._options.issuerName], ['telefonszam', this._options.phone], ['megjegyzes', this._options.comment]], indentLevel);
    }
  }]);

  return Buyer;
}();

module.exports = Buyer;