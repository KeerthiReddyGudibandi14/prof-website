
import { Link } from 'react-router-dom'

import OmaimaPhoto from '../assets/team/Omaima.jpg'
import DevosPhoto from '../assets/team/Devos_Isabel_edit1.jpg'
import BrightPhoto from '../assets/team/bright_edit2.jpg'
import SulmaPhoto from '../assets/team/sulma3.jpg'
import KeerthiPhoto from '../assets/team/kkkk.jpg'

const teamMembers = [
  {
    name: 'Prof. Sulma Mohammed',
    role: 'Principal Investigator',
    photo: SulmaPhoto,
    slug: 'sulma-mohammed',
    biographyLink: '/about',
    description:
      'Professor of Cancer Biology, University of Florida Health Cancer Center',
  },
  {
  name: 'Bright Obeng',
  role: 'PhD Immunologist and Cell Therapy Scientist',
  photo: BrightPhoto,
  slug: 'bright-obeng',
  description:
    'Ph.D. in Biochemistry and Molecular Biology, University of Maine. ',
},
  {
    name: 'Omaima Ali',
    role: 'Postdoctoral Researcher',
    photo: OmaimaPhoto,
    slug: 'omaima-ali',
    description:
      'Ph.D. in Medicinal Chemistry and Molecular Pharmacology, Purdue University',
  },
  {
    name: 'Prof. Elizabeth L. DeVos',
    role: 'Professor of Emergency Medicine',
    photo: DevosPhoto,
    slug: 'elizabeth-devos',
    description:
      'M.P.H., The George Washington University',
  },
  {
    name: 'Sivkin Carly',
    role: 'Research Assistant / Student',
    photo: null,
    slug: 'sivkin-carly',
    description:
      'Add Sivkin Carly’s research interests, responsibilities, and academic background.',
  },
  {
    name: 'Rayan Lomaglio',
    role: 'Research Assistant / Student',
    photo: null,
    slug: 'rayan-lomaglio',
    description:
      'Add Rayan Lomaglio’s research interests, responsibilities, and academic background.',
  },
  {
    name: 'Keerthi Reddy Gudibandi',
    role: 'Graduate Research Assistant',
    photo: KeerthiPhoto,
    slug: 'keerthi-reddy-gudibandi',
    description:
      'Master of Science in Computer Science, University of Florida',
  },
]

function Team() {
  return (
    <section className="page team-page">
      <div className="page-header">
        <h1 className="page-title">Team</h1>

        <p className="page-intro">
          The Comparative Immuno-Oncology and Prevention Laboratory brings
          together faculty, researchers, students, and collaborators working to
          advance cancer prevention, immuno-oncology, and translational research.
        </p>
      </div>

      <div className="team-grid">
        {teamMembers.map((member) => (
          <article className="team-card" key={member.slug}>
            {member.photo ? (
              <img
                src={member.photo}
                alt={member.name}
                className="team-photo"
              />
            ) : (
              <div className="team-photo-placeholder">Photo</div>
            )}

            <div className="team-card-content">
              <h2>{member.name}</h2>

              <p className="team-role">{member.role}</p>

              <p className="team-description">{member.description}</p>

              <Link
  to={member.biographyLink || `/team/${member.slug}`}
  className="team-biography-link"
>
  Biography
</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Team