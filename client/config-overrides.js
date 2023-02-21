const path = require('path');
const autoprefixer = require('autoprefixer');
const { override, addBabelPlugin, addExternalBabelPlugin, addWebpackModuleRule, addWebpackPlugin } = require('customize-cra');

module.exports = override(
    addExternalBabelPlugin('@babel/plugin-proposal-optional-chaining'),
    addBabelPlugin(['import', {
        libraryName: 'material-ui',
        style: true,
    }]),
    addWebpackModuleRule({
        test: /\.scss$/,
        use: [
            require.resolve('style-loader'),
            {
                loader: require.resolve('css-loader'),
                options: {
                    importLoaders: 1,
                },
            },
            {
                loader: require.resolve('postcss-loader'),
                options: {
                    ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
                    plugins: () => [
                        require('postcss-flexbugs-fixes'),
                        autoprefixer({
                            browsers: [
                                '>1%',
                                'last 4 versions',
                                'Firefox ESR',
                                'not ie < 9', // React doesn't support IE8 anyway
                            ],
                            flexbox: 'no-2009',
                        }),
                    ],
                },
            },
            {
                loader: require.resolve('sass-loader'),
                options: {},
            },
        ],
    }),
);
