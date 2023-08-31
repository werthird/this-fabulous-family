import { createClient, groq } from "next-sanity";

const client = createClient({
    projectId: 'x1vygdo4',
    dataset: 'production',
    apiVersion: '2023-08-01',
  });

// GET ALL PRODUCTS
export async function getProducts() {
  return client.fetch(
    groq`*[_type == 'product']{
        _id,
        name,
        details,
        image[] {
          'url': asset->url
        },
        price,
        'slug': slug.current,
      }
    `
  )
};
// GET ONE PRODUCT
export async function getProduct(slug) {
  return client.fetch(
    groq`*[_type == 'product' && slug.current == $slug][0]{
      _id,
      name,
      description,
      image[] {
        'url': asset->url
      },
      price,
      'slug': slug.current,
    }`,
    { slug: slug }
  );
};


// GET ALL PHONE CASES
export async function getPhoneCases() {
  return client.fetch(
    groq`*[_type == 'phoneCase']{
        _id,
        name,
        'slug': slug.current,
        category,
        price,
        image[] {
          'url': asset->url
        },
        description,
      }
    `
  )
};
// GET ONE PHONE CASE
export async function getPhoneCase(slug) {
  return client.fetch(
    groq`*[_type == 'phoneCase' && slug.current == $slug][0]{
      _id,
      name,
      'slug': slug.current,
      category,
      price,
      image[] {
        'url': asset->url
      },
      description,
    }`,
    { slug: slug }
  );
};




// GET BANNER
export async function getBanner() {
  return client.fetch(
    groq`*[_type == 'banner']{
        _id,
        product,
        desc,
        "image": image.asset->url,
        buttonText, 
        smallText,
        midText,
        largeText1,
        largeText2,
        saleTime,
        'slug': slug.current,
      }
    `
  )
};
