import { Layout } from "@/components/Layout";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const DownloadTermux = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    window.open("https://f-droid.org/packages/com.termux/", "_blank");
    toast({
      title: "Download Started",
      description: "Your download should begin shortly from F-Droid.",
    });
  };

  return (
    <Layout>
      <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-terminal-light mb-6">
            Download Termux APK
          </h1>
          
          <p className="text-lg text-terminal-light/80 mb-8">
            Get the latest version of Termux, the powerful terminal emulator for Android. Download from F-Droid for the most up-to-date and secure version.
          </p>

          <div className="space-y-6">
            <Button
              size="lg"
              className="bg-terminal-green hover:bg-terminal-green/90 text-terminal-black font-mono w-full md:w-auto"
              onClick={handleDownload}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Termux APK
            </Button>

            <div className="text-terminal-light/60 text-sm">
              <p className="mb-2">Current Version: 0.118.0</p>
              <p>Size: ~100MB</p>
            </div>

            <div className="bg-terminal-gray p-6 rounded-lg text-left">
              <h2 className="text-xl font-bold text-terminal-light mb-4">Why Download from F-Droid?</h2>
              <ul className="list-disc list-inside space-y-2 text-terminal-light/80">
                <li>Official and secure source</li>
                <li>Regular updates and security patches</li>
                <li>No ads or tracking</li>
                <li>Open-source verification</li>
              </ul>
            </div>
          </div>
      </div>
    </Layout>
  );
};

export default DownloadTermux;
