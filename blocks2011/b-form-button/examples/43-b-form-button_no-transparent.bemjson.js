({
    block: 'b-page',
    title: 'b-form-button',
    head: [
        { elem: 'css', url: '_43-b-form-button_no-transparent.css', ie: false },
        { elem: 'css', url: '_43-b-form-button_no-transparent.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '43-b-form-button_no-transparent.js' }
    ],
    content: {
        block: 'i-lego-example',
        content: [
            {
                tag: 'p',
                content: {
                    block: 'b-form-button',
                    mods: { theme: 'grey-no-transparent-s', size: 's' },
                    url: 'http://ya.ru',
                    content: 'Я.Ссылка размером s'
                }
            },
            {
                tag: 'p',
                content: {
                    block: 'b-form-button',
                    mods: { theme: 'grey-no-transparent-m', size: 'm' },
                    url: 'http://ya.ru',
                    content: 'Я.Ссылка размером m'
                }
            },
            {
                tag: 'p',
                content: {
                    block: 'b-form-button',
                    mods: { theme: 'grey-no-transparent-l', size: 'l' },
                    url: 'http://ya.ru',
                    content: 'Я.Ссылка размером l'
                }
            },
            {
                tag: 'p',
                content: {
                    block: 'b-form-button',
                    mods: { theme: 'grey-no-transparent-xl', size: 'xl' },
                    url: 'http://ya.ru',
                    content: 'Я.Ссылка размером xl'
                }
            }
        ]
    }
})
