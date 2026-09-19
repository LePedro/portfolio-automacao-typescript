//importando dependências
import{test, expect, vi} from 'vitest';

//simulando login lento
function loginLento(usuario:string):Promise<string>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(`Bem vindo, ${usuario}`);
        },5000);
    });
}

test("Simular login usando fake timers ", async ()=> {
    //ligando a Máquina do tempo
    vi.useFakeTimers();
    console.log("⌛Iniciando cenário de teste");

    //Chamando promise de usuário sem await (ainda)
    const promesaLogin = loginLento("Josefino Pinto");

    //Configurar avanço de 5 segundos
    vi.advanceTimersByTime(5000);

    const resultado = await promesaLogin;

    //Verificar resultado
    expect(resultado).toBe(`Bem vindo, ${"Josefino Pinto"}`)
    console.log("Sucesso! Teste realizado na velocidade da luz⚡")

    //Desligando a máquina do tempo
    vi.useRealTimers();
});