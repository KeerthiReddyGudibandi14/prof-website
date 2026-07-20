
import { Link, useParams } from 'react-router-dom'

const teamMemberDetails = {
  'sulma-mohammed': {
    name: 'Prof. Sulma Mohammed, DVM, MS, Ph.D.',
    biography: [
      `Prof. Sulma Mohammed is Professor of Cancer Biology, Co-Leader of
      Cancer Control and Population Sciences, and Co-Director of the CaRE2
      Health Equity Center at the University of Florida Health Cancer Center.`,

      `Her research focuses on comparative oncology, cancer prevention,
      immunoprevention, biomarkers, early detection, breast cancer metastasis,
      translational science, and cancer health equity.`,

      `She has extensive experience in scientific leadership, global oncology,
      student mentorship, editorial work, and cancer research capacity building
      across Africa and internationally.`,
    ],
  },

  'bright-obeng': {
    name: 'Bright Obeng',
    biography: [
      `Bright Obeng is an immunologist and cell therapy scientist with expertise in translational oncology, immunology, and cancer biology. He earned his Ph.D. in Biochemistry and Molecular Biology from the University of Maine and holds a bachelor's degree in Biochemistry from Kwame Nkrumah University of Science and Technology. His research focuses on immunology, cell therapy, and the development of innovative approaches for cancer treatment.`,
    ],
  },

  'omaima-ali': {
    name: 'Prof. Omaima Ali',
    biography: [
      `Dr. Omaima Ali is a Postdoctoral Researcher in the Comparative Immuno-Oncology and Prevention Laboratory at the University of Florida. Her research focuses on cancer genetics, molecular biology, translational oncology, and the identification of molecular mechanisms that contribute to cancer development and progression. She earned her Ph.D. in Medicinal Chemistry and Molecular Pharmacology from Purdue University and holds both a Ph.D. in Biochemistry and a Master's degree in Pharmacy from Cairo University. She also earned her Bachelor's degree in Pharmaceutical Sciences from Ain Shams University. Before joining the University of Florida, Dr. Ali served as a researcher at the National Organization for Drug Control and Research and as Head of Unit at the Egyptian Drug Authority. Her expertise includes molecular biology techniques, gene expression analysis, PCR, cell culture, RNA isolation, transfection, and cancer genetics.`,
    ],
  },

  'elizabeth-devos': {
    name: 'Elizabeth L. DeVos',
    biography: [
      `Dr. Elizabeth L. DeVos is Professor of Emergency Medicine at the University of Florida College of Medicine – Jacksonville and serves as Assistant Dean for Student Affairs and Medical Director of International Emergency Medicine Education. Her work focuses on global health, medical education, and emergency medicine training. She earned her Doctor of Medicine from Northeastern Ohio Universities College of Medicine, completed her Emergency Medicine Residency at the University of Florida, and received both a Master of Public Health and an International Emergency Medicine Fellowship from The George Washington University. Dr. DeVos has extensive experience in international medical education, physician training, and global emergency medicine initiatives. Her leadership and educational expertise support interdisciplinary collaborations that advance healthcare education and international research partnerships.`,
    ],
  },

  'sivkin-carly': {
    name: 'Sivkin Carly',
    biography: [
      `Sivkin Carly is a member of the Comparative Immuno-Oncology and
      Prevention Laboratory.`,

      `Add her academic background, research interests, current projects, and
      professional goals here.`,
    ],
  },

  'rayan-lomaglio': {
    name: 'Rayan Lomaglio',
    biography: [
      `Rayan Lomaglio is a member of the Comparative Immuno-Oncology and
      Prevention Laboratory.`,

      `Add her academic background, laboratory responsibilities, research
      interests, and professional goals here.`,
    ],
  },

  'keerthi-reddy-gudibandi': {
    name: 'Keerthi Reddy Gudibandi',
    biography: [
      `Keerthi Reddy Gudibandi is a Graduate Research Assistant in the Comparative Immuno-Oncology and Prevention Laboratory at the University of Florida, where she is pursuing a Master of Science in Computer Science. She earned her Bachelor of Technology in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning from Vellore Institute of Technology. Her work focuses on applying machine learning and computational approaches to cancer research. She contributes to the development of machine learning models, data analysis, research documentation, and computational workflows that support ongoing laboratory projects.`,
    ],
  },
}

function TeamMember() {
  const { slug } = useParams()
  const member = teamMemberDetails[slug]

  if (!member) {
    return (
      <section className="page team-member-page">
        <h1>Team Member Not Found</h1>

        <Link to="/team" className="back-to-team">
          Return to Team
        </Link>
      </section>
    )
  }

  return (
    <section className="page team-member-page">
      <Link to="/team" className="back-to-team">
        ← Back to Team
      </Link>

      <h1 className="team-member-name">{member.name}</h1>

      <div className="team-member-accent"></div>

      <div className="team-member-biography">
        {member.biography.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}

export default TeamMember