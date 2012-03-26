({
    mustDeps: [
        { block: 'i-jquery', elems: 'leftclick' },
        { block: 'i-bem', elems: ['dom', 'html'] }
    ],
    shouldDeps: {
        elems: [ 'input', 'click' ],
        mods: {
            'focused': 'yes',
            'hovered': 'yes',
            'disabled': 'yes',
            'pressed': 'yes'
        }
    }
})
