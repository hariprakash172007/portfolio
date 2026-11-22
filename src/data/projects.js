// Project data. Only real information supplied by Hari is included.
//
// - `url`     : live link. Leave empty if there isn't one — the UI will not invent it.
// - `source`  : repository URL. The "View Source" button only appears when this is set.
// - `image`   : optional path to a real screenshot (e.g. '/projects/guru-events.png'
//               placed in /public). When empty, a generated geometric preview is shown.
// - `tech`    : technologies explicitly stated for the project.
// - `focus`   : areas of work stated for the project (used when no tech stack was given).

export const projects = [
  {
    id: 'guru-events',
    index: '01',
    title: 'Guru Events',
    kind: 'Event management website',
    description:
      'A responsive event management website, designed and built with a focus on clean layout and smooth frontend development.',
    highlights: ['Responsive website design', 'Frontend development'],
    tech: [],
    focus: ['Responsive Design', 'Frontend Development'],
    url: 'https://superb-toffee-3ec2ab.netlify.app/',
    source: '',
    image: '',
    visual: 'events',
  },
  {
    id: 'udhayagiri-foundation',
    index: '02',
    title: 'Udhayagiri Foundation Trust',
    kind: 'Social impact foundation website',
    tagline: 'Uplifting Lives Since 2026.',
    description:
      'A website for a social impact foundation, presenting its children and community initiatives, programs and activities.',
    highlights: [
      'Children and community initiatives',
      'Programs and activities',
      'Responsive interface',
    ],
    tech: [],
    focus: ['Responsive Interface', 'Web Design'],
    url: 'https://www.udhayagirifoundation.com/',
    source: '',
    image: '',
    visual: 'foundation',
  },
  {
    id: 'touroguardian',
    index: '03',
    title: 'TouroGuardian',
    kind: 'Smart Tourist Safety Monitoring System',
    description:
      'A safety platform that monitors tourist locations and supports emergency response through SOS alerts and a police dashboard.',
    highlights: [
      'Tourist location monitoring',
      'SOS emergency functionality',
      'Police dashboard',
      'Geofencing',
      'QR-based emergency identification',
    ],
    tech: ['React', 'Leaflet'],
    focus: [],
    url: '',
    source: '',
    image: '',
    visual: 'safety',
  },
  {
    id: 'admitwise',
    index: '04',
    title: 'AdmitWise',
    kind: 'College admission guidance platform',
    description:
      'A guidance platform that helps students understand admissions, with an interactive interface for calculating TNEA cutoffs.',
    highlights: [
      'TNEA cutoff calculation',
      'Student admission guidance',
      'Interactive Streamlit interface',
    ],
    tech: ['Streamlit'],
    focus: [],
    url: '',
    source: '',
    image: '',
    visual: 'admissions',
  },
];
