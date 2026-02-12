import { useState } from 'react';
import { projects } from './data/projects';
import type { Project } from './types/project';
import { useProjects } from './hooks/useProjects';
import { Filters } from './components/Filters/Filters';
import { ProjectList } from './components/ProjectList/ProjectList';
import { ProjectDetail } from './components/ProjectDetail/ProjectDetail';
import { EmptyState } from './components/EmptyState/EmptyState';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const {
    filteredProjects,
    searchQuery,
    setSearchQuery,
    selectedStatus,
    setSelectedStatus,
  } = useProjects(projects);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedStatus(null);
  };

  const hasFilters = searchQuery !== '' || selectedStatus !== null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Project Dashboard</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Show filters only if there are projects */}
        {projects.length > 0 && (
          <Filters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedStatus={selectedStatus}
            onStatusChange={setSelectedStatus}
          />
        )}

        {/* Results count */}
        {projects.length > 0 && filteredProjects.length > 0 && (
          <p className="text-sm text-gray-500 mb-4">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
        )}

        {/* Content */}
        {projects.length === 0 ? (
          <EmptyState type="no-projects" />
        ) : filteredProjects.length === 0 ? (
          <EmptyState type="no-results" onClearFilters={hasFilters ? handleClearFilters : undefined} />
        ) : (
          <ProjectList projects={filteredProjects} onProjectClick={setSelectedProject} />
        )}
      </main>

      {/* Project Detail Panel */}
      {selectedProject && (
        <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}

export default App;
