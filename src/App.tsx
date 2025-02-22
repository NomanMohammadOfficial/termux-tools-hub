import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "@/pages/Index";
import Blog from "@/pages/Blog";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Terms from "@/pages/Terms";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import DMCA from "@/pages/DMCA";
import Disclaimer from "@/pages/Disclaimer";
import CommandList from "@/pages/CommandList";
import DownloadTermux from "@/pages/DownloadTermux";
import TermuxPC from "@/pages/TermuxPC";
import BlogPost from "@/pages/BlogPost";

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/dmca" element={<DMCA />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/commands" element={<CommandList />} />
          <Route path="/download" element={<DownloadTermux />} />
          <Route path="/pc" element={<TermuxPC />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  );
}

export default App;