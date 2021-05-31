const sc_acc_terms_js = (term_type) => {
  let now = new Date();
  now.setFullYear(now.getFullYear() + 1); // Adicionando mais um ano de validade
  document.cookie = `sc_acc_terms=${term_type}; expires=Mon, ${now}; path=/`;
  document.getElementById("container_sc_acc_terms").style.display = "none";
};
