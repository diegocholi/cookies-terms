const sc_block_all_scripts = () => {
  const createElementBackup = document.createElement;
  document.createElement = function (...args) {
    // Se esta não for uma tag de script, ignore
    if (args[0].toLowerCase() !== "script")
      // Vincular ao documento é essencial
      return createElementBackup.bind(document)(...args);

    const scriptElt = createElementBackup.bind(document)(...args);

    // Defina getters / setters para garantir que o tipo de script seja definido corretamente
    Object.defineProperties(scriptElt, {
      src: {
        get() {
          return scriptElt.getAttribute("src");
        },
        set() {
          return true;
        },
      },
      type: {
        set() {
          return true;
        },
      },
    });

    // O Monkey corrige a função setAttribute para que o setter seja chamado.
    // Caso contrário, setAttribute ('type', 'qualquer') irá ignorar nossos descritores personalizados!
    scriptElt.setAttribute = function (name, value) {
      if (name === "type" || name === "src") scriptElt[name] = value;
      else
        HTMLScriptElement.protytope.setAttribute.call(scriptElt, name, value);
    };

    return scriptElt;
  };
};

const sc_block_specific_scripts = (blocked_scripts = []) => {
  const createElementBackup = document.createElement;
  const needsToBeBlacklisted = function (value) {
    let blocked = false;
    for (let index = 0; index < blocked_scripts.length; index++) {
      const element = blocked_scripts[index];
      if (String(value).indexOf(element) !== -1) blocked = true;
    }
    if (value && blocked) {
      return blocked;
    }
    return blocked;
  };
  document.createElement = function (...args) {
    // Se esta não for uma tag de script, ignore
    if (args[0].toLowerCase() !== "script")
      // Vincular ao documento é essencial
      return createElementBackup.bind(document)(...args);

    const scriptElt = createElementBackup.bind(document)(...args);
    const originalSetAttribute = scriptElt.setAttribute.bind(scriptElt);

    // Defina getters / setters para garantir que o tipo de script seja definido corretamente
    Object.defineProperties(scriptElt, {
      src: {
        get() {
          return scriptElt.getAttribute("src");
        },
        set(value) {
          if (needsToBeBlacklisted(value)) {
            originalSetAttribute("type", "javascript/blocked");
          }
          originalSetAttribute("src", value);
          return true;
        },
      },
      type: {
        set(value) {
          const typeValue = needsToBeBlacklisted(scriptElt.src)
            ? "javascript/blocked"
            : value;
          originalSetAttribute("type", typeValue);
          return true;
        },
      },
    });

    // O Monkey corrige a função setAttribute para que o setter seja chamado.
    // Caso contrário, setAttribute ('type', 'qualquer') irá ignorar nossos descritores personalizados!
    scriptElt.setAttribute = function (name, value) {
      if (name === "type" || name === "src") {
        scriptElt[name] = value;
      } else {
        HTMLScriptElement.prototype.setAttribute.call(scriptElt, name, value);
      }
    };

    return scriptElt;
  };
};
