class HomePage {
    elements = {
        mainContent: () => cy.get('[data-testid="home-page"]'),
        productsGrid: () => cy.get('.products-grid'),
        priceSort: () => cy.get('[data-testid="sort-price"]'),
        validatePriceSort: () => cy.get('.product-card .product-price'),
        searchInput: () => cy.get('[data-testid="product-search"]'),
        searchProductText: () => cy.get('.product-name'),
        validateMessage: (message) => cy.get(`:contains("${message}")`),
        firstProductButton: () => cy.get('.product-card').first().find('.view-details-button'),
        productDetails: () => cy.get('.product-detail-container'),
        cartButton: () => cy.get('[data-testid="nav-to-cart"]'),
        cartValidator: () => cy.get('[data-testid="cart-page"]'),
        profileButton: () => cy.get('[data-testid="nav-to-profile"]'),
        profileValidator: () => cy.get('.profile-card')
    }

    visit() {
        cy.visit('/');
    }

    verifyMainContent() {
        this.elements.mainContent().should('be.visible');
    }

    verifyProductsGrid() {
        this.elements.productsGrid().should('be.visible');
    }

    togglePriceSort() {
        this.elements.priceSort().click();
    }

    validatePriceSortDesc() {
        this.elements.validatePriceSort().then(($els) => {
            const prices = [...$els].map(el =>
                parseFloat(el.innerText.replace(/[^\d,.-]/g, '').replace(',', '.'))
            )

            for (let i = 0; i < prices.length - 1; i++) {
                expect(prices[i], `Price at index ${i} is less than the next`).to.be.at.least(prices[i + 1]);
            }
        })
    }

    validatePriceSortAsc() {
        this.elements.validatePriceSort().then(($els) => {
            const prices = [...$els].map(el =>
                parseFloat(el.innerText.replace(/[^\d,.-]/g, '').replace(',', '.'))
            )

            for (let i = 0; i < prices.length - 1; i++) {
                expect(prices[i], `Price at index ${i} is greater than next`).to.be.at.most(prices[i + 1]);
            }
        })
    }

    searchProduct(term) {
        this.elements.searchInput().type(term);
    }

    validateProductSearch(term) {
        this.elements.searchProductText().each(($el) => {
            expect($el.text().toLowerCase()).to.include(term.toLowerCase());
        })
    }

    validateMessage(message) {
        this.elements.validateMessage(message).should('be.visible');
    }

    openFirstProductDetails() {
        this.elements.firstProductButton().click()
    }

    validateProductDetails(){
        this.elements.productDetails()
        cy.url().should('include', 'product');
    }

    openCart(){
        this.elements.cartButton().click()
    }

    validateCartPage(){
        this.elements.cartValidator().should('exist')
        cy.url().should('include', 'cart');
    }

    openProfile(){
        this.elements.profileButton().click()
    }

    validateProfilePage(){
        this.elements.profileValidator().should('exist')
        cy.url().should('include', 'profile');
    }


}

export default new HomePage();