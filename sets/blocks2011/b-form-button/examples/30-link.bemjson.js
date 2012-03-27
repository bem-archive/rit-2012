({
    block: 'b-page',
    title: 'b-form-button',
    head: [
        { elem: 'css', url: '_30-link.css', ie: false },
        { elem: 'css', url: '_30-link.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url: '_30-link.js' }
    ],
    content: {
        block: 'i-lego-example',
        content: {
            tag: 'p',
            content: {
                block: 'b-form-button',
                mods: { theme: 'grey-s', size: 's' },
                url: 'http://ya.ru',
                content: 'Я.Простая ссылка'
            }
        }
    }
})
