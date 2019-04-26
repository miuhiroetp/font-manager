var fontManager = require('../');
var assert = require('assert');

// some standard fonts that are likely to be installed on the platform the tests are running on
var standardFont = process.platform === 'linux' ? 'Liberation Sans' : 'Arial';
var postscriptName = process.platform === 'linux' ? 'LiberationSans' : 'ArialMT';

assert.equal(typeof fontManager.getAvailableFonts, 'function');
assert.equal(typeof fontManager.getAvailableFontsSync, 'function');
assert.equal(typeof fontManager.findFonts, 'function');
assert.equal(typeof fontManager.findFontsSync, 'function');
assert.equal(typeof fontManager.findFont, 'function');
assert.equal(typeof fontManager.findFontSync, 'function');
assert.equal(typeof fontManager.substituteFont, 'function');
assert.equal(typeof fontManager.substituteFontSync, 'function');

var fonts = fontManager.getAvailableFontsSync();

console.log(fonts);
