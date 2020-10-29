export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96
        }
      },
      {
        title: 'Release date',
        name: 'releaseDate',
        type: 'date',
        options: {
          dateFormat: 'YYYY-MM-DD',
          calendarTodayLabel: 'Today'
        }
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{      
          type: 'reference',
          to: [{type: "tag"}]
        }]
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent'
      }
     
    ]
  }
  