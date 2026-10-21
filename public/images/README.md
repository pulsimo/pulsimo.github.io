# Dashboard Images for Pulsimo Landing Page

The home page slider (`components/sections/DashboardShowcase.tsx`) shows the
screenshots in `day/` in light mode and the ones in `night/` in dark mode.

To add or replace a screenshot, put it in `day/` and/or `night/` and list it in
`dashboardSlides` in that component with its title and description. A slide with
only one of the two images is shown only in that theme.

Screenshots are currently 1914x1033 PNGs (about 200-470 KB each).
