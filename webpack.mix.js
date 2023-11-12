const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js').vue()
    .postCss('resources/css/app.css', 'public/css', [
        //
    ])
    .sass('resources/sass/main.scss', 'public/css/main.css').options({
        postCss:[require('autoprefixer')]
    })
    .browserSync({
        proxy:'http://localhost:8000',
        files: [
            'resources/js/**/*'
        ]
    });


if (mix.inProduction()) {
    mix.version()
    mix.webpackConfig({
        output: {
            publicPath: '/',
            chunkFilename: 'js/chunks/[name].[chunkhash].js'
        }
    })
    mix.setResourceRoot('/')
} else {
    mix.webpackConfig({
        output: {
            chunkFilename: 'js/chunks/[name].js'
        }
    })
}
