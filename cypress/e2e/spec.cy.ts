import BasicosPage from './PageObject/BasicosPage';


describe ('Cypress POM Test Suite', () => {
  it('Rellenar el formulario', () => {
    const basicos = new BasicosPage();
    
    basicos.navigate();
    basicos.productoInput('AR-56');
    basicos.precioInput('2');
    basicos.existenciasInput('6');

    basicos.submit();
    basicos.refresh();
  })
});