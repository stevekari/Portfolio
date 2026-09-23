import React, { useState } from 'react';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '34603107613';
  const defaultMessage = encodeURIComponent(
    'Hi Stephen, I saw your portfolio and would like to discuss an opportunity / project.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside aria-label="Direct WhatsApp Contact" className="whatsapp-floating-container">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`whatsapp-float-btn ${isHovered ? 'whatsapp-float-btn--hovered' : ''}`}
        aria-label="Chat with Stephen Karikari on WhatsApp (+34 603 107 613)"
        title="Chat on WhatsApp (+34 603 107 613)"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="whatsapp-pulse-ring" aria-hidden="true" />
        
        {/* WhatsApp Icon */}
        <div className="whatsapp-icon-wrapper">
          <svg
            className="whatsapp-icon"
            viewBox="0 0 24 24"
            width="30"
            height="30"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.66 20.16 9.3 19.8 8.1 19.11L7.81 18.94L4.69 19.76L5.52 16.72L5.33 16.42C4.55 15.17 4.14 13.56 4.14 11.91C4.14 7.37 7.84 3.67 12.04 3.67ZM8.73 7.33C8.52 7.33 8.17 7.41 7.88 7.73C7.58 8.04 6.76 8.81 6.76 10.38C6.76 11.95 7.9 13.47 8.06 13.68C8.22 13.89 10.28 17.06 13.44 18.42C14.19 18.74 14.78 18.94 15.23 19.08C15.99 19.32 16.68 19.29 17.23 19.21C17.84 19.12 19.1 18.45 19.37 17.7C19.63 16.95 19.63 16.3 19.55 16.17C19.47 16.04 19.27 15.96 18.97 15.81C18.66 15.66 17.18 14.93 16.9 14.83C16.63 14.73 16.43 14.68 16.23 14.98C16.03 15.28 15.45 15.96 15.27 16.17C15.09 16.37 14.91 16.4 14.61 16.25C14.3 16.1 13.31 15.77 12.13 14.72C11.22 13.91 10.6 12.91 10.42 12.6C10.24 12.29 10.4 12.13 10.56 11.97C10.7 11.83 10.87 11.61 11.02 11.43C11.18 11.25 11.23 11.13 11.33 10.92C11.43 10.72 11.38 10.54 11.3 10.38C11.23 10.23 10.62 8.73 10.36 8.12C10.12 7.52 9.87 7.6 9.68 7.59C9.5 7.58 9.3 7.58 9.1 7.58C8.89 7.58 8.73 7.33 8.73 7.33Z" />
          </svg>
        </div>

        {/* Floating Label / Tooltip */}
        <span className="whatsapp-tooltip">
          <span className="whatsapp-tooltip-title">Chat on WhatsApp</span>
          <span className="whatsapp-tooltip-subtitle">+34 603 107 613</span>
        </span>
      </a>
    </aside>
  );
}

