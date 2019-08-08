import { getLogger, Logger } from 'log4js';

export function LogUtil(fileName: string): Logger {
    const log = getLogger(fileName);
    log.level = 'debug';
    return log;
}
