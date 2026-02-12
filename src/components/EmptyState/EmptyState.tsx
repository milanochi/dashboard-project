interface EmptyStateProps {
  type: 'no-projects' | 'no-results';
  onClearFilters?: () => void;
}

export function EmptyState({ type, onClearFilters }: EmptyStateProps) {
  if (type === 'no-projects') {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-5xl mb-4">📁</div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No projects available</h3>
        <p className="text-gray-500">There are no projects in the system yet.</p>
      </div>
    );
  }

  return (
    <div className="text-center py-12">
      <div className="text-gray-400 text-5xl mb-4">🔍</div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">No matching projects</h3>
      <p className="text-gray-500 mb-4">
        No projects match your current filters. Try adjusting your search criteria.
      </p>
      {onClearFilters && (
        <button
          onClick={onClearFilters}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Clear filters
        </button>
      )}
    </div>
  );
}
