/*global hexo*/
const SRTlib = require('SRT-util');
const Prism = require('prismjs');
const entities = require('he');
const {promisify} = require('util');
const readFile = promisify(require('fs').readFile);
const path = require('path');
// oof
// I think this is the way to add Prism components that it doesn't include
// in the default build?
global.Prism = Prism;
// the / is needed to force it to resolve to the directory
require('prismjs/components/')();
delete global.Prism;
const unhighlightedCodeRx = /<pre><code class="([^"]*)?">([\s\S]*?)<\/code><\/pre>/igm;
function highlight(lang, code) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"highlight","fileName":"${__filename}","paramsNumber":2},`);

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
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"prismify","fileName":"${__filename}","paramsNumber":1},`);

  data.content = data.content.replace(unhighlightedCodeRx, (_, lang, code) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":3},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

    return highlight(lang, entities.decode(code));
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  });
  data.excerpt = data.excerpt.replace(unhighlightedCodeRx, (_, lang, code) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":3},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

    return highlight(lang, entities.decode(code));
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"prismify"},');

  return data;
    SRTlib.send('{"type":"FUNCTIONEND","function":"prismify","paramsNumber":1},');

}
function code(args, content) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"code","fileName":"${__filename}","paramsNumber":2},`);

  let lang = '';
  if (args[0].startsWith('lang:')) {
    lang = args.shift().replace(/^lang:/, '');
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"code"},');

  return highlight(lang, content);
    SRTlib.send('{"type":"FUNCTIONEND","function":"code","paramsNumber":2},');

}
async function includeCode(args) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"includeCode","fileName":"${__filename}","paramsNumber":1},`);

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
// Highlight as many things as we possibly can
hexo.extend.tag.register('code', code, true);
hexo.extend.tag.register('codeblock', code, true);
hexo.extend.tag.register('include_code', includeCode, {
  async: true
});
hexo.extend.tag.register('include-code', includeCode, {
  async: true
});
// Hexo includes its own code block handling by default which may
// cause the above to miss some things, so do another pass when the page
// is done rendering to pick up any code blocks we may have missed.
hexo.extend.filter.register('after_post_render', prismify);
