({
    block: 'b-page',
    title: 'b-form-button',
    head: [
        { elem: 'css', url: '_40-b-form-button_heights.css', ie: false },
        { elem: 'css', url: '_40-b-form-button_heights.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '40-b-form-button_heights.js' }
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
                    }
                ]
            }

        }

    }
})
