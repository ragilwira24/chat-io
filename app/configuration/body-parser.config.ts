import {json, raw, text, urlencoded} from "body-parser";
import {LogUtil} from "../logger/logger.util";

const log = LogUtil('body-parser.config.ts');

export function bodyParserConfiguration(app: any) {
    app.use(json());
    app.use(raw());
    app.use(text());
    app.use(urlencoded({extended: true}));
    log.info('body-parser successfully configured');
}