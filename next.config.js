/** @type {import('next').NextConfig} */

const {i18n} =require('./next-18next.config')
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en', 'vn'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'vn',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    domains: [
      {
        domain: 'example.com',
        defaultLocale: 'vn',
        // other locales that should be handled on this domain
        locales: ['vn'],
      },
      {
        domain: 'example.en',
        defaultLocale: 'en',
      },
 
    ],
  },
  images: {
    domains: [
      "scontent.fdad1-1.fna.fbcdn.net",
      "scontent.fdad1-3.fna.fbcdn.net",
      "scontent.fdad1-4.fna.fbcdn.net",
      "vn112.com",
      "pinterest.com",
      "i.pinimg.com",
      "scontent.fdad2-1.fna.fbcdn.net",
      "scontent.fdad1-2.fna.fbcdn.net",
      'scontent.fdad1-3.fna.fbcdn.net',
      "hotelkhanhlinh.vn",
      
    ],
  },
};
