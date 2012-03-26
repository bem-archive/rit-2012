({
    block: 'b-page',
    title: 'b-form-button',
    head: [
        { elem: 'css', url: '_20-b-form-button_simple.css', ie: false },
        { elem: 'css', url: '_20-b-form-button_simple.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '20-b-form-button_simple.js' }
    ],
    content: {
        block: 'i-lego-example',
        js: true,
        content: {
            tag: 'form',
            attrs: { action: 'bbb' },
            content: [
                {
                    tag: 'p',
                    content: {
                        block: 'b-form-button',
                        mods: { theme: 'grey-s', size: 's' },
                        type: 'button',
                        content: 'Я.Button'
                    }
                }
            ]
        }
    }
})
