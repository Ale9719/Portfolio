import React, { useState, useEffect } from 'react';

// CONFIGURAZIONE DATI
const mySkills = ["HTML5", "CSS3", "SASS", "JavaScript (ES6+)", "WordPress", "PHP", "React", "Tailwind v4", "GIT"];

const myProjects = [
  { id: "SEOUL-SOUL", title: "SeoulSoul E-commerce", tech: ["React", "Tailwind"], type: "public", status: "ONLINE", description: "Hub di approvvigionamento K-Pop.", githubUrl: "https://ale9719.github.io/SeoulSoul" },
  { id: "BORORGRING", title: "Bororgring Hub", tech: ["React", "Tailwind"], type: "public", status: "ONLINE", description: "Piattaforma per appassionati di motori.", githubUrl: "https://ale9719.github.io/Bororgring/" },
  { id: "ARCHI-LITTLE", title: "ARCHIFORLITTLE", tech: ["WP", "PHP", "SCSS"], type: "corporate", status: "AZIENDALE", description: "Progettazione di rifugi su misura." },
  { id: "ELAP-SENSORS", title: "ELAP_INSTRUMENTS", tech: ["WP", "PHP", "SCSS"], type: "corporate", status: "AZIENDALE", description: "Catalogo digitale di sensori industriali." },
];

// HOOK PER EFFETTO SCRITTURA
const useTypewriter = (text, speed = 50) => {
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let i = 0;
    setDisplayedText("");
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else { clearInterval(timer); }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);
  return displayedText;
};

const GithubIcon = ({ className }) => (
  <svg role="img" viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('STAT');
  const [showModal, setShowModal] = useState(false);
  const [isAmber, setIsAmber] = useState(false);

  const bioText = useTypewriter("FRONT-END SPECIALIST // VAULT 97 // STATUS: ACTIVE", 40);

  const handleProjectClick = (p) => {
    if (p.type === 'corporate') {
        setShowModal(true);
    } else {
        window.open(p.githubUrl, '_blank');
    }
  };

  return (
    <div className={`min-h-screen flex flex-col relative screen-effect ${isAmber ? 'theme-amber' : ''} ${showModal ? 'shake' : ''}`}>
      
      {/* SELETTORE COLORE (Easter Egg) */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2 text-[10px]">
        <span className="opacity-50">COLOR_UI:</span>
        <button onClick={() => setIsAmber(false)} className="w-4 h-4 rounded-full bg-[#1fff2e] border border-white cursor-pointer" />
        <button onClick={() => setIsAmber(true)} className="w-4 h-4 rounded-full bg-[#ffb642] border border-white cursor-pointer" />
      </div>

      <nav className="w-full max-w-5xl mx-auto pt-8 px-4 z-40">
        <div className="flex justify-between items-end mb-4 border-b-4 pb-2">
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter drop-shadow-[0_0_8px_rgba(31,255,46,0.5)]">
            Pip-Boy 3000
          </h1>
          <div className="text-right text-xs opacity-70">
            <p>A.PIRAS OS v4.0.1</p>
            <p>MEMORY: 64KB OK</p>
          </div>
        </div>

        <div className="flex gap-1">
          {['STAT', 'DATA', 'ITEMS'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 md:px-12 py-1 text-xl md:text-2xl font-bold transition-all border-t-2 border-x-2 
                ${activeTab === tab ? 'bg-[var(--pip-color)] text-black' : 'hover:bg-[var(--pip-color-dim)]'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      <main className="grow w-full max-w-5xl mx-auto border-x-4 border-b-4 bg-black/40 relative mb-8 overflow-y-auto custom-scrollbar">
        <div className="p-6 md:p-10 transition-opacity duration-300">
          
          {activeTab === 'STAT' && (
            <div className="space-y-10">
              <section>
                <h2 className="text-4xl border-b mb-4 italic">&gt; Stato_Utente</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <p className="text-2xl font-bold">A.PIRAS</p>
                    <p className="opacity-90 leading-tight h-12 text-lg">
                        {bioText}<span className="animate-pulse">_</span>
                    </p>
                    <div className="h-5 w-full bg-[var(--pip-color-dim)] border p-0.5 relative">
                      <div className="h-full bg-[var(--pip-color)] w-[85%]"></div>
                      <span className="absolute inset-0 text-[10px] text-center text-black font-black flex items-center justify-center uppercase">XP_LEVEL: 85%</span>
                    </div>
                  </div>
                  <div className="border p-4 bg-[var(--pip-color-dim)]/20 italic text-sm leading-relaxed">
                    "Interfacce visive e sistemi CMS ottimizzati per la Zona Contaminata digitale."
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl border-b mb-4 italic">&gt; Abilità</h2>
                <div className="flex flex-wrap gap-2">
                  {mySkills.map(s => (
                    <span key={s} className="border px-3 py-1 hover:bg-[var(--pip-color)] hover:text-black transition-colors font-bold text-xs">
                      [{s}]
                    </span>
                  ))}
                </div>
              </section>
            </div>
          )}

          {activeTab === 'DATA' && (
            <div className="space-y-8">
              <h2 className="text-4xl border-b mb-6 italic">&gt; Registro_Archivi</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {myProjects.map(p => (
                  <div key={p.id} onClick={() => handleProjectClick(p)}
                    className={`p-4 border-2 cursor-pointer transition-all hover:scale-[1.01] flex flex-col justify-between
                      ${p.type === 'corporate' ? 'border-red-900 bg-red-950/10' : 'bg-[var(--pip-color-dim)]/10'}`}
                  >
                    <div>
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-[10px] border px-1 font-black">{p.status}</span>
                          {p.type === 'public' && <GithubIcon className="w-4 h-4" />}
                        </div>
                        <h3 className="text-xl font-bold">[{p.title}]</h3>
                        <p className="text-xs opacity-80 mt-2 lowercase leading-tight">{p.description}</p>
                    </div>
                    <div className="mt-4 flex gap-2">
                      {p.tech.slice(0, 3).map(t => (
                        <span key={t} className="bg-[var(--pip-color)] text-black text-[9px] px-1 font-black">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'ITEMS' && (
            <div className="space-y-12">
              <section className="border-2 border-dashed p-8 text-center">
                <h2 className="text-3xl mb-2">Inventario_Dossier</h2>
                <p className="mb-6 opacity-60 text-xs italic">Generazione file PDF per archiviazione analogica.</p>
                <a href={`${import.meta.env.BASE_URL}Alessandra_Piras_CV.pdf`} download 
                  className="inline-block bg-[var(--pip-color)] text-black px-10 py-3 text-2xl font-black hover:bg-white transition-colors animate-pulse">
                  SCARICA_CV.EXE
                </a>
              </section>
            </div>
          )}
        </div>
      </main>

      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="border-4 border-red-600 p-8 max-w-sm w-full bg-black shadow-[0_0_50px_rgba(220,38,38,0.5)] text-center">
            <h2 className="text-red-600 text-5xl font-black mb-4 animate-bounce underline italic">ALT!</h2>
            <p className="text-red-500 font-bold mb-8 uppercase text-sm leading-tight">
                Accordo di Riservatezza (NDA) Rilevato. Accesso negato all'utente ospite.
            </p>
            <button onClick={() => setShowModal(false)} className="w-full border-2 border-red-500 text-red-500 py-2 text-xl hover:bg-red-500 hover:text-black transition-all font-black">
              CHIUDI
            </button>
          </div>
        </div>
      )}

      <footer className="w-full max-w-5xl mx-auto flex justify-between p-4 opacity-40 text-[10px]">
        <span>HP [||||||||||] 100%</span>
        <span>RADS: 0.00</span>
      </footer>
    </div>
  );
}