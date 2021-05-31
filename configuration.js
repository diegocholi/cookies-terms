const configurations = {
  blocked_scripts: ["facebook", "yahoo"],
  privacy_policy_link:
    "https://minio-cpe.sebrae.com.br/documento/politica-privacidade.pdf",
  cookies_policy: "https://www.sebraepr.com.br/politica-de-cookies/",
  Essencial: [
    {
      nome: "PHPSESSID",
      dominio: "www.sebraepr.com.br",
      tipo: "Necessário",
      descricao:
        "Este cookie é nativo para aplicativos PHP. O cookie é usado para armazenar e identificar o ID de sessão exclusivo de um usuário com a finalidade de gerenciar a sessão do usuário no site. O cookie é um cookie de sessão e é excluído quando todas as janelas do navegador são fechadas.",
      duracao: "sessão",
    },
    {
      nome: "sc_acc_terms",
      dominio: "www.sebraepr.com.br",
      tipo: "Necessário",
      descricao: "Mantém as preferências de cookies do usuário",
      duracao: "1 ano",
    },
    {
      nome: "uncode_privacy {consent_types}",
      dominio: "www.sebraepr.com.br	",
      tipo: "Necessário",
      descricao:
        "Este cookie é definido pelo tema Uncode WordPress e é usado para gerenciar as configurações de privacidade no site.",
      duracao: "1 ano",
    },
    {
      nome: "uncodeAI.screen",
      dominio: "www.sebraepr.com.br",
      tipo: "Necessário",
      descricao:
        "Este cookie é definido pelo tema Uncode WordPress para executar o sistema Adaptive Images. De acordo com sua documentação, esses cookies contêm informações de tempo de execução sobre a janela de visualização e a resolução da tela, esses dados são usados ​​em qualquer atualização de página para calcular as Imagens Adaptativas corretas. Nenhuma informação pessoal é armazenada nesses cookies.",
      duracao: "sessão",
    },
    {
      nome: "uncodeAI.images",
      dominio: "www.sebraepr.com.br",
      tipo: "Necessário",
      descricao:
        "Este cookie é definido pelo tema Uncode WordPress para executar o sistema Adaptive Images. De acordo com sua documentação, esses cookies contêm informações de tempo de execução sobre a janela de visualização e a resolução da tela, esses dados são usados ​​em qualquer atualização de página para calcular as Imagens Adaptativas corretas. Nenhuma informação pessoal é armazenada nesses cookies.",
      duracao: "sessão",
    },
    {
      nome: "uncodeAI.css",
      dominio: "www.sebraepr.com.br",
      tipo: "Necessário",
      descricao:
        "Este cookie é definido pelo tema Uncode WordPress para executar o sistema Adaptive Images. De acordo com sua documentação, esses cookies contêm informações de tempo de execução sobre a janela de visualização e a resolução da tela, esses dados são usados ​​em qualquer atualização de página para calcular as Imagens Adaptativas corretas. Nenhuma informação pessoal é armazenada nesses cookies.",
      duracao: "sessão",
    },
    {
      nome: "AWSALBCORS",
      dominio: "ct-socket.huggy.app",
      tipo: "Necessário",
      descricao:
        "Este cookie é usado para serviços de balanceamento de carga fornecidos pela Amazon para otimizar a experiência do usuário. A Amazon atualizou o ALB e o CLB para que os clientes possam continuar a usar a solicitação CORS com persistência.",
      duracao: "7 dias",
    },
    {
      nome: "__cfduid",
      dominio: ".huggy.io",
      tipo: "Necessário",
      descricao:
        "O cookie é usado por serviços cdn como o CloudFare para identificar clientes individuais por trás de um endereço IP compartilhado e aplicar configurações de segurança por cliente. Não corresponde a nenhum ID de usuário no aplicativo da web e não armazena nenhuma informação de identificação pessoal.",
      duracao: "1 mês",
    },
    {
      nome: "_hjTLDTest",
      dominio: ".sebraepr.com.br",
      tipo: "Outro",
      descricao:
        "Quando o script Hotjar é executado, tentamos determinar o caminho de cookie mais genérico que devemos usar, em vez do nome do host da página. Isso é feito para que os cookies possam ser compartilhados entre subdomínios (quando aplicável). Para determinar isso, tentamos armazenar o cookie _hjTLDTest para diferentes alternativas de substring de URL até que ele falhe. Após esta verificação, o cookie é removido.",
      duracao: "sessão",
    },
    {
      nome: "_hjid",
      dominio: ".sebraepr.com.br",
      tipo: "Outro",
      descricao:
        "Este cookie é definido pelo Hotjar. Este cookie é definido quando o cliente acessa pela primeira vez uma página com o script Hotjar. Ele é usado para persistir o ID do usuário aleatório, exclusivo para aquele site no navegador. Isso garante que o comportamento em visitas subsequentes ao mesmo site seja atribuído ao mesmo ID de usuário.",
      duracao: "1 ano",
    },
    {
      nome: "AWSALB",
      dominio: ".huggy.io",
      tipo: "Outro",
      descricao:
        "AWSALB é um cookie gerado pelo balanceador de carga do aplicativo no Amazon Web Services. Funciona um pouco diferente do AWSELB.",
      duracao: "7 dias",
    },
    {
      nome: "_hjIncludedInPageviewSample",
      dominio: "www.sebraepr.com.br",
      tipo: "Outro",
      descricao:
        "Este cookie é definido para permitir que o Hotjar saiba se aquele visitante está incluído na amostragem de dados definida pelo limite de visualizações de página do seu site.",
      duracao: "2 minutos",
    },
    {
      nome: "_hjAbsoluteSessionInProgress",
      dominio: ".sebraepr.com.br",
      tipo: "Outro",
      descricao:
        "Este cookie é usado para detectar a primeira sessão de exibição de página de um usuário. Este é um sinalizador Verdadeiro / Falso definido pelo cookie.",
      duracao: "30 minutos",
    },
    {
      nome: "_hjIncludedInSessionSample",
      dominio: "www.sebraepr.com.br",
      tipo: "Outro",
      descricao:
        "Este cookie é definido para permitir que o Hotjar saiba se aquele visitante está incluído na amostragem de dados definida pelo limite de sessão diária de seu site.",
      duracao: "2 minutos",
    },
    {
      nome: "usuário_util",
      dominio: "www.sebraepr.com.br",
      tipo: "Outro",
      descricao: "Sem descrição",
      duracao: "1 mês",
    },
    {
      nome: "SebraePR",
      dominio: "www.sebraepr.com.br",
      tipo: "Outro",
      descricao: "Sem descrição",
      duracao: "sessão",
    },
    {
      nome: "TS01bc4bf6",
      dominio: ".www.sebraepr.com.br",
      tipo: "Outro",
      descricao: "Sem descrição",
      duracao: "sessão",
    },
    {
      nome: "_dc_gtm_UA-1665465-1",
      dominio: ".sebraepr.com.br",
      tipo: "Outro",
      descricao: "Sem descrição",
      duracao: "1 minuto",
    },
    {
      nome: "hgyclh-w10230",
      dominio: ".www.sebraepr.com.br",
      tipo: "Outro",
      descricao: "Sem descrição",
      duracao: "1 ano",
    },
    {
      nome: "SebraePR",
      dominio: "sebraepr.com.br",
      tipo: "Outro",
      descricao: "Sem descrição",
      duracao: "sessão",
    },
    {
      nome: "TS01b65e3a",
      dominio: "sebraepr.com.br",
      tipo: "Outro",
      descricao: "Sem descrição",
      duracao: "sessão",
    },
    {
      nome: "app_powerzap",
      dominio: ".huggy.app",
      tipo: "Outro",
      descricao: "Sem descrição",
      duracao: "1 hora",
    },
    {
      nome: "TS013a65e9",
      dominio: ".api.pr.sebrae.com.br",
      tipo: "Outro",
      descricao: "Sem descrição",
      duracao: "sessão",
    },
  ],
  /*
    "nome" : "",
    "dominio" : "",
    "tipo" : "",
    "descricao" : "",
    "duracao" : ""
    */
  Desempenho: [
    {
      nome: "_ga",
      dominio: ".sebraepr.com.br",
      tipo: "Analytics",
      descricao:
        "Este cookie é instalado pelo Google Analytics. O cookie é usado para calcular o visitante, a sessão, os dados da campanha e controlar o uso do site para o relatório de análise do site. Os cookies armazenam informações anonimamente e atribuem um número gerado aleatoriamente para identificar visitantes únicos.",
      duracao: "2 anos",
    },
    {
      nome: "_gid",
      dominio: ".sebraepr.com.br	",
      tipo: "Analytics",
      descricao:
        "Este cookie é instalado pelo Google Analytics. O cookie é usado para armazenar informações de como os visitantes usam um site e ajuda na criação de um relatório analítico de como o site está se saindo. Os dados coletados incluem o número de visitantes, a fonte de onde vieram e as páginas visitadas de forma anônima.",
      duracao: "1 dia",
    },
    {
      nome: "_hjFirstSeen",
      dominio: ".sebraepr.com.br",
      tipo: "Analytics",
      descricao:
        "Isso é definido pelo Hotjar para identificar a primeira sessão de um novo usuário. Ele armazena um valor verdadeiro / falso, indicando se esta foi a primeira vez que o Hotjar viu este usuário. É usado por filtros de Gravação para identificar novas sessões de usuário.",
      duracao: "30 minutos",
    },
  ],
  /*
    "nome" : "",
    "dominio" : "",
    "tipo" : "",
    "descricao" : "",
    "duracao" : ""
    */
  Publicidade: [
    {
      nome: "_fbp",
      dominio: ".sebraepr.com.br	",
      tipo: "Publicidade",
      descricao:
        "Este cookie é definido pelo Facebook para fornecer publicidade quando eles estiverem no Facebook ou em uma plataforma digital alimentada por publicidade do Facebook após visitar este site.",
      duracao: "3 meses",
    },
    {
      nome: "fr",
      dominio: ".facebook.com",
      tipo: "Publicidade",
      descricao:
        "O cookie é definido pelo Facebook para mostrar anúncios relevantes aos usuários e medir e melhorar os anúncios. O cookie também rastreia o comportamento do usuário na web em sites que possuem pixel do Facebook ou plugin social do Facebook.",
      duracao: "3 meses",
    },
    {
      nome: "B",
      dominio: ".yahoo.com",
      tipo: "Publicidade",
      descricao:
        "Este Cookie é usado pelo Yahoo para fornecer anúncios, conteúdo ou análises.",
      duracao: "1 ano",
    },
    {
      nome: "A3",
      dominio: "yahoo.com",
      tipo: "Publicidade",
      descricao:
        "Coleta informações sobre o comportamento do usuário em vários sites. Essas informações são utilizadas para otimizar a relevância da propaganda no site.",
      duracao: "1 ano",
    },
    /*
    "nome" : "",
    "dominio" : "",
    "tipo" : "",
    "descricao" : "",
    "duracao" : ""
    */
  ],
};
