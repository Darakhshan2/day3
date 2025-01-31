import { defineQuery } from "next-sanity";

export const allProducts = defineQuery(`
    *[_type == "product"]{
    _id,
    name,
    description,
    slug,
    price,
    quantity,
    dimensions,
    features,
    category,
    "imageUrl" : image.asset->url
    }`
);

export const fourProducts = (start: number = 0, limit: number = 4) => defineQuery(`
    *[_type == "product"][${start}..${start + limit - 1}]{
      _id,
      name,
      description,
      slug,
      price,
      quantity,
      dimensions,
      "imageUrl": image.asset->url
    }`
);
