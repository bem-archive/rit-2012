({
    block: 'b-page',
    title: 'b-form-button',
    head: [
        { elem: 'css', url: '_90-complex.css', ie: false },
        { elem: 'css', url: '_90-complex.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_90-complex.js' }
    ],
    content: {
        block: 'i-lego-example',
        content: {
            block: 'b-form',
            cls: 'my-form',
            url: 'bbb',
            content: {
                tag: 'table',
                attrs: { cellpadding: 0, cellspacing: 0 },
                content: [
                    {
                        tag: 'tr',
                        attrs: { style: 'background: #ee82ee;' },
                        content: [
                            {
                                tag: 'td',
                                attrs: { colspan: 3 },
                                content: {
                                    tag: 'p',
                                    content: [
                                        'Для того, чтобы Яндекс выглядел аккуратнее и развивался в одном стиле, были разработаны декоративные (нестандартные для операционной системы) элементы. ' +
                                        'Одним из таких элементов является кнопка. Данная кнопка предназначена только для работы с интерфейсами, она не подходит для промо-задач. У кнопки можно поменять цвет текста и тон. Если ',
                                        {
                                            block: 'b-form-button',
                                            mods: { type: 'complex', theme: 'grey-s', size: 's', valign: 'middle' },
                                            url: '/',
                                            content: 'кнопку/ссылку'
                                        },
                                        ' поставить на цветной фон, то она принимает тон фона-подложки. Сейчас высота кнопки 19px, ширина без ограничений — можно тянуть на столько, на сколько надо. ' +
                                        'Это наиболее востребованный размер. Остальные размеры мы договорились делать, если в них есть потребность. Если вам нужна кнопка больше или меньше этой — напишите на нам.'
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        tag: 'tr',
                        attrs: { style: 'background: #6495ed;' },
                        content: [
                            {
                                tag: 'td',
                                attrs: { style: 'text-align: left; vertical-align: top;' },
                                content: [
                                    'Влево ', {
                                        block: 'b-form-button',
                                        mods: { valign: 'middle', type: 'complex', theme: 'grey-s', size: 's' },
                                        type: 'button',
                                        content: 'И вверх'
                                    }
                                ]
                            },
                            {
                                tag: 'td',
                                attrs: { style: 'text-align: center; vertical-align: middle;' },
                                content: [
                                    {
                                        block: 'b-form-button',
                                        mods: { type: 'complex', valign: 'middle', theme: 'grey-s', size: 's' },
                                        type: 'button',
                                        content: 'По центру'
                                    },
                                    {
                                        block: 'b-form-button',
                                        mods: { type: 'complex', valign: 'middle', theme: 'grey-s', size: 's' },
                                        type: 'button',
                                        content: 'По центру'
                                    }
                                ]
                            },
                            {
                                tag: 'td',
                                attrs: { style: 'text-align: right; vertical-align: bottom;' },
                                content: [
                                    {
                                        block: 'b-form-button',
                                        mods: { type: 'complex', valign: 'middle', theme: 'grey-s', size: 's' },
                                        type: 'button',
                                        content: 'Вправо'
                                    }, ' и вниз'
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }
})
