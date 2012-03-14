var fs = require('fs'),
    path = require('path'),
    Template = require('bem/lib/template');

exports.techModule = module;

exports.newFileContent = function(vars) {

    function htmlEscape(str) {
        return String(str)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    }

    var _this = this,
        readFileIfExists = function(fileName) {

            return (path.existsSync(fileName)? fs.readFileSync(fileName, 'utf-8') : '');

        },
        c = 'exports.content = ' + readFileIfExists(vars.BlockName + '.content.bemjson.js'),
        content = eval('exports.content = ' + readFileIfExists(vars.BlockName + '.content.bemjson.js')),
        filename = vars.BlockName,
        title = readFileIfExists(vars.BlockName + '.wiki').split('\n')[0].replace('==', '');

    var page = {
            block: 'b-page',
            title: title,
            head: [,
                { elem: 'css', url: '_' + filename + '.css', ie: false},
                { elem: 'css', url: '_' + filename + '.ie.css', ie: 'lt IE 8'},
                { block: 'i-jquery', elem: 'core' },
                { elem: 'js', url:  filename + '.js'}
            ],
            meta: [
                { tag: 'meta', attrs: { property: 'fb:app_id', content: '352298414783700'} }
            ],
            content: [
                '<!-- Yandex.Metrika counter --><div style=\"display:none;\"><script type=\"text/javascript\">(function(w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter10053391 = new Ya.Metrika({id:10053391, enableAll: true, trackHash:true}); } catch(e) { } }); })(window, \"yandex_metrika_callbacks\");</script></div><script src=\"//mc.yandex.ru/metrika/watch.js\" type=\"text/javascript\" defer=\"defer\"></script><noscript><div><img src=\"//mc.yandex.ru/watch/10053391\" style=\"position:absolute; left:-9999px;\" alt=\"\" /></div></noscript><!-- /Yandex.Metrika counter -->',
                {
                    block: 'b-template',
                    mods: { type:'block'},
                    title: content.title,
                    content: [
                        content
                    ]
                }
            ]
        }

        //    getDoc(levelPath + level['get-block-mod'](vars.BlockName, mod.name) + '.' + vars.Locale, mod);
        return '(' + JSON.stringify(page) + ')';
    }

exports.getFileSuffix = function() {
    return '.bemjson.js'
}
