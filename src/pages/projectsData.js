import shejaCards from '../assets/projects/shejacards.png';
import jambo from '../assets/projects/jambo.png';
import wastey from '../assets/projects/wastey.png';

const SIMPLE_EDITIONS = [
  {
    year: 2025,
    label: 'Hack With Me 2025',
    projects: [
      {
        title: 'SHEJA Cards',
        description: 'Sheja is a modern student card management platform built to help schools streamline enrollment, student registration, and ID card generation. ',
        liveUrl: 'https://shejacards.vercel.app/',
        image: shejaCards
      },
      {
        title: 'Jambo',
        description: 'It is a Complaint Management System that helps citizens report issues in their community or neighbourhood to the government and track the progress',
        liveUrl: 'https://jambo-client.vercel.app/',
        image: jambo
      },
      {
        title: 'Wastey',
        description: ' uses AI to classify waste and guide users on proper disposal, promoting recycling and environmental awareness.',
        liveUrl: 'https://wastey.vercel.app/',
        image: wastey
      },

    ]
  },

];



const slugify = (text) => String(text || '')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
  .slice(0, 60);

const normalizeEdition = (edition) => {
  const projects = (edition.projects || []).map((p, idx) => {
    const id = `p-${edition.year}-${slugify(p.title || 'project')}-${idx + 1}`;
    return {
      id,
      title: p.title,
      description: p.description,
      liveUrl: p.liveUrl,
      image: p.image
    };
  });
  return { ...edition, projects };
};

export const PROJECT_EDITIONS = SIMPLE_EDITIONS.map(normalizeEdition);

export const getEditionYears = () => PROJECT_EDITIONS.map(e => e.year).sort((a, b) => b - a);

export const getProjectsByEdition = (year) => {
  const edition = PROJECT_EDITIONS.find(e => e.year === year);
  return edition ? edition.projects : [];
};


