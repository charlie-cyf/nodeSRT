var SRTlib = require('SRT-util');
const Prism = require('prismjs');
const entities = require('he');
const {promisify} = require('util');
const readFile = promisify(require('fs').readFile);
const path = require('path');
global.Prism = Prism;
require('prismjs/components/')();
delete global.Prism;
const unhighlightedCodeRx = /<pre><code class="([^"]*)?">([\s\S]*?)<\/code><\/pre>/igm;
function highlight(lang, code) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  const startTag = `<figure class="highlight ${lang}"><table><tr><td class="code"><pre>`;
  const endTag = '</pre></td></tr></table></figure>';
  let parsedCode = '';
  if (Prism.languages[lang]) {
    parsedCode = Prism.highlight(code, Prism.languages[lang]);
  } else {
    parsedCode = code;
  }
    SRTlib.send("]},");

  return startTag + parsedCode + endTag;
    SRTlib.send("]},");

}
function prismify(data) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  data.content = data.content.replace(unhighlightedCodeRx, (_, lang, code) => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    highlight(lang, entities.decode(code));
        SRTlib.send("]},");

  });
  data.excerpt = data.excerpt.replace(unhighlightedCodeRx, (_, lang, code) => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    highlight(lang, entities.decode(code));
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

  return data;
    SRTlib.send("]},");

}
function code(args, content) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  let lang = '';
  if (args[0].startsWith('lang:')) {
    lang = args.shift().replace(/^lang:/, '');
  }
    SRTlib.send("]},");

  return highlight(lang, content);
    SRTlib.send("]},");

}
async function includeCode(args) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  let lang = '';
  if (args[0].startsWith('lang:')) {
    lang = args.shift().replace(/^lang:/, '');
  }
  const file = path.join(hexo.source_dir, hexo.config.code_dir, args.join(' '));
  const content = await readFile(file, 'utf8');
    SRTlib.send("]},");

  return highlight(lang, content.trim());
    SRTlib.send("]},");

}
hexo.extend.tag.register('code', code, true);
hexo.extend.tag.register('codeblock', code, true);
hexo.extend.tag.register('include_code', includeCode, {
  async: true
});
hexo.extend.tag.register('include-code', includeCode, {
  async: true
});
hexo.extend.filter.register('after_post_render', prismify);
