export default {
  name: 'hats',
  title: 'Hats',
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
              type: 'string',
              validation: (Rule) => Rule.max(50).warning('ALT should be 50 characters or less'),
            }
          ]
        }
      ],
      
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.max(20).warning('Name should be 20 characters or less'),
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
      validation: (Rule) => Rule.precision(2).warning('Price should have exactly two decimal places'),
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
          { title: 'Hat', value: 'hat' },
          { title: 'Bag', value: 'bag' },
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