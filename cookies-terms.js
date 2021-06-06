"use strict";
let path_script = document.currentScript
  .getAttribute("src")
  .split("cookies-terms.js")[0];

document.head.innerHTML +=
  '<link rel="preconnect" href="https://fonts.gstatic.com">' +
  '<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet">';

document.head.innerHTML +=
  "<style type='text/css'>" +
  ".sc_cookies_font{" +
  "font-family: 'Roboto', sans-serif;" +
  "}" +
  "</style>";

document.body.innerHTML +=
  '<div id="cookies-terms" class="sc_cookies_font"></div>';

const import_script = (scripts = []) => {
  for (let index = 0; index < scripts.length; index++) {
    let element = scripts[index];
    let imported = document.createElement("script");
    imported.async = true;
    imported.src = element;
    document.head.appendChild(imported);
  }
};
import_script([path_script + "/configuration.js"]); // Importar primeiro as configurações

const import_links = (links = []) => {
  for (let index = 0; index < links.length; index++) {
    let element = links[index];
    let imported = document.createElement("link");
    imported.href = element;
    imported.rel = "stylesheet";
    document.head.appendChild(imported);
  }
};

const links = [
  path_script + "/src/style/sc_modal.css",
  path_script + "/src/style/sc_styles.css",
];
import_links(links);

const initial_scripts = [
  path_script + "/src/js/sc_utils.js",
  path_script + "/src/js/sc_block_scripts.js",
  path_script + "/src/js/sc_blocked_cookies.js",
];
import_script(initial_scripts);

const views_scripts = [
  path_script + "/src/js/sc_acc_terms.js",
  path_script + "/src/js/sc_modal.js",
  path_script + "/src/js/sc_cookies_rules.js",
];

const set_cookies_description = (cookies, id_div) => {
  let cookies_content_essentials = document.getElementById(id_div);
  for (let index = 0; index < cookies.length; index++) {
    let element = cookies[index];
    let id_open_detail = index;
    if (id_div === "sc_cookies_content_performance")
      id_open_detail += configurations.Essencial.length;
    if (id_div === "sc_cookies_content_advertising")
      id_open_detail +=
        configurations.Essencial.length + configurations.Desempenho.length;

    cookies_content_essentials.innerHTML +=
      '<button class="sc_button_cookies_detail" onclick="open_detail_cookies(' +
      id_open_detail +
      ')">' +
      '<div class="sc_icon_container">' +
      '<svg class="cmp-expand-icon sc_icon_down" viewBox="0 0 18 18">' +
      '<path d="M12.4 6.2L9 9.7 5.6 6.2 4.5 7.3 9 11.8l4.5-4.5-1.1-1.1z"></path>' +
      "</svg>" +
      "</div>" +
      '<div class="sc_cookie_name">' +
      element["nome"] +
      "</div>" +
      "</button>" +
      '<div class="sc_cookies_datail" style="display: none">' +
      '<p class="sc_p_description_type_cookie"></p>' +
      '<table class="sc_table_cookies_datail">' +
      "<tr>" +
      "<td>Tipo</td>" +
      "<td>" +
      element["tipo"] +
      "</td>" +
      "</tr>" +
      "<tr>" +
      "<td>Cookie Domain</td>" +
      "<td>" +
      element["dominio"] +
      "</td>" +
      "</tr>" +
      "<tr>" +
      "<td>Expiração</td>" +
      "<td>" +
      element["duracao"] +
      "</td>" +
      "</tr>" +
      "</table>" +
      "</div>" +
      '<hr class="hr_cookies_content" />';
  }
};

let bodyCookieTerms = document.getElementById("cookies-terms");

const setHtml = (url) => {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      bodyCookieTerms.innerHTML += xhr.responseText;
      if (url === path_script + "src/views/sc_acc_terms.html") {
        import_script(views_scripts);
        document.getElementById("sc_privacy_policy_link").href =
          configurations.privacy_policy_link;
        document.getElementById("sc_cookies_policy").href =
          configurations.cookies_policy;
      }
      if (url === path_script + "src/views/modal.html") {
        set_cookies_description(
          configurations.Essencial,
          "sc_cookies_content_essentials"
        );
        set_cookies_description(
          configurations.Desempenho,
          "sc_cookies_content_performance"
        );
        set_cookies_description(
          configurations.Publicidade,
          "sc_cookies_content_advertising"
        );
      }
    }
  };
};

setHtml(path_script + "src/views/sc_acc_terms.html");
setHtml(path_script + "src/views/modal.html");
