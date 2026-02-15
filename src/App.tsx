import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-gradient-to-b from-rose-50/60 via-purple-50/40 via-violet-50/30 via-purple-50/40 to-purple-50/60">
        <CustomCursor />
        <ScrollProgress />
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:projectId" element={<ProjectDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
