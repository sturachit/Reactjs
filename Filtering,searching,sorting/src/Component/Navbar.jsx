// Components/NavBar.js
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
   <div className="container-fluid bg-success ">
          <div className="container  ">
            <div className="row  ">
              <div className="col-12  ">
                <nav className="navbar navbar-expand-lg bg-success   ">
                  <div className="container" style={{marginLeft:"500px"}}>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" > <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse p-4"  id="navbarSupportedContent" >
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <Link className="nav-link fs-3  text-white fw-semibol active mx-2 "to="/" > Form </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link fs-3 active fw-semibol text-white mx-2 " to="/list"  > <i className="fa-solid fa-table text-dark me-1" /> Table </Link> 
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
           
            </div>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
