import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Container } from "reactstrap";
import {
  Button
} from "reactstrap";
import { AuthContext } from "../Context/User";
import { useContext } from "react";

const FullLayout = () => {
  const { isAuthenticated } = useContext(AuthContext)

  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };

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
            <Button
              color="transparent"
              className="d-lg-none " data-bs-toggle="collapse" data-bs-target="#sidebarCollapse"
              onClick={() => showMobilemenu()}
            >
              <i className="bi bi-list"></i>
            </Button>
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
