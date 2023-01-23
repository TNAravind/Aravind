class Product
{
    constructor(id,name,details,price){
        this.id = id;
        this.name = name;
        this.details = details
        this.price = price
    }
}
class ProductManager
{
    products =[];

    addProducts = (prod) => this.products.push(prod)

    getAllProducts =() => this.products;

    getProducts =(id) =>
    {
        for (const prod of this.products) {
            if(prod.id == id)
            return prod;
        }
        throw `Product by ${id} Id  not found`
    }

    updateProducts = (prod) =>{
        for (const prodRec of this.products) {
            if(prod.id == prodRec.id)
            {
                prodRec.name =prod.name
                prodRec.details = prod.details
                prodRec.price = prod.price
                return;
            }
        }
        throw "Product not found to update"
    }

}

let instance = new ProductManager()
instance.addProducts(new Product(121,"Car","With a top speed of 180kmph",1500000))
instance.addProducts(new Product(131,"Watch","Diamond dail",90000))
instance.addProducts(new Product(141,"Playstation","Escape Reality",80000))
instance.addProducts(new Product(151,"Bike","This is a cafe rider",190000))


