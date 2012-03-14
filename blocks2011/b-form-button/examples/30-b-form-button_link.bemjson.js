({
    block: 'b-page',
    title: 'b-form-button',
    head: [
        { elem: 'css', url: '_30link_bem.css', ie: false },
        { elem: 'css', url: '_30link_bem.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_30link_bem.js' }
    ],
    content: {
        block: 'i-lego-example',
        content: [
            {
                tag: 'p',
                content: {
                    block: 'b-form-button',
                    url: 'http://ya.ru',
                    content: 'Я.Ссылка'
                }
            },
            {
                tag: 'p',
                content: {
                    block: 'b-form-button',
                    mods: { type: 'simple' },
                    url: 'http://ya.ru',
                    content: 'Я.Простая ссылка'
                }
            }
        ]
    }
})
