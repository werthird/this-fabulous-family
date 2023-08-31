export default {
  name: 'phoneCase',
  title: 'Phone Case',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required('Name is required').max(20).warning('Name should be 20 characters or less'),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
      validation: (Rule) => Rule.required('Slug is Required'),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Phone Case', value: 'phone' },
        ]
      },
      validation: (Rule) => Rule.required('Category is Required'),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required('Name is required').precision(2).warning('Price should have exactly two decimal places'),
    },
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
      validation: (Rule) => Rule.required('At least one image is Required'),
    },
    // {
    //   name: 'phoneSize',
    //   title: 'Phone Sizes/Types',
    //   type: 'array',
    //   of: [
    //     { 
    //       type: 'string',
    //       options: {
    //         list: [
    //           {title: 'iPhone 14', value: 'iphone-14'},
    //           {title: 'iPhone 14 Pro', value: 'iphone-14-pro'},
    //           {title: 'iPhone 14 Plus', value: 'iphone-14-plus'},
    //           {title: 'iPhone 14 Pro Max', value: 'iphone-14-pro-max'},
    //           {title: 'iPhone 13', value: 'iphone-13'},
    //           {title: 'iPhone 13 Mini', value: 'iphone-13-mini'},
    //           {title: 'iPhone 13 Pro', value: 'iphone-13-pro'},
    //           {title: 'iPhone 13 Pro Max', value: 'iphone-13pro-max'},
    //           {title: 'iPhone 12', value: 'iphone-12'},
    //           {title: 'iPhone 12 Mini', value: 'iphone-12-mini'},
    //           {title: 'iPhone 12 Pro', value: 'iphone-12-pro'},
    //           {title: 'iPhone 12 Pro Max', value: 'iphone-12-pro-max'},
    //           {title: 'iPhone 11', value: 'iphone-11'},
    //           {title: 'iPhone 11 Pro', value: 'iphone-11-pro'},
    //           {title: 'iPhone 11 Pro Max', value: 'iphone-11-pro-max'},
    //           {title: 'iPhone X', value: 'iphone-x'},
    //           {title: 'iPhone XR', value: 'iphone-xr'},
    //           {title: 'iPhone XS', value: 'iphone-xs'},
    //           {title: 'iPhone XS Max', value: 'iphone-xs-max'},
    //           {title: 'Google Pixel 7', value: 'google-pixel-7'},
    //           {title: 'Google Pixel 6 Pro', value: 'google-pixel-6-pro'},
    //           {title: 'Google Pixel 6', value: 'google-pixel-6'},
    //           {title: 'Google Pixel 5 5G', value: 'google-pixel-5-5g'},
    //           {title: 'Samsung Galaxy S23', value: 'samsung-galaxy-s23'},
    //           {title: 'Samsung Galaxy S23 Plus', value: 'samsung-galaxy-s23-plus'},
    //           {title: 'Samsung Galaxy S23 Ultra', value: 'samsung-galaxy-s23-ultra'},
    //           {title: 'Samsung Galaxy S22', value: 'samsung-galaxy-s22'},
    //           {title: 'Samsung Galaxy S22 Plus', value: 'samsung-galaxy-s22-plus'},
    //           {title: 'Samsung Galaxy S22 Ultra', value: 'samsung-galaxy-s22-ultra'},
    //           {title: 'Samsung Galaxy S21', value: 'samsung-galaxy'},
    //           {title: 'Samsung Galaxy S21 Plus', value: 'samsung-galaxy-s21-plus'},
    //           {title: 'Samsung Galaxy S21 Ultra', value: 'samsung-galaxy-s21-ultra'},
    //           {title: 'Samsung Galaxy S21 FE', value: 'samsung-galaxy-s21-fe'},
    //           {title: 'Samsung Galaxy S20', value: 'samsung-galaxy-s20'},
    //           {title: 'Samsung Galaxy S20+', value: 'samsung-galaxy-s20+'},
    //           {title: 'Samsung Galaxy S20 Ultra', value: 'samsung-galaxy-s20-ultra'},
    //           {title: 'Samsung Galaxy S20 FE', value: 'samsung-galaxy-s20-fe'},
    //         ]
    //       } 
    //     }
    //   ],
    //   validation: (Rule) => Rule.required('Sizes/Type is Required'),
    // },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required('Description is Required'),
    }
  ]
};