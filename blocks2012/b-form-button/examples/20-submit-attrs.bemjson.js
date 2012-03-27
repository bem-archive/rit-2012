({
    block: 'b-page',
    title: 'b-form-button',
    head: [
        { elem: 'css', url: '_20-submit-attrs.css', ie: false },
        { elem: 'css', url: '_20-submit-attrs.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url: '_20-submit-attrs.js' }
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
                name: 'my-submit',
                value: 'my-value',
                content: 'Я.Submit'
            }
        }
    }
})
