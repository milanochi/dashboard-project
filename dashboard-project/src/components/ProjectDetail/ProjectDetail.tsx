import type { Project } from '../../types/project';
import { formatDate, formatCurrency, getStatusColor } from '../../utils/formatters';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const statusColor = getStatusColor(project.status);

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-end z-50">
      <div
        className="bg-white w-full max-w-lg h-full overflow-y-auto shadow-xl"
        role="dialog"
        aria-labelledby="project-title"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 id="project-title" className="text-lg font-semibold text-gray-900">
            Project Details
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
            aria-label="Close panel"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Project Name */}
          <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>

          {/* Status Badge */}
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${statusColor} mb-6`}>
            {project.status}
          </span>

          {/* Details Grid */}
          <dl className="space-y-4">
            <DetailRow label="Client" value={project.clientName} />
            <DetailRow label="Start Date" value={formatDate(project.startDate)} />
            <DetailRow 
              label="End Date" 
              value={project.endDate ? formatDate(project.endDate) : 'To be determined'} 
            />
            {/* Extra Field: Budget */}
            <DetailRow 
              label="Budget" 
              value={project.budget ? formatCurrency(project.budget) : 'Not specified'} 
            />
          </dl>

          {/* Description */}
          <div className="mt-6">
            <dt className="text-sm font-medium text-gray-500 mb-1">Description</dt>
            <dd className="text-gray-900">{project.description}</dd>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-2 border-b border-gray-100">
      <dt className="text-sm font-medium text-gray-500">{label}</dt>
      <dd className="text-sm text-gray-900">{value}</dd>
    </div>
  );
}
