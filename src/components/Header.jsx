import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
return (
    <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto nav_bar_wrapper">
                    (
                        localStorage.getItem('user-info') ?
                            <>
                                <link to="/add" > Add Product</link>
                                 <link to="/update" > Update Product</link>
                            </>
                            :
                            <>
                                <link to="/login" >Login </link>
                                <Link to="register" >Register </Link>
                            </>
                    )

                </Nav>
        
        
        
        
        </Navbar>



    </div>


)




}




<Nav>
    <NavDropdown title="User Name" >
        <NavDropdown.Item>Logout</NavDropdown.Item>
    </NavDropdown>
</Nav>











export default Header;