const form = document.getElementById('form'); //const para pegar o form (formulario) e para acessar ele usa o getElementById form

form.addEventListener('submit', function(event) { // quando fizer submit vai ter uma funcao evento
    event.preventDefault();
    // Chama 'event.preventDefault()' para evitar o comportamento padrão do formulário,
    // vai impedir o carregamento da pagina quando carregar os dados
    //que seria recarregar a página. Isso é necessário para poder processar o formulário com JavaScript.

    //pra pegar os dados que o usuario inserir criamos essas duas variaveis:
    const weight = document.getElementById('weight').value;
    // Cria uma constante 'weight' e atribui a ela o valor do elemento HTML com o id 'weight'.
    // Isso obtém o valor inserido pelo usuário no campo de entrada de peso.
    const height = document.getElementById('height').value;
    // Cria uma constante 'height' e atribui a ela o valor do elemento HTML com o id 'height'.
    // Isso obtém o valor inserido pelo usuário no campo de entrada de altura.
    const bmi = (weight / (height * height)).toFixed(2);
    // variavel pra calcular peso divido por altura multiplicado por altura e toFixed para ser só 2 casas apos a virgula

    const value = document.getElementById('value'); //variavel pra pegar o valor
    let description = ''; //Isso será usado para armazenar a descrição do resultado do IMC
    value.classList.add('attention') // isso é pra colocar que toda descrçicao do valor vai ser vemelho (pq só um das description é q tá no peso ideal)
    document.getElementById('description').textContent = description;
    document.getElementById('infos').classList.remove('hidden');
    // Remove a classe 'hidden' do elemento com o id 'infos'.
    // Isso torna o elemento visível, exibindo os resultados do cálculo do IMC.

    if(bmi <18.5){ // se o imc for menor que 18.5 tá abaixo do peso
      description = 'Cuidado! Você está abaixo do peso!';
    }else if (bmi >=18.5 && bmi <= 25){
      description = 'Você está no peso ideal!'; 
      value.classList.remove('attention') //remove a cor vermelha pra quando for esse result
      value.classList.add('normal')// cor do valor resultado pra qnd de
    }else if (bmi>25 && bmi <=30){
      description = 'Cuidado! Você está com sobrepeso!';
    }else if (bmi>30 && bmi <=35){
      description = 'Cuidado! Você está com obesidade moderada!';
    }else if (bmi>35 && bmi <=40){
      description = 'Cuidado! Você está com obesidade severa!';
    }else {
      description = 'Cuidado! Você está com obesidade morbida!';
    }
value.textContent = bmi.replace('.',','); //pra parecer o valor e fiz replace pra trocar o . por , do numero.
document.getElementById('description').textContent = description; //pra fazer a descricao aparecer no html:
});

