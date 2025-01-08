import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen bg-terminal-black">
      <Header />
      <main className="container mx-auto px-4">
        {!isHomePage && (
          <Button
            variant="outline"
            className="mt-24 mb-8 bg-transparent text-terminal-green border-terminal-green hover:bg-terminal-green hover:text-terminal-black"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        )}
        {children}
      </main>
      <Footer />
    </div>
  );
};