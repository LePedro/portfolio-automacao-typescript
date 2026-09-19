// formas de tipar

// forma1
let idade: number;

// forma2
const nome = 'Pedro';

//forma3 não recomendado por ser redundante
const sobreNome: string ='Henrique';

//tipagem especiais
type usuario = {'nick': string, 'age':number};

//chamando type novo
let jogador: usuario = {nick: 'Pedroca', age: 20};

let jogadorVelho: usuario = {nick: 'Sebastião', age: 67};

function verificaIdade(usuarioAtual: usuario){
    if (usuarioAtual.age >= 21) {
        console.log(`✅ Acesso liberado: O jogador ${usuarioAtual.nick} tem ${usuarioAtual.age} anos e pode jogar nosso joguinho muito massa de pei pei`);
    }
    else{
        console.log(`❌ Acesso negado: O jogador ${usuarioAtual.nick} tem ${usuarioAtual.age} anos e não pode jogar`);
    }
};
verificaIdade(jogador);
verificaIdade(jogadorVelho);

type livro = {'titulo': string, 'valor': number};
let livro1: livro = {titulo: 'O Hobbit', valor: 50};

function verificaPreco(livroAtual: livro) {
    console.log (livroAtual.valor > 20 ? `O livro ${livroAtual.titulo} está custando ${livroAtual.valor} muito caro, não compre`
        : `O livro ${livroAtual.titulo} está custando ${livroAtual.valor}, tá barato pode dale`
    );
}

verificaPreco (livro1)