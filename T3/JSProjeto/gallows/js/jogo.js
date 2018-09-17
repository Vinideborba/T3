var criaJogo = function(sprite){
    var etapa = 1;
    var lacunas = [];
    var palavraSecreta = "";

    var ganhou = function () {
        
        return lacunas.length
            ? !lacunas.some(function(lacuna){
                return lacuna == '';
            })
        : false;
    };

    var perdeu = function () {
        return sprite.isFinished();
    };

    var ganhouOuPerdeu = function () {
        return ganhou() || perdeu();
    };

    var reinicia = function () {
        etapa = 1;
        lacunas = [];
        palavraSecreta = '';
        sprite.reset();
    };

    var processaChute = function (chute) {
        
        var exp = new RegExp(chute, 'gi'),
            resultado,
            acertou = false;

        while(resultado = exp.exec(palavraSecreta)) {
            acertou = lacunas[resultado.index] = chute;
        }

        if(!acertou) 
        {
            sprite.nextFrame();
        }
    };

    var criaLacunas = function(){
        // for(var i=0; i < palavraSecreta.length; i++){
        //     lacunas.push('');
        // }

        lacunas = Array(palavraSecreta.length).fill('');
    };

    var proximaEtapa = function(){
        etapa = 2;
    }
    
    var setPalavraSecreta = function(palavra){
        palavraSecreta = palavra;
        criaLacunas();
        proximaEtapa();

    };

    var getLacuna = function(){
        
        return lacunas;
    };

    var getEtapa = function () {
        
        return etapa;
    };

    return {
        setPalavraSecreta: setPalavraSecreta,
        getLacuna: getLacuna,
        getEtapa: getEtapa,
        processaChute: processaChute,
        ganhou: ganhou,
        perdeu: perdeu,
        ganhouOuPerdeu: ganhouOuPerdeu, 
        reinicia: reinicia
    };
};