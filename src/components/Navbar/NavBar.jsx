import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';
import { MdStore } from 'react-icons/md';
import {BsBellFill} from 'react-icons/bs';
import {CgMaximizeAlt} from 'react-icons/cg';
import {IoIosLogOut} from 'react-icons/io';
import { IconContext} from 'react-icons';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }} />
            <Navbar color="primary" dark expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>

                        <NavbarText><MdStore size="1.5em"/></NavbarText>
                        <NavbarText>Store: Grocery Store</NavbarText>
                        <NavbarText>Register: Evening Time Register</NavbarText>

                        <NavItem>
                            <NavLink><a href="#">a link</a></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">Manage Store</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">Switch Register</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavbarText><BsBellFill size="1.5em"/></NavbarText>
                        <NavbarText><CgMaximizeAlt size="1.5em"/></NavbarText>


                         <NavItem >
                            <NavLink href="/components/">username</NavLink>
                        </NavItem>
                        <NavbarText><IoIosLogOut size="1.5em"/></NavbarText>


                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}
