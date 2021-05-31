if (!get_cookie_value("sc_acc_terms")) {
  let now = new Date();
  now.setFullYear(now.getFullYear() + 1); // Adicionando mais um ano de validade
  document.cookie = `sc_acc_terms=false; expires=Mon, ${now} ; path=/`;
}

if (
  get_cookie_value("sc_acc_terms") === "false" ||
  !get_cookie_value("sc_acc_terms")
) {
  blocked_all_cookies();
  sc_block_all_scripts();
} else if (get_cookie_value("sc_acc_terms") === "essentials") {
  document.getElementById("container_sc_acc_terms").style.display = "none";
  let blocked_cookies = [];
  for (let index = 0; index < configurations.Publicidade.length; index++) {
    const element = configurations.Publicidade[index];
    blocked_cookies.push(element.nome);
  }
  blocked_specific_cookies(blocked_cookies);
  let blocked_scripts = configurations.blocked_scripts;
  sc_block_specific_scripts(blocked_scripts);
} else document.getElementById("container_sc_acc_terms").style.display = "none";
