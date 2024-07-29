// const prompt = require("prompt-sync")();

// const usuarios = [];

// while (true) {
//     console.log(`
//     1- criar
//     2- listar
//     3- atualizar
//     4 remover
//     5- sair`);

//     const opcao = prompt("Qual opção deseja? ");

//     switch (opcao) {
//         case "1":
//             criar()
//             break;
//             case "2":
//             listagem()
//             break;case "3":
//             atualizar()
//             break;case "4":
//             remover()
//             break;case "5":
//             process.exit()
//             break;
//             default:
//                 console.log("Opção inválida");
//                 break;
//     }
// }

// const inserirUsuario = (usuario) => {
//   usuario.id = ultimoId;
//   ultimoId++;
// };
// const nomeInvalido = (nome) => nome == "";

// let ultimoId = 1;

// const indiceInvalido = (indice) =>
//   indice < 0 || indice >= usuarios.length || isNaN(indice);

// const listagem = () =>
//   usuarios.forEach((usuario, i) => {
//     let sequencia;
//     if (usuario.sequencia != -1) {
//       sequencia = usuarios[usuario.sequencia].nome;
//     } else {
//       sequencia = "Não possui sequência";
//     }
//     console.log(
//       `${i + 1} - ${usuario.nome}- ${usuario.email}- ${
//         usuario.telefone
//       } - ${sequencia}`
//     );
//   });
  

// const modelo = () => {
//   let usuario = {};

//   while (true) {
//     usuario.nome = prompt("Qual é o nome do usuário? ");
//     if (nomeInvalido(usuario.nome)) {
//       console.log("O nome não pode ser vazio!");
//     } else {
//       break;
//     }
//   }

//   while (true) {
//     usuario.email = prompt("Qual é o e-mail? ");
//     if (nomeInvalido(usuario.nome)) {
//       console.log("O nome não pode ser vazio!");
//     } else {
//       break;
//     }
//   }

//   while (true) {
//     usuario.telefone = Number(
//       prompt("Insira o telefone do usuário: ").replaceAll(",", ".")
//     );
//     if (usuario.telefone <= 0 || isNaN(usuario.telefone)) {
//       console.log("O telefone é inválido");
//     } else {
//       break;
//     }
//   } //TODO IMPLEMENTAR VALIDAÇÃO DE TELEFONE

  
// }
// const criar = () => {
//     const usuario = modelo();

//     usuarios.push(usuario);

//     console.log("Usuário cadastrado com sucesso!");
//   };

//   const atualizar = () => {
//     while (true) {
//       if (usuarios.length == 0) {
//         console.log("Lista de jogos vazia");
//         break;
//       }

//       listagem();

//       const indice =
//         lerIndice("Qual é o índice do usuário que deseja atualizar?") - 1;

//       if (indiceInvalido(indice)) {
//         console.log("Indice Inválido");
//       } else {
//         const usuario = modelo();
//         usuarios[indice] = usuario;
//         break;
//       }
//     }
//   }

// const remover = () => {

//     while (true) {
//         listagem()

//         const indice = lerIndice("Qual é o indice do usuário que deseja remover? ") -1

//         if(indiceInvalido(indice)) {
//             console.log("Indice inválido")
//         } else {
//             usuarios.forEach(usuario => {
//                 if(usuario.sequencia == indice) {
//                     usuario.sequencia = -1
//                 }
//             })
//             usuarios.splice(indice, 1)
//             console.log("Usuario deletado")
//             break
//         }
//     }
// }

const prompt = require("prompt-sync")();

const usuarios = [];
let ultimoId = 1;

const nomeInvalido = (nome) => nome === "";

const indiceInvalido = (indice) =>
  indice < 0 || indice >= usuarios.length || isNaN(indice);

const inserirUsuario = (usuario) => {
  usuario.id = ultimoId;
  ultimoId++;
};

const listagem = () =>
  usuarios.forEach((usuario, i) => {
    let sequencia;
    if (usuario.sequencia != -1) {
      sequencia = usuarios[usuario.sequencia].nome;
    } else {
      sequencia = "Não possui sequência";
    }
    console.log(
      `${i + 1} - ${usuario.nome} - ${usuario.email} - ${usuario.telefone} - ${sequencia}`
    );
  });

const modelo = () => {
  let usuario = {};

  while (true) {
    usuario.nome = prompt("Qual é o nome do usuário? ");
    if (nomeInvalido(usuario.nome)) {
      console.log("O nome não pode ser vazio!");
    } else {
      break;
    }
  }

  while (true) {
    usuario.email = prompt("Qual é o e-mail? ");
    if (nomeInvalido(usuario.email)) {
      console.log("O e-mail não pode ser vazio!");
    } else {
      break;
    }
  }

  while (true) {
    usuario.telefone = Number(
      prompt("Insira o telefone do usuário: ").replaceAll(",", ".")
    );
    if (usuario.telefone <= 0 || isNaN(usuario.telefone)) {
      console.log("O telefone é inválido");
    } else {
      break;
    }
  }

  usuario.sequencia = -1; // Adicione a propriedade `sequencia` com um valor padrão

  return usuario;
};

const criar = () => {
    const usuario = modelo();
    inserirUsuario(usuario);
    usuarios.push(usuario);
    console.log("Usuário cadastrado com sucesso!");
};

const atualizar = () => {
    while (true) {
        if (usuarios.length == 0) {
            console.log("Lista de usuários vazia");
            break;
        }

        listagem();

        const indice = lerIndice("Qual é o índice do usuário que deseja atualizar?") - 1;

        if (indiceInvalido(indice)) {
            console.log("Índice Inválido");
        } else {
            const usuario = modelo();
            usuarios[indice] = usuario;
            break;
        }
    }
};

const remover = () => {
    while (true) {
        if (usuarios.length == 0) {
            console.log("Lista de usuários vazia");
            break;
        }

        listagem();

        const indice = lerIndice("Qual é o índice do usuário que deseja remover?") - 1;

        if (indiceInvalido(indice)) {
            console.log("Índice inválido");
        } else {
            usuarios.forEach(usuario => {
                if (usuario.sequencia == indice) {
                    usuario.sequencia = -1;
                }
            });
            usuarios.splice(indice, 1);
            console.log("Usuário deletado");
            break;
        }
    }
};

const lerIndice = (mensagem) => {
    const indice = prompt(mensagem);
    return parseInt(indice);
};

while (true) {
    console.log(`
    1- criar
    2- listar
    3- atualizar
    4- remover
    5- sair`);

    const opcao = prompt("Qual opção deseja? ");

    switch (opcao) {
        case "1":
            criar();
            break;
        case "2":
            listagem();
            break;
        case "3":
            atualizar();
            break;
        case "4":
            remover();
            break;
        case "5":
            process.exit();
            break;
        default:
            console.log("Opção inválida");
            break;
    }
}
