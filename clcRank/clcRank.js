function calcularRank(vit,der){
    const saldoVit=vit - der
    let nivel;
    if(saldoVit<=10){
        nivel="ferro"
    }else if(saldoVit>10&&saldoVit<=20){
        nivel="Bronze"
    }else if(saldoVit>20&&saldoVit<=50){
        nivel="Prata"
    }else if(saldoVit>50&&saldoVit<=80){
        nivel="ouro"
    }else if(saldoVit>80&&saldoVit<=90){
        nivel="Diamante"
    }else if(saldoVit>90&&saldoVit<=100){
        nivel="Lendario"
    }else if(saldoVit>100){
        nivel="imortal"
    }

    return `O Heroi tem o saldo de ${vit} vitorias e esta no nivel ${nivel}`
}
console.log(calcularRank(30,10))