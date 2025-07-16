
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Wand2 } from "lucide-react";
import { toast } from "sonner";
import { RunwareService } from "@/services/runwareService";

interface AIImageGeneratorProps {
  onImageGenerated: (imageUrl: string) => void;
}

const AIImageGenerator: React.FC<AIImageGeneratorProps> = ({ onImageGenerated }) => {
  const [apiKey, setApiKey] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showApiKeyInput, setShowApiKeyInput] = useState(true);

  const generateCoverImage = async () => {
    if (!apiKey.trim()) {
      toast.error("Please enter your Runware API key");
      return;
    }

    setIsGenerating(true);
    try {
      const runwareService = new RunwareService(apiKey);
      
      const result = await runwareService.generateImage({
        positivePrompt: "Beautiful Himalayan landscape with traditional Nepali children playing, colorful prayer flags, snow-capped mountains in background, warm sunlight, realistic, cinematic, highly detailed, children's book illustration style",
        model: "runware:100@1",
        width: 1920,
        height: 1080,
        numberResults: 1,
        outputFormat: "WEBP",
        CFGScale: 7,
        scheduler: "FlowMatchEulerDiscreteScheduler"
      });

      if (result.imageURL) {
        onImageGenerated(result.imageURL);
        setShowApiKeyInput(false);
        toast.success("Cover image generated successfully!");
      }
    } catch (error) {
      console.error("Error generating image:", error);
      toast.error("Failed to generate image. Please check your API key and try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  if (!showApiKeyInput) {
    return null;
  }

  return (
    <Card className="w-full max-w-md mx-auto mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-center">
          <Wand2 className="w-5 h-5" />
          Generate AI Cover Image
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label htmlFor="apiKey" className="block text-sm font-medium mb-2">
            Runware API Key
          </label>
          <Input
            id="apiKey"
            type="password"
            placeholder="Enter your Runware API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full"
          />
          <p className="text-xs text-muted-foreground mt-1">
            Get your API key from <a href="https://runware.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">runware.ai</a>
          </p>
        </div>
        <Button 
          onClick={generateCoverImage}
          disabled={isGenerating || !apiKey.trim()}
          className="w-full"
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Wand2 className="w-4 h-4 mr-2" />
              Generate Cover Image
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default AIImageGenerator;
