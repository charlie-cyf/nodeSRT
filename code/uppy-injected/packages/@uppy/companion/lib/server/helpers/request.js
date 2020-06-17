var SRTlib = require('SRT-util');
const http = require('http');
const https = require('https');
const dns = require('dns');
const ipAddress = require('ip-address');
const FORBIDDEN_IP_ADDRESS = 'Forbidden IP address';
function isIPAddress(address) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const addressAsV6 = new ipAddress.Address6(address);
  const addressAsV4 = new ipAddress.Address4(address);
    SRTlib.send("]},");

  return addressAsV6.isValid() || addressAsV4.isValid();
    SRTlib.send("]},");

}
function isPrivateIP(ipAddress) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
    SRTlib.send("]},");

  return isPrivate;
    SRTlib.send("]},");

}
module.exports.FORBIDDEN_IP_ADDRESS = FORBIDDEN_IP_ADDRESS;
module.exports.getProtectedHttpAgent = (protocol, blockPrivateIPs) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  if (blockPrivateIPs) {
        SRTlib.send("]},");

    return protocol.startsWith('https') ? HttpsAgent : HttpAgent;
  }
    SRTlib.send("]},");

  return protocol.startsWith('https') ? https.Agent : http.Agent;
    SRTlib.send("]},");

};
function dnsLookup(hostname, options, callback) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  dns.lookup(hostname, options, (err, addresses, maybeFamily) => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    if (err) {
      callback(err, addresses, maybeFamily);
            SRTlib.send("]},");

      return;
    }
    const toValidate = Array.isArray(addresses) ? addresses : [{
      address: addresses
    }];
    for (const record of toValidate) {
      if (isPrivateIP(record.address)) {
        callback(new Error(FORBIDDEN_IP_ADDRESS), addresses, maybeFamily);
                SRTlib.send("]},");

        return;
      }
    }
    callback(err, addresses, maybeFamily);
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

}
class HttpAgent extends http.Agent {
  createConnection(options, callback) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    options.lookup = dnsLookup;
    if (isIPAddress(options.host) && isPrivateIP(options.host)) {
      callback(new Error(FORBIDDEN_IP_ADDRESS));
            SRTlib.send("]},");

      return;
    }
        SRTlib.send("]},");

    return super.createConnection(options, callback);
        SRTlib.send("]},");

  }
}
class HttpsAgent extends https.Agent {
  createConnection(options, callback) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    options.lookup = dnsLookup;
    if (isIPAddress(options.host) && isPrivateIP(options.host)) {
      callback(new Error(FORBIDDEN_IP_ADDRESS));
            SRTlib.send("]},");

      return;
    }
        SRTlib.send("]},");

    return super.createConnection(options, callback);
        SRTlib.send("]},");

  }
}
