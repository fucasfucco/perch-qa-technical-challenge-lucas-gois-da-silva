class Shoppingcart {
    elements = {
        searchInput: () => cy.get('[data-testid="product-search"]'),
        firstProductButton: () => cy.get('.product-card').first().find('.view-details-button'),
        productName: () => cy.get('[data-testid="product-name"]'),
        productDescription: () => cy.get('[data-testid="product-description"] > p'),
        productPageqtySelector: () => cy.get('[data-testid="quantity-selector"]'),
        addToCart: () => cy.get('[data-testid="add-to-cart"]'),
        shoppingcartProductName: (name) => cy.contains('.item-name', `${name}`),
        shoppingcartProductQty: (qty, product) => cy.get(`select[aria-label*="Quantity for ${product}"]`)
            .filter((index, el) => el.value === qty.toString() && el.getAttribute('aria-label').includes(product)),
        returnToHomepage: () => cy.get('[data-testid="continue-shopping"]'),
        getSubTotal: () => cy.get('[data-testid="subtotal"]'),
        itemDetails: () => cy.get('.item-details'),
        itemPrice: ($item) => cy.wrap($item).find('.item-price'),
        itemName: ($item) => cy.wrap($item).find('.item-name'),
        shoppingcartProductQtyValidateSubTotal: (product) => cy.get(`select[aria-label*="Quantity for ${product}"]`),
        changeQuantityofProduct: (productName, qty) => {
            cy.get(`select[aria-label*="Quantity for ${productName}"]`).select(qty.toString());
        },
        getFullPage: () => cy.get('body'),
        removeButton: (productName) => cy.get(`button[aria-label*="Remove ${productName} from cart"]`)

    }

    addProduct(product, qty) {
        this.elements.searchInput().type(product);
        this.elements.firstProductButton().click();
        this.elements.productName().should('contain', product);
        this.elements.productDescription().should('exist');

        this.elements.productPageqtySelector().select(qty - 1);

        this.elements.addToCart().click();

    }

    validateProductInCart(qty, product) {
        this.elements.shoppingcartProductName(product).should('exist')
        this.elements.shoppingcartProductQty(qty, product)

    }

    validateSubTotal() {
        let totalExpected = 0;

        cy.get('.item-details').each(($item) => {
            this.elements.itemPrice($item).invoke('text').then((priceText) => {
                this.elements.itemName($item).invoke('text').then((productName) => {
                    this.elements.shoppingcartProductQtyValidateSubTotal(productName).invoke('val').then((qty) => {
                        totalExpected += parseFloat(priceText.replace(/[^0-9,.-]+/g, "").replace(",", ".")) * (parseInt(qty, 10) || 0);
                    });
                });
            });
        }).then(() => {
            this.elements.getSubTotal().invoke('text').then((subtotalText) => {
                expect(parseFloat(subtotalText.replace(/[^0-9,.-]+/g, "").replace(",", "."))).to.eq(totalExpected);
            });
        });
    }

    returnToHomepage() {
        this.elements.returnToHomepage().first().click()
    }

    changeQuantityofProduct(productName, qty) {
        this.elements.changeQuantityofProduct(productName, qty)
    }

    validateEmptyCart() {
        this.elements.getFullPage().should('contain', 'Your cart is empty')
    }

    removeProduct(productName){
        this.elements.removeButton(productName).click()
    }

    validateHomePage(){
        this.elements.getFullPage().should('contain', 'Product Catalog')
    }
}

export default new Shoppingcart();