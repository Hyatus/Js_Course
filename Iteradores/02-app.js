// Break y continue en un for loop


for(let i = 0; i < 10; i++){
    //console.log(`Iteración ${i}`)
    if(i%2 === 0){
        continue // se salta la iteración
    }else if(i === 9){
        break;
    }else{
        console.log(`Es impar ${i}`)
    }
}