module.exports = {
  title: 'ruby-codegolf',
  description: 'Some tips for golfing in Ruby',
  head: [
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'Ruby code golf tips' }],
    ['meta', { name: 'og:description', content: 'Code golf tips - Some tips for golfing in Ruby' }],
    ['meta', { name: 'theme-color', content: '#e53033' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Github', link: 'https://github.com/ananagame/ruby-codegolf' },
    ],
    sidebar: [
      '/variables',
      '/strings',
      '/arrays',
      '/ranges',
      '/integers',
      '/conditions',
      '/others'
    ]
  }
}
