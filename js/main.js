'use strict'


/* Active page */

var URLactual = window.location;
var menu_bar_line = document.getElementById("menu_bar_line");
var menu_links = [document.getElementById("link-1").href, document.getElementById("link-2").href,
                document.getElementById("link-3").href, document.getElementById("link-4").href,
                document.getElementById("link-5").href, document.getElementById("link-6").href]

for(var i = 0; i <= 5; i++){
    if(menu_links[i]== URLactual){
        menu_bar_line.classList.add("active-page");
    }
}


/* Traer y ocultar preguntas con botones */

    /* Cajas de preguntas*/

    var question_1 = document.getElementById("question-box-1");
    var question_2 = document.getElementById("question-box-2");
    var question_3 = document.getElementById("question-box-3");
    var question_4 = document.getElementById("question-box-4");
    var question_5 = document.getElementById("question-box-5");
    var question_6 = document.getElementById("question-box-6");

    /* Botones de preguntas */

    var btn_question_1 = document.getElementById("question-1");
    var btn_question_2 = document.getElementById("question-2");
    var btn_question_3 = document.getElementById("question-3");
    var btn_question_4 = document.getElementById("question-4");
    var btn_question_5 = document.getElementById("question-5");
    var btn_question_6 = document.getElementById("question-6");

    /* Variable de verificación y array de cajas de preguntas */

    var OnSite = false;
    var questions_array = [question_1,question_2,question_3,question_4,question_5,question_6];

    var btn_prices_move = [document.getElementById("btn-faq-move1") , document.getElementById("btn-faq-move2") , document.getElementById("btn-faq-move3")];

    /* Funcion Toogle paralos botones y cajas */

    function TogglePregunta(pregunta){

        if(pregunta.classList.contains("show-question")){
            pregunta.classList.remove("show-question");
            pregunta.classList.add("hide-question");
            btn_prices_move[0].classList.remove("move-btn-prices");
            btn_prices_move[1].classList.remove("move-btn-prices");
            btn_prices_move[2].classList.remove("move-btn-prices");
            OnSite = false;
        }else{
            while(OnSite==true){
                for (var i = 0; i <= 5; i++){
                    questions_array[i].classList.add("hide-question");
                    questions_array[i].classList.remove("show-question");
                    btn_prices_move[0].classList.remove("move-btn-prices");
                    btn_prices_move[1].classList.remove("move-btn-prices");
                    btn_prices_move[2].classList.remove("move-btn-prices");
                    OnSite = false;
                }
            }
            if(pregunta==question_2 && screen.width > 1024){
                btn_prices_move[0].classList.add("move-btn-prices");
                btn_prices_move[1].classList.add("move-btn-prices");
                btn_prices_move[2].classList.add("move-btn-prices");
            }
            pregunta.classList.add("show-question");
            pregunta.classList.remove("hide-question");
            OnSite = true;
        };
        
    }

    /* Eventos de Click para ejecutar función Toggle */

    btn_question_1.addEventListener("click",function(){TogglePregunta(question_1)},false);
    btn_question_2.addEventListener("click",function(){TogglePregunta(question_2)},false);
    btn_question_3.addEventListener("click",function(){TogglePregunta(question_3)},false);
    btn_question_4.addEventListener("click",function(){TogglePregunta(question_4)},false);
    btn_question_5.addEventListener("click",function(){TogglePregunta(question_5)},false);
    btn_question_6.addEventListener("click",function(){TogglePregunta(question_6)},false);


    /* Menu */


    var menu_bar = document.getElementById("menu-bar");
    var ubicacion_principal = window.pageYOffset;

    /* Menú desplegable */
    var icon_menu = document.getElementById("menu-dropdown");
    var menu_items1 = document.getElementById("menu-items-1");
    var menu_items2 = document.getElementById("menu-items-2");
    var dropdown_menu = document.getElementById("dropdown-menu");

    var status_menu_toggle = 0;

    icon_menu.addEventListener("click",ToggleMenu,false);

    function ToggleMenu(){
        if(status_menu_toggle == 0){
            if(screen.width <= 425){
                menu_items1.classList.remove("menu-mobile-animation-2");
                menu_items2.classList.remove("menu-mobile-animation-2");
                menu_items1.classList.add("menu-mobile-animation-1");
                menu_items2.classList.add("menu-mobile-animation-1");
            }else{
            menu_items1.classList.remove("hide-items-responsive");
            menu_items2.classList.remove("hide-items-responsive");
            menu_items1.style.transition = "0.2s all";
            menu_items2.style.transition = "0.2s all";
            }
            status_menu_toggle = 1;
        } else{
            if(screen.width <= 425){
                menu_items1.classList.remove("menu-mobile-animation-1");
                menu_items2.classList.remove("menu-mobile-animation-1");
                menu_items1.classList.add("menu-mobile-animation-2");
                menu_items2.classList.add("menu-mobile-animation-2");
            }else{
            menu_items1.classList.add("hide-items-responsive");
            menu_items2.classList.add("hide-items-responsive");
            menu_items1.style.transition = "0.2s all";
            menu_items2.style.transition = "0.2s all";
            }
            status_menu_toggle = 0;
        }
        
    }

    

    window.onscroll = function() {
        var scrollY_var = window.scrollY;
        if(ubicacion_principal > scrollY_var){
            menu_bar.style.top ="0";
            menu_bar.style.boxShadow =" 0px 0px 40px #000";
            menu_bar.style.transition = "1s all";
            
        }else{
            if(scrollY_var < 67){
                menu_bar.style.top ="0";
                menu_bar.style.transition = "1s all";
                menu_bar.style.boxShadow =" 0px 0px 40px #000";
                
            }else{
                menu_bar.style.top ="-100px";
                menu_bar.style.transition = "0.2s all";
                menu_items1.classList.add("hide-items-responsive");
                menu_items2.classList.add("hide-items-responsive");
                menu_items1.style.transition = "0.2s all";
                menu_items2.style.transition = "0.2s all";
                if(status_menu_toggle==1){
                    menu_items1.classList.add("menu-mobile-animation-2");
                    menu_items2.classList.add("menu-mobile-animation-2");
                }
                status_menu_toggle = 0;
            }
        }
        ubicacion_principal = scrollY_var;
    };

    /* Portafolio Slider */

    var btn_left = document.getElementById("icon-left-portfolio");
    var btn_right = document.getElementById("icon-right-portfolio");
    var slider_portfolio = document.getElementById("img-portfolio-section");

    btn_left.addEventListener("click",MoveLeft,false);
    btn_right.addEventListener("click",MoveRight,false);
    var status_slider = 1;

    function MoveRight(){
        if(status_slider!=2){
            slider_portfolio.classList.add("MoveRigthSlider");
            slider_portfolio.classList.remove("MoveLeftSlider");
            btn_right.classList.add("hidden-btn-porfolio");
            btn_left.classList.remove("hidden-btn-porfolio");
            status_slider = 2;
        }
        
    }

    function MoveLeft(){
        if(status_slider!=1){
        slider_portfolio.classList.add("MoveLeftSlider");
        slider_portfolio.classList.remove("MoveRigthSlider");
        btn_right.classList.remove("hidden-btn-porfolio");
        btn_left.classList.add("hidden-btn-porfolio");
        status_slider = 1;
        }
    }


