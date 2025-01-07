import { Server, Database, Lock } from "lucide-react";

export const UseCases = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-mono font-bold text-terminal-light text-center mb-12">
          Popular Use Cases
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-terminal-gray p-6 rounded-lg">
            <Server className="w-12 h-12 text-terminal-green mb-4" />
            <h3 className="text-xl font-mono font-bold text-terminal-light mb-4">Web Development</h3>
            <ul className="text-terminal-light/80 space-y-2">
              <li>• Run Node.js applications</li>
              <li>• Python web servers</li>
              <li>• PHP development</li>
              <li>• Database management</li>
            </ul>
          </div>
          
          <div className="bg-terminal-gray p-6 rounded-lg">
            <Database className="w-12 h-12 text-terminal-green mb-4" />
            <h3 className="text-xl font-mono font-bold text-terminal-light mb-4">System Administration</h3>
            <ul className="text-terminal-light/80 space-y-2">
              <li>• Remote server management</li>
              <li>• Database administration</li>
              <li>• System monitoring</li>
              <li>• Task automation</li>
            </ul>
          </div>
          
          <div className="bg-terminal-gray p-6 rounded-lg">
            <Lock className="w-12 h-12 text-terminal-green mb-4" />
            <h3 className="text-xl font-mono font-bold text-terminal-light mb-4">Security Testing</h3>
            <ul className="text-terminal-light/80 space-y-2">
              <li>• Network analysis</li>
              <li>• Security assessments</li>
              <li>• Penetration testing</li>
              <li>• Vulnerability scanning</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};