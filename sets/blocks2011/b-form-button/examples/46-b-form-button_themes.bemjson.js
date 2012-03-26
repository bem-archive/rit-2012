({
    block: 'b-page',
    title: 'b-form-button',
    head: [
        { elem: 'css', url: '_46themes_bem.css', ie: false },
        { elem: 'css', url: '_46themes_bem.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_46themes_bem.js' }
    ],
    content: {
        block: 'i-lego-example',
        content: [
            {
                tag: 'p',
                content: {
                    block: 'b-form-button',
                    url: 'http://ya.ru',
                    content: 'Я.Ссылка серого цвета в размерах [ s,m,l,xl ]'
                }
            },
            {
                tag: 'p',
                content: {
                    block: 'b-form-button',
                    mods: { theme: 'blue-xl', size: 'xl' },
                    url: 'http://ya.ru',
                    content: 'Я.Ссылка голубого цвета размером только xl'
                }
            }
        ]
    }
})
