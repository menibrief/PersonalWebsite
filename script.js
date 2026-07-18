/* ============================================================
   menibrief.com — shared behavior
   Anti-scraper email: the real address is NEVER in the page
   source, and is NOT assembled on load either — only a genuine
   human click decodes it. It's stored ROT13'd + reversed in
   data-e; a bot that just loads the page (even a headless
   browser reading the DOM) sees nothing usable.
   (The resumé page carries its own copy of this + print logic.)
   ============================================================ */
(function () {
  function reveal(enc) {
    return enc.split("").reverse().join("").replace(/[a-z]/gi, function (c) {
      var base = c <= "Z" ? 65 : 97;
      return String.fromCharCode((c.charCodeAt(0) - base + 13) % 26 + base);
    });
  }

  // Assemble the address at click time, then open the mail client.
  document.querySelectorAll(".js-email-open").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "mailto:" + reveal(el.getAttribute("data-e"));
    });
  });

  // First click swaps the placeholder for the real, clickable link.
  document.querySelectorAll(".js-email-reveal").forEach(function (el) {
    el.addEventListener("click", function revealOnce(e) {
      e.preventDefault();
      var addr = reveal(el.getAttribute("data-e"));
      el.textContent = addr;
      el.setAttribute("href", "mailto:" + addr);
      el.dataset.revealed = "1";
      el.removeEventListener("click", revealOnce);
    });
  });

  // Easter egg: click the "hello world!" wordmark to cycle it through the
  // canonical first program in a handful of languages.
  var wm = document.querySelector(".wordmark");
  if (wm) {
    var greetings = [
      "hello world!",
      'print("hello world") 💚💚💚',
      'std::cout << "hello world"; 💚💚',
      'printf("hello world\\n"); 💚',
      'console.log("hello world") 💚',
      'println!("hello world"); 😐',
      'fmt.Println("hello world") 😒',
      'puts "hello world" 😒',
      '<?php echo "hello world"; ?> 🤮'
    ];
    var gi = 0;
    wm.addEventListener("click", function () {
      gi = (gi + 1) % greetings.length;
      wm.textContent = greetings[gi];
      if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      wm.classList.remove("swap");
      void wm.offsetWidth;   // reflow so the animation restarts on each click
      wm.classList.add("swap");
    });
  }
})();
