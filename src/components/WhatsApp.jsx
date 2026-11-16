import { MessageCircle } from 'lucide-react';
import { siteContent } from '../data/content';

export default function WhatsApp() {
  const { contact } = siteContent;
  return (
    <a
      href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500 text-white shadow-elevated flex items-center justify-center hover:scale-110 hover:bg-green-600 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}