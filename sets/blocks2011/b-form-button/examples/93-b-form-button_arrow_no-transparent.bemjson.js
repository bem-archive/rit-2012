({
    block: 'b-page',
        title: 'b-form-button',
        head: [
            {
                elem: 'css',
                url: '_93-b-form-button_arrow_no-transparent.css',
                ie: false
            },
            {
                elem: 'css',
                url: '_93-b-form-button_arrow_no-transparent.ie.css',
                ie: 'IE'
            },
            { block: 'i-jquery', elem: 'core' },
            { elem: 'js', 'url': '93-b-form-button_arrow_no-transparent.js' }
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
