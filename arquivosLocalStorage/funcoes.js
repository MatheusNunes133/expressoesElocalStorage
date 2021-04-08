let operacao = 'Add';
let usuario = [];
let formCadastro = document.querySelector('#frmCadastro');
    formCadastro.addEventListener('submit', function(event){
        if(operacao == 'Add'){
            return Adicionar();
        }
        else{
            return Editar();
        }
    });

function Adicionar(){
    let dados = {
        codigo: document.querySelector('#txtCodigo').value,
        nome: document.querySelector('#txtNome').value,
        telefone: document.querySelector('#txtTelefone').value,
        email: document.querySelector('#txtEmail').value,
    }
        if(localStorage.getItem('usuario')){
            usuario = JSON.parse(localStorage.getItem('usuario'))
        };
        usuario.push(dados);
        localStorage.setItem('usuario',JSON.stringify(usuario));
        alert('Usuário adicionado!');
}

function Listar(){
    let tableListar = document.querySelector('#tblListar tbody');
    let linhas = '';
    
    let arrayUsuarios = JSON.parse(localStorage.getItem('usuario'));
    for(let i in arrayUsuarios){
        let usuarios = arrayUsuarios[i];
            linhas += `<tr>
                            <td>
                                <img src='images/editar.png' alt='${i}' onclick = 'editarUsuario(this)' />
                                <img src='images/delete.png' alt='${i}' onclick = 'deletarUsuario(this)' />
                            </td>
                            <td>${usuarios.codigo}</td>
                            <td>${usuarios.nome}</td>
                            <td>${usuarios.telefone}</td>
                            <td>${usuarios.email}</td>
                        </tr>`;
    }
    tableListar.innerHTML = linhas;
}
document.querySelector('#btnListar').addEventListener('click', function(e){
    Listar();
})