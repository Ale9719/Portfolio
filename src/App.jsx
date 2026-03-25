import React, { useState, useEffect } from 'react';

// --- CONFIGURAZIONE PROGETTI ---
const myProjects = [
  { id: "SEOUL-SOUL", title: "SeoulSoul E-commerce", tech: ["React", "Tailwind"], type: "public", status: "ONLINE", description: "Hub di approvvigionamento K-Pop. Sviluppato in React.", githubUrl: "https://ale9719.github.io/SeoulSoul" },
  { id: "BORORGRING", title: "Bororgring Hub", tech: ["React", "Tailwind"], type: "public", status: "ONLINE", description: "Piattaforma di raduno per appassionati di motori.", githubUrl: "https://ale9719.github.io/Bororgring/" },
  { id: "ARCHI-LITTLE", title: "ARCHIFORLITTLE", tech: ["WP", "Bootstrap", "PHP", "ACF"], type: "corporate", status: "AZIENDALE", description: "Progettazione di rifugi (camerette) su misura." },
  { id: "ELAP-SENSORS", title: "ELAP_INSTRUMENTS", tech: ["WP", "PHP", "ACF", "SCSS"], type: "corporate", status: "AZIENDALE", description: "Catalogo digitale di sensori industriali." },
  { id: "DC-GOMME", title: "DC GOMME", tech: ["WP", "WooCommerce", "ACF", "PHP"], type: "corporate", status: "AZIENDALE", description: "Terminal di vendita pneumatici e attrezzatura moto." },
  { id: "ORCHIDEA", title: "PROGETTO ORCHIDEA", tech: ["WP", "Bootstrap", "SCSS"], type: "corporate", status: "AZIENDALE", description: "Piattaforma informativa per servizi di sessuologia." }
];

const mySkills = ["HTML5", "CSS3", "SASS", "JavaScript", "jQuery", "WordPress", "PHP", "React", "Tailwind", "GIT"];

// --- HOOK TYPEWRITER ---
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
  }, [text]);
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
      window.open(p.githubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={`min-h-screen flex flex-col relative screen-effect ${isAmber ? 'theme-amber' : ''} ${showModal ? 'shake' : ''}`}>
      
      {/* SCANLINES OVERLAY */}
      <div className="pointer-events-none fixed inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] opacity-20"></div>

      {/* THEME SELECTOR */}
      <div className="fixed top-4 right-4 z-[60] flex items-center gap-3 text-[10px]">
        <span className="opacity-50 tracking-widest font-bold">COLOR_UI:</span>
        <button onClick={() => setIsAmber(false)} className="w-4 h-4 rounded-full bg-[#1fff2e] border-2 border-white cursor-pointer hover:scale-110 transition-transform" />
        <button onClick={() => setIsAmber(true)} className="w-4 h-4 rounded-full bg-[#ffb642] border-2 border-white cursor-pointer hover:scale-110 transition-transform" />
      </div>

      {/* HEADER */}
      <nav className="w-full max-w-5xl mx-auto pt-8 px-4 z-40">
        <div className="flex justify-between items-end mb-4 border-b-4 pb-2">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter drop-shadow-[0_0_10px_var(--pip-color)]">
            Pip-Boy 3000
          </h1>
          <div className="text-right text-xs opacity-80">
            <p>A.PIRAS OS v4.0.1</p>
            <p>MEMORY: 64KB OK</p>
          </div>
        </div>

        <div className="flex gap-1 overflow-x-auto no-scrollbar">
          {['STAT', 'DATA', 'ITEMS'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 md:px-14 py-2 text-2xl font-bold transition-all border-t-2 border-x-2 
                ${activeTab === tab ? 'bg-[var(--pip-color)] text-black' : 'hover:bg-[var(--pip-color-dim)] opacity-60'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* MAIN SCREEN */}
      <main className="grow w-full max-w-5xl mx-auto border-x-4 border-b-4 bg-black/40 relative mb-8 overflow-y-auto custom-scrollbar">
        <div className="p-6 md:p-10">
          
          {activeTab === 'STAT' && (
            <div className="space-y-12 animate-in fade-in duration-500">
              <section>
                <h2 className="text-4xl border-b mb-6 italic font-black underline-offset-8">&gt; Stato_Utente</h2>
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div className="space-y-4">
                    <p className="text-3xl font-bold tracking-widest">A.PIRAS</p>
                    <p className="opacity-90 leading-tight h-12 text-xl tracking-tighter">
                        {bioText}<span className="animate-pulse">_</span>
                    </p>
                    <div className="h-6 w-full bg-[var(--pip-color-dim)] border-2 p-0.5 relative">
                      <div className="h-full bg-[var(--pip-color)] w-[85%] transition-all duration-1000"></div>
                      <span className="absolute inset-0 text-[11px] text-center text-black font-black flex items-center justify-center uppercase">XP_LEVEL: 85%</span>
                    </div>
                  </div>
                  <div className="border-2 p-5 bg-[var(--pip-color-dim)]/20 italic text-md leading-relaxed border-dashed">
                    "Interfacce visive e sistemi CMS ottimizzati per la Zona Contaminata digitale. Specialista nel recupero dati pre-bellici."
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl border-b mb-6 italic font-black">&gt; Abilità</h2>
                <div className="flex flex-wrap gap-3">
                  {mySkills.map(s => (
                    <span key={s} className="border-2 px-4 py-1 hover:bg-[var(--pip-color)] hover:text-black transition-colors font-bold text-sm tracking-widest cursor-default">
                      [{s}]
                    </span>
                  ))}
                </div>
              </section>
            </div>
          )}

          {activeTab === 'DATA' && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <h2 className="text-4xl border-b mb-8 italic font-black">&gt; Registro_Archivi</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {myProjects.map(p => (
                  <div key={p.id} onClick={() => handleProjectClick(p)}
                    className={`p-5 border-2 cursor-pointer transition-all hover:scale-[1.02] flex flex-col justify-between group
                      ${p.type === 'corporate' ? 'border-red-900 bg-red-950/10' : 'bg-[var(--pip-color-dim)]/10'}`}
                  >
                    <div>
                        <div className="flex justify-between items-start mb-3">
                          <span className="text-[10px] border-2 px-2 font-black py-0.5">{p.status}</span>
                          {p.type === 'public' && <GithubIcon className="w-5 h-5 group-hover:rotate-12 transition-transform" />}
                        </div>
                        <h3 className="text-2xl font-black group-hover:underline">[{p.title}]</h3>
                        <p className="text-sm opacity-80 mt-3 normal-case italic leading-snug">{p.description}</p>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.tech.map(t => (
                        <span key={t} className="bg-[var(--pip-color)] text-black text-[10px] px-2 font-black">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'ITEMS' && (
            <div className="space-y-12 animate-in fade-in duration-500 text-center md:text-left">
              <section className="border-4 border-dotted p-10 bg-[var(--pip-color-dim)]/5">
                <h2 className="text-4xl mb-4 font-black underline">Inventario_Dossier</h2>
                <p className="mb-8 opacity-70 text-sm italic tracking-widest">Generazione documento PDF per archiviazione fisica.</p>
                <a href={`${import.meta.env.BASE_URL}Alessandra_Piras_CV.pdf`} download 
                  className="inline-block bg-[var(--pip-color)] text-black px-12 py-4 text-3xl font-black hover:bg-white hover:scale-105 transition-all animate-pulse">
                  SCARICA_CV.EXE
                </a>
              </section>

              <section className="grid md:grid-cols-3 gap-4">
                 {[
                    { label: 'MAIL', link: 'mailto:ale.piras9719@gmail.com' },
                    { label: 'LINKEDIN', link: 'https://www.linkedin.com/in/alessandra-piras-407990377' },
                    { label: 'GITHUB', link: 'https://github.com/ale9719' }
                  ].map(c => (
                    <a key={c.label} href={c.link} target="_blank" rel="noreferrer" 
                       className="border-2 py-5 hover:bg-[var(--pip-color)] hover:text-black font-black text-xl text-center transition-colors">
                      {c.label}
                    </a>
                  ))}
              </section>
            </div>
          )}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full max-w-5xl mx-auto flex justify-between p-4 opacity-40 text-[12px] font-black italic">
        <span>HP [||||||||||] 100%</span>
        <span>RADS: 0.00 mSv</span>
        <span className="hidden md:inline">UPLINK_STABLE</span>
      </footer>

      {/* MODAL NDA */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="border-4 border-red-600 p-10 max-w-md w-full bg-black shadow-[0_0_60px_rgba(220,38,38,0.6)] text-center">
            <h2 className="text-red-600 text-6xl font-black mb-6 animate-bounce italic">ALT!</h2>
            <div className="space-y-4 border-y-2 border-red-900 py-6 mb-8">
                <p className="text-red-500 font-black uppercase text-lg tracking-tighter">
                    Accordo di Riservatezza (NDA) Rilevato.
                </p>
                <p className="text-red-700 text-xs font-bold uppercase">
                    L'accesso ai sorgenti aziendali è criptato per utenti non autorizzati.
                </p>
            </div>
            <button onClick={() => setShowModal(false)} className="w-full border-2 border-red-500 text-red-500 py-3 text-2xl hover:bg-red-500 hover:text-black transition-all font-black cursor-pointer">
              INDIETRO
            </button>
          </div>
        </div>
      )}
    </div>
  );
}