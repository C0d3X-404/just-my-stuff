import { Link } from "react-router-dom";
function Navbar() {
    document.addEventListener("scroll", ()=> {
        if (window.scrollY > 0) {
            document.querySelector(".navbar").classList.add("scrolled");
            console.log("scrolled");
        }else {
            document.querySelector(".navbar").classList.remove("scrolled");
        }
    })

    function toggleMenu(element) {
        element.classList.toggle("active");
        document.querySelector(".menu").classList.toggle("active");
    
        const isActive = element.classList.contains("active");
    
        // If menu is open → disable scroll, else → enable scroll
        document.body.style.overflow = isActive ? "hidden" : "auto";
    }

    return (
        <>
            <div className="navbar">
                <Link to="/"><img src="/just-my-stuff/logo.svg" fill="#0b2027" width="40px" /></Link>
                <div className="navRight">
                    <img className="searchItem" src="/just-my-stuff/search.svg" alt="search" />
                    <img className="likeItem" src="/just-my-stuff/heart.svg" alt="like" />
    
                    
                    <div className="MenuItem" onClick={(e) => toggleMenu(e.currentTarget)}>
                        <div className="menuItemTopLine"></div>
                        <div className="menuItemMiddleLine"></div>
                        <div className="menuItemBottomLine"></div>
                    </div>
                </div>
            </div>
            <div className="menu">
                
                <ul className ="menuList">
                    <li className="menuLink">
                      <Link to="/" className="menuLinkInner" onClick={() => toggleMenu(document.querySelector(".MenuItem"))}>
                        <img src="/just-my-stuff/home.svg" alt="home" className="menuIcon" />
                        <span className="menuText">Home</span>
                      </Link>
                    </li>
                    <li className="menuLink">
                      <Link to="/about" className="menuLinkInner" onClick={() => toggleMenu(document.querySelector(".MenuItem"))}>
                        <img src="/just-my-stuff/about.svg" alt="about" className="menuIcon" />
                        <span className="menuText">About</span>
                      </Link>
                    </li>
                    <li className="menuLink">
                      <Link to="/contact" className="menuLinkInner" onClick={() => toggleMenu(document.querySelector(".MenuItem"))}>
                        <img src="/just-my-stuff/contact.svg" alt="contact" className="menuIcon" />
                        <span className="menuText">Contact</span>
                      </Link>
                    </li>
                    <li className="menuLink">
                      <Link to="/products" className="menuLinkInner" onClick={() => toggleMenu(document.querySelector(".MenuItem"))}>
                        <img src="/just-my-stuff/products.svg" alt="products" className="menuIcon" />
                        <span className="menuText">Products</span>
                      </Link>
                    </li>
                    <li className="menuLink">
                      <Link to="/cart" className="menuLinkInner" onClick={() => toggleMenu(document.querySelector(".MenuItem"))}>
                        <img src="/just-my-stuff/cart.svg" alt="cart" className="menuIcon" />
                        <span className="menuText">Cart</span>
                      </Link>
                    </li>
                    <li className="menuLink">
                      <Link to="/account" className="menuLinkInner" onClick={() => toggleMenu(document.querySelector(".MenuItem"))}>
                        <img src="/just-my-stuff/account.svg" alt="account" className="menuIcon" />
                        <span className="menuText">Account</span>
                      </Link>
                    </li>
                  </ul>

            </div>

        </>
    );
}

export default Navbar;
