module.exports = {
    root: true,
    env: {
        browser: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    overrides: [
        {
            files: ['*.ts'],
            extends: [
                'airbnb-base',
                'airbnb-typescript/base',
            ],
            parserOptions: {
                project: './tsconfig.json',
            },
            rules: {
                "@typescript-eslint/indent": ["error", 4],
            }
        }
    ],
    rules: {
        "indent": ["error", 4],
    }
};
