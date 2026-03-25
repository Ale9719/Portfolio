import React, { useState } from 'react';

// CONFIGURAZIONE DATI
const GITHUB_USERNAME = "Ale9719"; 
const mySkills = [
  "HTML5", "CSS3", "SASS/SCSS", "JavaScript (ES6+)", "jQuery",
  "WordPress", "PHP", "React", "Tailwind CSS", "GIT"
];

const myProjects = [
  { id: "SEOUL-SOUL", title: "SeoulSoul E-commerce", tech: ["React", "Tailwind"], type: "public", status: "ONLINE", description: "Hub di approvvigionamento K-Pop. Sviluppato in React.", githubUrl: "https://ale9719.github.io/SeoulSoul" },
  { id: "BORORGRING", title: "Bororgring Hub", tech: ["React", "SASS"], type: "public", status: "ONLINE", description: "Piattaforma di raduno per appassionati di motori.", githubUrl: "https://ale9719.github.io/Bororgring/" },
  { id: "ARCHI-LITTLE", title: "ARCHIFORLITTLE", tech: ["WP", "Bootstrap"], type: "corporate", status: "AZIENDALE", description: "Progettazione di rifugi (camerette) su misura." },
  { id: "ELAP-SENSORS", title: "ELAP_INSTRUMENTS", tech: ["WP", "PHP"], type: "corporate", status: "AZIENDALE", description: "Catalogo digitale di sensori industriali." },
  { id: "DC-GOMME", title: "DC GOMME", tech: ["WooCommerce"], type: "corporate", status: "AZIENDALE", description: "Terminal di vendita pneumatici e attrezzatura moto." },
  { id: "ORCHIDEA-SESS", title: "PROGETTO ORCHIDEA", tech: ["WP", "SCSS"], type: "corporate", status: "AZIENDALE", description: "Piattaforma informativa per servizi di sessuologia." }
];

const GithubIcon = ({ className }) => (
  <svg role="img" viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('STAT');
  const [showModal, setShowModal] = useState(false);

  const handleProjectClick = (p) => p.type === 'corporate' ? setShowModal(true) : window.open(p.githubUrl, '_blank');

  return (
    <div className="min-h-screen bg-black text-fallout-green font-mono selection:bg-fallout-green selection:text-black overflow-hidden flex flex-col relative screen-effect">
      
      {/* SCANLINES OVERLAY */}
      <div className="pointer-events-none fixed inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-size-[100%_4px,3px_100%] opacity-30"></div>

      {/* PIP-BOY HEADER TABS */}
      <nav className="w-full max-w-5xl mx-auto pt-8 px-4 z-40">
        <div className="flex justify-between items-end mb-4 border-b-4 border-fallout-green pb-2">
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase drop-shadow-[0_0_8px_rgba(20,255,20,0.8)]">
            Pip-Boy 3000
          </h1>
          <div className="text-right text-xs md:text-sm">
            <p>A.PIRAS OS v4.0.1</p>
            <p>MEMORY: 64KB OK</p>
          </div>
        </div>

        <div className="flex gap-1 md:gap-4">
          {['STAT', 'DATA', 'ITEMS'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 md:px-10 py-1 text-xl md:text-2xl font-bold transition-all border-t-2 border-x-2 border-fallout-green
                ${activeTab === tab ? 'bg-fallout-green text-black translate-y-0.5' : 'hover:bg-fallout-green-dim/20'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* MAIN SCREEN AREA */}
      <main className="grow w-full max-w-5xl mx-auto border-x-4 border-b-4 border-fallout-green bg-black/40 relative mb-8 overflow-y-auto custom-scrollbar">
        <div className="p-6 md:p-10 animate-in fade-in duration-500">
          
          {/* TAB STAT: PROFILO & SKILLS */}
          {activeTab === 'STAT' && (
            <div className="space-y-10">
              <section>
                <h2 className="text-4xl border-b border-fallout-green mb-4 italic uppercase">&gt; Stato_Utente</h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-2">
                    <p className="text-2xl font-bold">A.PIRAS</p>
                    <p className="opacity-80 leading-tight">FRONT-END SPECIALIST // VAULT 97</p>
                    <div className="h-4 w-full bg-fallout-green-dim/20 border border-fallout-green mt-4 relative">
                      <div className="h-full bg-fallout-green w-[85%] animate-pulse"></div>
                      <span className="absolute inset-0 text-[10px] text-center text-black font-bold">LIVELLO XP: 85%</span>
                    </div>
                  </div>
                  <div className="border border-fallout-green p-4 bg-fallout-green-dim/5 italic">
                    "Interfacce visive e sistemi CMS ottimizzati per la Zona Contaminata."
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl border-b border-fallout-green mb-4 italic uppercase">&gt; Abilità</h2>
                <div className="flex flex-wrap gap-3">
                  {mySkills.map(s => (
                    <span key={s} className="border border-fallout-green px-4 py-1 hover:bg-fallout-green hover:text-black transition-colors font-bold uppercase text-sm">
                      [{s}]
                    </span>
                  ))}
                </div>
              </section>
            </div>
          )}

          {/* TAB DATA: PROGETTI */}
          {activeTab === 'DATA' && (
            <div className="space-y-8">
              <h2 className="text-4xl border-b border-fallout-green mb-6 italic uppercase">&gt; Registro_Archivi</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {myProjects.map(p => (
                  <div 
                    key={p.id}
                    onClick={() => handleProjectClick(p)}
                    className={`p-4 border-2 cursor-pointer transition-all hover:scale-[1.02]
                      ${p.type === 'corporate' ? 'border-red-900 bg-red-950/10' : 'border-fallout-green bg-fallout-green-dim/5'}`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] border px-1 uppercase font-bold">{p.status}</span>
                      {p.type === 'public' && <GithubIcon className="w-4 h-4" />}
                    </div>
                    <h3 className="text-xl font-bold uppercase">[{p.title}]</h3>
                    <p className="text-sm opacity-80 mt-2 line-clamp-2">{p.description}</p>
                    <div className="mt-4 flex gap-2">
                      {p.tech.slice(0, 3).map(t => (
                        <span key={t} className="bg-fallout-green text-black text-[9px] px-1 font-bold">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB ITEMS: DOWNLOAD CV & CONTATTI */}
          {activeTab === 'ITEMS' && (
            <div className="space-y-12 text-center md:text-left">
              <section className="border-2 border-dashed border-fallout-green p-8">
                <h2 className="text-3xl mb-4 uppercase">Inventario_Dossier</h2>
                <p className="mb-6 opacity-80 italic">Documentazione cartacea per archiviazione fisica.</p>
                <a 
                  href={`${import.meta.env.BASE_URL}Alessandra_Piras_CV.pdf`} 
                  download 
                  className="inline-block bg-fallout-green text-black px-8 py-3 text-2xl font-black hover:bg-white transition-colors animate-pulse"
                >
                  SCARICA_CV.PDF
                </a>
              </section>

              <section>
                <h2 className="text-3xl border-b border-fallout-green mb-6 italic uppercase text-left">&gt; Uplink_Frequenze</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { label: 'MAIL', link: 'mailto:tuaemail@esempio.com' },
                    { label: 'LINKEDIN', link: 'https://www.linkedin.com/in/alessandra-piras-407990377' },
                    { label: 'GITHUB', link: 'https://github.com/ale9719' }
                  ].map(c => (
                    <a key={c.label} href={c.link} target="_blank" rel="noreferrer" 
                       className="border border-fallout-green py-4 hover:bg-fallout-green hover:text-black font-bold uppercase text-center">
                      {c.label}
                    </a>
                  ))}
                </div>
              </section>
            </div>
          )}
        </div>
      </main>

      {/* MODAL: ACCESS DENIED */}
      {showModal && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
          <div className="border-4 border-red-600 p-8 max-w-lg w-full bg-black shadow-[0_0_50px_rgba(220,38,38,0.5)]">
            <h2 className="text-red-600 text-5xl font-black mb-6 text-center animate-bounce">ALT!</h2>
            <div className="text-red-500 space-y-4 font-bold border-y-2 border-red-900 py-4 mb-6">
              <p>&gt; ACCORDO DI RISERVATEZZA (NDA) RILEVATO.</p>
              <p>&gt; ACCESSO NEGATO ALL'UTENTE OSPITE.</p>
            </div>
            <button onClick={() => setShowModal(false)} className="w-full border-2 border-red-500 text-red-500 py-3 text-2xl hover:bg-red-500 hover:text-black transition-all font-black">
              INDIETRO
            </button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="w-full max-w-5xl mx-auto flex justify-between p-4 opacity-50 text-[10px] md:text-xs">
        <span>HP [||||||||||] 100%</span>
        <span>AP [||||||||||] 100%</span>
        <span>RADS: 0.00</span>
      </footer>
    </div>
  );
}