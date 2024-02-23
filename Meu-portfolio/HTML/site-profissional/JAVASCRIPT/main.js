const subMenu = document.getElementById("sub-menu-fixo")
const subMenuCaixa = document.getElementById("caixa-volta-menu-principal")
const botaoVoltaCaixa = document.getElementById("caixa-volta-menu-principal")

const links = document.getElementsByTagName('a');

// PARA TODAS TAGS <A> RECEBEREM preventDefault QUE TIRA O COMPORTAMENTO PADRAO DELAS COMO NESSE SITE E APENAS PRA VER ESSA LANDPAGE NAO PRECISA DE LINKS
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (event) {
        event.preventDefault();
    });
}
//---------------------------------------------------------------------------------

function voltaAoTopo() {
    const rolarPraCima = window.setInterval(() => {

        const valorScrollY = window.scrollY
        if (valorScrollY > 0) {
            window.scrollTo(0, valorScrollY - 80)
        } else {
            window.clearInterval(rolarPraCima)
        }

    }, 1);
}

//----------------------FUNCAO PARA ATIVAR O SUB-MENU---------------------------

window.addEventListener('scroll', () => {
    let valorScrollY = window.scrollY;

    if (valorScrollY > 300 && window.innerWidth > 769) {
        ativarSubMenu();
    } else {
        desativarSubMenu();
    }
});

function ativarSubMenu() {
    subMenu.style.display = "flex";
}

function desativarSubMenu() {
    subMenu.style.display = "none";
}

//---------------------------------------------------------------------------------

//--------------------------FUNCAO PARA VOLTAR AO TOPO-----------------------------

subMenuCaixa.addEventListener('click', (evento) => { //PASSANDO EVENTO SOMENTE PARA PEGAR O PREVENTDEFAUT() E APLICAR NELE PARA TIRAR A FUNCAO PADRAO DELE
    evento.preventDefault()
    voltaAoTopo();
});

//---------------------------------------------------------------------------------

//--------------------------------------API DO CAROUSEL COM ALTERACAO-------------------------------------------
$(document).ready(function () {
    var owl = $(".conteudo-destaques-9");
    var buttons = $(".owl-controls span");

    function initializeOwl() {
        owl.owlCarousel({
            center: true,
            loop: true,
            items: getItemsCount(),
            margin: 10,
            nav: false,
            dots: false
        });
    }

    function getItemsCount() {
        return $(window).width() < 480 ? 1 : 2;
    }

    function refreshOwl() {
        owl.trigger('refresh');
        goToSlide(0);
    }

    function goToSlide(index) {
        owl.trigger("to.owl.carousel", [index, 300]);
    }

    $(".button-1").click(function () {
        goToSlide(0);
    });

    $(".button-2").click(function () {
        goToSlide(1);
    });

    $(".button-3").click(function () {
        goToSlide(2);
    });

    $(".button-4").click(function () {
        goToSlide(3);
    });

    owl.on('initialized.owl.carousel changed.owl.carousel', function (event) {
        buttons.removeClass("active");

        var currentSlide = event.item.index;
        var centerSlide = Math.floor(event.item.count / 2);
        var activeButton = (currentSlide - centerSlide + buttons.length) % buttons.length;

        buttons.eq(activeButton).addClass("active");
    });

    $(window).resize(function () {
        owl.trigger('destroy.owl.carousel');
        initializeOwl();
        refreshOwl();
    });

    initializeOwl();
    refreshOwl();
});

//---------------------------------------------------------------------------------

//------------------------------------------FUNCAO DE ACCORDOIN------------------------------------------------------------

var accordionHeaders = document.querySelectorAll('.accordion-header');

// DENTRO DESSA CLASSE E VER TODAS E FAZ UMA AERO FUNCTION COMO O ELEMENTO
accordionHeaders.forEach(function (header) {
    // QUANDO O ELEMENTO TIVER UM CLICK ELE FAZ A FUNCAO 
    header.addEventListener('click', function () {
        // A CLASSE PASSA A RECEBER O ELEMENTO COM O ANCESTRAL MAIS PROXIMO
        var accordionItem = this.closest('.accordion-item');

        // QUANDO CLICA NO ELEMENTO QUE JA ESTA ACTIVE!
        if (accordionItem.classList.contains('active')) {
            accordionItem.classList.remove('active');
            this.querySelector('.fa-solid').classList.remove('fa-chevron-down');
            this.querySelector('.fa-solid').classList.add('fa-chevron-up');
        } else {
            // Desativar todos os itens ativos (ELE VER TODOS OS ELEMENTOS QUE ESTAO COM ACTIVE E TIRA)
            var activeItems = document.querySelectorAll('.accordion-item.active');
            activeItems.forEach(function (item) {
                item.classList.remove('active');
                item.querySelector('.fa-solid').classList.remove('fa-chevron-down');
                item.querySelector('.fa-solid').classList.add('fa-chevron-up');
            });

            // ativar o item clicado (POSICAO DAS SETAS)
            accordionItem.classList.add('active');
            this.querySelector('.fa-solid').classList.remove('fa-chevron-up');
            this.querySelector('.fa-solid').classList.add('fa-chevron-down');
        }
    });
});

//---------------------------------------------------------------------------------------------------------------

// Função para trocar a imagem quando a tela for menor que 768px
function changeLogoImage() {
    var logoImage = document.getElementById('logo-image');

    if (window.innerWidth < 768) {
        logoImage.src = './image/letra-v-64px.png';
        logoImage.alt = 'logo-da-empresa';
    } else {
        logoImage.src = './image/letra-v-64px.png';
        logoImage.alt = 'logo-da-empresa';
    }
}

// Chama a função quando a página é carregada e quando a tela é redimensionada
window.addEventListener('load', changeLogoImage);
window.addEventListener('resize', changeLogoImage);
