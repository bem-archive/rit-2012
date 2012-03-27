({
    block: 'b-page',
    title: 'b-form-button',
    head: [
        { elem: 'css', url: '_80-link-float.css', ie: false },
        { elem: 'css', url: '_80-link-float.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_80-link-float.js' }
    ],
    content: {
        block: 'i-lego-example',
        content: {
            block: 'b-form',
            url: 'bbb',
            content: {
                tag: 'table',
                cls: 'b-form__table',
                attrs: { cellpadding: 0, cellspacing: 0 },
                content: {
                    tag: 'tr',
                    content: [
                        {
                            tag: 'td',
                            attrs: { style: 'background: #9acd32;' },
                            content: [
                                {
                                    block: 'b-form-button',
                                    mods: { 'float': 'right', type: 'complex', theme: 'grey-s', size: 's' },
                                    url: 'http://ya.ru',
                                    content: 'Ссылка float right'
                                },
                                {
                                    tag: 'p',
                                    content: 'Люблю грозу в начале мая, когда весенний, первый гром как бы резвяся и играя, грохочет в небе голубом. Гремят раскаты молодые, вот дождик брызнул, пыль летит, повисли перлы дождевые и солнце нити золотит. С горы бежит поток проворный, в лесу не молкнет птичий гам. И гам лесной, и шум нагорный - все вторит весело громам.'
                                }
                            ]
                        },
                        {
                            tag: 'td',
                            attrs: { style: 'background: #6495ed;' },
                            content: [
                                {
                                    block: 'b-form-button',
                                    mods: { 'float': 'left', type: 'complex', 'theme': 'grey-s', 'size': 's',  },
                                    type: 'button',
                                    content: 'Button float left'
                                },
                                {
                                    tag: 'p',
                                    content: 'Люблю грозу в начале мая, когда весенний, первый гром как бы резвяся и играя, грохочет в небе голубом. Гремят раскаты молодые, вот дождик брызнул, пыль летит, повисли перлы дождевые и солнце нити золотит. С горы бежит поток проворный, в лесу не молкнет птичий гам. И гам лесной, и шум нагорный - все вторит весело громам.'
                                }
                            ]
                        }
                    ]
                }
            }
        }
    }
})
