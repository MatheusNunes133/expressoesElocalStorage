const Mask= {
    cpfCnpj(input){
        //Pegando o conteúdo do input
        let value = input.value;
            //Trocando letras por espaços vazios
            value = value.replace(/\D/,"");
            //apagando caracteres(numeros) com tamanho maior que 14
            if(value.length > 14){
                value = value.slice(0,-1);
            }
        //montando o formato do cnpj 11.111.111/1111-11
        value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
        input.value = value;
    },
    cep(input){
        let value = input.value;
            value = value.replace(/\D/,"");
            if(value.length > 8){
                value = value.slice(0,-1);
            }
            value = value.replace(/(\d{5})(\d{3})/, "$1-$2");
            input.value = value;
    }
}