import { useState } from 'react';
import { Activity, ArrowDownRight, ArrowUpRight, BookOpen, Check, ChevronRight, MapPin, Menu, ShieldCheck, Siren, X } from 'lucide-react';

const actions = [
  { number: '01', title: 'Antes del sismo', text: 'Prepara tu hogar, identifica riesgos y acuerda un plan familiar.', icon: ShieldCheck },
  { number: '02', title: 'Durante el sismo', text: 'Protégete, aléjate de ventanas y sigue las recomendaciones oficiales.', icon: Activity },
  { number: '03', title: 'Después del sismo', text: 'Verifica tu entorno, ayuda sin ponerte en riesgo y consulta fuentes oficiales.', icon: Check },
];

const resources = [
  { title: 'Kit de emergencia', category: 'PREPARACIÓN', text: 'Agua, alimentos no perecederos, linterna, radio, botiquín y documentos importantes.' },
  { title: 'Plan familiar', category: 'EN CASA', text: 'Define rutas de evacuación, un punto de encuentro y un contacto fuera de tu zona.' },
  { title: 'Fuentes oficiales', category: 'INFORMACIÓN', text: 'Consulta la Unidad Nacional para la Gestión del Riesgo de Desastres y el Servicio Geológico Colombiano.' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="SismoSeguro Colombia, inicio"><span className="brand-mark"><Activity size={21} strokeWidth={2.5} /></span><span>SISMO<span className="brand-accent">SEGURO</span><small>COLOMBIA</small></span></a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'navigation navigation-open' : 'navigation'} aria-label="Navegación principal">
          <a href="#prevencion" onClick={closeMenu}>Prevención</a><a href="#recursos" onClick={closeMenu}>Recursos</a><a href="#fuentes" onClick={closeMenu}>Fuentes oficiales</a>
          <a className="nav-cta" href="#prevencion" onClick={closeMenu}>Prepárate <ArrowUpRight size={16} /></a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span className="live-dot" /> CULTURA DE PREVENCIÓN · COLOMBIA</p>
          <h1>Estar preparados<br />lo <span>cambia todo.</span></h1>
          <p className="hero-description">Un sismo no se puede evitar. Estar preparados sí está en nuestras manos. Aprende cómo reducir riesgos y proteger a quienes más quieres.</p>
          <div className="hero-actions"><a className="button button-dark" href="#prevencion">Aprende a prepararte <ArrowUpRight size={17} /></a><a className="text-link" href="#recursos">Explorar recursos <ArrowDownRight size={17} /></a></div>
          <div className="hero-note"><span className="note-icon"><ShieldCheck size={18} /></span><span><strong>Información para actuar mejor.</strong><small>Material educativo; sigue siempre las instrucciones de las autoridades.</small></span></div>
        </div>
        <div className="hero-art" aria-label="Ilustración abstracta de ondas sísmicas" role="img">
          <div className="art-grid" /><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
          <div className="quake-core"><Activity size={82} strokeWidth={1.2} /></div>
          <span className="art-label label-top"><span /> PREPARACIÓN PRIMERO</span><span className="art-label label-bottom">01 / 03 — PREVENCIÓN</span>
          <div className="art-card"><span className="art-card-icon"><MapPin size={17} /></span><span><strong>Tu lugar seguro</strong><small>Identifícalo hoy</small></span><ChevronRight size={17} /></div>
        </div>
        <div className="hero-index"><span>01</span><span className="index-line" /><span>PREPARACIÓN</span></div>
      </section>

      <section className="intro-strip"><span>LA PREVENCIÓN EMPIEZA ANTES</span><p>Pequeñas decisiones hoy pueden marcar una gran diferencia mañana.</p><span className="strip-icon"><Siren size={21} /></span></section>

      <section className="section prevention" id="prevencion">
        <div className="section-heading"><div><p className="eyebrow">CONOCE LOS PASOS</p><h2>Prepárate para<br />cada momento.</h2></div><p className="section-lede">Guías sencillas para saber qué hacer antes, durante y después de un movimiento sísmico.</p></div>
        <div className="action-grid">{actions.map(({ number, title, text, icon: Icon }) => <article className="action-card" key={number}><div className="card-top"><span>{number}</span><Icon size={22} /></div><h3>{title}</h3><p>{text}</p><a href="#recursos" aria-label={'Ver recursos: ' + title}>Ver recomendaciones <ArrowUpRight size={15} /></a></article>)}</div>
      </section>

      <section className="resources-section" id="recursos"><div className="section-heading"><div><p className="eyebrow">RECURSOS PRÁCTICOS</p><h2>Un paso a la vez.</h2></div><BookOpen size={32} strokeWidth={1.4} /></div><div className="resource-grid">{resources.map((resource, index) => <article className="resource-card" key={resource.title}><span className="resource-number">0{index + 1}</span><p className="resource-category">{resource.category}</p><h3>{resource.title}</h3><p>{resource.text}</p></article>)}</div></section>

      <section className="official" id="fuentes"><div className="official-icon"><ShieldCheck size={26} /></div><div><p className="eyebrow">INFORMACIÓN CON RESPONSABILIDAD</p><h2>Consulta siempre fuentes oficiales.</h2><p>Este sitio es un prototipo educativo. No emite alertas sísmicas ni sustituye a organismos de emergencia.</p></div><a href="https://www.sgc.gov.co/" target="_blank" rel="noreferrer">Servicio Geológico Colombiano <ArrowUpRight size={16} /></a></section>

      <footer><a className="brand footer-brand" href="#inicio"><span className="brand-mark"><Activity size={20} /></span><span>SISMO<span className="brand-accent">SEGURO</span><small>COLOMBIA</small></span></a><span>PREPARACIÓN, PREVENCIÓN Y COMUNIDAD.</span><a href="#inicio">Volver arriba ↑</a></footer>
    </main>
  );
}

export default App;
