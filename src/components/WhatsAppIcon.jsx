import React from "react";

const WhatsAppIcon = () => {
  return (
    <a
      href="http://wa.me/529992356600"
      className="fixed bottom-0 left-0 m-4 h-12 w-12 bg-slate-400 rounded-full flex items-center justify-center hover:bg-slate-500 transition-colors z-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/assets/Whatsapp.webp"
        alt="WhatsApp"
        className="h-12 w-12 rounded-full"
      />
    </a>
  );
};

export default WhatsAppIcon;
