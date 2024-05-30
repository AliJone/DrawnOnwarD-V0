const router = require('./src/App').default;
const Sitemap = require('../').default;
 
(
    new Sitemap(router)
        .build('https://www.drawnonward.org')
        .save('./sitemap.xml')
);