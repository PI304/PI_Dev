// 기본적으로 아래와 같은 규칙의 eslint 를 적용하나, 프로젝트 참여자들과의 논의를 통해 규칙을 수정하도록 합니다.

module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'standard', 'prettier'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        semi: ['error', 'always'],
        quotes: [2, 'single', { avoidEscape: true }],
        'no-unused-vars': 'off',
        'object-curly-spacing': ['error', 'always', { objectsInObjects: true }],
        'react/react-in-jsx-scope': 'off',
        'react/no-unescaped-entities': 'off',
        'no-trailing-spaces': 'off',
        'react/prop-types': 'off',
        'no-undef': 'warn',
    },
};
