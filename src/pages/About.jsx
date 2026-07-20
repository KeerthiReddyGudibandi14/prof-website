import { FaGlobeAmericas } from 'react-icons/fa'
import SulmaPhoto from '../assets/about/sulma-microscope.jpg'

function About() {
  return (
    <section className="about-page">
      <h1 className="page-title">Biography</h1>

      <div className="about-layout">
        <div className="about-left">
          <div className="about-image-box">
            <img
  src={SulmaPhoto}
  alt="Prof. Sulma Mohammed working in the laboratory"
  className="about-photo"
/>
          </div>

          <div className="about-links-box">
            <h3>On this page</h3>

            <a href="#education">Education</a>
            <a href="#honors-awards">Honors & Awards</a>
            <a href="#research-interests">Research Interests</a>
            <a href="#journal-work">Journal Work</a>
            <a href="#global-leadership">Global Cancer Leadership</a>
          </div>
        </div>

        <div className="about-text">
          <p>
            Prof. Sulma Mohammed is a researcher and academic leader whose work
            focuses on cancer prevention, comparative immuno-oncology,
            translational research, and strategies to improve cancer outcomes
            across diverse populations.
          </p>

          <p>
            Her research integrates immunology, oncology, comparative animal
            models, biomarkers, vaccines, immunotherapies, and precision medicine
            approaches to advance cancer prevention and treatment. Through the
            Comparative Immuno-Oncology and Prevention Laboratory, her work aims
            to improve the health of both humans and animals while addressing
            cancer health disparities.
          </p>

          <p>
            In addition to her research, Prof. Mohammed is involved in editorial and journal leadership, including the African Journal of Cancer Research. Her academic and professional activities reflect a commitment to translational science, global oncology, cancer prevention, and access to high-quality cancer research.
          </p>
        </div>
      </div>

      <section id="education" className="about-detail-section">
        <h2>Education</h2>
        <ul>
          <li>
      <strong>Doctor of Philosophy (Ph.D.)</strong>, Purdue University,
      West Lafayette, Indiana, USA — 1991
    </li>

    <li>
      <strong>Master of Science (M.S.)</strong>, Cornell University,
      Ithaca, New York, USA — 1982
    </li>

    <li>
      <strong>Doctor of Veterinary Medicine (D.V.M.)</strong>,
      University of Khartoum, Khartoum, Sudan — 1977
    </li>
        </ul>
      </section>

      <section id="honors-awards" className="about-detail-section">
        <h2>Honors & Awards</h2>
        <ul>
          <li>
      <strong>2022</strong> — Distinguished Women Scholar Award
    </li>

    <li>
      <strong>2020</strong> — Purdue University Scholarship of Engagement Award
    </li>

    <li>
      <strong>2017</strong> — Zoetis Award for Excellence in Research,
      Purdue University College of Veterinary Medicine
    </li>

    <li>
      <strong>2016</strong> — African Diaspora Ambassador Award,
      Harvard Global Health Catalyst, Harvard Medical School
    </li>

    <li>
      <strong>2016</strong> — Pillar of Support Award for commitment to
      stopping cervical, breast, and prostate cancers in Africa
    </li>

    <li>
      <strong>2011</strong> — Leading the Way in Breast Cancer Research Award,
      African Women’s Cancer Awareness Association
    </li>

    <li>
      <strong>2010</strong> — Excellence and Leadership in Breast Cancer
      and Health Awareness Award
    </li>

    <li>
      <strong>1999–2001</strong> — American Association for Cancer Research
      Fellowship in Prevention Research
    </li>

    <li>
      <strong>1986–1991</strong> — African Graduate Fellowship Program Award
      for doctoral study at Purdue University
    </li>
        </ul>
      </section>

      <section id="research-interests" className="about-detail-section research-interests-section">
  <div className="research-section-header">
    <p className="section-label">Areas of Focus</p>
    <h2>Research Interests</h2>

    <p className="research-section-intro">
      Prof. Mohammed’s research bridges comparative oncology, cancer biology,
      immunology, prevention science, and global cancer health. Her work uses
      naturally occurring and experimental cancer models to translate laboratory
      discoveries into practical approaches for cancer prevention, early detection,
      diagnosis, and treatment.
    </p>
  </div>

  <div className="research-focus-layout">
    <div className="research-focus-column">
      <div className="research-focus-item">
        <span className="research-focus-number">01</span>

        <div>
          <h3>Comparative Oncology</h3>
          <p>
            Studying naturally occurring cancers in animals as models for
            understanding human breast, bladder, and other cancers.
          </p>
        </div>
      </div>

      <div className="research-focus-item">
        <span className="research-focus-number">02</span>

        <div>
          <h3>Cancer Prevention and Immunoprevention</h3>
          <p>
            Developing prevention-centered strategies, including
            immunoprevention approaches for early-stage breast cancer.
          </p>
        </div>
      </div>

      <div className="research-focus-item">
        <span className="research-focus-number">03</span>

        <div>
          <h3>Biomarkers and Early Detection</h3>
          <p>
            Discovering and validating protein biomarkers and point-of-care
            technologies for cervical cancer, metastatic cancer, and other
            malignancies.
          </p>
        </div>
      </div>
    </div>

    <div className="research-focus-column">
      <div className="research-focus-item">
        <span className="research-focus-number">04</span>

        <div>
          <h3>Breast Cancer Metastasis</h3>
          <p>
            Investigating lymphatic metastasis, tumor-draining factors,
            circulating tumor cells, and mechanisms of cancer progression.
          </p>
        </div>
      </div>

      <div className="research-focus-item">
        <span className="research-focus-number">05</span>

        <div>
          <h3>Cancer Health Equity</h3>
          <p>
            Addressing disparities in cancer prevention, screening, research
            capacity, healthcare access, and outcomes in African and underserved
            populations.
          </p>
        </div>
      </div>

      <div className="research-focus-item">
        <span className="research-focus-number">06</span>

        <div>
          <h3>Translational and Global Oncology</h3>
          <p>
            Connecting laboratory discoveries, community engagement, health
            systems, and policy to improve cancer outcomes locally and globally.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      <section id="journal-work" className="about-detail-section">
  <h2>Journal and Editorial Leadership</h2>

  <p>
    Prof. Mohammed has extensive experience in scientific publishing, peer review,
    and editorial leadership. She has served as Chief Editor of the International
    Journal of Cancer and Clinical Research and as an editorial board member for
    journals in cancer research, women’s health, and integrated omics.
  </p>

  <p>
    She has reviewed manuscripts for numerous scientific journals, including
    PLOS Medicine, PLOS ONE, Cancer Epidemiology, BMC Cancer, Oncology Letters,
    Molecular and Cellular Biochemistry, and the International Journal of
    Gynecological Cancer.
  </p>

  <p>
    Her journal leadership also supports the African Journal of Cancer Research
    and the broader mission of the African Organisation for Research and Training
    in Cancer to strengthen cancer scholarship, scientific collaboration, and
    research visibility across Africa.
  </p>

  <ul className="profile-list">
    <li>
      Chief Editor, International Journal of Cancer and Clinical Research
    </li>
    <li>
      Editorial Board Member, Journal of Integrated Omics
    </li>
    <li>
      Editorial Board Member, International Journal of Women’s Health
    </li>
    <li>
      Reviewer for national and international cancer-research journals
    </li>
  </ul>
</section>

      <section
  id="global-leadership"
  className="about-detail-section global-impact-section"
>
  <div className="global-impact-heading">
    <p className="section-label">International Impact</p>
    <h2>Global Cancer Leadership</h2>

    <p>
      Prof. Mohammed has played a sustained leadership role in advancing cancer
      research, training, prevention, and scientific collaboration across Africa
      and the global oncology community.
    </p>
  </div>

  <div className="global-impact-highlight">
  <div className="global-globe-icon" aria-hidden="true">
  <FaGlobeAmericas />
</div>

  <div className="global-highlight-divider"></div>

  <div className="global-highlight-content">
    <span className="global-highlight-accent"></span>

    <p>
      Advancing equitable cancer prevention and care through research capacity
      building, international collaboration, mentorship, and scientific leadership.
    </p>
  </div>
</div>

  <div className="global-impact-list">
    <article className="global-impact-row">
      <span className="impact-number">01</span>

      <div className="impact-title">
        <h3>AORTIC Leadership</h3>
        <span>Pan-African collaboration</span>
      </div>

      <p>
        Life Member, Executive Council member, and former Vice President of the
        AORTIC North America Region.
      </p>
    </article>

    <article className="global-impact-row">
      <span className="impact-number">02</span>

      <div className="impact-title">
        <h3>Scientific Programs</h3>
        <span>Research and training</span>
      </div>

      <p>
        Leadership in scientific committees, cancer biology sessions, research
        initiatives, training activities, and international meetings.
      </p>
    </article>

    <article className="global-impact-row">
      <span className="impact-number">03</span>

      <div className="impact-title">
        <h3>African Foundation of Cancer</h3>
        <span>Institutional development</span>
      </div>

      <p>
        Founder of an initiative established to support cancer research and
        strengthen cancer-focused programs and partnerships across Africa.
      </p>
    </article>

    <article className="global-impact-row">
      <span className="impact-number">04</span>

      <div className="impact-title">
        <h3>Research Capacity Building</h3>
        <span>Sustainable infrastructure</span>
      </div>

      <p>
        Leadership in regional cancer-center development, research mentorship,
        diaspora engagement, screening initiatives, and workforce development.
      </p>
    </article>
  </div>
</section>
    </section>
  )
}

export default About