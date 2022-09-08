import {msgInfo, msgPrimary, msgSuccess, msgWarning, msgDanger, showAlert, hideAlert, fnc, CLS} from './module.js'
// msgSuccess("AVVISO", "MSG");
// fnc.msg_success("TITLE", "File script");
// const classi = new CLS;
// classi.cls_msg_success("TITOLO", "MSG");
// inizializzo la class
const classe = new CLS;
// recupero gli elementi dal DOM
let fi_alert_close = document.querySelector('.fi-alert-close');
let fi_panel_footer = document.querySelector('.fi-panel-footer');
let fi_btn_all = document.querySelectorAll('.fi-btn');
// ./recupero gli elementi dal DOM
/*
function printer() {
    console.groupCollapsed("PRINT");
        console.info("STAMPA");
    console.groupEnd();
}
*/
function rotationElement(el, title, message) {
    for(var i=0; i<fi_btn_all.length; i++) {
        if(i == el) {
            fi_btn_all[el].classList.add('fi-animation');
            fi_panel_footer.style.setProperty('background-color', 'var(--danger)');
            fi_panel_footer.innerHTML = `<br /><h2>${message}</h2>`;
            setTimeout((e) => {
                fi_btn_all[el].classList.remove('fi-animation');
                fi_panel_footer.style.setProperty('background-color', 'var(--dark)');
                fi_panel_footer.innerHTML = "";
            }, (2500));
        }// ./if
    }// ./for
}// ./rotationElement()
fi_btn_all[0].addEventListener('click', function() {
    // printer(); // OK
    // fnc.msg_success("TITOLO", "Questa funzione è stata chiamata al click del div"); // OK
    // classe.cls_msg_success("CLASSE", "Messaggio"); // OK
    rotationElement(0, "AVVISO", "Messaggio di prova 1");
})// ./div.click
fi_btn_all[1].addEventListener('click', function() {
    rotationElement(1, "ATTENZIONE", "Messaggio di prova 2");
})// ./div.click
fi_btn_all[2].addEventListener('click', function() {
    rotationElement(2, "QUESTO E'", "Alert a comparsa. INFO");
    showAlert("ALERT", "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.", "var(--info)", 'info');
})// ./div.click
fi_btn_all[3].addEventListener('click', function() {
    rotationElement(3, "QUESTO E'", "Alert a comparsa. SUCCESS");
    showAlert("ALERT", "Message call.", "var(--success)", 'success');
})// ./div.click
fi_btn_all[4].addEventListener('click', function() {
    rotationElement(4, "QUESTO E'", "Alert a comparsa. WARNING");
    showAlert("ALERT", "Message call.", "var(--warning)", 'warning');
})// ./div.click
fi_alert_close.addEventListener('click', (e) => {
    hideAlert()
});