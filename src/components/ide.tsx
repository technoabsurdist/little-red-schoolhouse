"use client"; 

import React, { useEffect, useState } from 'react';
import { Textarea } from "@/components/ui/textarea";
import { CardContent, CardFooter, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const URL = 'https://lrs-bot-298e2ceb2c21.herokuapp.com/generate';
function IDE() {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = () => {
    setLoading(true);
    if (inputValue === '') return; 
    console.log('Submitting:', inputValue);
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: inputValue }),
    })
    .then(response => response.json())
    .then(data => {
      setSuggestions(data.response);
      setLoading(false);
    })
    .catch(error => console.error('Error:', error));
  }

  return (
    <div className="flex z-10 max-w-5xl w-full justify-between font-mono text-sm">
      <Card className="flex-1">
        <CardContent className="p-6">
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold">LRS Tutor</h2>
            <p className="text-sm leading-none text-gray-500">Write your text here.</p>
            <Textarea 
              className="font-latin min-h-[400px] text-base p-4" 
              placeholder="Start writing..."
              onChange={handleInputChange}
              value={inputValue} 
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSubmit} className="w-full">Submit</Button>
        </CardFooter>
      </Card>
      <Card className='flex-1'>
        <Suggestions suggestions={suggestions} loading={loading} />
      </Card>
    </div>
  );
}

interface SuggestionsProps {
  suggestions: string;
  loading: boolean;
}
function Suggestions({ suggestions, loading }: SuggestionsProps) {
  return (
      <CardContent className="p-6">
        <div className="grid gap-4">
          <h2 className="text-lg font-semibold">Revision</h2>
          <p className="text-sm leading-none mb-1">Based on <code>(co + (core + other) * n)</code> structure</p>
          <p className="text-sm leading-none text-gray-500">{!loading && !suggestions && "Waiting for input..."}</p>
          <p className="text-sm leading-none text-gray-500">{loading ? "Loading revised entry..." : ""}</p>
          <ul>
            {suggestions && suggestions.split('\n').map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      </CardContent>
  );
}

export default IDE;
