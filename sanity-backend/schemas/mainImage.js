export default {
  name: 'mainImage',
  title: 'Main image',
  type: 'image',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'alt',
      title: 'Alternative text (for screen readers)',
      type: 'string',
      options: {
        isHighlighted: true
      }
    },
    {
      title: 'Image URL',
      name: 'imageUrl',
      type: 'url'
    }
  ]
}
