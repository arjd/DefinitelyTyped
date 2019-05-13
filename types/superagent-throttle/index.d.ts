// Type definitions for superagent-throttle 1.0
// Project: http://leviwheatcroft.github.io/superagent-throttle
// Definitions by: Adam Dornford <https://github.com/arjd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as request from 'superagent';

type int = number;

declare namespace plugin {
    class Throttle {
        constructor(options: {
            active: boolean;
            rate?: int;
            ratePer?: int;
            concurrent?: int;
        })
        plugin(): request.Plugin;
    }
}

export = plugin.Throttle;
