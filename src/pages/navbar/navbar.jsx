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
                <Link to="/"><img src="/logo.svg" fill="#0b2027" width="40px" /></Link>
                <div className="navRight">
                    <img className="searchItem" src="/search.svg" alt="search" />
                    <img className="likeItem" src="/heart.svg" alt="like" />
    
                    
                    <div className="MenuItem" onClick={(e) => toggleMenu(e.currentTarget)}>
                        <div className="menuItemTopLine"></div>
                        <div className="menuItemMiddleLine"></div>
                        <div className="menuItemBottomLine"></div>
                    </div>
                </div>
            </div>
            <div className="menu">
                
                <ul>
                    <li className="menuLink">
                        <Link to="/" className="menuText">Home</Link>
                    </li>
                    <li className="menuLink">
                        <Link to="/About"  className="menuText">About</Link>
                    </li>
                    <li className="menuLink">
                        <Link to="/contact" className="menuText">Contact</Link>
                    </li>
                    <li className="menuLink">
                        <Link to="/products" className="menuText">Products</Link>
                    </li>
                    <li className="menuLink">
                        <Link to="/cart" className="menuText">Cart</Link>
                    </li>
                    <li className="menuLink">
                        <Link to="/Account" className="menuText">Account</Link>
                    </li>

                </ul>

            </div>

        </>
    );
}

export default Navbar;
