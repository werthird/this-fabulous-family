export default {
  name: 'phoneCase',
  title: 'Phone Case',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [
        { type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt',
              type: 'string'
            }
          ]
        }
      ],
      
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      }
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Mens', value: 'mens' },
          { title: 'Womens', value: 'womens' },
          { title: 'Kids', value: 'kids' },
          { title: 'Home', value: 'home' },
          { title: 'Mug', value: 'mug' },
          { title: 'Phone Case', value: 'phone' },
        ]
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ]
};