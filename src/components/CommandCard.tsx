import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ElementType } from 'react'; // Added ElementType

interface CommandCardProps {
  name: string;
  description: string;
  category: string;
  usage: string;
  examples: string[];
  titleAs?: ElementType; // Added titleAs prop
}

export const CommandCard = ({ name, description, category, usage, examples, titleAs }: CommandCardProps) => { // Added titleAs to destructuring
  return (
    <Card className="bg-terminal-gray border-terminal-green/20 mb-4">
      <CardHeader>
        <CardTitle as={titleAs} className="text-xl font-mono text-terminal-light flex items-center gap-2"> {/* Passed titleAs to CardTitle */}
          {name}
          <span className="text-sm text-terminal-green">{category}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-terminal-light">
        <p>{description}</p>
        <div>
          <h4 className="font-bold mb-2">Usage:</h4>
          <pre className="bg-terminal-black p-3 rounded font-mono text-terminal-green overflow-x-auto">
            <code>{usage}</code>
          </pre>
        </div>
        <div>
          <h4 className="font-bold mb-2">Examples:</h4>
          <ul className="list-disc list-inside space-y-2">
            {examples.map((example, index) => (
              <li key={index} className="text-terminal-green">
                <pre className="inline">{example}</pre>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};