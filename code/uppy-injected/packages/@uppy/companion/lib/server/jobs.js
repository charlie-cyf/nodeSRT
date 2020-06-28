const SRTlib = require('SRT-util');

const schedule = require('node-schedule');
const {FILE_NAME_PREFIX} = require('./Uploader');
const fs = require('fs');
const path = require('path');
const logger = require('./logger');
/**
* Runs a function every 24 hours, to clean up stale, upload related files.
* @param {string} dirPath path to the directory which you want to clean
*/
exports.startCleanUpJob = dirPath => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.startCleanUpJob","fileName":"${__filename}","paramsNumber":1},`);

  logger.info('starting clean up job', 'jobs.cleanup.start');
  // run once a day
  schedule.scheduleJob('0 23 * * *', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"schedule.scheduleJob","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"schedule.scheduleJob"},');

    return cleanUpFinishedUploads(dirPath);
        SRTlib.send('{"type":"FUNCTIONEND","function":"schedule.scheduleJob"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.startCleanUpJob"},');

};
const cleanUpFinishedUploads = dirPath => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"cleanUpFinishedUploads","fileName":"${__filename}","paramsNumber":1},`);

  logger.info(`running clean up job for path: ${dirPath}`, 'jobs.cleanup.progress.read');
  fs.readdir(dirPath, (err, files) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"fs.readdir","fileName":"${__filename}","paramsNumber":2},`);

    if (err) {
      logger.error(err, 'jobs.cleanup.read.error');
            SRTlib.send('{"type":"FUNCTIONEND","function":"fs.readdir"},');

      return;
    }
    logger.info(`found ${files.length} files`, 'jobs.cleanup.files');
    files.forEach((file, fileIndex) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"files.forEach","fileName":"${__filename}","paramsNumber":2},`);

      // if it does not contain FILE_NAME_PREFIX then it probably wasn't created by companion.
      // this is to avoid deleting unintended files, e.g if a wrong path was accidentally given
      // by a developer.
      if (!file.startsWith(FILE_NAME_PREFIX)) {
        logger.info(`skipping file ${file}`, 'jobs.cleanup.skip');
                SRTlib.send('{"type":"FUNCTIONEND","function":"files.forEach"},');

        return;
      }
      const fullPath = path.join(dirPath, file);
      fs.stat(fullPath, (err, stats) => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"fs.stat","fileName":"${__filename}","paramsNumber":2},`);

        const twelveHoursAgo = 12 * 60 * 60 * 1000;
        if (err) {
          // we still delete the file if we can't get the stats
          // but we also log the error
          logger.error(err, 'jobs.cleanup.stat.error');
                  // @ts-ignore
} else if (new Date() - stats.mtime < twelveHoursAgo) {
          logger.info(`skipping file ${file}`, 'jobs.cleanup.skip');
                    SRTlib.send('{"type":"FUNCTIONEND","function":"fs.stat"},');

          return;
        }
        logger.info(`deleting file ${file}`, 'jobs.cleanup.progress.delete');
        fs.unlink(fullPath, err => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"fs.unlink","fileName":"${__filename}","paramsNumber":1},`);

          if (err) logger.error(err, 'jobs.cleanup.delete.error');
                    SRTlib.send('{"type":"FUNCTIONEND","function":"fs.unlink"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"fs.stat"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"files.forEach"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"fs.readdir"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"cleanUpFinishedUploads"},');

};
