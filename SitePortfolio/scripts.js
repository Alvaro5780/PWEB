// Obtém todos os elementos com a classe "projeto"
const projetos = document.querySelectorAll(".projeto");

// Obtém o elemento de conteúdo de detalhes
const conteudoDetalhes = document.getElementById("conteudo-detalhes");

// Adiciona um evento de clique a cada elemento "projeto"
projetos.forEach((projeto) => {
    projeto.addEventListener("click", () => {
        // Obtém o atributo "data-projeto" do elemento clicado
        const numeroProjeto = projeto.getAttribute("data-projeto");

        // Com base no número do projeto, atualiza o conteúdo de detalhes
        switch (numeroProjeto) {
            case "1":
                conteudoDetalhes.innerHTML =  "Atualmente estou trabalhando no desenvolvimento de uma aplicação PWA cuja as funcionalidades " +  
                                              " são de trocar HQs e quadrinhos onde os usuarios anunciam os titulos que eles tem interesse " +
                                              "em disponibilizar para trocas e também manifestar interesse em titulos e generos de opção propria " +
                                              "para que seja notificado quando haja uma postagem que se alinha aos interesses manifestados." 
                break;
            case "2":
                conteudoDetalhes.innerHTML = "Utilizando Python e Access,  desenvolvi uma aplicação que extrai dados, tabelas e outras" +
                                             " informações para obter apenas dados pertinentes ao objetivo do projeto, que é montar orçamentos" +
                                             " para clientes de forma automatiza e personalizada.";
                break;
            case "3":
                conteudoDetalhes.innerHTML = "Utilizando Delphi e Access, desenvolvi uma aplicação DeskTop para encontrar aqruivos " +  
                                             "com enderaçamentos variados para que seja facilmente encontrado visto que o acervo de " +
                                             "arquivos é imenso, e a partir de filtros, ordenações e metodos de pesquisa essa facilidade " +
                                             "passa a ser presente." 
                break;
            default:
                conteudoDetalhes.innerHTML = "Selecione um projeto para ver os detalhes.";
        }
    });
});
