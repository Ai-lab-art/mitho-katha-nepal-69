
import { Button } from "@/components/ui/button";
import { BookOpen, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ShareButtons from "@/components/ShareButtons";

const Index = () => {
  const navigate = useNavigate();
  const [coverImage] = useState<string | null>("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80");

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Cover Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${coverImage}')`
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Twinkling Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
        {[...Array(30)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute text-white opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${8 + Math.random() * 8}px`,
              animationDelay: `${Math.random() * 4}s`
            }}
          >
            <Sparkles className="animate-pulse" />
          </div>
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <div className="text-center space-y-8 max-w-md mx-auto">
          {/* App Logo/Icon */}
          <div className="relative">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
              <BookOpen className="w-16 h-16 text-white" />
              <Sparkles className="w-6 h-6 text-yellow-300 absolute top-4 right-4 animate-bounce" />
            </div>
          </div>

          {/* App Title */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-white leading-tight drop-shadow-lg">
              नेपाली बालकथाहरू
            </h1>
            <p className="text-lg text-white/90 font-medium drop-shadow-md">
              रोचक र शिक्षाप्रद कथाहरूको संग्रह
            </p>
          </div>

          {/* Start Button */}
          <Button 
            onClick={() => navigate('/stories')}
            className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-6 text-xl font-semibold rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <BookOpen className="w-6 h-6 mr-3" />
            कथाहरू पढ्नुहोस्
          </Button>

          {/* Description */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <p className="text-red-800 text-sm leading-relaxed">
              २० रोचक नेपाली बालकथाहरूको संग्रह। प्रत्येक कथा लगभग ५ मिनेट लामो छ र 
              सुन्दर चित्रहरूसँग सजाइएको छ। बच्चाहरूका लागि शिक्षाप्रद र मनोरञ्जक कथाहरू।
            </p>
          </div>

          {/* Social Media Share Buttons */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <p className="text-red-800 text-sm font-medium mb-4">यो एप साझा गर्नुहोस्:</p>
            <ShareButtons />
          </div>

          {/* Developer Credit */}
          <div className="text-center pt-4">
            <p className="text-white/80 text-sm font-medium drop-shadow-md">
              संकलन तथा एप निर्माण: होम बहादुर थापा
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
