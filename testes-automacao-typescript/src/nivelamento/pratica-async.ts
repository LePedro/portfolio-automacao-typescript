//Importando a função utilitária de aguardar tempo(delay)
import {aguardar} from "../../utils/helpers";

//Simulando uma API de login
function simularLogin (usuario:string, senha:string): Promise <string> {
    return new Promise((resolve, reject) => {
        if(usuario === 'admin' && senha === '123456'){
            resolve("Token-secreto-aprovado-123");
        }
        else{
            reject("ERRO 401 - USUÁRIO OU SENHA INVÁLIDOS! ❌")
        }
    });
};

//Função principal com SYNC/AWAIT
async function executarCT() {
    console.log("⌛INICIANDO CENÁRIO DE TESTE")
    try{
        console.log("Passo 1: abrindo tela de login ...")
        await aguardar(5000);
        console.log("Passo 2: Inserindo crenciais ...")
        await aguardar(10000);
        
        const token = await simularLogin('admin', '123456')
        console.log(`SUCESSO! USUÁRIO LOGADO TOKEN RECEBIDO: ${token}\n`)
    }
    catch(erro){
        console.error(`FALHA NO TESTE ${erro}\n`);
    }
    finally{
        console.log("Passo final: Fechando navegador e limpando dados.");
    }
}
executarCT();