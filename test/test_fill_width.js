
import {test, describe} from 'ava-spec';

const txt_tocfill = require('../src/txt_tocfill.js'),
      compute     = txt_tocfill.compute,
      maxlen      = txt_tocfill.maxlen;




describe('maxlen', async it => {
    it('says ["a","ab","abc"] is 3', t => t.is(maxlen(['a', 'ab', 'abc']), 3));
    it('says [] is 0',               t => t.is(maxlen([]),                 0));
    it('says [""] is 0',             t => t.is(maxlen(['']),               0));
});

// todo assert that for any randomly generated array of strings, the outputs are all the same length
