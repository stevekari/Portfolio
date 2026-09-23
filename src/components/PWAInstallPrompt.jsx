import React, { useState, useEffect } from 'react';
import './PWAInstallPrompt.css';
import logo from '../assets/ste.png';

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showBanner, setShowBanner] = useState(true);
  const [isStandalone, setIsStandalone] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('android'); // 'android' | 'ios' | 'desktop'

  useEffect(() => {
    // Check if running as standalone PWA
    const isRunningStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone === true;
    setIsStandalone(isRunningStandalone);

    // Detect user platform for default tab
    const ua = window.navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(ua)) {
      setActiveTab('ios');
    } else if (/android/.test(ua)) {
      setActiveTab('android');
    } else {
      setActiveTab('desktop');
    }

    // Capture beforeinstallprompt event
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      window.pwaDeferredPrompt = e; // make available globally
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Listen for custom trigger from Navbar or other buttons
    const handleOpenPWA = () => {
      setShowModal(true);
    };
    window.addEventListener('open-pwa-install', handleOpenPWA);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('open-pwa-install', handleOpenPWA);
    };
  }, []);

  const handleInstallClick = async () => {
    const promptEvent = deferredPrompt || window.pwaDeferredPrompt;

    if (promptEvent) {
      promptEvent.prompt();
      const { outcome } = await promptEvent.userChoice;
      console.log('[PWA] User response:', outcome);
      setDeferredPrompt(null);
      window.pwaDeferredPrompt = null;
      if (outcome === 'accepted') {
        setShowBanner(false);
        setShowModal(false);
        return;
      }
    }

    // If native prompt is not available (e.g. iOS Safari, Mac Safari, or already prompted), open the friendly guide modal
    setShowModal(true);
  };

  const handleDismissBanner = () => {
    setShowBanner(false);
  };

  return (
    <>
      {/* 1. Floating Screen Banner (Visible unless running standalone or dismissed) */}
      {showBanner && !isStandalone && (
        <aside aria-label="Install App" className="pwa-install-banner-container">
          <div className="pwa-install-banner">
            <div className="pwa-icon-box">
              <img src={logo} alt="Stephen Karikari App Icon" className="pwa-app-icon" />
            </div>

            <div className="pwa-content">
              <div className="pwa-title-row">
                <h4 className="pwa-title">Add to Home Screen</h4>
                <span className="pwa-tag">Offline App</span>
              </div>
              <p className="pwa-desc">
                Install for instant 1-tap access, fast loading, and full mobile app experience.
              </p>
            </div>

            <div className="pwa-actions">
              <button
                type="button"
                onClick={handleInstallClick}
                className="pwa-btn pwa-btn--install"
                aria-label="Install Portfolio App"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Install</span>
              </button>

              <button
                type="button"
                onClick={handleDismissBanner}
                className="pwa-btn pwa-btn--dismiss"
                aria-label="Dismiss banner"
              >
                Hide
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* 2. Interactive "How to Add to Home Screen" Modal */}
      {showModal && (
        <div className="pwa-modal-backdrop" onClick={() => setShowModal(false)} role="dialog" aria-modal="true">
          <div className="pwa-modal" onClick={(e) => e.stopPropagation()}>
            <div className="pwa-modal-header">
              <div className="pwa-modal-brand">
                <img src={logo} alt="Stephen Karikari" className="pwa-modal-logo" />
                <div>
                  <h3 className="pwa-modal-title">Install Stephen's Portfolio</h3>
                  <p className="pwa-modal-subtitle">Add to Home Screen & App Drawer</p>
                </div>
              </div>
              <button
                type="button"
                className="pwa-modal-close"
                onClick={() => setShowModal(false)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Platform Selector Tabs */}
            <div className="pwa-tabs">
              <button
                type="button"
                className={`pwa-tab-btn ${activeTab === 'android' ? 'pwa-tab-btn--active' : ''}`}
                onClick={() => setActiveTab('android')}
              >
                <span>📱 Android / Chrome</span>
              </button>
              <button
                type="button"
                className={`pwa-tab-btn ${activeTab === 'ios' ? 'pwa-tab-btn--active' : ''}`}
                onClick={() => setActiveTab('ios')}
              >
                <span>🍏 iPhone / iPad</span>
              </button>
              <button
                type="button"
                className={`pwa-tab-btn ${activeTab === 'desktop' ? 'pwa-tab-btn--active' : ''}`}
                onClick={() => setActiveTab('desktop')}
              >
                <span>💻 Mac / PC</span>
              </button>
            </div>

            {/* Tab Instructions Content */}
            <div className="pwa-tab-content">
              {activeTab === 'android' && (
                <div className="pwa-steps-list">
                  <div className="pwa-step-item">
                    <span className="pwa-step-num">1</span>
                    <div className="pwa-step-text">
                      <strong>Tap the Menu icon</strong> (three dots <strong>⋮</strong> in Chrome address bar).
                    </div>
                  </div>
                  <div className="pwa-step-item">
                    <span className="pwa-step-num">2</span>
                    <div className="pwa-step-text">
                      Select <strong>"Install app"</strong> or <strong>"Add to Home Screen"</strong>.
                    </div>
                  </div>
                  <div className="pwa-step-item">
                    <span className="pwa-step-num">3</span>
                    <div className="pwa-step-text">
                      Tap <strong>"Install"</strong> to confirm. The app icon will appear on your home screen!
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'ios' && (
                <div className="pwa-steps-list">
                  <div className="pwa-step-item">
                    <span className="pwa-step-num">1</span>
                    <div className="pwa-step-text">
                      Open this website in <strong>Safari</strong> and tap the <strong>Share</strong> icon (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ verticalAlign: 'middle', display: 'inline-block' }}>
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                        <polyline points="16 6 12 2 8 6" />
                        <line x1="12" y1="2" x2="12" y2="15" />
                      </svg>
                      ) in the bottom bar.
                    </div>
                  </div>
                  <div className="pwa-step-item">
                    <span className="pwa-step-num">2</span>
                    <div className="pwa-step-text">
                      Scroll down and tap <strong>"Add to Home Screen"</strong> (⊞).
                    </div>
                  </div>
                  <div className="pwa-step-item">
                    <span className="pwa-step-num">3</span>
                    <div className="pwa-step-text">
                      Tap <strong>"Add"</strong> in the top right corner. The portfolio is now installed!
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'desktop' && (
                <div className="pwa-steps-list">
                  <div className="pwa-step-item">
                    <span className="pwa-step-num">1</span>
                    <div className="pwa-step-text">
                      Look for the <strong>Install icon (⊕)</strong> on the right side of your Chrome or Edge address bar.
                    </div>
                  </div>
                  <div className="pwa-step-item">
                    <span className="pwa-step-num">2</span>
                    <div className="pwa-step-text">
                      Click <strong>"Install"</strong> to add Stephen's Portfolio to your macOS Dock or Windows Start Menu.
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Action */}
            <div className="pwa-modal-footer">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="btn btn-primary pwa-modal-done-btn"
              >
                Got It, Thank You! ✓
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
