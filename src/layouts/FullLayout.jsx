import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Container } from "reactstrap";
import { AuthContext } from "../Context/User";
import { useContext } from "react";
import Header from "./Header";

const FullLayout = () => {
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <main>
      <div className="pageWrapper d-lg-flex">
        {/********Sidebar**********/}
        {(isAuthenticated)?
          (<aside className="sidebarArea shadow" id="sidebarArea">
            <Sidebar />
          </aside>):
          (<></>)
        }
        
        {/********Content Area**********/}

        <div className="contentArea">
          <Header/>
           
          {/********Middle Content**********/}
          <Container className="p-4 wrapper" fluid>
            <Outlet />
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
