import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/CareersLayout";
import Faq from "./pages/help/Faq";
import Contact, { contactAction } from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareerDetails, { careerDetailsLoader } from "./pages/careers/CarreerDetails";
import CareersError from "./pages/careers/CareersError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />} >
        <Route path="faq" element={<Faq />} / >
        <Route path="Contact" element={<Contact />} action={contactAction} / >
      </Route>
      <Route path="careers" element={<CareersLayout />} errorElement={<CareersError />}>
        <Route 
          index 
          element={<Careers />} 
          loader={careersLoader}
        />
        <Route 
          path=":id" 
          element={<CareerDetails />} 
          loader={careerDetailsLoader}
        />
      </Route>
      <Route path="*" element={<NotFound />} / >
    </Route>
    
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
