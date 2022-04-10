const withMDX = require('@next/mdx')({
    extension: /\.(md|mdx)$/,
    options: {
        providerImportSource: '@mdx-js/react',
      },
})
module.exports = withMDX({
    // Pick up MDX files in the /pages/ directory
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
})