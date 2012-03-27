({
    block: 'b-page',
        title: 'b-form-button',
        head: [
            {
                elem: 'css',
                url: '_93-arrow.css',
                ie: false
            },
            {
                elem: 'css',
                url: '_93-arrow.ie.css',
                ie: 'IE'
            },
            { block: 'i-jquery', elem: 'core' },
            { elem: 'js', 'url': '_93-arrow.js' }
        ],
    content: [
        {
            tag: 'p',
            content: {
                block: 'b-form-button',
                mods: { type: 'complex', theme: 'grey-arrow-no-transparent-m', size: 'm' },
                url: 'http://ya.ru',
                content: 'Я.Ссылка-стрелка серого цвета размером m, непрозрачная'
            }
        },
        {
            tag: 'p',
            content: {
                block: 'b-form-button',
                mods: { type: 'complex', theme: 'grey-arrow-no-transparent-l', size: 'l' },
                url: 'http://ya.ru',
                content: 'Я.Ссылка-стрелка серого цвета размером l, непрозрачная'
            }
        }

    ]
})
