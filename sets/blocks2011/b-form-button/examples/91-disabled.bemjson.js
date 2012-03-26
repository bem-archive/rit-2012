({
    block: 'b-page',
    title: 'b-form-button',
    head: [
        { elem: 'css', url: '_91-disabled.css', ie: false },
        { elem: 'css', url: '_91-disabled.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_91-disabled.js' }
    ],
    content: {
        block: 'i-lego-example',
        content: [
            {
                block: 'b-form-button',
                attrs: { id: 'ya_button' },
                tabindex: 1,
                mods: { disabled: 'yes', theme: 'grey-s', size: 's' },
                type: 'button',
                content: 'Я.Button'
            },
            {
                block: 'b-form-button',
                attrs: { id: 'ya_submit' },
                mods: { disabled: 'yes', theme: 'grey-s', size: 's' },
                type: 'submit',
                content: 'Я.Submit'
            },
            {
                block: 'b-form-button',
                attrs: { id: 'ya_link' },
                mods: { disabled: 'yes', theme: 'grey-s', size: 's' },
                url: '/',
                content: 'Я.Ссылка'
            }
        ]
    }
})
