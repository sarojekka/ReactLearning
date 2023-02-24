import { Grommet, Header, Nav,Heading } from "grommet";
import { hpe } from "grommet-theme-hpe";
import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

export default function RootLayout() {
  return (
    <Grommet full theme={hpe}>
      <div className="root-layout">
        <Header background="brand">
          <Nav direction="row" background="brand" pad="medium">
            <Heading>Jobarouter</Heading>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="help">Help</NavLink>
            <NavLink to="careers">Careers</NavLink>
          </Nav>
          <Breadcrumbs />
        </Header>
        <main>
          <Outlet />
        </main>
      </div>
    </Grommet>
  );
}
