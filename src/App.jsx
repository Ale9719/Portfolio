import React, { useState } from 'react';

// CONFIGURAZIONE E DATI 
const GITHUB_USERNAME = "Ale9719"; 

const mySkills = [
  "HTML5", "CSS3", "SASS/SCSS", "JavaScript (ES6+)", "jQuery",
  "WordPress", "PHP", "React (In Addestramento)", "Tailwind CSS (In Addestramento)",
  "Responsive Design", "UI Architecture", "GIT"
];

const myProjects = [
  {
    id: "SEOUL-SOUL",
    title: "SeoulSoul E-commerce",
    tech: ["React", "Tailwind", "JS"],
    description: "Hub di approvvigionamento K-Pop. Sviluppato interamente in React per garantire una navigazione fluida tra le scorte di cultura coreana.",
    status: "ONLINE",
    type: "public",
    githubUrl: `https://ale9719.github.io/SeoulSoul`, 
  },
  {
    id: "BORORGRING",
    title: "Bororgring Hub",
    tech: ["React", "Tailwind", "JS"],
    description: "Piattaforma di raduno per appassionati di motori. Progettata per resistere alle alte velocità e coordinare incontri tra piloti della Zona Contaminata.",
    status: "ONLINE",
    type: "public",
    githubUrl: `https://ale9719.github.io/Bororgring/`,
  },
  {
    id: "ARCHI-LITTLE",
    title: "ARCHIFORLITTLE",
    tech: ["WordPress", "Bootstrap", "ACF", "PHP"],
    description: "Progettazione di rifugi (camerette) su misura per i piccoli abitanti del Vault. Focus su design e personalizzazione spaziale.",
    status: "AZIENDALE",
    type: "corporate",
  },
  {
    id: "ELAP-SENSORS",
    title: "ELAP_INSTRUMENTS",
    tech: ["WordPress", "Storefront", "ACF", "PHP", "SASS", "JS"],
    description: "Catalogo digitale di sensori e apparecchiature di controllo per macchine operative. Tecnologia di precisione pre-bellica.",
    status: "AZIENDALE",
    type: "corporate",
  },
  {
    id: "DC-GOMME",
    title: "DC GOMME E-COMMERCE",
    tech: ["WordPress", "Storefront", "ACF", "PHP", "SCSS", "JavaScript", "WooCommerce"],
    description: "Terminal di vendita per pneumatici, caschi e attrezzatura per la manutenzione di veicoli a due ruote.",
    status: "AZIENDALE",
    type: "corporate",
  },
  {
    id: "ORCHIDEA-SESS",
    title: "PROGETTO ORCHIDEA",
    tech: ["WordPress", "Bootstrap", "SCSS"],
    description: "Piattaforma informativa e di contatto per servizi di sessuologia professionale. Focus su privacy e accessibilità.",
    status: "AZIENDALE",
    type: "corporate",
  }
];

const GithubIcon = ({ className }) => (
  <svg role="img" viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <title>GitHub</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

function App() {
  const [showModal, setShowModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleProjectClick = (project) => {
    if (project.type === 'corporate') {
      setShowModal(true);
    } else if (project.githubUrl && project.githubUrl !== '#') {
      window.open(project.githubUrl, '_blank');
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen flex flex-col relative screen-effect selection:bg-fallout-green selection:text-fallout-bg">
      
      {/* SCANLINES OVERLAY */}
      <div className="pointer-events-none fixed inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-size-[100%_4px,3px_100%]"></div>
      
      {/* NAVBAR */}
      <nav className="border-b-2 border-fallout-green p-4 bg-black sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-xl md:text-2xl font-bold tracking-tighter">
            [ ROBCO_OS v4.0.1 ]
          </div>

          {/* Hamburger Button (Mobile Only) */}
          <button 
            onClick={toggleMenu}
            className="md:hidden border-2 border-fallout-green p-1 flex flex-col gap-1 hover:bg-fallout-green-dim transition-all"
            aria-label="Menu"
          >
            <div className="w-6 h-1 bg-fallout-green"></div>
            <div className="w-6 h-1 bg-fallout-green"></div>
            <div className="w-6 h-1 bg-fallout-green"></div>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-lg font-bold">
            <li><a href="#profilo" className="hover:bg-fallout-green hover:text-fallout-bg px-2 transition-colors">PROFILO</a></li>
            <li><a href="#projects" className="hover:bg-fallout-green hover:text-fallout-bg px-2 transition-colors">PROGETTI</a></li>
            <li><a href="#contacts" className="hover:bg-fallout-green hover:text-fallout-bg px-2 transition-colors">CONTATTI</a></li>
          </ul>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black border-b-2 border-fallout-green p-4 z-50">
            <ul className="flex flex-col gap-4 text-xl font-bold">
              <li><a href="#profilo" onClick={toggleMenu} className="block py-2 border-b border-fallout-green-dim">PROFILO</a></li>
              <li><a href="#projects" onClick={toggleMenu} className="block py-2 border-b border-fallout-green-dim">PROGETTI</a></li>
              <li><a href="#contacts" onClick={toggleMenu} className="block py-2">CONTATTI</a></li>
            </ul>
          </div>
        )}
      </nav>

      <main className="grow max-w-6xl mx-auto w-full p-6 md:p-12">
        
        {/* SEZIONE BENVENUTO */}
        <section id="profilo" className="mt-10 mb-16 scroll-mt-24">
          <h1 className="text-4xl md:text-7xl mb-2 underline decoration-double animate-pulse">
            BENVENUTO, UTENTE A.PIRAS
          </h1>
          <p className="text-lg md:text-xl">
            LOCALITÀ: VAULT-TEC PORTFOLIO HUB // ID: <span className="text-white">A.PIRAS-9981</span>
          </p>
          <div className="border border-fallout-green mt-4 p-4 bg-fallout-green-dim/10 max-w-xl text-md md:text-lg leading-tight">
            Specialista Front-End // Architetto di Interfacce Visive e Sistemi CMS. <br/>
            Analisi del profilo: <span className="text-white font-bold">ECCELLENTE</span>. <br/>
            Livello Addestramento: <span className="text-white">REACT & TAILWIND IN CORSO...</span>
          </div>
        </section>

        {/* SEZIONE SKILLS */}
        <section id="skills" className="mb-16">
          <h2 className="text-3xl md:text-4xl mb-6 italic text-fallout-green border-b-2 border-fallout-green inline-block pb-1">
            &gt; ARCHIVIO_COMPETENZE
          </h2>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {mySkills.map((skill, index) => (
              <span 
                key={index}
                className="border border-fallout-green px-3 py-1 text-sm md:text-lg bg-fallout-green-dim/20 hover:bg-fallout-green hover:text-fallout-bg transition-colors cursor-default font-bold"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* SEZIONE PROGETTI */}
        <section id="projects" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl md:text-4xl mb-6 italic text-fallout-green border-b-2 border-fallout-green inline-block pb-1">
            &gt; REGISTRO_PROGETTI_R&D
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {myProjects.map((project) => (
              <div 
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className={`border-2 p-6 bg-fallout-green-dim/10 flex flex-col transition-colors group relative cursor-pointer
                  ${project.type === 'corporate' 
                    ? 'border-red-900 grayscale hover:grayscale-0 hover:border-red-600' 
                    : 'border-fallout-green hover:border-white'}`}
              >
                <div className={`absolute top-2 right-2 px-2 text-[10px] font-bold text-black
                  ${project.type === 'corporate' ? 'bg-red-600' : 'bg-fallout-green'}`}>
                  {project.type === 'corporate' ? 'ACCESS_RESTRICTED' : 'PUBLIC_DATA'}
                </div>

                <div className="mb-3">
                    <span className={`text-[10px] border px-2 py-0.5 inline-block mb-1 
                      ${project.status === 'ONLINE' || project.status === 'COMPLETATO' ? 'border-fallout-green text-fallout-green' : 'border-yellow-400 text-yellow-400'}`}>
                        STATUS: {project.status}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold group-hover:text-white uppercase">
                        [{project.title}]
                    </h3>
                    <p className="text-[10px] opacity-70 uppercase tracking-widest">ID: {project.id}</p>
                </div>
                
                <p className="text-md md:text-lg leading-tight grow mb-4 opacity-90">
                  {project.description}
                </p>
                
                <div className="border-t border-fallout-green pt-3 mt-auto flex justify-between items-center gap-2">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] bg-fallout-green text-fallout-bg px-2 font-bold uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.type === 'public' && <GithubIcon className="w-5 h-5 text-fallout-green group-hover:text-white" />}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SEZIONE CONTATTI */}
        <section id="contacts" className="mb-20 border-2 border-fallout-green p-6 md:p-8 bg-fallout-glass relative overflow-hidden scroll-mt-24">
          <div className="absolute top-0 right-0 p-2 opacity-20 text-[8px] md:text-[10px] leading-none text-right">
            SCANNING_SIGNAL... <br /> 
            STRENGTH: 98% <br />
            STATUS: ACTIVE
          </div>

          <h2 className="text-3xl md:text-4xl mb-8 italic border-b-2 border-fallout-green inline-block pb-1 uppercase">
            &gt; COMUNICAZIONI
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center font-bold">
            <div className="group">
              <div className="text-[10px] mb-2 opacity-70">CANALE_01 [VOICE]</div>
              <a href="mailto:tua.email@esempio.com" className="text-xl border border-fallout-green px-4 py-3 block hover:bg-fallout-green hover:text-fallout-bg transition-all uppercase">
                EMAIL.MSG
              </a>
            </div>

            <div className="group">
              <div className="text-[10px] mb-2 opacity-70">CANALE_02 [UPLINK]</div>
              <a href="https://www.linkedin.com/in/alessandra-piras-407990377" target="_blank" rel="noreferrer" className="text-xl border border-fallout-green px-4 py-3 block hover:bg-fallout-green hover:text-fallout-bg transition-all uppercase">
                LINKEDIN
              </a>
            </div>

            <div className="group">
              <div className="text-[10px] mb-2 opacity-70">CANALE_03 [CODE]</div>
              <a href="https://github.com/ale9719" target="_blank" rel="noreferrer" className="text-xl border border-fallout-green px-4 py-3 block hover:bg-fallout-green hover:text-fallout-bg transition-all uppercase">
                GITHUB
              </a>
            </div>
          </div>
        </section>

        {/* DOWNLOAD CV */}
      <section id="cv" className="mb-16 border-2 border-dashed border-fallout-green p-6 md:p-8 text-center bg-fallout-green-dim/5">
          <h3 className="text-2xl md:text-3xl mb-4 uppercase">DOCUMENTAZIONE FISICA</h3>
          <p className="text-md md:text-lg mb-6 max-w-2xl mx-auto opacity-90 leading-tight">
              RECUPERA IL DOSSIER CARTACEO (PDF) DEL PROFILO UTENTE A.PIRAS PER ARCHIVI OFFLINE.
          </p>
          <a 
            href="/Alessandra Piras CV.pdf" 
            download="Alessandra Piras CV.pdf"
            className="inline-block border-2 border-fallout-green text-xl md:text-2xl px-6 py-3 hover:bg-fallout-green hover:text-fallout-bg transition-all animate-pulse uppercase font-bold"
          >
              SCARICA_CV.PDF
          </a>
      </section>

      </main>

      <footer className="mt-auto border-t-2 border-fallout-green p-6 bg-black text-center md:text-left">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] md:text-sm opacity-80 gap-4">
          <div className="uppercase">COPYRIGHT (C) 2077 ROBCO INDUSTRIES. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-4 font-mono uppercase">
            <span>RADS: 0.02/H</span>
            <span className="animate-pulse text-fallout-green">SISTEMA_OK</span>
          </div>
        </div>
      </footer>

      {/* MODAL: ACCESS DENIED */}
      {showModal && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
            <div className="border-4 border-red-600 p-6 md:p-8 max-w-lg w-full bg-black shadow-[0_0_30px_rgba(220,38,38,0.7)]">
                <h2 className="text-red-600 text-3xl md:text-4xl font-bold mb-4 animate-bounce text-center uppercase tracking-tighter">!!! ALLERTA !!!</h2>
                <div className="text-red-500 text-md md:text-lg space-y-4 font-mono leading-tight">
                    <p>&gt; ERRORE: PERMESSI INSUFFICIENTI PER L'UTENTE [GUEST].</p>
                    <p>&gt; FILE PROTETTO DA ACCORDO DI NON DIVULGAZIONE (NDA).</p>
                    <p className="bg-red-900 text-black p-2 font-bold text-center uppercase text-sm">CRIMINE FEDERALE RILEVATO</p>
                    <p>&gt; CONTATTARE L'AMMINISTRATORE [A.PIRAS] PER RICHIESTA DECRIPTATURA.</p>
                </div>
                <button 
                    onClick={() => setShowModal(false)}
                    className="mt-8 border-2 border-red-500 text-red-500 px-6 py-2 hover:bg-red-500 hover:text-black transition-colors w-full uppercase text-xl font-bold"
                >
                    CHIUDI TERMINALE
                </button>
            </div>
        </div>
      )}

    </div>
  );
}

export default App;