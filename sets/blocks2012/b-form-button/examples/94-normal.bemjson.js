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
            content: {
                block: 'b-form-button',
                mods: { type: 'normal', theme: 'normal-grey', size: 'xl', disabled: 'yes' },
                type: 'submit',
                content: 'Disabled XL'
            }
        },
        {
            tag: 'p',
            content: {
                block: 'b-form-button',
                mods: { type: 'normal', theme: 'normal-grey', size: 'l', hovered: 'yes' },
                type: 'button',
                content: 'Hovered L'
            }
        },
        {
            tag: 'p',
            content: {
                block: 'b-form-button',
                mods: { type: 'normal', theme: 'normal-grey', size: 'm', pressed: 'yes' },
                url: 'http://ya.ru',
                content: 'Pessed M'
            }
        },
        {
            tag: 'p',
            content: {
                block: 'b-form-button',
                mods: { type: 'normal', theme: 'normal-grey', size: 's', focused: 'yes' },
                url: 'http://ya.ru',
                content: 'Focused S'
            }
        }
    ]
})