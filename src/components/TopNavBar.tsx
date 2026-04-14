import React from 'react';

interface TopNavBarProps {
  step: number;
}

export function TopNavBar({ step }: TopNavBarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fcf9f4] dark:bg-slate-950 flex justify-between items-center w-full px-6 py-4 font-['Plus_Jakarta_Sans'] tracking-tight">
      <div className="text-xl font-bold text-[#006565] dark:text-[#008080]">Fringe Web Builder</div>
      {step > 0 && step < 5 && (
        <div className="flex gap-2 absolute left-1/2 -translate-x-1/2">
          <div className={`h-2 ${step === 1 ? 'w-12 bg-primary' : 'w-8 bg-primary/20'} rounded-full`}></div>
          <div className={`h-2 ${step === 2 ? 'w-12 bg-primary' : 'w-8 bg-primary/20'} rounded-full`}></div>
          <div className={`h-2 ${step === 3 ? 'w-12 bg-primary' : 'w-8 bg-primary/20'} rounded-full`}></div>
          <div className={`h-2 ${step === 4 ? 'w-12 bg-primary' : 'w-8 bg-primary/20'} rounded-full`}></div>
        </div>
      )}
      <div className="flex gap-2">
        <button className="flex items-center justify-center p-2 rounded-lg text-primary hover:bg-primary/10 transition-colors active:scale-95" title="Save">
          <span className="material-symbols-outlined">bookmark</span>
        </button>
        <button className="flex items-center justify-center p-2 rounded-lg text-primary hover:bg-primary/10 transition-colors active:scale-95" title="Share">
          <span className="material-symbols-outlined">share</span>
        </button>
      </div>
    </nav>
  );
}
