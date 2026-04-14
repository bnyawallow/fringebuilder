import React from 'react';

interface FooterActionBarProps {
  step: number;
  onBack: () => void;
  onContinue: () => void;
  canContinue: boolean;
}

export function FooterActionBar({ step, onBack, onContinue, canContinue }: FooterActionBarProps) {
  const hasSidebar = step > 0 && step < 5;
  const widthClass = hasSidebar ? 'w-full md:w-[calc(100%-20rem)]' : 'w-full';

  return (
    <footer className={`fixed bottom-0 left-0 ${widthClass} p-4 md:p-6 bg-[#ffffff] dark:bg-slate-950 border-t border-[#bdc9c8]/15 flex justify-between items-center z-50 font-['Plus_Jakarta_Sans'] font-medium shadow-lg transition-all duration-300`}>
      <button 
        onClick={onBack}
        className="bg-[#f6f3ee] text-[#1c1c19] rounded-full w-12 h-12 md:w-auto md:h-auto md:px-8 md:py-3 hover:opacity-90 transition-opacity active:scale-95 flex items-center justify-center"
      >
        <span className="material-symbols-outlined md:hidden">arrow_back</span>
        <span className="hidden md:inline">Back</span>
      </button>
      
      {step > 0 && step < 5 && (
        <div className="flex gap-1.5 md:gap-2">
          <div className={`h-2 ${step === 1 ? 'w-8 md:w-12 bg-primary' : 'w-4 md:w-8 bg-primary/20'} rounded-full transition-all duration-300`}></div>
          <div className={`h-2 ${step === 2 ? 'w-8 md:w-12 bg-primary' : 'w-4 md:w-8 bg-primary/20'} rounded-full transition-all duration-300`}></div>
          <div className={`h-2 ${step === 3 ? 'w-8 md:w-12 bg-primary' : 'w-4 md:w-8 bg-primary/20'} rounded-full transition-all duration-300`}></div>
          <div className={`h-2 ${step === 4 ? 'w-8 md:w-12 bg-primary' : 'w-4 md:w-8 bg-primary/20'} rounded-full transition-all duration-300`}></div>
        </div>
      )}

      <button 
        onClick={onContinue}
        disabled={!canContinue}
        className={`bg-gradient-to-br from-[#006565] to-[#008080] text-white rounded-full w-12 h-12 md:w-auto md:h-auto md:px-8 md:py-3 hover:opacity-90 transition-opacity active:scale-95 flex items-center justify-center ${!canContinue ? 'opacity-50 cursor-not-allowed' : ''} ${step === 5 ? 'invisible' : ''}`}
      >
        <span className="hidden md:inline">Continue</span>
        <span className="material-symbols-outlined md:hidden">arrow_forward</span>
      </button>
    </footer>
  );
}
