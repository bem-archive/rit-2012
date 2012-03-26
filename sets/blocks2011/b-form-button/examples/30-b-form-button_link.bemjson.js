({
    block: 'b-page',
    title: 'b-form-button',
    head: [
        { elem: 'css', url: '_30-b-form-button_link.css', ie: false },
        { elem: 'css', url: '_30-b-form-button_link.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '30-b-form-button_link.js' }
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
            }
        ]
    }
})
