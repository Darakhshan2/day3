import { createClient } from "next-sanity";

const client = createClient({
    projectId: "sh222unl",
    dataset: "production",
    apiVersion:"2023-01-01",
    useCdn: true,
    token:"skI4iLVpxIaTJ6trkxft63IZKM6hnJ39ZtUhZCeNRfPHQk3LkKWSqXlCucICZHBMN0kUCzDIsevmYco1SLplDSrVBH3C48QI1SSBDWDQmdOAIYET6EPx4wE0J6MH4icM3GaiJbwJhr1WqJhX93VlQ8vAWH9yRW0cVRHH0zYLi8QhpjKNK4EJ"
})

export async function SanityFetch({query , params = {}}:{query:string , params?:any}) {
    
    return await client.fetch(query , params)
}