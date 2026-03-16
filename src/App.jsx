import './App.css'

const navItems = [
  'Features',
  'Integrations',
  'Use Cases',
  'Templates',
  'Pricing',
]

const integrations = [
  'Calendly',
  'Google Calendar',
  'Google Maps',
  'HubSpot',
  'Twilio',
  'WhatsApp',
]

const featureCards = [
  {
    eyebrow: 'Always on',
    title: 'Instant response on voice and chat',
    body: 'Give tools.eboo.ai a baseline hero card style that feels conversational, responsive, and available 24/7 without looking like a generic chatbot clone.',
  },
  {
    eyebrow: 'Operational clarity',
    title: 'Structured actions with visible next steps',
    body: 'Use compact cards, status chips, and soft dividers so every flow can show what happened, what is synced, and what should happen next.',
  },
  {
    eyebrow: 'Designed for handoff',
    title: 'Reusable sections for landing, product, and integration pages',
    body: 'The starter includes a hero, logo rail, feature grid, use-case cards, CTA strip, pricing shells, and a clean footer pattern.',
  },
]

const templates = [
  {
    title: 'Operator cards',
    text: 'White cards on light sections with 18–24px radii, deep slate headings, and restrained shadow depth.',
  },
  {
    title: 'Integration pills',
    text: 'Neutral logo treatments with subtle borders so partner marks do not shout over the product story.',
  },
  {
    title: 'CTA blocks',
    text: 'High-contrast gradient buttons plus secondary ghost actions for demos, trials, and docs pathways.',
  },
  {
    title: 'Dark hero shell',
    text: 'A layered midnight gradient, neon-green glow, and circular orbit accents borrowed from the live homepage mood.',
  },
]

const useCases = [
  'Appointment booking',
  'Order management',
  'Complaint intake',
  'Calendar coordination',
  'Call routing',
  'Customer support triage',
]

const priceTiers = [
  {
    name: 'Starter',
    price: '$49',
    label: 'Design baseline',
    features: ['Hero + nav system', 'Feature and template cards', 'Footer + CTA section'],
  },
  {
    name: 'Growth',
    price: '$149',
    label: 'Most aligned',
    featured: true,
    features: ['Add pricing and case-study blocks', 'More polished motion + states', 'Deeper integration showcases'],
  },
  {
    name: 'Scale',
    price: 'Custom',
    label: 'Productized expansion',
    features: ['Design tokens into app surfaces', 'Marketing + product page variants', 'Component-library extraction'],
  },
]

function Mark() {
  return (
    <div className="brand-mark" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  )
}

function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container header-row">
          <a className="brand" href="#top" aria-label="tools.eboo.ai home">
            <Mark />
            <div>
              <strong>tools.eboo.ai</strong>
              <span>design starter</span>
            </div>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>
                {item}
              </a>
            ))}
          </nav>

          <a className="button button-dark button-compact" href="#cta-strip">
            Get in touch
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">tools.eboo.ai baseline</p>
              <h1>
                A deployable design-system starter with the same visual DNA as{' '}
                <span>get.eboo.ai</span>
              </h1>
              <p className="hero-text">
                Inter typography, dark radial hero treatment, neon-green glow, calm white content sections,
                integration-friendly components, and reusable landing-page templates. Clean, practical, and ready to fork.
              </p>
              <div className="hero-actions">
                <a className="button button-accent" href="#templates">
                  Explore templates
                </a>
                <a className="button button-ghost" href="#pricing">
                  Review structure
                </a>
              </div>
              <ul className="hero-tags" aria-label="Key capabilities">
                {useCases.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="hero-visual">
              <div className="orbit-shell">
                <div className="orbit orbit-one" />
                <div className="orbit orbit-two" />
                <div className="orbit orbit-three" />
                <div className="hero-console">
                  <div className="console-top">
                    <span className="status-dot" />
                    <p>AI operator flow</p>
                    <span className="status-pill">live</span>
                  </div>
                  <div className="console-card">
                    <p>Incoming call</p>
                    <strong>“Can I move my appointment to Friday?”</strong>
                  </div>
                  <div className="console-grid">
                    <div>
                      <span>Intent</span>
                      <strong>Booking</strong>
                    </div>
                    <div>
                      <span>Sync</span>
                      <strong>Calendar</strong>
                    </div>
                    <div>
                      <span>Route</span>
                      <strong>Resolved</strong>
                    </div>
                    <div>
                      <span>Confidence</span>
                      <strong>97%</strong>
                    </div>
                  </div>
                </div>
                <div className="orbit-copy orbit-copy-left">Never miss a customer again</div>
                <div className="orbit-copy orbit-copy-right">Designed for voice, chat, and tools</div>
                <div className="orbit-copy orbit-copy-bottom">Glow-heavy hero treatment with restrained motion</div>
              </div>
            </div>
          </div>
        </section>

        <section className="logo-section" id="integrations">
          <div className="container">
            <p className="section-kicker">Integration/logo treatment</p>
            <div className="logo-rail">
              {integrations.concat(integrations).map((item, index) => (
                <div className="logo-pill" key={`${item}-${index}`}>
                  <span className="logo-mark" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section" id="features">
          <div className="container stack-gap">
            <div className="section-heading">
              <p className="section-kicker">Features</p>
              <h2>Core patterns lifted from the homepage’s feel, not its furniture</h2>
              <p>
                The original site leans hard on contrast: dark cinematic hero, bright white content cards, and green glows used like a highlighter instead of a floodlight.
              </p>
            </div>

            <div className="feature-grid">
              {featureCards.map((card) => (
                <article className="feature-card" key={card.title}>
                  <p className="mini-kicker">{card.eyebrow}</p>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="split-section" id="use-cases">
          <div className="container split-grid">
            <div>
              <p className="section-kicker">Use cases</p>
              <h2>Section templates built for actual product storytelling</h2>
              <p>
                This starter ships with reusable blocks for operators, integrations, process steps, CTA strips, and pricing. Enough structure to move fast, not enough bloat to regret it later.
              </p>
              <a className="text-link" href="#templates">
                Jump to template library
              </a>
            </div>

            <div className="use-case-list">
              {useCases.map((item) => (
                <div className="use-case-row" key={item}>
                  <span className="check">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section section-muted" id="templates">
          <div className="container stack-gap">
            <div className="section-heading narrow">
              <p className="section-kicker">Templates</p>
              <h2>Reusable cards and shells for tools.eboo.ai</h2>
            </div>

            <div className="template-grid">
              {templates.map((item) => (
                <article className="template-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-strip" id="cta-strip">
          <div className="container cta-panel">
            <div>
              <p className="section-kicker light">CTA strip</p>
              <h2>Use this starter as the baseline for tools.eboo.ai pages and product marketing surfaces.</h2>
            </div>
            <div className="cta-actions">
              <a className="button button-light" href="#pricing">
                See pricing shell
              </a>
              <a className="button button-outline-light" href="/DESIGN_TOKENS.md">
                Open design tokens
              </a>
            </div>
          </div>
        </section>

        <section className="content-section" id="pricing">
          <div className="container stack-gap">
            <div className="section-heading narrow">
              <p className="section-kicker">Pricing shell</p>
              <h2>Starter pricing cards modeled on the same visual rhythm</h2>
            </div>
            <div className="pricing-grid">
              {priceTiers.map((tier) => (
                <article className={`pricing-card ${tier.featured ? 'featured' : ''}`} key={tier.name}>
                  {tier.featured && <span className="pricing-badge">Most aligned</span>}
                  <p className="mini-kicker">{tier.label}</p>
                  <h3>{tier.name}</h3>
                  <div className="price-row">{tier.price}</div>
                  <ul>
                    {tier.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <a className={`button ${tier.featured ? 'button-dark' : 'button-secondary'}`} href="#top">
                    Use this pattern
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-row">
          <a className="brand footer-brand" href="#top">
            <Mark />
            <strong>tools.eboo.ai</strong>
          </a>
          <nav className="footer-nav" aria-label="Footer links">
            <a href="#features">Features</a>
            <a href="#integrations">Integrations</a>
            <a href="#pricing">Pricing</a>
            <a href="/README.md">README</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
