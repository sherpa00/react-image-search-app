import { createRef } from "react";

function Navbar() {

    const myRef = createRef();

    const handleShowNav = (e) => {
        let c_list = e.target.className
        if (c_list === "fa fa-bars") {
            e.target.className = "fa fa-times";
            myRef.current.style.opacity = "1";
            myRef.current.style.top = "70px";
        } else {
            e.target.className = "fa fa-bars";
            myRef.current.style.top = "-300px";
            myRef.current.style.opacity = "0";
        }
    }

    return ( 
        <nav>
            <h1>photogenic</h1>
            <ul ref={myRef}>
                <li><a href="#home">Home</a></li>
                <li><a href="#images">Images</a></li>
                <li><a href="#search">Search</a></li>
            </ul>
            <h3><i className="fa fa-bars" onClick={handleShowNav}></i></h3>
        </nav>
     );
}

export default Navbar;