import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';

// Importez vos images
import myPhoto from './assets/Photo.jpg';
import coverImg from './assets/Cover.jpg';

const projects = [
  {
    id: 1,
    title: "Système de Gestion de Restaurant",
    description: "Application Java Desktop pour la gestion des commandes en temps réel avec JMS et base de données SQL.",
    github: "https://github.com/samir2002/JMS_Restaurent_management_Order",
  },
  {
    id: 2,
    title: "Recommandation de Joueurs de Football",
    description: "Système de recommandation de joueurs basé sur le machine learning et les données de performance.",
    github: "https://github.com/samir2002/player_recommendation_project",
  },
  {
    id: 3,
    title: "Prédiction du Prix des Diamonds",
    description: "Site web avec modèle ML pour prédire le prix des diamonds selon leurs caractéristiques.",
    github: "https://github.com/samir2002/Diamond",
  },
  {
    id: 4,
    title: "Gestion des Soutenances Universitaires",
    description: "Plateforme PHP pour la gestion des soutenances et présentations à l'université.",
    github: "https://github.com/samir2002/Soutenance",
  },
  {
    id: 5,
    title: "CryptoPulse",
    description: "Application intelligente de prévision du prix du Bitcoin (BTC/USDT), intégrant plusieurs modèles de machine learning et statistiques. Elle permet aux passionnés de données et de crypto-monnaies d’analyser le marché en temps réel et de générer des prédictions précises sur les prochaines tendances.",
    github: "https://github.com/samir-aitatmane/cryptos",
  },
  {
    id: 6,
    title: "Chat RH – Assistant intelligent pour la base de données de recrutement",
    description: "Chat RH est une application de chat qui permet aux utilisateurs d’interagir en langage naturel avec une base de données de recrutement. Elle simplifie l’accès aux données sans nécessiter de compétences en SQL, facilitant ainsi la consultation d'informations clés sur les candidats, les offres, les entretiens.",
    github: "https://github.com/samir-aitatmane/RH_Chat",
  },
  {
    id: 7,
    title: "Campagnes Marketing Bancaires",
    description: "Dans un environnement bancaire fortement concurrentiel, les campagnes marketing efficaces sont essentielles pour maximiser la rentabilité et améliorer l'expérience client. Ce projet vise à exploiter l'intelligence artificielle et les analyses statistiques pour prédire quels clients sont susceptibles de souscrire à un dépôt à terme.",
    github: "https://github.com/samir-aitatmane/Bank_Marketing_ML",
  },
];

const hardSkills = [
  { 
    category: "Développement", 
    items: ["Java", "PHP", "JavaScript", "React", "Python", "SQL", "NoSQL"] 
  },
  { 
    category: "Machine Learning", 
    items: ["Scikit-learn", "TensorFlow", "Pandas", "Data Visualization"] 
  },
  { 
    category: "Réseaux & Sécurité", 
    items: ["TCP/IP", "Firewall", "VPN", "Cryptographie", "Sécurité des réseaux"] 
  },
  { 
    category: "Outils", 
    items: ["Docker", "Git", "Jenkins", "Linux"] 
  },
  { 
    category: "Intelligence Artificielle", 
    items: ["Traitement du Langage Naturel (NLP)", "Réseaux de Neurones", "Apprentissage Renforcé", "Analyse Prédictive"] 
  },
];

const softSkills = [
  "Communication efficace",
  "Travail d'équipe",
  "Résolution de problèmes",
  "Gestion du temps",
  "Adaptabilité",
  "Leadership",
  "Créativité",
  "Esprit critique"
];

function App() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Vérifie la préférence système ou le localStorage
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const formRef = useRef();

  // Persiste le mode sombre dans localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  // Bouton scroll to top
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    
    try {
      // Utilisation des variables d'environnement
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
      
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Erreur d'envoi:", error);
      alert(`Erreur lors de l'envoi: ${error.text}`);
    }
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <a href="#about" className="nav-link">À propos</a>
          <a href="#projects" className="nav-link">Projets</a>
          <a href="#skills" className="nav-link">Compétences</a>
          <a href="#experience" className="nav-link">Expérience Pro</a>
          <a href="#contact" className="nav-link">Contact</a>
          <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle">
            {darkMode ? '☀️ Mode Clair' : '🌙 Mode Sombre'}
          </button>
        </nav>
      </header>

      {showScrollTop && (
        <button className="scroll-top" onClick={scrollToTop}>
          ↑
        </button>
      )}

      {/* Cover */}
      <section
        className="cover"
        style={{ backgroundImage: `url(${coverImg})` }}
        aria-label="Image de couverture"
      >
        <div className="cover-overlay"></div>
        <div className="cover-text">
          <h1>Samir Ait Atmane</h1>
          <p>Master en Data et IA | Passionné par l'intention de l'IA et le développement</p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section about">
        <div className="about-content">
          <img src={myPhoto} alt="Photo de Samir Ait Atmane" className="photo" />
          <div className="about-text">
            <h2>À propos de moi</h2>
            <p>
              Bonjour ! Je suis Samir, étudiant en informatique passionné par le développement, l'intelligence artificielle. J'aime créer des applications pratiques et
              innovantes pour résoudre des problèmes réels.
            </p>
            <div className="about-details">
              <p><span>Diplôme:</span> Master en Data science et IA</p>
            
              <p><span>Localisation:</span> Paris, France</p>
              <p><span>Passions:</span> Football, Voyages, Technologie</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Professionnelle */}
      <section id="experience" className="section experience">
        <h2>Expérience Professionnelle</h2>
        <div className="experience-container">
          <div className="experience-item">
            <h3>Stagiaire en IA - InnovQube</h3>
            <p>Mission : Prompt engineering, conception et développement de chatbot IA.</p>
          </div>
          <div className="experience-item">
            <h3>Stagiaire Machine Learning - TrinsitioEnergy</h3>
            <p>Mission : Développement d'un modèle de ML pour la prédiction des prix des travaux de rénovation énergétique dans les appartements, automatisation de la rédaction des rapports avec Zapier et envoi au client.</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section projects">
        <h2>Mes Projets</h2>
        <div className="projects-grid">
          {projects.map(({ id, title, description, github }) => (
            <div key={id} className="project-card">
              <div className="project-number">0{id}</div>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href={github} target="_blank" rel="noreferrer" className="btn-link">
                Voir GitHub
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section skills">
        <h2>Compétences</h2>
        
        <div className="skills-container">
          {hardSkills.map(({ category, items }) => (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              <div className="skills-list">
                {items.map(skill => (
                  <div key={skill} className="skill">{skill}</div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h2 className="soft-skills-title">Soft Skills</h2>
        <div className="soft-skills">
          {softSkills.map(skill => (
            <div key={skill} className="soft-skill">
              <div className="soft-skill-icon">✓</div>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <h2>Contact</h2>
        {submitted ? (
          <div className="thank-you-message">
            <p className="thank-you">Merci pour votre message !</p>
            <p>Je vous répondrai bientôt à l'adresse {form.email}.</p>
          </div>
        ) : (
          <form ref={formRef} onSubmit={sendEmail} className="contact-form" noValidate>
            <input
              type="text"
              name="name"
              placeholder="Nom"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Votre message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              required
            />
            <button type="submit" className="btn-submit">Envoyer</button>
          </form>
        )}
        <p className="contact-info">
          Ou contactez-moi directement par email : 
          <a href="mailto:aitatmanesamir593@gmail.com"> aitatmanesamir593@gmail.com</a>
        </p>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Samir Ait Atmane - Portfolio</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/samir-ait-atmane-bb6289283/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <button className="popup-toggle" onClick={() => {
  const popup = document.getElementById('github-popup');
  popup.style.transform = 'translate(-50%, -50%) scale(1)';
}}>GitHub</button>
<div id="github-popup" className="popup" style={{ transform: 'translate(-50%, -50%) scale(0)', position: 'fixed', top: '50%', left: '50%', backgroundColor: '#f9f9f9', padding: '20px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', borderRadius: '12px', zIndex: 1000, transition: 'transform 0.3s ease-in-out' }}>
  <div className="popup-content" style={{ textAlign: 'center' }}>
    <button className="popup-close" onClick={() => {
      const popup = document.getElementById('github-popup');
      popup.style.transform = 'translate(-50%, -50%) scale(0)';
    }} style={{ backgroundColor: '#e74c3c', color: '#fff', border: 'none', borderRadius: '50%', padding: '10px', cursor: 'pointer', marginBottom: '15px', fontSize: '16px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>✖</button>
    <a href="https://github.com/samir-aitatmane" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px', color: '#3498db', textDecoration: 'none', fontSize: '18px', fontWeight: 'bold' }}>
      <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" style={{ width: '24px', height: '24px', marginRight: '8px' }} />
      GitHub - samir-aitatmane
    </a>
    <a href="https://github.com/samir2002" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3498db', textDecoration: 'none', fontSize: '18px', fontWeight: 'bold' }}>
      <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" style={{ width: '24px', height: '24px', marginRight: '8px' }} />
      GitHub - samir2002
    </a>
  </div>
</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
