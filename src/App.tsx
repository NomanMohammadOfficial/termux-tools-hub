import { Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Terms from "@/pages/Terms";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import DMCA from "@/pages/DMCA";
import Disclaimer from "@/pages/Disclaimer";
import CommandList from "@/pages/CommandList";
import DownloadTermux from "@/pages/DownloadTermux";
import TermuxPC from "@/pages/TermuxPC";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/dmca" element={<DMCA />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/commands" element={<CommandList />} />
      <Route path="/download" element={<DownloadTermux />} />
      <Route path="/pc" element={<TermuxPC />} />
    </Routes>
  );
}

export default App;