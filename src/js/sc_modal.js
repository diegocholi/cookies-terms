var sc_checked_essentials = true;

const sc_modal_menu_navigation = (navigation_to = undefined) => {
  let selected_menu = document.getElementsByClassName("sc_modal_menu_select");
  if (!navigation_to) navigation_to = selected_menu[0].options.selectedIndex;

  let button = document.getElementsByClassName("sc_modal_menu_desktop_button");
  let content = document.getElementsByClassName("sc_modal_content");
  let checked_icon = document.getElementsByClassName("sc_icon_checked");
  button[navigation_to].style = "background-color: #fff";
  content[navigation_to].style = "display: block";
  checked_icon[navigation_to].style = "fill: rgb(35, 122, 252)";
  for (let index = 0; index < button.length; index++) {
    const element_button = button[index];
    const element_content = content[index];
    const checked_content = checked_icon[index];
    if (navigation_to !== index) {
      element_button.style = "background-color: rgb(35, 122, 252)";
      element_content.style = "display: none";
      checked_content.style = "fill: #fff";
    }
  }
};

const sc_checked_acc_cookies = (event) => {
  let checked = document.getElementsByClassName(
    "sc_modal_menu_desktop_button_check"
  )[2];
  let aviso_anuncio = document.getElementsByClassName("sc_aviso_anuncios")[0];

  if (event.checked) {
    checked.style = "display: contents";
    aviso_anuncio.style = "display: none";
    sc_checked_essentials = false;
  } else {
    checked.style = "display: none";
    aviso_anuncio.style = "display: contents";
    sc_checked_essentials = true;
  }
};

const sc_save_changes = () => {
  if (!sc_checked_essentials) sc_acc_terms_js(true);
  else sc_acc_terms_js("essentials");
  sc_open_modal(false);
};

const open_detail_cookies = (id_item) => {
  let cookies_itens = document.getElementsByClassName("sc_cookies_datail");
  let icon_open_details = document.getElementsByClassName("sc_icon_container");
  if (
    cookies_itens[id_item].outerHTML.indexOf('style="display: none"') !== -1
  ) {
    cookies_itens[id_item].style = "display: block";
    icon_open_details[id_item].classList.add("sc_icon_up");
  } else {
    cookies_itens[id_item].style = "display: none";
    icon_open_details[id_item].classList.remove("sc_icon_up");
  }
};

const sc_open_modal = (is_open) => {
  let modal = document.getElementsByClassName("sc_background_modal")[0];
  if (is_open) {
    modal.style = "display: block;";
    document.onkeydown = function (evt) {
      evt = evt || window.event;
      var isEscape = false;
      if ("key" in evt) {
        isEscape = evt.key === "Escape" || evt.key === "Esc";
      } else {
        isEscape = evt.keyCode === 27;
      }
      if (isEscape) {
        modal.style = "display: none;";
      }
    };
  } else {
    modal.style = "display: none;";
  }
};
