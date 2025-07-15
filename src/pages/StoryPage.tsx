
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { stories } from "@/data/stories";
import { useState } from "react";

const StoryPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(0);
  
  const story = stories.find(s => s.id === id);
  
  if (!story) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-100 via-red-50 to-yellow-100 flex items-center justify-center p-4">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold text-red-800 mb-4">कथा फेला परेन</h2>
          <Button onClick={() => navigate('/stories')}>
            कथाहरूको सूचीमा फर्कनुहोस्
          </Button>
        </Card>
      </div>
    );
  }

  const totalPages = story.content.length;
  const currentContent = story.content[currentPage];

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-red-50 to-yellow-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/stories')}
            className="text-red-700 hover:text-red-800 hover:bg-red-100"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            सूचीमा फर्कनुहोस्
          </Button>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-800">{story.title}</h1>
            <p className="text-red-600 text-sm">{currentPage + 1} / {totalPages}</p>
          </div>
          <div className="w-32"></div>
        </div>

        {/* Story Content */}
        <div className="relative">
          <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-2 border-red-200">
            <CardContent className="p-8">
              {/* Story Image */}
              <div className="text-center mb-8">
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-red-400 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-8xl">{story.emoji}</span>
                </div>
                <p className="text-red-600 text-sm mt-2 italic">{currentContent.imageCaption}</p>
              </div>

              {/* Story Text */}
              <div className="prose prose-lg max-w-none">
                <div className="text-red-900 leading-relaxed text-lg space-y-4">
                  {currentContent.text.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <Button 
            onClick={prevPage}
            disabled={currentPage === 0}
            variant="outline"
            className="border-red-300 text-red-700 hover:bg-red-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            अघिल्लो पृष्ठ
          </Button>

          <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-red-600" />
            <span className="text-red-700 font-medium">
              {story.duration} मिनेट पढाइ
            </span>
          </div>

          <Button 
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            अर्को पृष्ठ
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="w-full bg-red-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-red-600 to-orange-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
