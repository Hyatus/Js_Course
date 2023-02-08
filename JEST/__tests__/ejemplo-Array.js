const carrito = ['Producto1','Producto2','Producto3'];




describe('Testing a carrito de compras',()=>{
    test('Probar que el array tenga 3 elementos',()=>{
        expect(carrito).toHaveLength(3);
    });

    test('Verificar que el carrito no esté vacío',()=>{
        expect(carrito).not.toHaveLength(0);
    });

    
})