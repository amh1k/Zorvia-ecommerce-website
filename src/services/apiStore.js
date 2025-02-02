const url = 'https://fakestoreapi.com/products'

export async function getStoreData() {
    const res = await fetch(url);
    const data = await res.json();
    
    return data;

}