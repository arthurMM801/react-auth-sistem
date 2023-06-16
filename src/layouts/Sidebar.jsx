import { Button, Nav, NavItem, NavLink, Collapse } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/User";
import Logo from "./Logo";

const Sidebar = () => {
  const { logout } = useContext(AuthContext)

  let location = useLocation();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCollapse = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const navigation = [
    {
      title: "Sub-Items",
      href: "/",
      icon: "bi bi-list-ul",
      subItems: [
        {
          title: "Item-1",
          href: "/1",
          icon: "bi bi-bell",
        },
        {
          title: "Item-2",
          href: "/2",
          icon: "bi bi-table",
        }
      ],
    },
    {
      title: "Item",
      href: "/3",
      icon: "bi bi-table",
    }
  ];


  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };

  return (
    <div className="p-3">
      <div className="mt-3 d-flex justify-content-center align-items-center">
        <Logo/>
        <Button
          color="transparent"
          size="sm"
          className="d-lg-none "
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>
      </div>
      <div className="mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              {navi.subItems ? (
                <div>
                  <NavLink
                    onClick={() => toggleCollapse(index)}
                    className="nav-link text-secondary pt-3"
                  >
                    <i className={navi.icon}></i>
                    <span className="ml-3 pointer d-inline-block">{navi.title}</span>
                  </NavLink>
                  <Collapse isOpen={openIndex === index}>
                    <Nav vertical className="pl-4">
                      {navi.subItems.map((subItem, subIndex) => (
                        <NavItem key={subIndex}>
                          <Link
                            to={subItem.href}
                            className={
                              location.pathname === subItem.href
                                ? "text-primary nav-link pt-3"
                                : "nav-link text-secondary pt-3"
                            }
                          >
                            <i className={subItem.icon}></i>
                            <span className="ml-2 d-inline-block">
                              {subItem.title}
                            </span>
                          </Link>
                        </NavItem>
                      ))}
                    </Nav>
                  </Collapse>
                </div>
              ) : (
                <Link
                  to={navi.href}
                  className={
                    location.pathname === navi.href
                      ? "text-primary nav-link py-2"
                      : "nav-link text-secondary py-2"
                  }
                >
                  <i className={navi.icon}></i>
                  <span className="ml-2 d-inline-block">{navi.title}</span>
                </Link>
              )}
            </NavItem>
          ))}
          <NavItem
            className="sidenav-bg"
          >
            <Link
              className="nav-link text-secondary py-2 pointer"
              onClick={() => logout()}
            >
              <i className="bi bi-box-arrow-left"></i>
              <span className="ml-3 d-inline-block">Sair</span>
            </Link>

          </NavItem>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
