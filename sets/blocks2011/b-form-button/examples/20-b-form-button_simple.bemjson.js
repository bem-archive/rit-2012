({
    block: 'b-page',
    title: 'b-form-button',
    head: [
        { elem: 'css', url: '_20button_bem.css', ie: false },
        { elem: 'css', url: '_20button_bem.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_20button_bem.js' }
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
                },
                {
                    tag: 'p',
                    content: {
                        block: 'b-form-button',
                        mods: { type: 'simple' },
                        type: 'button',
                        content: 'Я.Simple button'
                    }
                }
            ]
        }
    }
})
