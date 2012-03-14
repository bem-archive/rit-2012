({
    block: 'b-page',
        title: 'b-form-button',
        head: [
            {
                elem: 'css',
                url: '_92arrow_bem.css',
                ie: false
            },
            {
                elem: 'css',
                url: '_92arrow_bem.ie.css',
                ie: 'IE'
            },
            { block: 'i-jquery', elem: 'core' },
            { elem: 'js', 'url': '_92arrow_bem.js' }
        ],
    content: [
        {
            tag: 'p',
            content: {
                block: 'b-form-button',
                mods: { theme: 'grey-arrow-m', size: 'm' },
                url: 'http://ya.ru',
                content: 'Я.Ссылка-стрелка серого цвета размером m'
            }
        },
        {
            tag: 'p',
            content: {
                block: 'b-form-button',
                mods: { theme: 'grey-arrow-l', size: 'l' },
                url: 'http://ya.ru',
                content: 'Я.Ссылка-стрелка серого цвета размером l'
            }
        }

    ]
})
