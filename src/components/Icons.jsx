// Small icons used around the site. They take the text color (currentColor).

export const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />
  </svg>
)

export const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
)

// Pixel-art icons (drawn on a small grid, so they stay crisp and "8-bit")
export const MailIcon = () => (
  <svg viewBox="0 0 12 12" aria-hidden="true" className="icon" shapeRendering="crispEdges">
    <path d="M1 2h10v1H1zM1 9h10v1H1zM1 3h1v6H1zM10 3h1v6h-1zM2 3h1v1H2zM9 3h1v1H9zM3 4h1v1H3zM8 4h1v1H8zM4 5h1v1H4zM7 5h1v1H7zM5 6h2v1H5z" />
  </svg>
)

// a little picture (mountains + sun): used as the placeholder image for projects that are coming
export const PictureIcon = () => (
  <svg viewBox="0 0 12 12" aria-hidden="true" className="icon" shapeRendering="crispEdges">
    <path d="M1 2h10v1H1zM1 9h10v1H1zM1 3h1v6H1zM10 3h1v6h-1zM7 4h2v2H7zM4 5h1v1H4zM3 6h3v1H3zM2 7h5v1H2zM6 7h1v1H6zM7 6h2v1H7zM2 8h8v1H2z" />
  </svg>
)

export const TrophyIcon = () => (
  <svg viewBox="0 0 12 12" aria-hidden="true" className="icon" shapeRendering="crispEdges">
    <path d="M3 1h6v4H3zM1 2h2v1H1zM9 2h2v1H9zM1 3h1v1H1zM10 3h1v1h-1zM2 4h1v1H2zM9 4h1v1H9zM4 5h4v1H4zM5 6h2v2H5zM3 8h6v1H3zM3 9h6v2H3z" />
  </svg>
)

export const CloseIcon = () => (
  <svg viewBox="0 0 12 12" aria-hidden="true" className="icon" shapeRendering="crispEdges">
    <path d="M2 2h1v1h-1zM9 2h1v1h-1zM3 2h1v1h-1zM8 2h1v1h-1zM3 3h1v1h-1zM8 3h1v1h-1zM4 3h1v1h-1zM7 3h1v1h-1zM4 4h1v1h-1zM7 4h1v1h-1zM5 4h1v1h-1zM6 4h1v1h-1zM5 5h1v1h-1zM6 5h1v1h-1zM6 5h1v1h-1zM5 5h1v1h-1zM6 6h1v1h-1zM5 6h1v1h-1zM7 6h1v1h-1zM4 6h1v1h-1zM7 7h1v1h-1zM4 7h1v1h-1zM8 7h1v1h-1zM3 7h1v1h-1zM8 8h1v1h-1zM3 8h1v1h-1zM9 8h1v1h-1zM2 8h1v1h-1zM9 9h1v1h-1zM2 9h1v1h-1z" />
  </svg>
)

export const ChevronIcon = () => (
  <svg viewBox="0 0 12 12" aria-hidden="true" className="icon" shapeRendering="crispEdges">
    <path d="M2 4h2v1H2zM8 4h2v1H8zM3 5h2v1H3zM7 5h2v1H7zM4 6h4v1H4zM5 7h2v1H5z" />
  </svg>
)

export const ArrowIcon = () => (
  <svg viewBox="0 0 12 12" aria-hidden="true" className="icon" shapeRendering="crispEdges">
    <path d="M2 5h6v2H2zM7 3h1v6H7zM8 4h1v4H8zM9 5h1v2H9z" />
  </svg>
)
