let fi_fullscreen = document.querySelector('.fi-fullscreen');
let fi_alert = document.querySelector('.fi-alert');
let fi_alert_header = document.querySelector('.fi-alert-header');
let fi_alert_body = document.querySelector('.fi-alert-body');
function msgInfo(title, message) {

}// ./msgInfo()
function msgPrimary(title, message) {
    
}// ./msgPrimary()
function msgSuccess(title, message) {
    
}// ./msgSuccess()
function msgWarning(title, message) {
    
}// ./msgWarning()
function msgDanger(title, message) {
    
}// ./msgDanger()
function showAlert(title, message, bg_color, name_img) {
    fi_alert_header.innerHTML = ``;
    fi_alert_body.innerHTML = ``;
    fi_fullscreen.style.setProperty('display', 'block');
    fi_alert.style.setProperty('transition', '2s');
    fi_alert.style.setProperty('top', '50%');
    fi_alert_header.innerHTML = `<br /><center><img src='./images/${name_img}.png' alt='Not-image' width=25 height=25>&nbsp;${title}</center>`;
    fi_alert_body.style.setProperty('background-color', bg_color);
    fi_alert_body.innerHTML = `${message}`;
}// ./viewAlert()
function hideAlert() {
    fi_alert.style.setProperty('transition', '2s');
    fi_alert.style.setProperty('top', '-50%');
    fi_fullscreen.style.setProperty('display', 'none');
    fi_alert_header.innerHTML = "";
    fi_alert_body.innerHTML = ``;
}// ./hideALert()
const fnc = {
    msg_success : function(title, msg) {
        msgSuccess(title, msg);
    },
    msg_danger : function(title, mag) {
        msgDanger(title, msg);
    }
}
class CLS {
    cls_msg_success = function(title, msg) {
        msgSuccess(title, msg);
    }
    cls_msg_danger = function(title, msg) {
        msgDanger(title, msg);
    }
}
function stampa() {
    console.info("STAMPA");
}
export{msgInfo, msgPrimary, msgSuccess, msgWarning, msgDanger, showAlert, hideAlert, fnc, CLS, stampa};