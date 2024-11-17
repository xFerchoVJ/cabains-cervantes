import { Card, CardContent } from "@/components/ui/card";

interface ZoneCardProps {
  zone: {
    id: string;
    name: string;
    description: string;
    image: string;
  };
}

export function ZoneCard({ zone }: ZoneCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-lg">
      <div 
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${zone.image})` }}
      />
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{zone.name}</h3>
        <p className="text-gray-600">{zone.description}</p>
      </CardContent>
    </Card>
  );
}