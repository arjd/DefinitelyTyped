// Type definitions for superagent-retry-delay 2.2.4
// Project: https://github.com/luispabon/superagent-retry-delay
// Definitions by: Adam Dornford <https://github.com/arjd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import * as superagent from 'superagent';
import * as https from 'https';
import * as stream from 'stream';
import * as cookiejar from 'cookiejar';

type primitives = string | number | symbol;
type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

type CallbackHandler = (err: any, res: superagent.Response) => void;
type Serializer = (obj: any) => string;
type BrowserParser = (str: string) => any;
type NodeParser = (res: superagent.Response, callback: (err: Error | null, body: any) => void) => void;

type Parser = BrowserParser | NodeParser;

declare const RetryDelay: plugin.RetryDelay;

declare namespace plugin {
    interface RetryDelay {
         (agent: superagent.SuperAgentStatic): plugin.SuperAgentStaticRetryDelay
    }

    interface RequestRetryDelay extends Omit<superagent.SuperAgentRequest, 'retry'> { }

    interface SuperAgentRequestRetryDelay extends RequestRetryDelay {
        retry(retries?: number, delays?: number[] | number, allowedStatuses?: number[]): this;
    }

    interface SuperAgentStaticRetryDelay extends SuperAgent<SuperAgentRequestRetryDelay> {
        (url: string): SuperAgentRequestRetryDelay;
        (method: string, url: string): SuperAgentRequestRetryDelay;

        agent(): this & RequestRetryDelay;
        serialize: { [type: string]: Serializer };
        parse: { [type: string]: Parser };
    }

    interface SuperAgent<Req extends SuperAgentRequestRetryDelay> extends stream.Stream {
        jar: cookiejar.CookieJar;
        attachCookies(req: Req): void;
        checkout(url: string, callback?: CallbackHandler): Req;
        connect(url: string, callback?: CallbackHandler): Req;
        copy(url: string, callback?: CallbackHandler): Req;
        del(url: string, callback?: CallbackHandler): Req;
        delete(url: string, callback?: CallbackHandler): Req;
        get(url: string, callback?: CallbackHandler): Req;
        head(url: string, callback?: CallbackHandler): Req;
        lock(url: string, callback?: CallbackHandler): Req;
        merge(url: string, callback?: CallbackHandler): Req;
        mkactivity(url: string, callback?: CallbackHandler): Req;
        mkcol(url: string, callback?: CallbackHandler): Req;
        move(url: string, callback?: CallbackHandler): Req;
        notify(url: string, callback?: CallbackHandler): Req;
        options(url: string, callback?: CallbackHandler): Req;
        patch(url: string, callback?: CallbackHandler): Req;
        post(url: string, callback?: CallbackHandler): Req;
        propfind(url: string, callback?: CallbackHandler): Req;
        proppatch(url: string, callback?: CallbackHandler): Req;
        purge(url: string, callback?: CallbackHandler): Req;
        put(url: string, callback?: CallbackHandler): Req;
        report(url: string, callback?: CallbackHandler): Req;
        saveCookies(res: Response): void;
        search(url: string, callback?: CallbackHandler): Req;
        subscribe(url: string, callback?: CallbackHandler): Req;
        trace(url: string, callback?: CallbackHandler): Req;
        unlock(url: string, callback?: CallbackHandler): Req;
        unsubscribe(url: string, callback?: CallbackHandler): Req;
    }
}

export = RetryDelay;