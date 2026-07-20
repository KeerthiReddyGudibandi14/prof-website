function EditorialWork() {
  return (
    <section className="page journal-page">
      <h1 className="page-title">Journal Work</h1>

      <section className="journal-hero-panel">
        <div>
          <p className="section-label">AORTIC / AJCR</p>
          <h2>African Journal of Cancer Research</h2>
        </div>

        <p>
          Prof. Sulma Mohammed supports journal leadership and scholarly
          communication through her work with the African Organisation for
          Research and Training in Cancer (AORTIC) and the African Journal of
          Cancer Research (AJCR). This work helps strengthen cancer research
          visibility, manuscript review, and editorial collaboration across
          Africa and the global oncology community.
        </p>
      </section>

      <section className="journal-workflow">
        <div className="workflow-heading">
          <p className="section-label">Editorial Process</p>
          <h2>Supporting High-Quality Cancer Research</h2>
          <p>
            Journal activities include associate editor coordination, reviewer
            communication, manuscript tracking, and support for timely and
            constructive editorial decisions.
          </p>
        </div>

        <div className="workflow-list">
          <div className="workflow-item">
            <span className="workflow-number">01</span>
            <div>
              <h3>Associate Editor Coordination</h3>
              <p>
                Coordinating associate editor invitations, tracking responses,
                and aligning editorial expertise with manuscript subject areas.
              </p>
            </div>
          </div>

          <div className="workflow-item">
            <span className="workflow-number">02</span>
            <div>
              <h3>Manuscript Assignment</h3>
              <p>
                Supporting manuscript routing based on topic, research area,
                reviewer needs, and journal priorities.
              </p>
            </div>
          </div>

          <div className="workflow-item">
            <span className="workflow-number">03</span>
            <div>
              <h3>Reviewer Communication</h3>
              <p>
                Assisting with reviewer follow-ups, review form coordination,
                deadlines, and communication between reviewers and editors.
              </p>
            </div>
          </div>

          <div className="workflow-item">
            <span className="workflow-number">04</span>
            <div>
              <h3>Editorial Decision Support</h3>
              <p>
                Helping organize reviewer feedback and supporting a clear,
                timely editorial workflow for the Editor-in-Chief.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="journal-mission-strip">
        <div>
          <p className="section-label light">Mission</p>
          <h2>Advancing Cancer Research Across Africa</h2>
        </div>

        <p>
          Through AJCR and AORTIC-related journal activities, Prof. Mohammed
          supports research that addresses cancer prevention, treatment,
          disparities, health systems, translational science, and equitable
          cancer outcomes.
        </p>
      </section>

      <div className="journal-button-area">
        <a
          href="https://aortic-africa.org/"
          target="_blank"
          rel="noreferrer"
          className="primary-btn"
        >
          Visit AORTIC
        </a>
      </div>
    </section>
  )
}

export default EditorialWork