const path = require('path');

module.exports = {
    entry: './src/index.js',
    // setup
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            // 1. carregando css
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            // 2. carregando imagens
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            // 3. carregando fontes (chrome deve ser woff2 e woff)
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
            },
            // 4. carregando csv e tsv
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader',
                ],
            },
            // carregando xml
            {
                test: /\.xml$/,
                use: [
                    'xml-loader',
                ],
            },
        ],
    },
};