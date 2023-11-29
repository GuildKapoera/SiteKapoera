// SECTION TABLE RANK

function selectRankOptions() {
    // selecionar tabela
    let selectRank = document.querySelector('#selectRank');
    //percorrer pelas opções de objetos
    let optionValue = selectRank.options[selectRank.selectedIndex];
    // valor da opção do rank
    let valueRank = optionValue.value;
    // texto da opção do rank
    let textRank = optionValue.text;
    //selecionando o titulo
    let rankTitle = document.querySelector('#table-rank-title');
    
    // alterando o titulo da tabela conforme o selecionado
    rankTitle.innerHTML = textRank;
}
selectRankOptions()



