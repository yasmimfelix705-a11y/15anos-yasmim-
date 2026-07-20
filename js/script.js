// ===================================
// ABERTURA DO CONVITE
// ===================================

function abrirConvite() {

    const envelope = document.querySelector(".envelope");
    const conteudo = document.querySelector(".conteudo");


    envelope.style.transform = "scale(0)";
    envelope.style.opacity = "0";


    setTimeout(() => {

        envelope.style.display = "none";

        conteudo.style.display = "block";

    }, 700);

}





// ===================================
// CONTAGEM REGRESSIVA
// ===================================

// Festa: 05 de dezembro às 20:00

const dataFesta = new Date("December 5, 2026 20:00:00").getTime();



function atualizarContagem() {


    const agora = new Date().getTime();


    const distancia = dataFesta - agora;



    if (distancia <= 0) {


        document.getElementById("dias").innerHTML = "00";
        document.getElementById("horas").innerHTML = "00";
        document.getElementById("minutos").innerHTML = "00";
        document.getElementById("segundos").innerHTML = "00";


        return;

    }



    const dias = Math.floor(
        distancia / (1000 * 60 * 60 * 24)
    );



    const horas = Math.floor(
        (distancia % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );



    const minutos = Math.floor(
        (distancia % (1000 * 60 * 60)) /
        (1000 * 60)
    );



    const segundos = Math.floor(
        (distancia % (1000 * 60)) /
        1000
    );



    document.getElementById("dias").innerHTML = dias;

    document.getElementById("horas").innerHTML = horas;

    document.getElementById("minutos").innerHTML = minutos;

    document.getElementById("segundos").innerHTML = segundos;


}



setInterval(atualizarContagem, 1000);

atualizarContagem();







// ===================================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ===================================


const elementos = document.querySelectorAll(
    ".secao, .contador, .musica"
);



const observador = new IntersectionObserver(
    (entradas) => {


        entradas.forEach((entrada) => {


            if (entrada.isIntersecting) {


                entrada.target.classList.add("mostrar");


            }


        });


    }
);




elementos.forEach((elemento) => {


    elemento.classList.add("animar");


    observador.observe(elemento);


});






// ===================================
// MÚSICA AUTOMÁTICA (opcional)
// ===================================

const musica = document.querySelector("audio");


document.addEventListener("click", () => {


    if(musica) {

        musica.play().catch(() => {});

    }


}, {once:true});
