({
    block: 'b-page',
    title: 'b-form-button',
    head: [
        { elem: 'css', url: '_80-b-form-button_disabled.css', ie: false },
        { elem: 'css', url: '_80-b-form-button_disabled.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '80-b-form-button_disabled.js' }
    ],
    content: {
        block: 'i-lego-example',
        content: [
            {
                block: 'b-form-button',
                attrs: { id: 'ya_button' },
                tabindex: 1,
                mods: { disabled: 'yes' },
                type: 'button',
                content: 'Я.Button'
            },
            {
                block: 'b-form-button',
                attrs: { id: 'ya_submit' },
                mods: { disabled: 'yes' },
                type: 'submit',
                content: 'Я.Submit'
            },
            {
                block: 'b-form-button',
                attrs: { id: 'ya_link' },
                mods: { disabled: 'yes' },
                url: '/',
                content: 'Я.Ссылка'
            }
        ]
    }
})
