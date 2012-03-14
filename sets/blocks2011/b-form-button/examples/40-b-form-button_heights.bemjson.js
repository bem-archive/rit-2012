({
    block: 'b-page',
    title: 'b-form-button',
    head: [
        { elem: 'css', url: '_40height_bem.css', ie: false },
        { elem: 'css', url: '_40height_bem.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_40height_bem.js' }
    ],
    content: {
        block: 'i-lego-example',
        content:{
            block: 'b-layout-table',
            attrs: { style: 'width: 600px;'},
            content: {
                elem: 'row',
                content: [
                    {
                        elem: 'cell',
                        content: [
                            {
                                tag: 'p',
                                content: {
                                    block: 'b-form-button',
                                    url: 'http://ya.ru',
                                    content: 'Я.Ссылка размером s'
                                }
                            },
                            {
                                tag: 'p',
                                content: {
                                    block: 'b-form-button',
                                    mods: { theme: 'grey-m', size: 'm' },
                                    url: 'http://ya.ru',
                                    content: 'Я.Ссылка размером m'
                                }
                            },
                            {
                                tag: 'p',
                                content: {
                                    block: 'b-form-button',
                                    mods: { theme: 'grey-l', size: 'l' },
                                    url: 'http://ya.ru',
                                    content: 'Я.Ссылка размером l'
                                }
                            },
                            {
                                tag: 'p',
                                content: {
                                    block: 'b-form-button',
                                    mods: { theme: 'grey-xl', size: 'xl' },
                                    url: 'http://ya.ru',
                                    content: 'Я.Ссылка размером xl'
                                }
                            }
                        ]
                    },
                    {
                        elem: 'cell',
                        content: [
                            {
                                tag: 'p',
                                content: {
                                    block: 'b-form-button',
                                    mods: { type: 'simple' },
                                    url: 'http://ya.ru',
                                    content: 'Я.Простая ссылка размером s'
                                }
                            },
                            {
                                tag: 'p',
                                content: {
                                    block: 'b-form-button',
                                    mods: { type: 'simple', size: 'm' },
                                    url: 'http://ya.ru',
                                    content: 'Я.Простая ссылка размером m'
                                }
                            },
                            {
                                tag: 'p',
                                content: {
                                    block: 'b-form-button',
                                    mods: { type: 'simple', size: 'l' },
                                    url: 'http://ya.ru',
                                    content: 'Я.Простая ссылка размером l'
                                }
                            },
                            {
                                tag: 'p',
                                content: {
                                    block: 'b-form-button',
                                    mods: { type: 'simple', size: 'xl' },
                                    url: 'http://ya.ru',
                                    content: 'Я.Простая ссылка размером xl'
                                }
                            }
                        ]
                    }
                ]
            }

        }

    }
})
