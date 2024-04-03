import { CardContent, CardFooter, Card } from "@/components/ui/card"

export function Suggestions() {
  return (
    <Card className="w-full max-w-lg">
      <CardContent className="p-6">
        <div className="grid gap-4">
          <h2 className="text-lg font-semibold">Suggestions</h2>
          <ul>
            <li>change this to that</li>
            <li>change this to that</li>
            <li>change this to that</li>
            <li>change this to that</li>
            <li>change this to that</li>
            <li>change this to that</li>
            <li>change this to that</li>
            <li>change this to that</li>
            <li>change this to that</li>
            <li>change this to that</li>
            <li>change this to that</li>
            <li>change this to that</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
