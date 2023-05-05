export class Pessoa{
    name = ''
    idade = 0
    sexo = ''

    constructor(){

    }

    getName(){
        return this.name;
    }

    setName(name:string){
        this.name = name;
    }

    getIdade(){
        return this.idade;
    }

    setIdade(idade:number){
        this.idade = idade;
    }

    getSexo(){
        return this.sexo;
    }

    setSexo(sexo:string){
        this.sexo = sexo;
    }

    save(){
        const aux:any = localStorage.getItem('Pessoa')
        const lista = aux ? JSON.parse(aux):[]
        lista.push(this)
        const data = JSON.stringify(lista)
        localStorage.setItem('Pessoa', data)
    }

}

