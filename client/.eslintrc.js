module.exports = {
	extends: ["airbnb", "prettier", "prettier/react"],
	env: {
		es6: true,
		browser: true,
	},
	parser: "babel-eslint",
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
			modules: true,
			js: true,
		},
		ecmaVersion: 2018,
		sourceType: "module",
	},
	ignorePatterns: ['/node_modules/**', '/build/**', '/public/**'],
	plugins: ["react", "prettier"],
	rules: {
		'prettier/prettier': 'error',
		'react/jsx-filename-extension': [1, { extensions: [".js"] }],
    'no-use-before-define': ['error', { functions: false }],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
		'react/prop-types': 'off',
		'import/no-unresolved': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/prefer-default-export': 'off',
		'import/extensions': ["error", "never"]
	},
	env: {
		jest: true,
		browser: true,
		node: true,
	},
};
