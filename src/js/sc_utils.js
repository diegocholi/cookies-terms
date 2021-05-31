const get_cookie_value = (name) => {
  const cookies_array = document.cookie.split(";");
  for (let index = 0; index < cookies_array.length; index++) {
    const cookie = cookies_array[index];
    if (cookie.split("=")[0].trim() === name)
      return cookie.split("=")[1].trim();
    continue;
  }
  return undefined;
};
