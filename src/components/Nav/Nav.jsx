import './Nav.css'

function Nav() {

  return (

    <nav className='navigation'>
            <ul className="nav-container">

                <li className="nav-item">
                    <a href="#" className="nav-category nav-home">
                        <span itemprop="name">Home</span>
                    </a>
                </li>
                <pre> / </pre>
                <li className="nav-item">
                    <a href="#" className="nav-category nav-loungewear">
                        <span>Loungewear</span>
                    </a>
                </li>
                <pre> / </pre>
                <li className="nav-item">
                    <a href="#" className="nav-category nav-tops">
                        <span>Camisoles, vests, tops</span>
                    </a>
                </li>

            </ul>
    </nav>

  )

};

export default Nav;