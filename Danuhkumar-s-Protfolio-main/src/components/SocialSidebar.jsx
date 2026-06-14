import { motion } from "framer-motion";
import { Github, Linkedin, Phone, Instagram } from "lucide-react";
import { contactConfig } from "../utils/contactConfig";

// Custom WhatsApp SVG icon matching brand guidelines
const WhatsAppIcon = ({ size = 20, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="currentColor" 
    className={className}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.248 8.477 3.517 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.858.002-2.634-1.013-5.11-2.861-6.961S14.363 1.02 11.734 1.02c-5.437 0-9.861 4.422-9.865 9.86-.001 1.739.46 3.432 1.336 4.93L2.2 21.8l6.183-1.62c1.47.8 3.023 1.22 4.61 1.224h.004-.002-.004c.002 0 0 0 0 0zm11.378-7.794c-.328-.164-1.933-.955-2.23-1.064-.298-.11-.515-.164-.73.164-.216.328-.838 1.064-1.026 1.282-.188.218-.375.246-.703.082-.328-.164-1.383-.51-2.636-1.627-.975-.87-1.633-1.946-1.824-2.274-.191-.328-.02-.505.143-.668.148-.146.328-.382.493-.573.164-.191.219-.328.328-.546.11-.218.055-.41-.027-.573-.082-.164-.73-1.76-1.002-2.416-.265-.64-.537-.552-.73-.562-.188-.01-.402-.012-.617-.012-.215 0-.566.08-.862.402-.296.322-1.13 1.102-1.13 2.686 0 1.584 1.15 3.118 1.31 3.328.16.21 2.262 3.454 5.48 4.843.765.33 1.362.528 1.828.675.77.244 1.47.21 2.022.128.615-.093 1.933-.79 2.204-1.516.27-.727.27-1.348.19-1.477-.08-.127-.297-.21-.625-.373z" />
  </svg>
);

export default function SocialSidebar() {
  const socials = [
    {
      name: "GitHub",
      url: contactConfig.github,
      icon: <Github size={22} />,
      // Theme aware styling handled by custom classes or border
      className: "github-icon-btn",
    },
    {
      name: "LinkedIn",
      url: contactConfig.linkedin,
      icon: <Linkedin size={22} />,
      className: "bg-[#0077b5] text-white hover:shadow-[#0077b5]/30",
    },
    {
      name: "WhatsApp",
      url: `https://wa.me/${contactConfig.whatsApp}`,
      icon: <WhatsAppIcon size={22} />,
      className: "bg-[#25D366] text-white hover:shadow-[#25D366]/30",
    },
    {
      name: "Call",
      url: `tel:${contactConfig.phone}`,
      icon: <Phone size={22} />,
      className: "bg-[#3b82f6] text-white hover:shadow-[#3b82f6]/30",
    },
    {
      name: "Instagram",
      url: contactConfig.instagramUrl,
      icon: <Instagram size={22} />,
      className: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white hover:shadow-[#ee2a7b]/30",
    },
  ];

  return (
    <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-4 z-40">
      {socials.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.1, 
            type: "spring", 
            stiffness: 100 
          }}
          whileHover={{ 
            scale: 1.15,
            x: 6,
            rotate: 3
          }}
          whileTap={{ scale: 0.95 }}
          className={`group relative flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-shadow duration-300 hover:shadow-2xl cursor-pointer ${
            social.className === "github-icon-btn" 
              ? "github-icon-box" 
              : social.className
          }`}
          aria-label={social.name}
        >
          {social.icon}

          {/* Premium Tooltip */}
          <span className="absolute left-16 scale-0 rounded-lg bg-dark-800/90 border border-white/10 px-3 py-1.5 text-xs font-bold text-white shadow-xl transition-all duration-200 group-hover:scale-100 whitespace-nowrap pointer-events-none origin-left select-none backdrop-blur-sm">
            {social.name}
          </span>
        </motion.a>
      ))}
    </div>
  );
}
