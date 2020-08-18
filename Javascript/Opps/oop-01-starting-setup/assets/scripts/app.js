/*

1. Basic Approch 
const productList = {
    products : [
                {
                    title       :"A Pillow",
                    imageUrl    :"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnd6ecLOohZPD0Vl8TKbcUIYNDpCII8IDtq_stRjzKvMhv4Tv1lRCEBfV2EbrDsZ4VWYG3Jcf7ssaIUUNEvIybXA&usqp=CAU&ec=45690271",
                    price       : 19.99,
                    description : "Soft Pillow." 
                },
                {
                    title       :"A Carpet",
                    imageUrl    :"https://assetscdn1.paytm.com/images/catalog/product/H/HO/HOMDIZEN-STAR-HSHIV26010497725DFD/1563029548318_1..jpg?imwidth=280&impolicy=hq",
                    price       : 100.99,
                    description : "3D Carpet which is very soft ." 
                }
              ],
    render() {
        const renderHook = document.getElementById("app");
        const prodList = document.createElement("ul");
        prodList.className = 'product-list';
        for (const prod of this.products){
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
                <div>
                    <img src="${prod.imageUrl}" alt="${prod.title}">
                    <div class="product-item__content">
                        <h2>${prod.title}</h2>
                        <h3>\$${prod.price}</h3>
                        <p>${prod.description}</p>
                        <button>Add to Cart </button>
                    </div>
                </div>
            `;
            prodList.append(prodEl);
        }
        renderHook.append(prodList)
    }

};

productList.render();

*/


// 2. Class Based approch : Classes only suppot chrome browser. Class is also a object type .

// It create Constructor of the class which execute when the class object is created.
    // For Creating the constructure JavaScript have a predefine Keyword 'constructor'.
    /* Syntax : 
                constructor() {}
                */

/*

class Product {
    //title = "DEFAULT";  // Class Field
    //imageUrl ;
    //description;
    //price;
    
    // There is no need to do this because inside the constructure you can initiate or assigne value .

    constructor(title, image, desc, price) {
            this.title       = title;  // Class Property
            this.imageUrl    = image;
            this.description = desc;
            this.price       = price
        }  

}

class ShoppingCart {
    items = [];

    //Satter logic
    set cartItems(value) {
        this.items = value;
        this.totalOutput.innerHTML = `<h2>Total : \$${this.totalAmount.toFixed(2)}</h2>`;

    }

    //gitter logic
    get totalAmount(){
        const sum = this.items.reduce(
            (preValue, curItem) =>  preValue + curItem.price,
            0);
        return sum;   
       
    }

    addProduct(product) {
        const updatedItems = [...this.items];
        updatedItems.push(product);
        this.cartItems = updatedItems;
        
    }

    render () {
        const cartEl = document.createElement('section');
        cartEl.innerHTML = `
                    <h2>Total : \$${0}</h2>
                    <button>Order Now!</button>
        `;
        cartEl.className = 'cart';
        this.totalOutput = cartEl.querySelector('h2');
        return cartEl;
    }
}

class ProductItems {
    constructor(product){
        this.product = product;
    }

    addtoCart () {
        App.addProductToCart(this.product);
    }


    render() {
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
                <div>
                    <img src="${this.product.imageUrl}" alt="${this.product.title}">
                    <div class="product-item__content">
                        <h2>${this.product.title}</h2>
                        <h3>\$${this.product.price}</h3>
                        <p>${this.product.description}</p>
                        <button>Add to Cart </button>
                    </div>
                </div>
            `;
            const addCartBtn = prodEl.querySelector('button');
            addCartBtn.addEventListener('click',this.addtoCart.bind(this));
            return prodEl;
          }
}


class ProductList {
    products = [
        new Product(
            "A Pillow" ,
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnd6ecLOohZPD0Vl8TKbcUIYNDpCII8IDtq_stRjzKvMhv4Tv1lRCEBfV2EbrDsZ4VWYG3Jcf7ssaIUUNEvIybXA&usqp=CAU&ec=45690271",
            "Soft Pillow.",
            19.99,
        ),
        new Product(
            "A Carpet" ,
            "https://assetscdn1.paytm.com/images/catalog/product/H/HO/HOMDIZEN-STAR-HSHIV26010497725DFD/1563029548318_1..jpg?imwidth=280&impolicy=hq",
            "3D Carpet which is very soft .",
            100.99,
        ),
      ];
    
    constructor () {}
    
    render(){
        const prodList = document.createElement("ul");
        prodList.className = 'product-list';
        for (const prod of this.products){
            const productItem = new ProductItems(prod);
            const prodEl = productItem.render();
            prodList.append(prodEl);
        }
        return prodList;
    }
}



class Shop{
    render(){ 
        const renderHook = document.getElementById("app");
        this.cart = new ShoppingCart();
        const cartEl =  this.cart.render();
        const prodList = new ProductList();
        const prodListEl =  prodList.render();

        renderHook.append(cartEl);
        renderHook.append(prodListEl);
    }
}


class App{
    static cart;

    static init() {
        const shop = new Shop();
        shop.render();
        this.cart = shop.cart;
        
    }
    static addProductToCart(product){
        this.cart.addProduct(product)
    }
}
 
App.init()

*/

// By Inheritance :

class Product {
    // title = 'DEFAULT';
    // imageUrl;
    // description;
    // price;
  
    constructor(title, image, desc, price) {
      this.title = title;
      this.imageUrl = image;
      this.description = desc;
      this.price = price;
    }
  }
  
  class ElementAttribute {
    constructor(attrName, attrValue) {
      this.name = attrName;
      this.value = attrValue;
    }
  }
  
class Component {
    constructor(renderHookId, shouldRender = true) {
      this.hookId = renderHookId;
      if (shouldRender){
        this.render();
      }
    }

    render (){}
  
    createRootElement(tag, cssClasses, attributes) {
      const rootElement = document.createElement(tag);
      if (cssClasses) {
        rootElement.className = cssClasses;
      }
      if (attributes && attributes.length > 0) {
        for (const attr of attributes) {
          rootElement.setAttribute(attr.name, attr.value);
        }
      }
      document.getElementById(this.hookId).append(rootElement);
      return rootElement;
    }
  }
  
class ShoppingCart extends Component {
    items = [];
  
    set cartItems(value) {
      this.items = value;
      this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
    }
  
    get totalAmount() {
      const sum = this.items.reduce(
        (prevValue, curItem) => prevValue + curItem.price,
        0
      );
      return sum;
    }
  
    constructor(renderHookId) {
      super(renderHookId);
    }
  
    addProduct(product) {
      const updatedItems = [...this.items];
      updatedItems.push(product);
      this.cartItems = updatedItems;
    }
  
    render() {
      const cartEl = this.createRootElement('section', 'cart');
      cartEl.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order Now!</button>
      `;
      this.totalOutput = cartEl.querySelector('h2');
    }
  }
  
class ProductItem extends Component {
    constructor(product, renderHookId) {
        super(renderHookId,false);
        this.product = product;
        this.render();
    }
  
    addToCart() {
      App.addProductToCart(this.product);
    }
  
    render() {
      const prodEl = this.createRootElement('li','product-item');
      prodEl.innerHTML = `
          <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}" >
            <div class="product-item__content">
              <h2>${this.product.title}</h2>
              <h3>\$${this.product.price}</h3>
              <p>${this.product.description}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        `;
      const addCartButton = prodEl.querySelector('button');
      addCartButton.addEventListener('click', this.addToCart.bind(this));
    }
  }
  
class ProductList extends Component{
    products = []; //#products = []; This is the way to define private method of class
  
    constructor(renderHookId) {
        super(renderHookId);
        this.fetchProduct();
    }

    fetchProduct(){
        this.products = [
            new Product(
              'A Pillow',
              'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',
              'A soft pillow!',
              19.99
            ),
            new Product(
              'A Carpet',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
              'A carpet which you might like - or not.',
              89.99
            )
          ];
          this.renderProducts();
    }

    renderProducts() {
        for (const prod of this.products) {
            new ProductItem(prod, 'prod-list');
        }
    }

  
    render() {
      this.createRootElement('ul', 'product-list',[new ElementAttribute('id', 'prod-list')]);
      if (this.products && this.products.length > 0){
          this.renderProducts();
      }
    };
    
  }
  
class Shop  {

    constructor (){
        this.render();
    }

    render() {
      this.cart = new ShoppingCart('app');
       new ProductList('app');
    }
  }
  
class App {
    static cart;
  
    static init() {
      const shop = new Shop();
      this.cart = shop.cart;
    }
  
    static addProductToCart(product) {
      this.cart.addProduct(product);
    }
  }
  
App.init();