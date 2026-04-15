import React from 'react';

interface FooterActionBarProps {
  step: number;
  onBack: () => void;
  onContinue: () => void;
  canContinue: boolean;
  onNavigateStep?: (step: number) => void;
}

export function FooterActionBar({ step, onBack, onContinue, canContinue, onNavigateStep }: FooterActionBarProps) {
  const hasSidebar = step > 0 && step <= 5;
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
      
      {step > 0 && step <= 5 && (
        <div className="flex gap-1.5 md:gap-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <div 
              key={s}
              onClick={() => onNavigateStep && onNavigateStep(s)}
              className={`h-2 ${step === s ? 'w-8 md:w-12 bg-primary' : 'w-4 md:w-8 bg-primary/20'} rounded-full transition-all duration-300 cursor-pointer hover:bg-primary/50`}
            ></div>
          ))}
        </div>
      )}

      <button 
        onClick={onContinue}
        disabled={!canContinue}
        className={`bg-gradient-to-br from-[#006565] to-[#008080] text-white rounded-full px-6 py-3 md:px-8 md:py-3 font-bold hover:opacity-90 transition-all active:scale-95 flex items-center justify-center ${!canContinue ? 'opacity-50 cursor-not-allowed' : 'shadow-lg shadow-primary/40 ring-2 ring-primary/20 ring-offset-1 dark:ring-offset-slate-950'} ${step === 5 ? 'invisible' : ''}`}
      >
        <span>Proceed</span>
      </button>
    </footer>
  );
}
