({
    block: 'b-page',
    title: 'b-form-button',
    head: [
        { elem: 'css', url: '_10submit_bem.css', ie: false },
        { elem: 'css', url: '_10submit_bem.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_10submit_bem.js' }
    ],
    content: {
        block: 'i-lego-example',
        content: {
            tag: 'form',
            attrs: { action: 'bbb' },
            content: {
                block: 'b-form-button',
                mods: { theme: 'grey-s', size: 's' },
                type: 'submit',
                content: 'Я.Submit'
            }
        }
    }
})
