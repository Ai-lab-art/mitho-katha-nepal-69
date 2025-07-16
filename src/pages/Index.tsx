
import { Button } from "@/components/ui/button";
import { BookOpen, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ShareButtons from "@/components/ShareButtons";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-red-50 to-yellow-100 flex flex-col items-center justify-center p-4">
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
          <h1 className="text-4xl font-bold text-red-800 leading-tight">
            नेपाली बालकथाहरू
          </h1>
          <p className="text-lg text-red-700 font-medium">
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
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
          <p className="text-red-800 text-sm leading-relaxed">
            २० रोचक नेपाली बालकथाहरूको संग्रह। प्रत्येक कथा लगभग ५ मिनेट लामो छ र 
            सुन्दर चित्रहरूसँग सजाइएको छ। बच्चाहरूका लागि शिक्षाप्रद र मनोरञ्जक कथाहरू।
          </p>
        </div>

        {/* Social Media Share Buttons */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
          <p className="text-red-800 text-sm font-medium mb-4">यो एप साझा गर्नुहोस्:</p>
          <ShareButtons />
        </div>

        {/* Developer Credit */}
        <div className="text-center pt-4">
          <p className="text-red-600 text-sm font-medium">
            संकलन तथा एप निर्माण: होम बहादुर थापा
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
