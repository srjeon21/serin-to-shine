function show_g() {
    document.querySelector("#givo").className = "show background";
  }
  function show_y() {
      document.querySelector("#yearbook").className = "show background";
  }
  function show_c() {
      document.querySelector("#cooking").className = "show background";
  }
  function show_k() {
      document.querySelector("#kisj").className = "show background";
  }
  function show_s() {
      document.querySelector("#portfolio-wire").className = "show background";
  }
  function show_d() {
      document.querySelector("#dongwon-wire").className = "show background";
  }
  function close_g() {
    document.querySelector("#givo").className = "background";
  }
  function close_y() {
    document.querySelector("#yearbook").className = "background";
  }
  function close_c() {
    document.querySelector("#cooking").className = "background";
  }
  function close_k() {
    document.querySelector("#kisj").className = "background";
  }
  function close_s() {
    document.querySelector("#portfolio-wire").className = "background";
  }
  function close_d() {
    document.querySelector("#dongwon-wire").className = "background";
  }
  document.querySelector("#show-g").addEventListener("click", show_g);
  document.querySelector("#close-g").addEventListener("click", close_g);
  document.querySelector("#show-y").addEventListener("click", show_y);
  document.querySelector("#close-y").addEventListener("click", close_y);
  document.querySelector("#show-c").addEventListener("click", show_c);
  document.querySelector("#close-c").addEventListener("click", close_c);
  document.querySelector("#show-k").addEventListener("click", show_k);
  document.querySelector("#close-k").addEventListener("click", close_k);
  document.querySelector("#show-s").addEventListener("click", show_s);
  document.querySelector("#close-s").addEventListener("click", close_s);
  document.querySelector("#show-d").addEventListener("click", show_d);
  document.querySelector("#close-d").addEventListener("click", close_d);