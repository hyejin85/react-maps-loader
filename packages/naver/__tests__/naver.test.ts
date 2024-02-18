const assert = require('assert');
const naver = require('../lib/naver');

assert.strict.strictEqual(naver(), 'Hello from naver');
console.info('naver tests passed');
