import { useMemo, useState } from 'react';
import type { Project, ProjectStatus } from '../types/project';

interface UseProjectsResult {
  filteredProjects: Project[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedStatus: ProjectStatus | null;
  setSelectedStatus: (status: ProjectStatus | null) => void;
}

export function useProjects(projects: Project[]): UseProjectsResult {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<ProjectStatus | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Status filter - if no status selected, show all
      const matchesStatus = selectedStatus === null || project.status === selectedStatus;

      // Search filter - search in project name and client name
      const searchLower = searchQuery.toLowerCase().trim();
      const matchesSearch =
        searchLower === '' ||
        project.name.toLowerCase().includes(searchLower) ||
        project.clientName.toLowerCase().includes(searchLower);

      return matchesStatus && matchesSearch;
    });
  }, [projects, searchQuery, selectedStatus]);

  return {
    filteredProjects,
    searchQuery,
    setSearchQuery,
    selectedStatus,
    setSelectedStatus,
  };
}
