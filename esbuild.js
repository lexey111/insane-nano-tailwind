import esbuild from 'esbuild'
import htmlPlugin from '@chialab/esbuild-plugin-html'
import {tailwindPlugin} from 'esbuild-plugin-tailwindcss'

esbuild
    .build({
        entryPoints: [
            'src/index.html',
            'src/dashboard.html'
        ],
        assetNames: 'assets/[name]-[hash]',
        chunkNames: '[ext]/[name]-[hash]',
        outdir: 'dist',
        metafile: true,
        bundle: true,
        minify: true,
        minifyWhitespace: true,
        minifySyntax: true,
        minifyIdentifiers: true,
        sourcemap: true,
        plugins: [
            tailwindPlugin(),
            htmlPlugin({
                minifyOptions: {
                    collapseWhitespace: 'all',
                    deduplicateAttributeValues: true,
                    removeComments: 'safe'
                }
            })
        ],
    })
    .then(() => console.log('✅  Build complete!'))
    .catch(() => process.exit(1))
