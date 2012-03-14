({
    block: 'b-page',
    title: 'b-form-button',
    head: [
        { elem: 'css', url: '_45-b-form-button_ico.css', ie: false },
        { elem: 'css', url: '_45-b-form-button_ico.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '45-b-form-button_ico.js' }
    ],
    content: {
        block: 'i-lego-example',
        content: [
            {
                tag: 'p',
                content: {
                    block: 'b-form-button',
                    mods: { theme: 'grey-l', size: 'l' },
                    url: 'http://ya.ru',
                    content: [
                        {
                            block: 'b-icon',
                            url: 'http://yandex.st/lego/_/Kx6F6RQnQFitm0qRxX7vpvfP0K0.png',
                            alt: 'Иконка Серпа'
                        },
                        'Я.Ссылка с иконкой серпа'
                    ]
                }
            },
            {
                tag: 'p',
                content: {
                    block: 'b-form-button',
                    mods: { type: 'simple', size: 'l' },
                    url: 'http://ya.ru',
                    content: [
                        {
                            block: 'b-icon',
                            url: 'http://yandex.st/lego/_/Kx6F6RQnQFitm0qRxX7vpvfP0K0.png',
                            alt: 'Иконка Серпа'
                        },
                        'Я.Простая ссылка с иконкой серпа'
                    ]
                }
            }
        ]

    }
})
