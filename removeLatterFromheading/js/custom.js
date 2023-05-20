function removelatterformh1() {
    var h1 = document.querySelector('h1')
       h1.textContent = h1.textContent.slice(0, -1);
    }