//NOVAS BIBLIOTECA
import axios from 'axios';

//PARTE 1
//Permite funções assínccronas
/*
Se tivermos duas funções A e B. Se A executar
primeiro.
B também poderá executar, sem esperar A finalizar
*/
const delay = (n) => new Promise(resolve => setTimeout(resolve(n), 1000));

async function umPorSegundo(n) {
    try{
        var resp = await delay(n);
        console.log(resp)
    }catch(err){
        console.log(err);
    }
    
}

async function asyncCall(){
    await umPorSegundo(1);
    await umPorSegundo(2);
    await umPorSegundo(3);
}

asyncCall();

 
//PARTE 2
async function getUserFromGithub(user) {
    try{
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    }
    catch(err){
        console.log(err.message, '- Usuario não encontrado');
    };

}

getUserFromGithub('raedman90');
getUserFromGithub('diego3g124123');

//PARTE 3
class Github {
    static async getRepositories(repo) {
            try{
                const response = await axios.get(`https://api.github.com/repos/${repo}`);
                console.log(response.data);
            
            }
            catch(err){
                console.log(err.message, '- Repositório não encontrado')
            };
        
    }
}

Github.getRepositories('raedman90/atividade4-js');
Github.getRepositories('raedman90/none');

//PARTE 4
const buscaUsuario = async(usuario) => {
    try {
        const resp = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(resp.data);
    } catch (error) {
        console.log(error.message, '- Repositório não encontrado');
    }
};

buscaUsuario('raedman90');
buscaUsuario('diego3g124123');