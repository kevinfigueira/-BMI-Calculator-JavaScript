var button = document.querySelector('#button');


function calc() {    
    var name = document.getElementById('name').value,
        height = document.getElementById('height').value,
        weight = document.getElementById('weight').value,
        results = document.getElementById('results'),
        resultIMC = (weight / (height * height)).toFixed(1);

    if (name !== '' && height !== '' && weight !== '') {
        if(resultIMC <= 18.5){
            classification = 'abaixo do Peso';

        }else if(resultIMC <= 24.9){
            classification = 'Peso Normal';

        }else if(resultIMC <= 29.9){
            classification = 'Sobreso';

        }else if(resultIMC <= 34.9){
            classification = 'Obesidade Grau I';

        }else if(resultIMC <= 39.9){
            classification = 'Obesidade Grau II';

        }else{
            classification = 'Obesidade Grau III ou Mórbida';
        }

        results.textContent = `Olá ${name} o seu IMC é ${resultIMC} e você esta classifcado como ${classification} !`;
    }else{
        results.textContent = 'Preencha todos os campos!'
    }

}


button.addEventListener('click', calc);