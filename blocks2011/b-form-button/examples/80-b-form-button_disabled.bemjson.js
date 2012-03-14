({
    block: 'b-page',
    title: 'b-form-button',
    head: [
        { elem: 'css', url: '_80disabled_bem.css', ie: false },
        { elem: 'css', url: '_80disabled_bem.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_80disabled_bem.js' }
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
            },
            {
                block: 'b-form-button',
                attrs: { id: 'ya_simple-button' },
                mods: { type: 'simple', disabled: 'yes' },
                type: 'button',
                content: 'Я.Просто button'
            },
            {
                block: 'b-form-button',
                attrs: { id: 'ya_simple-submit' },
                mods: { type: 'simple', disabled: 'yes' },
                type: 'submit',
                content: 'Я.Просто submit'
            },
            {
                block: 'b-form-button',
                attrs: { id: 'ya_simple-link' },
                mods: { type: 'simple', disabled: 'yes' },
                url: '/',
                content: 'Я.Просто сcылка'
            }
        ]
    }
})
