({
    block: 'b-page',
    title: 'b-form-button',
    head: [
        { elem: 'css', url: '_10-submit.css', ie: false },
        { elem: 'css', url: '_10-submit.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url: '_10-submit.js' }
    ],
    content: {
        block: 'i-lego-example',
        content: {
            tag: 'form',
            attrs: { action: 'bbb' },
            content: {
                block: 'b-form-button',
                mods: { type: 'complex', theme: 'grey-s', size: 's' },
                type: 'submit',
                content: 'Я.Submit'
            }
        }
    }
})
