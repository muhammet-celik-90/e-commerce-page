

export async function getProducts() {
    try {
        
        const res = await fetch('https://fakestoreapi.com/products');
    
        if(!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return res.json();

    } catch (error) {
        throw new Error('Failed to fetch data')
    }
}


export async function getCategories() {

    try {
        
        const res = await fetch('https://fakestoreapi.com/products/categories');
    
        if(!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return res.json();

    } catch (error) {
        throw new Error('Failed to fetch data')
    }
}