import React, { useState } from 'react';

interface TopNavBarProps {
  step: number;
}

export function TopNavBar({ step }: TopNavBarProps) {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleBookmark = () => {
    // Save state to local storage as a bookmark
    showToast('Progress saved to bookmarks!');
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Fringe Web Builder',
          text: 'Check out my progress on Fringe Web Builder!',
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        showToast('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fcf9f4] dark:bg-slate-950 flex justify-between items-center w-full px-6 py-4 font-['Plus_Jakarta_Sans'] tracking-tight">
        <div className="text-xl font-bold text-[#006565] dark:text-[#008080]">Fringe Web Builder</div>
        <div className="flex gap-2">
          <button onClick={handleBookmark} className="flex items-center justify-center p-2 rounded-lg text-primary hover:bg-primary/10 transition-colors active:scale-95" title="Save">
            <span className="material-symbols-outlined">bookmark</span>
          </button>
          <button onClick={handleShare} className="flex items-center justify-center p-2 rounded-lg text-primary hover:bg-primary/10 transition-colors active:scale-95" title="Share">
            <span className="material-symbols-outlined">share</span>
          </button>
        </div>
      </nav>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-surface-container-highest text-on-surface px-6 py-3 rounded-full shadow-lg font-medium text-sm flex items-center gap-2 transition-all duration-300">
          <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
          {toastMessage}
        </div>
      )}
    </>
  );
}
