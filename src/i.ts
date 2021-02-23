
interface DadosDeEnvioEmail{
    para:string;
    id:string;
    assunto:string;
    text:string;
}

function enviarEmail({para, id, assunto, text}:DadosDeEnvioEmail){
    console.log(para, id, text, assunto);
}

class EnviarEmailParaUsuario {
    send() {
        enviarEmail({
            para:"para", 
            id:"", 
            assunto:"", 
            text:""});
    }
}