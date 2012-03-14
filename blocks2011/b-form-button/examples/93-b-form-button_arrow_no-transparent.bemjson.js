({
    block: 'b-page',
        title: 'b-form-button',
        head: [
            {
                elem: 'css',
                url: '_93arrow_bem.css',
                ie: false
            },
            {
                elem: 'css',
                url: '_93arrow_bem.ie.css',
                ie: 'IE'
            },
            { block: 'i-jquery', elem: 'core' },
            { elem: 'js', 'url': '_93arrow_bem.js' }
        ],
    content: [
        {
            tag: 'p',
            content: {
                block: 'b-form-button',
                mods: { theme: 'grey-arrow-no-transparent-m', size: 'm' },
                url: 'http://ya.ru',
                content: 'Я.Ссылка-стрелка серого цвета размером m, непрозрачная'
            }
        },
        {
            tag: 'p',
            content: {
                block: 'b-form-button',
                mods: { theme: 'grey-arrow-no-transparent-l', size: 'l' },
                url: 'http://ya.ru',
                content: 'Я.Ссылка-стрелка серого цвета размером l, непрозрачная'
            }
        }

    ]
})
