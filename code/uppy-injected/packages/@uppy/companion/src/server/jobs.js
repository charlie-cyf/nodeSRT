var SRTlib = require('SRT-util');
const schedule = require('node-schedule');
const {FILE_NAME_PREFIX} = require('./Uploader');
const fs = require('fs');
const path = require('path');
const logger = require('./logger');
exports.startCleanUpJob = dirPath => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  logger.info('starting clean up job', 'jobs.cleanup.start');
  schedule.scheduleJob('0 23 * * *', () => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "emptyKey"},');

    return cleanUpFinishedUploads(dirPath);
        SRTlib.send('], "end": "emptyKey"},');

  });
    SRTlib.send('], "end": "emptyKey2"},');

};
const cleanUpFinishedUploads = dirPath => {
    SRTlib.send(`{ "anonymous": false, "function": "cleanUpFinishedUploads", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  logger.info(`running clean up job for path: ${dirPath}`, 'jobs.cleanup.progress.read');
  fs.readdir(dirPath, (err, files) => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    if (err) {
      logger.error(err, 'jobs.cleanup.read.error');
            SRTlib.send('], "end": "emptyKey6"},');

      return;
    }
    logger.info(`found ${files.length} files`, 'jobs.cleanup.files');
    files.forEach((file, fileIndex) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (!file.startsWith(FILE_NAME_PREFIX)) {
        logger.info(`skipping file ${file}`, 'jobs.cleanup.skip');
                SRTlib.send('], "end": "emptyKey5"},');

        return;
      }
      const fullPath = path.join(dirPath, file);
      fs.stat(fullPath, (err, stats) => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        const twelveHoursAgo = 12 * 60 * 60 * 1000;
        if (err) {
          logger.error(err, 'jobs.cleanup.stat.error');
        } else if (new Date() - stats.mtime < twelveHoursAgo) {
          logger.info(`skipping file ${file}`, 'jobs.cleanup.skip');
                    SRTlib.send('], "end": "emptyKey4"},');

          return;
        }
        logger.info(`deleting file ${file}`, 'jobs.cleanup.progress.delete');
        fs.unlink(fullPath, err => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          if (err) logger.error(err, 'jobs.cleanup.delete.error');
                    SRTlib.send('], "end": "emptyKey3"},');

        });
                SRTlib.send('], "end": "emptyKey4"},');

      });
            SRTlib.send('], "end": "emptyKey5"},');

    });
        SRTlib.send('], "end": "emptyKey6"},');

  });
    SRTlib.send('], "end": "cleanUpFinishedUploads"},');

};
