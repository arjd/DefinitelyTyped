import * as request from 'superagent';
import Throttle = require('superagent-throttle');

const throttler = new Throttle({ active: true });

request
    .get('/some-url')
    .use(throttler.plugin())
    .end((err, res) => {
        // Do something
    });
