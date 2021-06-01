# cookies-terms

## Como utilizar

Primeiro copiar os arquivos da solução para a raiz do projeto.

Depois configurar o arquivo na raiz da solução "configuration.js". Nesse arquivo podemos setar os links de políticas de privacidade, políticas de cookies, cookies e suas descrições, cada tipo de cookie em suas devidas seções e também os scripts de terceiros que deve ficar bloqueado, até que o aceite ser aprovado pelo usuário.

Seguir o padão do objeto para evitar quebras na solução.

Após definir as configuração, basta adicionar o script no body, antes de qualquer outro script de sua aplicação, exemplo:

    <script src="/cookies-terms/cookies-terms.js"></script>
