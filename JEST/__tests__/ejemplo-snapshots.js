const cliente = {
    nombre: 'Juan Pablo',
    balance: 500,
    tipo: 'Premium'
}


describe('Testing al cliente',()=>{
    // Los snapshots se almacenan en un string y comparamos si es el dato que esperabamos

    test('Es Juan Pablo',()=>{
        expect(cliente).toMatchSnapshot();
    })
})