class heroi{
    constructor(nome,idade,tipo){
        this.nome=nome,
        this.idade=idade
        this.tipo=tipo
    }
    atacar(){
        let ataque;
        switch(this.tipo){
            case "Guerreiro":
                ataque="usou espada"
                
                break
            case "Mago":
                ataque="usou Magia"
                break
            case "Ninja":
                ataque="usou shuriken"
                break
            case "Monge":
                ataque="usou artes maciais"
                break
            default:
                break
        }
        return `O ${this.tipo} usou ${ataque}`
    }
}
const Guerreiro= new heroi("azul",14,"Mago")
const heroi1=Guerreiro.atacar()
console.log(heroi1)