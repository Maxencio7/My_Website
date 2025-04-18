
import { Toaster } from "@/components/ui/sonner";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Index from "./pages/Index";
import Demo from "./pages/Demo";
import StartupDemo from "./pages/StartupDemo";
import PortfolioDemo from "./pages/PortfolioDemo";
import EcommerceDemo from "./pages/EcommerceDemo";
import NotFound from "./pages/NotFound";

const App = () => (
  <>
    <Toaster />
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/demo/startup" element={<StartupDemo />} />
        <Route path="/demo/portfolio" element={<PortfolioDemo />} />
        <Route path="/demo/ecommerce" element={<EcommerceDemo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </>
);

export default App;
