# Project Dashboard

A React-based internal project dashboard for viewing and filtering projects.

## Setup Instructions

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/milanochi/dashboard-project.git
cd dashboard-project
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in terminal)

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Assumptions Made

1. **Single user environment**: No authentication or user-specific data required.

2. **Static mock data**: Projects are loaded from a local file rather than an API. The data structure is fixed and known at compile time.

3. **Client-side only**: All filtering and state management happens in the browser. No server-side processing needed.

4. **Modern browser support**: Targeting evergreen browsers (Chrome, Firefox, Safari, Edge). No IE11 support.

5. **English language only**: No internationalization (i18n) requirements.

6. **No persistence**: Filter states and selections are not persisted between sessions.

7. **Budget field as extra data**: Chose budget (in USD) as the additional required field since it's commonly tracked for projects.

8. **Optional end dates**: Active projects may not have defined end dates yet, represented as `null`.

## Trade-offs

### Chose Table Over Cards
- **Pros**: Better for data comparison, more scannable, familiar to users working with project data
- **Cons**: Less visually engaging, requires horizontal scrolling on mobile

### Single Status Filter (Select) vs Multi-Select
- **Pros**: Simpler UX, clearer current state, easier to understand
- **Cons**: Can only filter by one status at a time

### Side Panel vs Separate Route for Details
- **Pros**: Keeps context, faster navigation, no URL changes needed
- **Cons**: Less screen real estate on mobile, can't bookmark specific projects

### Tailwind CSS Instead of Custom CSS
- **Pros**: Rapid development, consistent design system, utility-first approach
- **Cons**: Verbose class names, learning curve for unfamiliar developers

### Simple `useState` Over Context/Redux
- **Pros**: Less boilerplate, easier to understand, sufficient for current scope
- **Cons**: Would need refactoring if state becomes more complex or shared across many components

### No External UI Component Library
- **Pros**: Full control over components, no dependency bloat, meets assignment requirements
- **Cons**: More code to write and maintain for common patterns

---

See [AI_USAGE.md](./AI_USAGE.md) for documentation on AI tool usage in this project.
