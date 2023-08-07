import { createClient, groq } from "next-sanity";

const client = createClient({
    projectId: 'x1vygdo4',
    dataset: 'production',
    apiVersion: '2023-08-01',
  });


export async function getProjects() {
  return client.fetch(
    groq`*[_type == 'project']{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": gallery[].asset->url,
        url,
        content
      }
    `
  )
};


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
        "slug": slug.current,
      }
    `
  )
};


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
        saleTime
      }
    `
  )
};
