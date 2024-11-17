import { Card, CardContent } from "@/components/ui/card";

interface RecommendationCardProps {
  recommendation: {
    name: string;
    image: string;
  };
}

export function RecommendationCard({ recommendation }: RecommendationCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-lg">
      <div 
        className="relative h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${recommendation.image})` }}
      />
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-center">{recommendation.name}</h3>
      </CardContent>
    </Card>
  );
}