module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended',
        "plugin:jsx-a11y/recomended",
        "plugin:prettier/recomended",
        'prettier'
    ],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': ['error',{
            "semi": true,
            "singleQuote": true,
            "tabWidth": 4,
            "printWidth": 120
        }],
        'vue/html-indent': ['error', 4],
        'vue/singleline-html-element-content-newline': 0,
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/valid-v-slot': [
            'error',
            {
                allowModifiers: true,
            },
        ],
    },
    globals: {
        _: true,
    },
}