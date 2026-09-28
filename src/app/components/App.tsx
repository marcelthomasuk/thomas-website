import { AnimatePresence } from 'motion/react';
import { Route, Routes, useLocation } from 'react-router';
import { ConceptPage } from '~/concept/pages';
import { CoursePage, CoursesPage } from '~/course/pages';
import { ExperiencePage } from '~/experience/pages';
import { Header } from '~/header/components';
import { HomePage } from '~/home/components';
import { Menu } from '~/menu/components';
import { ProductsPage } from '~/product/pages';
import { StoryPage } from '~/story/components';
import { WorkPage } from '~/work/pages';

export const App = () => {
  const location = useLocation();

  return (
    <>
      <Header />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<HomePage />} />

          <Route path="/work" element={<WorkPage />} />

          <Route path="/story" element={<StoryPage />} />

          <Route path="/experience" element={<ExperiencePage />} />

          <Route path="/products" element={<ProductsPage />} />

          <Route path="/courses" element={<CoursesPage />} />

          <Route path="/courses/:courseId" element={<CoursePage />} />

          <Route path="/concepts/:conceptId" element={<ConceptPage />} />

          <Route path="*" element={<HomePage />} />
        </Routes>
      </AnimatePresence>

      <Menu />
    </>
  );
};

console.log('========================================');
console.log('Hi!');
console.log('');
console.log('Interested in how I built this website?');
console.log('');
console.log("I'm using:");
console.log('React (Vite)');
console.log('Tailwind CSS');
console.log('Framer Motion');
console.log('Vercel');
console.log('');
console.log("If you're interested in learning more,");
console.log('feel free to reach out!');
console.log('');
console.log('Email:');
console.log('contact@marcelthomas.co.uk');
console.log('========================================');
