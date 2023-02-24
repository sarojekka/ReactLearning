import { Outlet , NavLink} from "react-router-dom";
import {PageHeader , Paragraph, Nav} from 'grommet'
function HelpLayout() {
  return (
    <div>
        <div className="help-layout">

            <PageHeader>Website Help</PageHeader>
            <Paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quas debitis quibusdam deserunt repellat hic molestias ipsum commodi aut odit!</Paragraph>

            <Nav>
              <NavLink to="faq">View the FAQ</NavLink>
              <NavLink to="contact">Contact Us</NavLink>
            </Nav>

             <Outlet />

        </div>
            
    </div>
  )
}

export default HelpLayout
