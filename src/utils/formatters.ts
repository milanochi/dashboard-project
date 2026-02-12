import type { ProjectStatus } from '../types/project';

/**
 * Formats a date string (YYYY-MM-DD) to a readable format.
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

/**
 * Formats a number as USD currency.
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Returns Tailwind classes for status badge colors.
 */
export function getStatusColor(status: ProjectStatus): string {
  switch (status) {
    case 'Active':
      return 'bg-green-100 text-green-800';
    case 'On Hold':
      return 'bg-yellow-100 text-yellow-800';
    case 'Completed':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}
