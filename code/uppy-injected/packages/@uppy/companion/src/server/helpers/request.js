const SRTlib = require('SRT-util');

const http = require('http');
const https = require('https');
const {URL} = require('url');
const dns = require('dns');
const ipAddress = require('ip-address');
const logger = require('../logger');
const FORBIDDEN_IP_ADDRESS = 'Forbidden IP address';
function isIPAddress(address) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isIPAddress","fileName":"/packages/@uppy/companion/src/server/helpers/request.js","paramsNumber":1},`);

  const addressAsV6 = new ipAddress.Address6(address);
  const addressAsV4 = new ipAddress.Address4(address);
    SRTlib.send('{"type":"FUNCTIONEND","function":"isIPAddress"},');

  return addressAsV6.isValid() || addressAsV4.isValid();
    SRTlib.send('{"type":"FUNCTIONEND","function":"isIPAddress","paramsNumber":1},');

}
function isPrivateIP(ipAddress) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isPrivateIP","fileName":"/packages/@uppy/companion/src/server/helpers/request.js","paramsNumber":1},`);

  let isPrivate = false;
  const ipPrefix = [];
  ipPrefix.push('127.');
  ipPrefix.push('0.');
  ipPrefix.push('10.');
  ipPrefix.push('172.16.');
  ipPrefix.push('172.17.');
  ipPrefix.push('172.18.');
  ipPrefix.push('172.19.');
  ipPrefix.push('172.20.');
  ipPrefix.push('172.21.');
  ipPrefix.push('172.22.');
  ipPrefix.push('172.23.');
  ipPrefix.push('172.24.');
  ipPrefix.push('172.25.');
  ipPrefix.push('172.26.');
  ipPrefix.push('172.27.');
  ipPrefix.push('172.28.');
  ipPrefix.push('172.29.');
  ipPrefix.push('172.30.');
  ipPrefix.push('172.31.');
  ipPrefix.push('192.168.');
  ipPrefix.push('169.254.');
  ipPrefix.push('fc');
  ipPrefix.push('fd');
  ipPrefix.push('fe');
  ipPrefix.push('ff');
  ipPrefix.push('::1');
  const ipToVerify = ipAddress.trim().toLowerCase();
  for (const prefix of ipPrefix) {
    if (ipToVerify.startsWith(prefix)) {
      isPrivate = true;
      break;
    }
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"isPrivateIP"},');

  return isPrivate;
    SRTlib.send('{"type":"FUNCTIONEND","function":"isPrivateIP","paramsNumber":1},');

}
module.exports.FORBIDDEN_IP_ADDRESS = FORBIDDEN_IP_ADDRESS;
module.exports.getRedirectEvaluator = (requestURL, blockPrivateIPs) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.getRedirectEvaluator","fileName":"/packages/@uppy/companion/src/server/helpers/request.js","paramsNumber":2},`);

  const protocol = new URL(requestURL).protocol;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getRedirectEvaluator"},');

  return res => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement","fileName":"/packages/@uppy/companion/src/server/helpers/request.js","paramsNumber":1},`);

    if (!blockPrivateIPs) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

      return true;
    }
    const redirectURL = res.headers.location;
    const shouldRedirect = redirectURL ? new URL(redirectURL).protocol === protocol : false;
    if (!shouldRedirect) {
      logger.info(`blocking redirect from ${requestURL} to ${redirectURL}`, 'redirect.protection');
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

    return shouldRedirect;
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getRedirectEvaluator"},');

};
module.exports.getProtectedHttpAgent = (protocol, blockPrivateIPs) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.getProtectedHttpAgent","fileName":"/packages/@uppy/companion/src/server/helpers/request.js","paramsNumber":2},`);

  if (blockPrivateIPs) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getProtectedHttpAgent"},');

    return protocol.startsWith('https') ? HttpsAgent : HttpAgent;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getProtectedHttpAgent"},');

  return protocol.startsWith('https') ? https.Agent : http.Agent;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getProtectedHttpAgent"},');

};
function dnsLookup(hostname, options, callback) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"dnsLookup","fileName":"/packages/@uppy/companion/src/server/helpers/request.js","paramsNumber":3},`);

  dns.lookup(hostname, options, (err, addresses, maybeFamily) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"dns.lookup","fileName":"/packages/@uppy/companion/src/server/helpers/request.js","paramsNumber":3},`);

    if (err) {
      callback(err, addresses, maybeFamily);
            SRTlib.send('{"type":"FUNCTIONEND","function":"dns.lookup"},');

      return;
    }
    const toValidate = Array.isArray(addresses) ? addresses : [{
      address: addresses
    }];
    for (const record of toValidate) {
      if (isPrivateIP(record.address)) {
        callback(new Error(FORBIDDEN_IP_ADDRESS), addresses, maybeFamily);
                SRTlib.send('{"type":"FUNCTIONEND","function":"dns.lookup"},');

        return;
      }
    }
    callback(err, addresses, maybeFamily);
        SRTlib.send('{"type":"FUNCTIONEND","function":"dns.lookup"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"dnsLookup","paramsNumber":3},');

}
class HttpAgent extends http.Agent {
  createConnection(options, callback) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createConnection","fileName":"/packages/@uppy/companion/src/server/helpers/request.js","paramsNumber":2,"classInfo":{"className":"HttpAgent"}},`);

    options.lookup = dnsLookup;
    if (isIPAddress(options.host) && isPrivateIP(options.host)) {
      callback(new Error(FORBIDDEN_IP_ADDRESS));
            SRTlib.send('{"type":"FUNCTIONEND","function":"createConnection"},');

      return;
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"createConnection"},');

    return super.createConnection(options, callback);
        SRTlib.send('{"type":"FUNCTIONEND","function":"createConnection"},');

  }
}
class HttpsAgent extends https.Agent {
  createConnection(options, callback) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createConnection","fileName":"/packages/@uppy/companion/src/server/helpers/request.js","paramsNumber":2,"classInfo":{"className":"HttpsAgent"}},`);

    options.lookup = dnsLookup;
    if (isIPAddress(options.host) && isPrivateIP(options.host)) {
      callback(new Error(FORBIDDEN_IP_ADDRESS));
            SRTlib.send('{"type":"FUNCTIONEND","function":"createConnection"},');

      return;
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"createConnection"},');

    return super.createConnection(options, callback);
        SRTlib.send('{"type":"FUNCTIONEND","function":"createConnection"},');

  }
}
