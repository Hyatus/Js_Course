//.concat

const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio"];

const meses2 = ['julio','agosto','septiembre']


// const todos = meses.concat(meses2)
const todos = [...meses,...meses2]
console.log(todos.join('-'))


