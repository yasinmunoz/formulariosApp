class BasicosPage {

    navigate (){
        cy.visit('/template/basicos')
    }

    productoInput(producto: string){
        cy.get('[name=producto]')
            .clear()
            .type(producto)
    }

    precioInput(precio: string) {
        cy.get('[name=precio]')
            .clear()
            .type(precio)
    }

    existenciasInput(existencias: string) {
        cy.get('[ name=existencias ]')
            .clear()
            .type(existencias)
    }

    submit () {
        cy.get('[ type=submit ]')
            .click()
    }

    refresh () {
        cy.url().should ('eq', 'http://localhost:4200/template/basicos' )
    }
}

export default BasicosPage;