var SRTlib = require('SRT-util');
module.exports = {
  "ui": {
    "port": 3001,
    "weinre": {
      "port": 8080
    }
  },
  "files": ["examples/bundle/*"],
  "index": "index.html",
  "watchOptions": {},
  "server": true,
  "proxy": false,
  "port": 3000,
  "middleware": false,
  "serveStatic": ["examples/bundle"],
  "ghostMode": {
    "clicks": false,
    "scroll": false,
    "forms": {
      "submit": false,
      "inputs": false,
      "toggles": false
    }
  },
  "logLevel": "info",
  "logPrefix": "BS",
  "logConnections": false,
  "logFileChanges": true,
  "logSnippet": true,
  "rewriteRules": false,
  "open": "local",
  "browser": "default",
  "xip": false,
  "hostnameSuffix": false,
  "reloadOnRestart": false,
  "notify": true,
  "scrollProportionally": true,
  "scrollThrottle": 0,
  "scrollRestoreTechnique": "window.name",
  "reloadDelay": 0,
  "reloadDebounce": 0,
  "plugins": [],
  "injectChanges": true,
  "startPath": null,
  "minify": true,
  "host": null,
  "codeSync": true,
  "timestamps": true,
  "clientEvents": ["scroll", "input:text", "input:toggles", "form:submit", "form:reset", "click"],
  "socket": {
    "socketIoOptions": {
      "log": false
    },
    "path": "/browser-sync/socket.io",
    "clientPath": "/browser-sync",
    "namespace": "/browser-sync",
    "clients": {
      "heartbeatTimeout": 5000
    }
  },
  "tagNames": {
    "less": "link",
    "scss": "link",
    "css": "link",
    "jpg": "img",
    "jpeg": "img",
    "png": "img",
    "svg": "img",
    "gif": "img",
    "js": "script"
  }
};