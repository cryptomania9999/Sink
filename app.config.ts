export default defineAppConfig({
  title: 'Ceramoza',
  description: 'A leading Iranian tile company, specialized in manufacturing, wall tiles, floor ceramics, glazed porcelain tiles and premium granite products in various forms.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
