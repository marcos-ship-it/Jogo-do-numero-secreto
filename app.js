    let listaDenumerosSorteados = []
    let numerolimite= 10
    let numeroSecreto = gerarNumeroAleatorio();
    let tentativas = 1;
    
    function exibirTextoNaTela(tag, texto) { 
        let campo = document.querySelector(tag)
        campo.innerHTML = texto;
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});

    }
    
    function exibirMenssagemInicial() {
        exibirTextoNaTela('h1', 'Jogo do número secreto ');
        exibirTextoNaTela('p','Escolha um número entre 1 e 10 ');  
    }
    
    exibirMenssagemInicial();

    function verificarChute() {
        let chute = document.querySelector('input').value;
       
        if (chute== numeroSecreto) {
            exibirTextoNaTela('h1', 'Acertou!');
            let palavraTentativas = tentativas > 1 ? 'tentativas'  : 'tentativa' ;
            let menssagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
            exibirTextoNaTela ('p', menssagemTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            if(chute > numeroSecreto) {
                exibirTextoNaTela('p', 'O número é menor');
            } else {
                exibirTextoNaTela('p', 'O número secreto e maior ');
            } 
            tentativas++;
            LimparCampo();
        }
    }
    function gerarNumeroAleatorio() {
        let numeroEscolhido = parseInt(Math.random() * numerolimite+ 1 ); 
        let quantidadeDeElementosNaLista = listaDenumerosSorteados.length;

        if (listaDenumerosSorteados. includes(numeroEscolhido)) {
            listaDenumerosSorteados = [];
        }

        if (listaDenumerosSorteados.includes(numeroEscolhido)) {
            return gerarNumeroAleatorio();
        } else {
            listaDenumerosSorteados.push(numeroEscolhido)
            console.log(listaDenumerosSorteados)
            return numeroEscolhido;
        }
    }


    function LimparCampo() {
        chute = document.querySelector('input');
        chute.value = '';
    }

    function reiniciarJogo() {
        numeroSecreto = gerarNumeroAleatorio();
        LimparCampo();
        tentativas = 1;
        exibirMenssagemInicial();
        document.getElementById('reniciar').setAttribute('disbled',true)
    }

        