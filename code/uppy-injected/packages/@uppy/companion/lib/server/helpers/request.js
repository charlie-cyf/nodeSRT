var SRTlib = require('SRT-util');
const http = require('http');
const https = require('https');
const dns = require('dns');
const ipAddress = require('ip-address');
const FORBIDDEN_IP_ADDRESS = 'Forbidden IP address';
function isIPAddress(address) {
    SRTlib.send(`{ "anonymous": false, "function": "isIPAddress", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const addressAsV6 = new ipAddress.Address6(address);
  const addressAsV4 = new ipAddress.Address4(address);
    SRTlib.send('], "end": "isIPAddress"},');

  return addressAsV6.isValid() || addressAsV4.isValid();
    SRTlib.send('], "end": "isIPAddress"},');

}
function isPrivateIP(ipAddress) {
    SRTlib.send(`{ "anonymous": false, "function": "isPrivateIP", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
    SRTlib.send('], "end": "isPrivateIP"},');

  return isPrivate;
    SRTlib.send('], "end": "isPrivateIP"},');

}
module.exports.FORBIDDEN_IP_ADDRESS = FORBIDDEN_IP_ADDRESS;
module.exports.getProtectedHttpAgent = (protocol, blockPrivateIPs) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  if (blockPrivateIPs) {
        SRTlib.send('], "end": "emptyKey"},');

    return protocol.startsWith('https') ? HttpsAgent : HttpAgent;
  }
    SRTlib.send('], "end": "emptyKey"},');

  return protocol.startsWith('https') ? https.Agent : http.Agent;
    SRTlib.send('], "end": "emptyKey"},');

};
function dnsLookup(hostname, options, callback) {
    SRTlib.send(`{ "anonymous": false, "function": "dnsLookup", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  dns.lookup(hostname, options, (err, addresses, maybeFamily) => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    if (err) {
      callback(err, addresses, maybeFamily);
            SRTlib.send('], "end": "emptyKey2"},');

      return;
    }
    const toValidate = Array.isArray(addresses) ? addresses : [{
      address: addresses
    }];
    for (const record of toValidate) {
      if (isPrivateIP(record.address)) {
        callback(new Error(FORBIDDEN_IP_ADDRESS), addresses, maybeFamily);
                SRTlib.send('], "end": "emptyKey2"},');

        return;
      }
    }
    callback(err, addresses, maybeFamily);
        SRTlib.send('], "end": "emptyKey2"},');

  });
    SRTlib.send('], "end": "dnsLookup"},');

}
class HttpAgent extends http.Agent {
  createConnection(options, callback) {
        SRTlib.send(`{ "anonymous": false, "function": "HttpAgent.createConnection", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    options.lookup = dnsLookup;
    if (isIPAddress(options.host) && isPrivateIP(options.host)) {
      callback(new Error(FORBIDDEN_IP_ADDRESS));
            SRTlib.send('], "end": "createConnection"},');

      return;
    }
        SRTlib.send('], "end": "createConnection"},');

    return super.createConnection(options, callback);
        SRTlib.send('], "end": "createConnection"},');

  }
}
class HttpsAgent extends https.Agent {
  createConnection(options, callback) {
        SRTlib.send(`{ "anonymous": false, "function": "HttpsAgent.createConnection", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    options.lookup = dnsLookup;
    if (isIPAddress(options.host) && isPrivateIP(options.host)) {
      callback(new Error(FORBIDDEN_IP_ADDRESS));
            SRTlib.send('], "end": "createConnection"},');

      return;
    }
        SRTlib.send('], "end": "createConnection"},');

    return super.createConnection(options, callback);
        SRTlib.send('], "end": "createConnection"},');

  }
}
