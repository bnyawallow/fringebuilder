import React from 'react';
import { motion } from 'motion/react';
import { AppState } from '../types';

interface Step4DesignProps {
  state: AppState;
  updateState: (updates: Partial<AppState>) => void;
}

export function Step4Design({ state, updateState }: Step4DesignProps) {
  return (
    <main className="mr-0 md:mr-80 pt-24 pb-48 md:pb-32 px-6 md:px-12 max-w-5xl">
      <section className="mb-20">
        <header className="mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-surface-container border border-outline-variant/30 px-4 py-1.5 rounded-full mb-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
          >
            <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
            <span className="text-xs font-bold text-on-surface tracking-wider uppercase">Step 4: Visual Identity</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-headline font-black text-on-surface tracking-tight leading-[1.1] mb-6"
          >
            Curate your visual <span className="relative inline-block"><span className="relative z-10 text-primary">identity</span><svg className="absolute -bottom-1 -left-2 w-[110%] h-4 text-secondary/40 z-0" viewBox="0 0 200 20" preserveAspectRatio="none"><path d="M0,10 Q50,20 100,10 T200,10" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" /></svg></span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-on-surface-variant text-xl max-w-2xl leading-relaxed font-body"
          >
            Define the aesthetic direction of your digital home. Choose a moodboard that resonates with your brand's personality.
          </motion.p>
        </header>

        {/* Moodboard Bento Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          className="grid grid-cols-12 gap-4 mb-12"
        >
          {/* Modern Card */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => updateState({ designMood: 'modern' })}
            className={`col-span-12 lg:col-span-4 group cursor-pointer relative overflow-hidden bg-surface-container-lowest shadow-sm p-6 border-2 rounded-2xl transition-all ${state.designMood === 'modern' ? 'border-primary bg-primary/5' : 'border-transparent hover:border-primary/50'}`}
          >
            <div className="h-40 rounded-xl mb-4 bg-surface-container-high overflow-hidden">
              <img alt="Minimalist tech interface with clean lines and high-contrast typography" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGMVmhGyG6fLzzeZumjHvGBqBBt76mqyy9mQOCUuJXh7nuNN6HdCJ1hq88JSpHuSQKFzKsxZqpncmgMOPT0nUjPEdjqXM-81T7p8sYcTT2FhrLzPPZSxG5SscgvFiyW4MMyh_7G0QaUcJV9FrrUkAQ2JuVrmRPt7TTdn8MyrjSzrVYqNZdOjl-eeqoPn6AjIZMQ8V77kmuhNichJaNkCn56Bk_MqY5x3Mpxrf8JUO0r70T6EfhlIcRluZAuP6LB8R2a9cK7aK2Fg" referrerPolicy="no-referrer" />
            </div>
            <h3 className="font-headline font-bold text-lg mb-1">Modern</h3>
            <p className="text-on-surface-variant text-sm">Clean, sharp, and data-driven aesthetics.</p>
            {state.designMood === 'modern' && (
              <div className="absolute top-4 right-4">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
            )}
          </motion.div>

          {/* Bold Card */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => updateState({ designMood: 'bold' })}
            className={`col-span-12 lg:col-span-8 group cursor-pointer relative overflow-hidden bg-surface-container-lowest shadow-sm p-6 border-2 rounded-2xl transition-all ${state.designMood === 'bold' ? 'border-primary bg-primary/5' : 'border-transparent hover:border-primary/50'}`}
          >
            <div className="h-40 rounded-xl mb-4 bg-surface-container-high overflow-hidden">
              <img alt="Vibrant design with energetic orange and teal gradients" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFBji7KSboCJHlHo5p4zsc66iy53b5bGVblFhDYDR4ed5f66UHYcT8Qqkc0seiUwlvvIwrRXdQ1EkcQwQ1q8YLOypdxq3yIVPRVL21m7epvzCrC68kkQfKpl4y62CgSeDMD7_gBs9JBCOMCJmDqlY4-F_T62uyReXzvzb6ul0SQ60UvUjK3f8DbjLMRIdkZ5fpAYpn9Zrpll6NlhYKIWuHobxGMr2U4aGRsT6ZKY1Ab51UY4N4wo_3GsLOySpR9bVFkAfIYkYyUQ" referrerPolicy="no-referrer" />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className={`font-headline font-bold text-lg mb-1 ${state.designMood === 'bold' ? 'text-primary' : ''}`}>Bold & Colorful</h3>
                <p className="text-on-surface-variant text-sm">Stand out with high energy and vibrant saturation.</p>
              </div>
              {state.designMood === 'bold' && (
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              )}
            </div>
          </motion.div>

          {/* Warm Kenyan Card */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => updateState({ designMood: 'warm' })}
            className={`col-span-12 lg:col-span-5 group cursor-pointer relative overflow-hidden bg-surface-container-lowest shadow-sm p-6 border-2 rounded-2xl transition-all ${state.designMood === 'warm' ? 'border-primary bg-primary/5' : 'border-transparent hover:border-primary/50'}`}
          >
            <div className="h-40 rounded-xl mb-4 bg-secondary-fixed overflow-hidden">
              <img alt="Warm earth tones and subtle cultural patterns" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiSDTAE4faTTfZD4TSWDdFfz5NZG2o9I0oSkm66Zp0Fr_MM27SXtBFtMhXX0OqIW5HAJgHs67qH7_bEiSPhbpz8grqo5JJG7olfxfjnGhu7DwuWuE6v5riXcQyMcPg67PExGQBywvuKncuENmtTKO60W3o0mk75gdgPg0bHvG39FeLcaxNZeVYdbfeDOOLaZrsQx5ixezbTZwhhJOricocVy0e29UvuiNArwoJspRGLRF6Y2WHaG5P4rnggfsBjU3Et7GU9mXNaQ" referrerPolicy="no-referrer" />
            </div>
            <h3 className="font-headline font-bold text-lg mb-1">Warm Kenyan</h3>
            <p className="text-on-surface-variant text-sm">Earthy neutrals and artisanal textures.</p>
            {state.designMood === 'warm' && (
              <div className="absolute top-4 right-4">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
            )}
          </motion.div>

          {/* Professional Card */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => updateState({ designMood: 'professional' })}
            className={`col-span-12 lg:col-span-3 group cursor-pointer relative overflow-hidden bg-surface-container-lowest shadow-sm p-6 border-2 rounded-2xl transition-all ${state.designMood === 'professional' ? 'border-primary bg-primary/5' : 'border-transparent hover:border-primary/50'}`}
          >
            <div className="h-40 rounded-xl mb-4 bg-primary-container overflow-hidden">
              <img alt="Serious corporate layout with trustworthy blue tones" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDffSTO2eZGAh0RZ58-YZ9YXnYUMuFhYfEpe2qDdVgOWHnxKhTM1w-RdBpZLCZAt6qWZVKFtywuaSsqMFaM4gMRYoxJx8Bxq9oxAVg4c5KucPWQ1uDsyzIsxWRMqLND-ztP51L1wF4Q1Slgc22uOtQfUdMatRqmskFM4T1DZty8J5UDJbXi07TTdxvcm4E_PP2kzIIN9qVlTvJcNsM-HDAPvkez-788gdXsXQJkFU_bMNQKAaDNv7Sp28FMz4tLzIUH_8Z8p274xw" referrerPolicy="no-referrer" />
            </div>
            <h3 className="font-headline font-bold text-lg mb-1">Professional</h3>
            <p className="text-on-surface-variant text-sm">Authority and trust.</p>
            {state.designMood === 'professional' && (
              <div className="absolute top-4 right-4">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
            )}
          </motion.div>

          {/* Minimal Card */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => updateState({ designMood: 'minimal' })}
            className={`col-span-12 lg:col-span-4 group cursor-pointer relative overflow-hidden bg-surface-container-lowest shadow-sm p-6 border-2 rounded-2xl transition-all ${state.designMood === 'minimal' ? 'border-primary bg-primary/5' : 'border-transparent hover:border-primary/50'}`}
          >
            <div className="h-40 rounded-xl mb-4 bg-surface-container overflow-hidden">
              <img alt="Essentialist design focusing on content" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv-7s4roB_RWqArnN7ZSQyuKreK05IuiwFmIbsTpETb8qS9-BDGQeeviw4wIWBV7vW7tEOhnHroC9OxEMSEIhG-E5ahELkz3-TN8ub0ldrakCxlxo-XVIuHqy7HqoMuwhqlx7_bC_0lafwLHIDIRGqtXd7nODTrSZko8BaUXI8sOuxlMqbI0g4t8I7FBOYBJQfesqat5OAf1RQ7Gyfx1AEs7SC53XGM9TkMMhVuIC3j2V9dKq2bLGd3pu8SlXn9BnM9ZY_D-_SqQ" referrerPolicy="no-referrer" />
            </div>
            <h3 className="font-headline font-bold text-lg mb-1">Minimal</h3>
            <p className="text-on-surface-variant text-sm">Stripped back to the essentials.</p>
            {state.designMood === 'minimal' && (
              <div className="absolute top-4 right-4">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
            )}
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Color Palette Picker */}
          <div className="bg-surface-container-low p-8 rounded-3xl">
            <h3 className="font-headline font-bold text-xl mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">colorize</span>
              Brand Colors
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold mb-3 text-on-surface-variant">Primary Brand Color</p>
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="flex gap-3">
                    {['#006565', '#8a5029', '#3b82f6', '#10b981'].map(color => (
                      <div 
                        key={color}
                        onClick={() => updateState({ primaryColor: color })}
                        className={`w-12 h-12 rounded-full cursor-pointer hover:scale-110 transition-transform ${state.primaryColor === color ? 'border-4 border-white shadow-md' : ''}`}
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant/30 rounded-full p-1.5 shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all group/picker">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 shadow-inner border border-outline-variant/30 group-hover/picker:border-primary/50 transition-colors cursor-pointer">
                      <input 
                        type="color" 
                        value={state.primaryColor?.startsWith('#') && state.primaryColor.length === 7 ? state.primaryColor : '#006565'}
                        onChange={(e) => updateState({ primaryColor: e.target.value })}
                        className="absolute -inset-4 w-20 h-20 cursor-pointer"
                      />
                    </div>
                    <div className="flex items-center pr-2">
                      <span className="text-on-surface-variant font-medium text-sm">#</span>
                      <input 
                        type="text" 
                        value={state.primaryColor?.replace('#', '') || ''}
                        onChange={(e) => updateState({ primaryColor: '#' + e.target.value.replace(/[^0-9A-Fa-f]/g, '').slice(0, 6) })}
                        placeholder="HEX"
                        className="w-[60px] bg-transparent border-none outline-none text-sm font-medium uppercase placeholder:text-on-surface-variant/50 text-on-surface ml-0.5"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold mb-3 text-on-surface-variant">Secondary Brand Color</p>
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="flex gap-3">
                    {['#f6f3ee', '#fef3c7', '#e0e7ff', '#d1fae5'].map(color => (
                      <div 
                        key={color}
                        onClick={() => updateState({ secondaryColor: color })}
                        className={`w-12 h-12 rounded-full cursor-pointer hover:scale-110 transition-transform border border-outline-variant/30 ${state.secondaryColor === color ? 'border-4 border-white shadow-md' : ''}`}
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant/30 rounded-full p-1.5 shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all group/picker">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 shadow-inner border border-outline-variant/30 group-hover/picker:border-primary/50 transition-colors cursor-pointer">
                      <input 
                        type="color" 
                        value={state.secondaryColor?.startsWith('#') && state.secondaryColor.length === 7 ? state.secondaryColor : '#f6f3ee'}
                        onChange={(e) => updateState({ secondaryColor: e.target.value })}
                        className="absolute -inset-4 w-20 h-20 cursor-pointer"
                      />
                    </div>
                    <div className="flex items-center pr-2">
                      <span className="text-on-surface-variant font-medium text-sm">#</span>
                      <input 
                        type="text" 
                        value={state.secondaryColor?.replace('#', '') || ''}
                        onChange={(e) => updateState({ secondaryColor: '#' + e.target.value.replace(/[^0-9A-Fa-f]/g, '').slice(0, 6) })}
                        placeholder="HEX"
                        className="w-[60px] bg-transparent border-none outline-none text-sm font-medium uppercase placeholder:text-on-surface-variant/50 text-on-surface ml-0.5"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reference Websites */}
          <div className="bg-surface-container-low p-8 rounded-3xl">
            <h3 className="font-headline font-bold text-xl mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">link</span>
              Inspiration
            </h3>
            <div>
              <label className="block text-sm font-medium text-on-surface-variant mb-2">Any websites you love? (Optional)</label>
              <textarea 
                value={state.referenceWebsites || ''}
                onChange={(e) => updateState({ referenceWebsites: e.target.value })}
                className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none min-h-[100px] resize-none" 
                placeholder="e.g. I really like how apple.com looks..." 
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
