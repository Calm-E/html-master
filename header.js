customElements.define('pop-header', class extends HTMLElement{
     constructor(){
          super();
          this.innerHTML =`
    <header>
    <nav>
    <a href="#" class = "logo">Prince <span>of Peace</span> </a>

    
         <div class = "bx bx-menu" id="menu-icon"></div>
         <ul class="navbar">
            <li><a href="index.html">Home</a></li>
            <li><a href="Staff.html">Church Staff</a></li>
            <li><a href="PhotoGallery.html">Photo Gallery</a></li>
            <li><a href="AboutUs.html">About Us</a></li>
            <li><a href="https://adventistgiving.org/#/org/ANBF23/envelope/start" class="Give">Give</a></li>
           </ul>
           <div class ="header-btn"></div>
      </nav>
</header>`
     }
});

customElements.define('pop-footer', class extends HTMLElement{
     constructor(){
          super();
          this.innerHTML =`
    <footer>
      <p>&copy; Our Church 2023. All rights reserved.</p>
    </footer>`
     }
     
});



