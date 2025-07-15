import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, MessageCircle, Share2, X } from "lucide-react";
import { useState } from "react";

interface ShareButtonsProps {
  title?: string;
  text?: string;
  url?: string;
  showFloatingButton?: boolean;
}

const ShareButtons = ({ 
  title = "नेपाली बालकथाहरू", 
  text = "मजेदार र शिक्षाप्रद कथाहरूको संग्रह",
  url = window.location.href,
  showFloatingButton = false
}: ShareButtonsProps) => {
  const [showShareOptions, setShowShareOptions] = useState(false);

  const shareToFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
  };

  const shareToWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`;
    window.open(whatsappUrl, '_blank');
  };

  const shareToMessenger = () => {
    const messengerUrl = `https://www.facebook.com/dialog/send?link=${encodeURIComponent(url)}&app_id=YOUR_APP_ID`;
    window.open(messengerUrl, '_blank', 'width=600,height=400');
  };

  if (showFloatingButton) {
    return (
      <>
        {/* Floating Share Button */}
        <Button
          onClick={() => setShowShareOptions(!showShareOptions)}
          className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-200 z-20"
          size="icon"
        >
        </Button>

        {/* Share Options Popup */}
        {showShareOptions && (
          <div className="fixed bottom-24 right-6 z-30">
            <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-2 border-red-200">
              <CardContent className="p-4">
                <div className="flex flex-col space-y-2">
                  <Button
                    onClick={shareToFacebook}
                    className="bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-start px-4 py-2"
                    size="sm"
                  >
                    <Facebook className="w-4 h-4 mr-2" />
                    Facebook
                  </Button>
                  <Button
                    onClick={shareToWhatsApp}
                    className="bg-green-600 hover:bg-green-700 text-white flex items-center justify-start px-4 py-2"
                    size="sm"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button
                    onClick={shareToMessenger}
                    className="bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-start px-4 py-2"
                    size="sm"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Messenger
                  </Button>
                  <Button
                    onClick={() => setShowShareOptions(false)}
                    variant="outline"
                    className="border-red-300 text-red-700 hover:bg-red-50 flex items-center justify-center px-4 py-2"
                    size="sm"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </>
    );
  }

  // Regular share buttons for home page
  return (
    <div className="flex flex-wrap justify-center gap-3 mt-6">
      <Button
        onClick={shareToFacebook}
        className="bg-blue-600 hover:bg-blue-700 text-white flex items-center px-4 py-2"
        size="sm"
      >
        <Facebook className="w-4 h-4 mr-2" />
        Facebook
      </Button>
      <Button
        onClick={shareToWhatsApp}
        className="bg-green-600 hover:bg-green-700 text-white flex items-center px-4 py-2"
        size="sm"
      >
        <MessageCircle className="w-4 h-4 mr-2" />
        WhatsApp
      </Button>
      <Button
        onClick={shareToMessenger}
        className="bg-blue-500 hover:bg-blue-600 text-white flex items-center px-4 py-2"
        size="sm"
      >
        <MessageCircle className="w-4 h-4 mr-2" />
        Messenger
      </Button>
    </div>
  );
};

export default ShareButtons;
