# FinaleScript Studio

Aplicativo visual e bilíngue para criar automações do **FinaleScript** sem precisar memorizar todos os comandos.

## Acessar o aplicativo

Use diretamente pelo navegador:

**[Abrir o FinaleScript Studio](https://glauberlasantiago.github.io/finalescript-studio/)**

Também é possível baixar o repositório e abrir o arquivo `index.html` no computador. Mantenha as pastas `app` e `local-app` ao lado do arquivo para que a interface funcione corretamente.

## Principais recursos

- Construtor visual com caixas de seleção e campos guiados.
- Geração instantânea do script na ordem escolhida.
- Modelos prontos, incluindo exportação em lote para MusicXML.
- Biblioteca com **262 comandos oficiais** do FinaleScript.
- Nomes orientativos em português e comandos originais em inglês.
- Pesquisa em português ou inglês, mesmo sem acentos.
- Filtros por categoria, parâmetros e exemplos.
- Ordenação alfabética A–Z ou Z–A.
- Visualização da biblioteca em lista ou grade.
- Inclusão de comandos manuais.
- Cópia do script e download em arquivo `.txt`.
- Salvamento automático das escolhas quando permitido pelo navegador.
- Funcionamento local, sem necessidade de instalar o Finale no mesmo computador.

## Exemplo: exportação MusicXML em lote

O modelo correspondente produz esta sequência:

```text
Batch Process Folder
// Process all open docs
Menu Item "File/Export/MusicXML"
Return
End
```

O texto original dos comandos é mantido em inglês porque é esse formato que o FinaleScript reconhece. As traduções exibidas na biblioteca servem como orientação para facilitar a busca.

## Como usar

1. Escolha um modelo ou marque as ações desejadas.
2. Preencha os campos exibidos em cada ação.
3. Organize a ordem de execução usando as setas.
4. Consulte a biblioteca completa quando precisar de comandos adicionais.
5. Copie ou baixe o script criado.
6. No Finale, abra **Plug-ins › FinaleScript › FinaleScript Palette**.
7. Crie um script, cole o conteúdo e revise antes de executar.

## Versão local

Depois de baixar ou clonar o repositório, abra:

```text
index.html
```

Não é necessário executar servidor, instalar dependências ou usar linha de comando para a versão local.

## Desenvolvimento

Para trabalhar na versão completa do projeto:

### Requisitos

- Node.js 22.13 ou superior.

### Comandos

```bash
npm install
npm run dev
npm run build
```

O aplicativo utiliza React, TypeScript, Vinext e Vite. A versão independente aberta pelo `index.html` é gerada em `local-app/app.js`.

## Fontes de referência

- [Como usar o FinaleScript](https://usermanuals.finalemusic.com/FinaleWin/Content/Finale/Using_FinaleScript.htm)
- [Referência oficial de comandos FinaleScript](https://usermanuals.finalemusic.com/FinaleWin/Content/Finale/FinaleScript_command_reference.htm)

## Avisos

- Nomes de menus e janelas podem variar conforme o idioma e a versão do Finale.
- Sempre teste scripts em cópias dos documentos antes de processar muitos arquivos.
- Finale e FinaleScript são produtos de seus respectivos proprietários. Este é um projeto independente.

## Licença

Consulte as condições do repositório antes de redistribuir ou modificar o projeto.
