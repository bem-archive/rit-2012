//BEM.HTML.decl({ name : 'b-form-button', modName : 'type', modVal : 'complex' }, {
//
//    onBlock : function(ctx) {
//
//        ctx
//            .tag(ctx.param('url')? 'a' : 'span')
//            .attrs({ href : ctx.param('url'), target : ctx.param('target') })
//            .mods({
//                size : ctx.mod('size'),
//                theme : ctx.mod('theme')
//            })
//            .content(
//                [
//                    { elem : 'left', tag : 'i' },
//                    {
//                        elem : 'content',
//                        tag : 'span',
//                        content : {
//                            elem : 'text',
//                            tag : 'span',
//                            content : ctx.content()
//                        }
//                    }
//                ],
//                true)
//            .afterContent(
//                ctx.param('type')?
//                    {
//                        elem : 'input',
//                        attrs : {
//                            value : '',
//                            type : ctx.param('type'),
//                            disabled : ctx.mod('disabled') && 'disabled'
//                        }
//                    } :
//                    { elem : 'click' })
//            .js(true);
//
//    },
//
//    onElem : {
//
//       'input' : function(ctx) {
//
//           ctx.tag('input');
//
//       },
//
//       'click' : function(ctx) {
//
//           ctx.tag('i');
//
//       }
//
//    }
//
//});
