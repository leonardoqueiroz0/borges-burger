const deliveryUrl = "https://www.ubereats.com/pt/store/borges-burger/-aLl5Ay9QvqMuZfLw-yjcg";

const burgers = [
  ["Borges Cheese", "O clássico da casa", "8,10 €"],
  ["Borges Salad", "Burger com salada fresca", "8,90 €"],
  ["Borges Bacon", "Bacon crocante e queijo", "11,30 €"],
  ["Borges Bacon Mush", "Bacon, cogumelos e queijo", "12,90 €"],
  ["Spicy Chicken", "Frango crocante com toque picante", "11,30 €"],
  ["Double Borges Cheese", "Duplo, intenso e cheio de sabor", "12,10 €"],
  ["Double Cheese Bacon", "Duplo burger com bacon", "13,70 €"],
  ["Crispy Mozzarella", "Mozzarella crocante", "12,10 €"],
];

const extras = [
  ["Crispy Chicken", "7,50 €"],
  ["Batata com cheddar e bacon", "6,95 €"],
  ["8 Asinhas de Frango", "6,00 €"],
  ["4 Asinhas de Frango", "4,00 €"],
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top">BORGES<span>BURGER</span></a>
        <nav>
          <a href="#menu">Menu</a>
          <a href="#sobre">O Borges</a>
          <a href="#local">Localização</a>
        </nav>
        <a className="nav-order" href={deliveryUrl} target="_blank" rel="noreferrer">Pedir agora</a>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">VILA NOVA DE GAIA · DESDE A CASA</p>
          <h1>BURGER.<br /><em>FEITO A SÉRIO.</em></h1>
          <p className="hero-text">
            Hambúrgueres, acompanhamentos e aquele tipo de refeição que pede mais uma mordida.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#menu">Ver menu <span>↓</span></a>
            <a className="button button-ghost" href={deliveryUrl} target="_blank" rel="noreferrer">Pedir agora <span>↗</span></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Imagem ilustrativa de hambúrguer">
          <div className="glow" />
          <div className="burger">
            <div className="bun top-bun"><span>•</span><span>•</span><span>•</span><span>•</span><span>•</span></div>
            <div className="lettuce" />
            <div className="cheese" />
            <div className="patty" />
            <div className="cheese cheese-low" />
            <div className="patty second" />
            <div className="lettuce low" />
            <div className="bun bottom-bun" />
          </div>
        </div>
      </section>

      <section id="menu" className="section menu-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">O MENU</p>
            <h2>OS BURGERS</h2>
          </div>
          <a className="text-link" href={deliveryUrl} target="_blank" rel="noreferrer">Ver no delivery ↗</a>
        </div>
        <div className="menu-grid">
          {burgers.map(([name, desc, price]) => (
            <article className="card" key={name}>
              <div className="card-photo"><span>🍔</span></div>
              <div className="card-info">
                <div>
                  <h3>{name}</h3>
                  <p>{desc}</p>
                </div>
                <strong>{price}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div className="split-image"><div className="image-label">BORGES<br />BURGER</div></div>
        <div className="split-copy">
          <p className="eyebrow">A CASA</p>
          <h2>COMIDA SIMPLES.<br /><em>BEM FEITA.</em></h2>
          <p>
            Um espaço em Vila Nova de Gaia para quem leva hambúrgueres a sério.
            Escolhe o teu burger, junta os acompanhamentos e aproveita.
          </p>
          <a className="text-link" href="#local">Conhecer a localização ↗</a>
        </div>
      </section>

      <section className="section extras-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">PARA ACOMPANHAR</p>
            <h2>EXTRAS</h2>
          </div>
        </div>
        <div className="extras-grid">
          {extras.map(([name, price]) => (
            <div className="extra" key={name}>
              <span>{name}</span><strong>{price}</strong>
            </div>
          ))}
        </div>
      </section>

      <section id="local" className="location">
        <div>
          <p className="eyebrow">ENCONTRA-NOS</p>
          <h2>GAIA,<br /><em>À TUA ESPERA.</em></h2>
          <p>R. do Agueiro 288<br />4400-004 Vila Nova de Gaia</p>
          <div className="location-actions">
            <a className="button button-primary" href="https://www.google.com/maps/search/?api=1&query=R.%20do%20Agueiro%20288%2C%204400-004%20Vila%20Nova%20de%20Gaia" target="_blank" rel="noreferrer">Abrir no mapa ↗</a>
            <a className="phone" href="tel:+351913703882">+351 913 703 882</a>
          </div>
        </div>
        <div className="hours">
          <p className="eyebrow">HORÁRIO</p>
          <div><span>Segunda</span><strong>Fechado</strong></div>
          <div><span>Terça</span><strong>Fechado</strong></div>
          <div><span>Quarta — Sábado</span><strong>12:00–14:30<br />19:00–22:30</strong></div>
          <div><span>Domingo</span><strong>19:00–22:30</strong></div>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top">BORGES<span>BURGER</span></a>
        <p>Vila Nova de Gaia · Portugal</p>
        <a href={deliveryUrl} target="_blank" rel="noreferrer">Pedir agora ↗</a>
      </footer>
    </main>
  );
}
