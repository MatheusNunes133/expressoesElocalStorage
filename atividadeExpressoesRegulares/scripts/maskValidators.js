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


const Validate = {
    isEmail(input){
        //apaga msg de erro, se tiver
        Validate.clearErrors(input);
        //pegando o conteúdo do input
        let value = input.value;
        let error = null;
        //criando o formato do email
        let formatEmail = /^\w+([.-_]?\w+)*@\w+([.-_]?\w+)*(\.\w{2,3})+$/;
            // se o formato do email for falso (incompleto) entra no if
            if(!formatEmail.test(value)){
                error = 'Email inválido';
                Validate.displayError(input,error);
                return;
            }
            input.value = value;
            
    },
    isCPF_CNPJ(input){
        Validate.clearErrors(input);
        let value = input.value;
        let error = null;
        const cleanValues = value.replace(/\D/g, "");
            if(cleanValues.length <14 && cleanValues.length != 14){
                error = 'CNPJ inválido';
                Validate.displayError(input,error);
                return;
            }
            input.value = value;
    },
    isCEP(input){
        Validate.clearErrors(input);
        let value = input.value;
        let error = null;
        const cleanValues = value.replace(/\D/g,"");
            if(cleanValues.length != 8){
                error = 'CEP inválido';
                Validate.displayError(input,error);
                return;
            }
            input.value = value;
    },
    clearErrors(input){
        //pega o input com a classe error
        const errorDiv = input.parentNode.querySelector('.error');
        console.log(errorDiv);
            if(errorDiv){
                //remove esse input
                errorDiv.remove();
            }
    },
    displayError(input, error){
        //cria um novo elemento div dentro do html
        let div = document.createElement('div');
        //adiciona a classe error a essa div
        div.classList.add('error');
        //adiciona a msg de erro dentro do conteúdo da div
        div.innerHTML = error;
        //adiciona a classe dentro do pai do input
        input.parentNode.appendChild(div);
        //dá foco no input q está com a mensagem de erro
        input.focus();
    }
}