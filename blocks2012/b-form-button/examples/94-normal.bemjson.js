({
    block: 'b-page',
    title: 'b-form-button',
    head: [
        { elem: 'css', url: '_94-normal.css', ie: false },
        { elem: 'css', url: '_94-normal.ie.css', ie: 'IE' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', 'url': '_94-normal.js' }
    ],
    content: [
        {
            tag: 'p',
            content: [
                {
                    block: 'b-form-button',
                    mods: { type: 'normal', theme: 'normal-grey', size: 'xl', disabled: 'yes', valign: 'middle' },
                    type: 'submit',
                    content: 'Disabled XL'
                },'&#160;',
                {
                    block: 'b-form-button',
                    mods: { type: 'complex', theme: 'grey-xl', size: 'xl', disabled: 'yes', valign: 'middle' },
                    type: 'submit',
                    content: 'Disabled XL'
                }
            ]
        },
        {
            tag: 'p',
            content: [
                {
                    block: 'b-form-button',
                    mods: { type: 'normal', theme: 'normal-grey', size: 'l', hovered: 'yes', valign: 'middle' },
                    type: 'button',
                    content: 'Hovered L'
                },'&#160;',
                {
                    block: 'b-form-button',
                    mods: { type: 'complex', theme: 'grey-l', size: 'l', hovered: 'yes', valign: 'middle' },
                    type: 'button',
                    content: 'Hovered L'
                }
            ]
        },
        {
            tag: 'p',
            content: [
                {
                    block: 'b-form-button',
                    mods: { type: 'normal', theme: 'normal-grey', size: 'm', valign: 'middle' },
                    url: 'http://ya.ru',
                    content: 'Pressed M'
                },
                '&#160;',
                {
                    block: 'b-form-button',
                    mods: { type: 'complex', theme: 'grey-m', size: 'm', valign: 'middle' },
                    url: 'http://ya.ru',
                    content: 'Pressed M'
                }
            ]
        },
        {
            tag: 'p',
            content: [
                {
                    block: 'b-form-button',
                    mods: { type: 'normal', theme: 'normal-grey', size: 's', focused: 'yes', valign: 'middle' },
                    url: 'http://ya.ru',
                    content: 'Focused S'
                },'&#160;',
                {
                    block: 'b-form-button',
                    mods: { type: 'complex', theme: 'grey-s', size: 's', focused: 'yes', valign: 'middle' },
                    url: 'http://ya.ru',
                    content: 'Focused S'
                }
            ]
        }
    ]
})
