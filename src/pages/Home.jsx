import profPhoto from "../assets/Sulma mam photo.jpg"

function Home() {
  return (
    <section className="home-page">
      <section className="home-hero">
        <div className="hero-left">
          <p className="hero-kicker">Comparative Immuno-Oncology and Prevention Laboratory</p>

          <h1>Prof. Sulma Mohammed</h1>

          <p className="hero-subtitle">
            Advancing cancer prevention, immuno-oncology, translational research,
            and global cancer equity.
          </p>

          <p className="hero-body">
            The Comparative Immuno-Oncology and Prevention Laboratory studies
            cancer prevention and treatment through comparative and translational
            research. The lab integrates immunology, oncology, comparative animal
            models, biomarkers, vaccines, immunotherapies, and precision medicine
            strategies to improve outcomes across diverse populations.
          </p>

          <div className="hero-actions">
            <a href="/research" className="btn-primary">Research Areas</a>
            <a href="/publications" className="btn-secondary">Publications</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="professor-photo-frame">
            <img
  src={profPhoto}
  alt="Prof. Sulma Mohammed"
  className="professor-photo"
/>
          </div>
        </div>
      </section>

      <section className="overview-section">
        <div className="overview-heading">
          <p className="section-label">CIOP Lab</p>
          <h2>Research Focus</h2>
        </div>

        <div className="overview-grid">
          <div className="overview-card">
            <h3>Comparative Immuno-Oncology</h3>
            <p>
              Investigating immune mechanisms of cancer across human and animal
              models to identify shared pathways relevant to prevention and therapy.
            </p>
          </div>

          <div className="overview-card">
            <h3>Cancer Prevention</h3>
            <p>
              Developing prevention-centered approaches that connect laboratory
              findings with clinical and population-level cancer control strategies.
            </p>
          </div>

          <div className="overview-card">
            <h3>Translational Science</h3>
            <p>
              Bridging discovery science with clinical applications through biomarkers,
              vaccines, immunotherapies, and precision medicine.
            </p>
          </div>
        </div>
      </section>

      <section className="mission-panel">
        <div>
          <p className="section-label light">Mission</p>
          <h2>Comparative Immuno-Oncology and Prevention Laboratory</h2>
        </div>

        <p>
          The CIOP Lab is dedicated to advancing cancer prevention and treatment
          through comparative and translational research. The laboratory integrates
          immunology, oncology, and comparative animal models to develop innovative
          vaccines, immunotherapies, biomarkers, and precision medicine strategies
          that improve the health of both humans and animals while addressing cancer
          health disparities.
        </p>
      </section>
    </section>
  )
}

export default Home