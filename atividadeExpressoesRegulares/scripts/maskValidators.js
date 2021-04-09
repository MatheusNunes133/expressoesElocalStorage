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