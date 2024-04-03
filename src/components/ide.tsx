import React from 'react';
import { Textarea } from "@/components/ui/textarea";
import { CardContent, CardFooter, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function IDE() {
  return (
    <div className="flex z-10 max-w-5xl w-full justify-between font-mono text-sm">
      <Card className="flex-1">
        <CardContent className="p-6">
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold">LRS Tutor</h2>
            <p className="text-sm leading-none text-gray-500">Write your text here.</p>
            <Textarea className="font-latin min-h-[400px] text-base p-4" placeholder="Start writing..." />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Submit</Button>
        </CardFooter>
      </Card>
      <Card className='flex-1'>
        <Suggestions />
      </Card>
    </div>

  );
}

function Suggestions() {
  return (
      <CardContent className="p-6">
        <div className="grid gap-4">
          <h2 className="text-lg font-semibold">Suggestions</h2>
          <p className="text-sm leading-none text-gray-500">Suggestions will appear here...</p>
          <ul>
          </ul>
        </div>
      </CardContent>
  );
}

export default IDE;