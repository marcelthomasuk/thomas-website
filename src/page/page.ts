export const pages = [
  {
    id: 'story',
    title: 'My Story',
    tagline: 'Why I do it',
    color: '#52F0BB',
    colorDark: '#38C481',
    path: '/story',
    next: {
      pageId: 'experience',
      text: 'Explore key experiences<br/>over the past years',
    },
  },
  {
    id: 'experience',
    title: 'My Experience',
    tagline: 'How I do it',
    color: '#52F0BB',
    colorDark: '#38C481',
    path: '/experience',
    next: {
      pageId: 'work',
      text: "Discover the latest projects and what I've built over the years",
    },
  },
  {
    id: 'work',
    title: 'My Work',
    tagline: 'What I do',
    color: '#52F0BB',
    colorDark: '#38C481',
    path: '/work',
    next: {
      pageId: 'story',
      text: "Discover the journey I've taken to get here",
    },
  },
];

export const getPageById = (id: string) => {
  return pages.find((page) => page.id === id) || pages[0];
};

export const getPageByPath = (path: string) => {
  return pages.find((page) => page.path === path) || getParentPageByPath(path);
};

export const getParentPageByPath = (path: string) => {
  const [, id] = path.split('/');

  return pages.find((page) => page.id === id) || pages[0];
};

export const getFirstPage = () => {
  return pages[0];
};
