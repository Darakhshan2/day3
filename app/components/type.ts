export type Product = {
  _id: string,
  name: string,
  description: string,
  imageUrl: string,
    price: number,
    slug: {
        _type: "slug",
        current: string,
        
     }  
     dimensions: {
    height: string;
    width: string;
    depth: string;
  },
  quantity: number,
  inventory: number,
  features?: string[];
}