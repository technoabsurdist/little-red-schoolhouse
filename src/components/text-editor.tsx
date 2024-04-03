import { Textarea } from "@/components/ui/textarea"
import { CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function TextEditor() {
  return (
    <Card className="w-full max-w-lg">
      <CardContent className="p-6">
        <div className="grid gap-4">
          <h2 className="text-lg font-semibold">LRS Tutor</h2>
          <p className="text-sm leading-none text-gray-500">Text to edit</p>
          <Textarea className="font-serif min-h-[150px] text-base p-4" placeholder="Start writing..." />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Submit</Button>
      </CardFooter>
    </Card>
  )
}
