const SRTlib = require('SRT-util');

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
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"highlight","fileName":"/website/scripts/highlight.js","paramsNumber":2},`);

  const startTag = `<figure class="highlight ${lang}"><table><tr><td class="code"><pre>`;
  const endTag = '</pre></td></tr></table></figure>';
  let parsedCode = '';
  if (Prism.languages[lang]) {
    parsedCode = Prism.highlight(code, Prism.languages[lang]);
  } else {
    parsedCode = code;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"highlight"},');

  return startTag + parsedCode + endTag;
    SRTlib.send('{"type":"FUNCTIONEND","function":"highlight","paramsNumber":2},');

}
function prismify(data) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"prismify","fileName":"/website/scripts/highlight.js","paramsNumber":1},`);

  data.content = data.content.replace(unhighlightedCodeRx, (_, lang, code) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"data.content.data.content.replace","fileName":"/website/scripts/highlight.js","paramsNumber":3},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"data.content.data.content.replace"},');

    return highlight(lang, entities.decode(code));
        SRTlib.send('{"type":"FUNCTIONEND","function":"data.content.data.content.replace"},');

  });
  data.excerpt = data.excerpt.replace(unhighlightedCodeRx, (_, lang, code) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"data.excerpt.data.excerpt.replace","fileName":"/website/scripts/highlight.js","paramsNumber":3},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"data.excerpt.data.excerpt.replace"},');

    return highlight(lang, entities.decode(code));
        SRTlib.send('{"type":"FUNCTIONEND","function":"data.excerpt.data.excerpt.replace"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"prismify"},');

  return data;
    SRTlib.send('{"type":"FUNCTIONEND","function":"prismify","paramsNumber":1},');

}
function code(args, content) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"code","fileName":"/website/scripts/highlight.js","paramsNumber":2},`);

  let lang = '';
  if (args[0].startsWith('lang:')) {
    lang = args.shift().replace(/^lang:/, '');
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"code"},');

  return highlight(lang, content);
    SRTlib.send('{"type":"FUNCTIONEND","function":"code","paramsNumber":2},');

}
async function includeCode(args) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"includeCode","fileName":"/website/scripts/highlight.js","paramsNumber":1},`);

  let lang = '';
  if (args[0].startsWith('lang:')) {
    lang = args.shift().replace(/^lang:/, '');
  }
  const file = path.join(hexo.source_dir, hexo.config.code_dir, args.join(' '));
  const content = await readFile(file, 'utf8');
    SRTlib.send('{"type":"FUNCTIONEND","function":"includeCode"},');

  return highlight(lang, content.trim());
    SRTlib.send('{"type":"FUNCTIONEND","function":"includeCode","paramsNumber":1},');

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
