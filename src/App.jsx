import './App.css'

const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/'

const homeNavItems = ['Features', 'Integrations', 'Use Cases', 'Templates', 'Pricing']

const integrations = ['Calendly', 'Google Calendar', 'Google Maps', 'HubSpot', 'Twilio', 'WhatsApp']

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

const zendeskGaps = [
  {
    eyebrow: 'Handoff',
    title: 'Transfers happen late and blind',
    body: 'Customers repeat themselves. Agents inherit fragments. Voice AI looks smart right until it dumps a messy call on a human.',
  },
  {
    eyebrow: 'Routing',
    title: 'One queue for everything is not routing',
    body: 'Refunds, outages, billing, VIPs, and angry callers should not all hit the same logic. Good routing saves handle time before the agent even speaks.',
  },
  {
    eyebrow: 'Reliability',
    title: 'A flaky phone experience burns trust fast',
    body: 'If the bot stalls, mishears, or loops, the customer does not blame the model. They blame your support team.',
  },
]

const zendeskPillars = [
  {
    title: 'Context that survives the handoff',
    text: 'We pass structured call summaries, intent, sentiment, caller identity, and failure reason into the agent workflow so humans start ahead instead of from zero.',
  },
  {
    title: 'Routing logic built for real support ops',
    text: 'Policy-aware routing for sales vs support, priority accounts, language, business hours, and escalation triggers. Sharp rules. Less roulette.',
  },
  {
    title: 'Voice reliability you can actually operate',
    text: 'Fallback flows, recovery prompts, confidence thresholds, and graceful exit paths keep the experience usable when speech recognition or backend steps wobble.',
  },
  {
    title: 'QA and observability for every call',
    text: 'Review transcripts, drop-off points, failed actions, escalations, and containment trends. If it is broken, you should know exactly where it broke.',
  },
]

const zendeskStats = [
  { label: 'Live call state', value: 'Tracked end-to-end' },
  { label: 'Agent handoff package', value: 'Intent + summary + transcript' },
  { label: 'Routing inputs', value: 'Queue, urgency, language, account tier' },
  { label: 'QA view', value: 'Failure reasons, compliance, repeat contacts' },
]

const zendeskFlow = [
  {
    step: '01',
    title: 'Detect intent early',
    text: 'Separate simple resolution from high-risk calls in the first turns, not five minutes in.',
  },
  {
    step: '02',
    title: 'Route with context',
    text: 'Push the caller to the right queue or workflow with account, issue type, and urgency already attached.',
  },
  {
    step: '03',
    title: 'Handoff without memory loss',
    text: 'When a human steps in, they inherit the call state, not a blank screen and a prayer.',
  },
  {
    step: '04',
    title: 'Audit what happened',
    text: 'Track failures, repeat contacts, escalations, and QA signals so the system gets tighter over time.',
  },
]

const zendeskUseCases = [
  'After-hours support coverage',
  'Tier-1 call containment',
  'Billing and order-status triage',
  'Priority account routing',
  'Missed-call recovery',
  'Quality and compliance review',
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

function Header({ compact = false, ctaHref = '#cta-strip', ctaLabel = 'Get in touch' }) {
  return (
    <header className="site-header">
      <div className="container header-row">
        <a className="brand" href="/" aria-label="tools.eboo.ai home">
          <Mark />
          <div>
            <strong>tools.eboo.ai</strong>
            <span>{compact ? 'Zendesk voice AI' : 'design starter'}</span>
          </div>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {(compact ? ['Problem', 'Solution', 'Observability', 'CTA'] : homeNavItems).map((item) => (
            <a key={item} href={compact ? `#${item.toLowerCase()}` : `#${item.toLowerCase().replace(/\s+/g, '-')}`}>
              {item}
            </a>
          ))}
        </nav>

        <a className="button button-dark button-compact" href={ctaHref}>
          {ctaLabel}
        </a>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <a className="brand footer-brand" href="/">
          <Mark />
          <strong>tools.eboo.ai</strong>
        </a>
        <nav className="footer-nav" aria-label="Footer links">
          <a href="/">Home</a>
          <a href="/zendesk">Zendesk</a>
          <a href="/README.md">README</a>
        </nav>
      </div>
    </footer>
  )
}

function HomePage() {
  return (
    <div className="page-shell">
      <Header />

      <main id="top">
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">tools.eboo.ai baseline</p>
              <h1>
                A deployable design-system starter with the same visual DNA as <span>get.eboo.ai</span>
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

      <Footer />
    </div>
  )
}

function ZendeskPage() {
  return (
    <div className="page-shell zendesk-page">
      <Header compact ctaHref="#cta" ctaLabel="Book a demo" />

      <main id="top">
        <section className="hero-section zendesk-hero">
          <div className="container hero-grid zendesk-hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Zendesk voice AI</p>
              <h1>
                Fix the parts of <span>Zendesk voice AI</span> that break trust on live calls.
              </h1>
              <p className="hero-text">
                Better handoff. Smarter routing. Fewer dead ends. Full call context and QA visibility when automation works — and when it faceplants.
              </p>
              <div className="hero-actions">
                <a className="button button-accent" href="#cta">
                  Book a Zendesk demo
                </a>
                <a className="button button-ghost" href="#problem">
                  See the gaps
                </a>
              </div>
              <ul className="hero-tags" aria-label="Zendesk voice AI focus areas">
                <li>Human handoff</li>
                <li>Queue routing</li>
                <li>Context continuity</li>
                <li>AI QA</li>
                <li>Observability</li>
              </ul>
            </div>

            <div className="hero-visual">
              <div className="zendesk-visual-card">
                <div className="zendesk-visual-top">
                  <div>
                    <p>Live support call</p>
                    <strong>Refund request → billing specialist</strong>
                  </div>
                  <span className="status-pill">handoff ready</span>
                </div>

                <div className="zendesk-voice-line" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <div className="zendesk-summary-grid">
                  <article>
                    <span>Detected intent</span>
                    <strong>Billing dispute</strong>
                    <p>High-risk language detected. Escalate to human.</p>
                  </article>
                  <article>
                    <span>Route</span>
                    <strong>Priority billing queue</strong>
                    <p>Account tier and open ticket history attached.</p>
                  </article>
                  <article>
                    <span>Agent context</span>
                    <strong>Transcript + summary</strong>
                    <p>Customer identity, sentiment, and prior steps included.</p>
                  </article>
                  <article>
                    <span>QA signal</span>
                    <strong>Loop avoided</strong>
                    <p>Fallback triggered after low-confidence retries.</p>
                  </article>
                </div>

                <div className="zendesk-visual-note zendesk-visual-note-left">Don’t make the customer repeat the story.</div>
                <div className="zendesk-visual-note zendesk-visual-note-right">If routing is dumb, the whole call feels dumb.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="logo-section" id="problem">
          <div className="container stack-gap">
            <div className="section-heading narrow">
              <p className="section-kicker">Problem</p>
              <h2>Most voice AI fails in the messy middle, not the demo.</h2>
              <p>
                The hard part is not answering the phone. It is knowing when to escalate, where to send the caller, what context to preserve, and how to spot failure before support leaders hear about it from angry customers.
              </p>
            </div>
            <div className="feature-grid">
              {zendeskGaps.map((card) => (
                <article className="feature-card" key={card.title}>
                  <p className="mini-kicker">{card.eyebrow}</p>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section" id="solution">
          <div className="container stack-gap">
            <div className="section-heading">
              <p className="section-kicker">Solution</p>
              <h2>We make Zendesk voice automation usable in production.</h2>
              <p>
                Not more AI theater. Better operating logic. The system should know when to resolve, when to route, when to bail out, and how to leave the human agent with the full picture.
              </p>
            </div>

            <div className="template-grid zendesk-pillar-grid">
              {zendeskPillars.map((item) => (
                <article className="template-card zendesk-pillar-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="split-section zendesk-proof-section">
          <div className="container split-grid zendesk-proof-grid">
            <div>
              <p className="section-kicker">What operators need</p>
              <h2>Clear signals, not a black box with a dashboard cosplay problem.</h2>
              <p>
                Support leaders need to see failure modes, escalation reasons, repeat-contact patterns, and call quality trends fast enough to do something about them.
              </p>
              <a className="text-link" href="#observability">
                Jump to observability
              </a>
            </div>

            <div className="stats-card">
              {zendeskStats.map((item) => (
                <div className="stat-row" key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section section-muted" id="observability">
          <div className="container stack-gap">
            <div className="section-heading narrow">
              <p className="section-kicker">Observability + QA</p>
              <h2>Every bad call should leave evidence.</h2>
              <p>
                If the AI misroutes, loops, escalates too late, or drops context, you should be able to trace it in minutes. Otherwise you are just shipping polite chaos.
              </p>
            </div>

            <div className="process-grid">
              {zendeskFlow.map((item) => (
                <article className="process-card" key={item.step}>
                  <span className="process-step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="container stack-gap">
            <div className="section-heading narrow">
              <p className="section-kicker">Best-fit use cases</p>
              <h2>Built for teams that care about call outcomes, not vanity containment numbers.</h2>
            </div>

            <div className="logo-rail">
              {zendeskUseCases.map((item) => (
                <div className="logo-pill" key={item}>
                  <span className="logo-mark" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-strip" id="cta">
          <div className="container cta-panel">
            <div>
              <p className="section-kicker light">CTA</p>
              <h2>Want Zendesk voice AI that routes cleanly, hands off cleanly, and tells you when it did neither?</h2>
            </div>
            <div className="cta-actions">
              <a className="button button-light" href="mailto:hello@eboo.ai?subject=Zendesk%20voice%20AI%20demo">
                Talk to eboo
              </a>
              <a className="button button-outline-light" href="/">
                View design system
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function App() {
  if (currentPath === '/zendesk') {
    return <ZendeskPage />
  }

  return <HomePage />
}

export default App
