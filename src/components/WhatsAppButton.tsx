import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/9884777798"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-transform hover:scale-110"
    >
      <MessageCircle size={28} fill="white" strokeWidth={0} />
    </a>
  );
};

export default WhatsAppButton;
