export default {
  name: 'product',
  title: 'Product',
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
      options: {
        maxLength: 90,
      },
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
      name: 'details',
      title: 'Details',
      type: 'string',
    }
  ]
};