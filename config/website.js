module.exports = {
    siteTitle: 'ARCHGAKÒ', // Navigation and Site Title
    siteTitleAlt: 'ARCHGAKÒ', // Alternative Site title for SEO
    siteTitleShort: 'archgako', // short_name for manifest
    siteUrl: process.env.ROOT_URL || 'https://archgako.com', // Domain of your site. No trailing slash!
    lang: 'ru', // Language Tag on <html> element
    pathPrefix: '/',
    siteLogo: 'images/logo.png', // Used for SEO and manifest, path to your image you placed in the 'static' folder
    siteDescription:
      'Студия дизайна интерьеров и архитектурное бюро. Работаем в России и Европе | Interior design studio and architectural bureau. We work in Russia and Europe',
    minibio: `
        Студия дизайна интерьеров и архитектурное бюро. Работаем в России и Европе | 
        Interior design studio and architectural bureau. We work in Russia and Europe
    `,
    author: 'Timur SaltyRain Garipov', // Author for schemaORGJSONLD
    organization: 'Timur SaltyRain Garipov',
  
    // siteFBAppID: '123456789', // Facebook App ID - Optional
    userTwitter: '@archgako', // Twitter Username
    ogSiteName: 'ARCHGAKÒ', // Facebook Site Name
    ogLanguage: 'ru',
  
    // Manifest and Progress color
    themeColor: '#AF9888',
    backgroundColor: '#231C42',

    keywords: 'дизайн интерьера, архитектура, заказать дизайн интерьера, interior design, architecture, order interior design'

  }