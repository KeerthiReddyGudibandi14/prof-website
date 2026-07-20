const publications = [
  {
    authors: "Habbani, S. F.; et al.; Mohammed, S. I.",
    year: "2025",
    title:
      "Protein Biomarkers Enable Sensitive and Specific Cervical Intraepithelial Neoplasia (CIN) II/III+ Detection: One Step Closer to Universal Cervical Cancer Screening",
    journal: "Cancers",
    details: "17(11), 1763",
    link: "https://www.mdpi.com/2072-6694/17/11/1763",
  },
  {
    authors: "Habbani, S. F.; et al.; Mohammed, S. I.",
    year: "2025",
    title:
      "Validation of Protein Biomarkers for Early Detection of Cervical Cancer and Squamous Intraepithelial Lesions",
    journal: "Journal of Clinical Oncology",
    details: "43(16_suppl), e17506",
    link: "https://ascopubs.org/doi/10.1200/JCO.2025.43.16_suppl.e17506",
  },
  {
    authors: "Mahjabeen, F.; et al.; Mohammed, S. I.",
    year: "2025",
    title:
      "Molecular Mechanisms of Lymphatic Metastasis in Breast Cancer: An Updated Review",
    journal: "Cancers",
    details: "17(13), 2134",
    link: "https://pubmed.ncbi.nlm.nih.gov/40647432/",
  },
  {
    authors: "Ngwa, W.; et al.; Mohammed, S. I.",
    year: "2022",
    title: "Cancer in sub-Saharan Africa: a Lancet Oncology Commission",
    journal: "The Lancet Oncology",
    details: "",
    link: "https://pubmed.ncbi.nlm.nih.gov/35550267/",
  },
  {
    authors: "Abdelmegeed, S. M.; Mohammed, S. I.",
    year: "2018",
    title: "Canine Mammary Tumors as a Model for Human Disease",
    journal: "Oncology Letters",
    details: "15, 8195–8205",
    link: "https://pubmed.ncbi.nlm.nih.gov/29928319/",
  },
  {
    authors: "Mohammed, S. I.; et al.",
    year: "2016",
    title: "Point-of-care test for cervical cancer in LMICs",
    journal: "Oncotarget",
    details: "7, 18787–18797",
    link: "https://www.oncotarget.com/article/7709/",
  },
]

function Publications() {
  return (
    <section className="page publications-page">
      <div className="page-header">
        
        <h1>Publications</h1>
       
      </div>

      <div className="section-line"></div>

      <ul className="publication-list">
        {publications.map((pub, index) => (
          <li key={index} className="publication-item">
            <span>{pub.authors} </span>
            <strong>({pub.year}) </strong>

            <a href={pub.link} target="_blank" rel="noreferrer">
              “{pub.title}”
            </a>

            {pub.journal && <em> {pub.journal}</em>}
            {pub.details && <span>, {pub.details}</span>}
          </li>
        ))}
      </ul>

      <div className="scholar-button-wrapper">
        <a
          className="primary-btn"
          href="https://scholar.google.com/citations?user=v3BblfYAAAAJ&hl=en"
          target="_blank"
          rel="noreferrer"
        >
          View Full Google Scholar Profile
        </a>
      </div>
    </section>
  )
}

export default Publications