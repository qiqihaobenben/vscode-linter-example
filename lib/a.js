"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.async-iterator.js");

require("core-js/modules/es.symbol.has-instance.js");

require("core-js/modules/es.symbol.is-concat-spreadable.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.symbol.match.js");

require("core-js/modules/es.symbol.match-all.js");

require("core-js/modules/es.symbol.replace.js");

require("core-js/modules/es.symbol.search.js");

require("core-js/modules/es.symbol.species.js");

require("core-js/modules/es.symbol.split.js");

require("core-js/modules/es.symbol.to-primitive.js");

require("core-js/modules/es.symbol.to-string-tag.js");

require("core-js/modules/es.symbol.unscopables.js");

require("core-js/modules/es.aggregate-error.js");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.copy-within.js");

require("core-js/modules/es.array.fill.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.array.find.js");

require("core-js/modules/es.array.find-index.js");

require("core-js/modules/es.array.flat.js");

require("core-js/modules/es.array.flat-map.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.array.index-of.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.array.last-index-of.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.array.of.js");

require("core-js/modules/es.array.reduce.js");

require("core-js/modules/es.array.reduce-right.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.array.sort.js");

require("core-js/modules/es.array.species.js");

require("core-js/modules/es.array.splice.js");

require("core-js/modules/es.array.unscopables.flat.js");

require("core-js/modules/es.array.unscopables.flat-map.js");

require("core-js/modules/es.date.to-primitive.js");

require("core-js/modules/es.function.has-instance.js");

require("core-js/modules/es.global-this.js");

require("core-js/modules/es.json.stringify.js");

require("core-js/modules/es.json.to-string-tag.js");

require("core-js/modules/es.map.js");

require("core-js/modules/es.math.acosh.js");

require("core-js/modules/es.math.asinh.js");

require("core-js/modules/es.math.atanh.js");

require("core-js/modules/es.math.cbrt.js");

require("core-js/modules/es.math.clz32.js");

require("core-js/modules/es.math.cosh.js");

require("core-js/modules/es.math.expm1.js");

require("core-js/modules/es.math.fround.js");

require("core-js/modules/es.math.hypot.js");

require("core-js/modules/es.math.log10.js");

require("core-js/modules/es.math.log1p.js");

require("core-js/modules/es.math.log2.js");

require("core-js/modules/es.math.sign.js");

require("core-js/modules/es.math.sinh.js");

require("core-js/modules/es.math.tanh.js");

require("core-js/modules/es.math.to-string-tag.js");

require("core-js/modules/es.math.trunc.js");

require("core-js/modules/es.number.constructor.js");

require("core-js/modules/es.number.epsilon.js");

require("core-js/modules/es.number.is-integer.js");

require("core-js/modules/es.number.is-safe-integer.js");

require("core-js/modules/es.number.max-safe-integer.js");

require("core-js/modules/es.number.min-safe-integer.js");

require("core-js/modules/es.number.parse-float.js");

require("core-js/modules/es.number.parse-int.js");

require("core-js/modules/es.object.assign.js");

require("core-js/modules/es.object.define-getter.js");

require("core-js/modules/es.object.define-properties.js");

require("core-js/modules/es.object.define-property.js");

require("core-js/modules/es.object.define-setter.js");

require("core-js/modules/es.object.entries.js");

require("core-js/modules/es.object.freeze.js");

require("core-js/modules/es.object.from-entries.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/es.object.get-own-property-descriptors.js");

require("core-js/modules/es.object.get-own-property-names.js");

require("core-js/modules/es.object.get-prototype-of.js");

require("core-js/modules/es.object.is-extensible.js");

require("core-js/modules/es.object.is-frozen.js");

require("core-js/modules/es.object.is-sealed.js");

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.object.lookup-getter.js");

require("core-js/modules/es.object.lookup-setter.js");

require("core-js/modules/es.object.prevent-extensions.js");

require("core-js/modules/es.object.seal.js");

require("core-js/modules/es.object.set-prototype-of.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.object.values.js");

require("core-js/modules/es.parse-float.js");

require("core-js/modules/es.parse-int.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.promise.all-settled.js");

require("core-js/modules/es.promise.any.js");

require("core-js/modules/es.promise.finally.js");

require("core-js/modules/es.reflect.apply.js");

require("core-js/modules/es.reflect.construct.js");

require("core-js/modules/es.reflect.define-property.js");

require("core-js/modules/es.reflect.delete-property.js");

require("core-js/modules/es.reflect.get.js");

require("core-js/modules/es.reflect.get-own-property-descriptor.js");

require("core-js/modules/es.reflect.get-prototype-of.js");

require("core-js/modules/es.reflect.has.js");

require("core-js/modules/es.reflect.is-extensible.js");

require("core-js/modules/es.reflect.own-keys.js");

require("core-js/modules/es.reflect.prevent-extensions.js");

require("core-js/modules/es.reflect.set.js");

require("core-js/modules/es.reflect.set-prototype-of.js");

require("core-js/modules/es.reflect.to-string-tag.js");

require("core-js/modules/es.regexp.constructor.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.regexp.flags.js");

require("core-js/modules/es.regexp.sticky.js");

require("core-js/modules/es.regexp.test.js");

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/es.set.js");

require("core-js/modules/es.string.code-point-at.js");

require("core-js/modules/es.string.ends-with.js");

require("core-js/modules/es.string.from-code-point.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.string.match.js");

require("core-js/modules/es.string.match-all.js");

require("core-js/modules/es.string.pad-end.js");

require("core-js/modules/es.string.pad-start.js");

require("core-js/modules/es.string.raw.js");

require("core-js/modules/es.string.repeat.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.string.replace-all.js");

require("core-js/modules/es.string.search.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.string.starts-with.js");

require("core-js/modules/es.string.trim.js");

require("core-js/modules/es.string.trim-end.js");

require("core-js/modules/es.string.trim-start.js");

require("core-js/modules/es.typed-array.float32-array.js");

require("core-js/modules/es.typed-array.float64-array.js");

require("core-js/modules/es.typed-array.int8-array.js");

require("core-js/modules/es.typed-array.int16-array.js");

require("core-js/modules/es.typed-array.int32-array.js");

require("core-js/modules/es.typed-array.uint8-array.js");

require("core-js/modules/es.typed-array.uint8-clamped-array.js");

require("core-js/modules/es.typed-array.uint16-array.js");

require("core-js/modules/es.typed-array.uint32-array.js");

require("core-js/modules/es.typed-array.copy-within.js");

require("core-js/modules/es.typed-array.every.js");

require("core-js/modules/es.typed-array.fill.js");

require("core-js/modules/es.typed-array.filter.js");

require("core-js/modules/es.typed-array.find.js");

require("core-js/modules/es.typed-array.find-index.js");

require("core-js/modules/es.typed-array.for-each.js");

require("core-js/modules/es.typed-array.from.js");

require("core-js/modules/es.typed-array.includes.js");

require("core-js/modules/es.typed-array.index-of.js");

require("core-js/modules/es.typed-array.iterator.js");

require("core-js/modules/es.typed-array.join.js");

require("core-js/modules/es.typed-array.last-index-of.js");

require("core-js/modules/es.typed-array.map.js");

require("core-js/modules/es.typed-array.of.js");

require("core-js/modules/es.typed-array.reduce.js");

require("core-js/modules/es.typed-array.reduce-right.js");

require("core-js/modules/es.typed-array.reverse.js");

require("core-js/modules/es.typed-array.set.js");

require("core-js/modules/es.typed-array.slice.js");

require("core-js/modules/es.typed-array.some.js");

require("core-js/modules/es.typed-array.sort.js");

require("core-js/modules/es.typed-array.to-locale-string.js");

require("core-js/modules/es.typed-array.to-string.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/es.weak-set.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/web.immediate.js");

require("core-js/modules/web.queue-microtask.js");

require("core-js/modules/web.url.js");

require("core-js/modules/web.url.to-json.js");

require("core-js/modules/web.url-search-params.js");

var t = require("@babel/types");

var b = "console.log(1);";
var B = /*#__PURE__*/(0, _createClass2.default)(function B() {
  (0, _classCallCheck2.default)(this, B);
});
console.log("line:15&column:0", B);
new _promise.default();

var ast = require("@babel/parser").parse(b);

require("@babel/traverse").default(ast, {
  VariableDeclaration: function VariableDeclaration(path) {
    var tarNode = path.node.declarations[0];

    if (t.isIdentifier(tarNode.id) && t.isNumericLiteral(tarNode.init)) {
      console.log("line:25&column:6", 1);
      tarNode.id.name = "".concat(tarNode.id.name, ": number");
    }

    console.log("line:28&column:4", tarNode);
  }
});

var result = require("@babel/generator").default(ast, {});

console.log("line:34&column:0", result.code);