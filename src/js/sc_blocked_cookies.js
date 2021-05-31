const blocked_specific_cookies = (blocked_cookies = []) => {
  var cookies = document.cookie.split(";");
  var all_cookies = "";

  for (var i = 0; i < cookies.length; i++) {
    var cookie_name = cookies[i].split("=")[0].trim();

    if (!blocked_cookies.includes(cookie_name)) {
      all_cookies = all_cookies + cookies[i] + ";";
    }
  }

  // IE
  if (!document.__defineGetter__) {
    var cookieDesc =
      Object.getOwnPropertyDescriptor(Document.prototype, "cookie") ||
      Object.getOwnPropertyDescriptor(HTMLDocument.prototype, "cookie");
    Object.defineProperty(document, "cookie", {
      get: () => {
        return all_cookies;
      },
      set: (val) => {
        let cookie_name = val.split(";")[0].split("=")[0];
        if (blocked_cookies.includes(cookie_name)) return true;
        return cookieDesc.set.call(document, val);
      },
    });
    // Chrome
  } else {
    var cookie_setter_orig = document.__lookupSetter__("cookie").bind(document);
    var cookie_getter_orig = document.__lookupGetter__("cookie").bind(document);
    document.__defineGetter__("cookie", () => {
      return all_cookies;
    });
    document.__defineSetter__("cookie", (val) => {
      let cookie_name = val.split(";")[0].split("=")[0];
      if (blocked_cookies.includes(cookie_name)) return true;
      cookie_setter_orig(val);
    });
  }
};

const blocked_all_cookies = () => {
  var cookies = document.cookie.split(";");
  var all_cookies = "";

  for (var i = 0; i < cookies.length; i++) {
    all_cookies = all_cookies + cookies[i] + ";";
  }

  // IE
  if (!document.__defineGetter__) {
    var cookieDesc =
      Object.getOwnPropertyDescriptor(Document.prototype, "cookie") ||
      Object.getOwnPropertyDescriptor(HTMLDocument.prototype, "cookie");
    Object.defineProperty(document, "cookie", {
      get: () => {
        return all_cookies;
      },
      set: (val) => {
        let cookie_name = val.split(";")[0].split("=")[0];
        if (cookie_name !== "sc_acc_terms") return true;
        return cookieDesc.set.call(document, val);
      },
    });
    // Chrome
  } else {
    var cookie_setter_orig = document.__lookupSetter__("cookie").bind(document);
    document.__defineGetter__("cookie", () => {
      return all_cookies;
    });
    document.__defineSetter__("cookie", (val) => {
      let cookie_name = val.split(";")[0].split("=")[0];
      if (cookie_name !== "sc_acc_terms") return true;
      cookie_setter_orig(val);
    });
  }
};
