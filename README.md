# Aura AI Study Planner

The responsive frontend foundation for Aura AI, an AI-powered study planner. This first phase includes the splash screen, onboarding flow, and dashboard navigation shell only; it intentionally does not include a backend or invented student data.

## Run locally

1. Install Node.js 20 or later.
2. Run `npm install`.
3. Run `npm run dev` and open the address shown in the terminal.

To create a production build, run `npm run build`.

## Environment variables

No environment variables are used in this phase. When API integration begins, create a `.env` file containing `VITE_API_URL=https://your-api-url`.

## Project updates

| Date | Change | Status |
| --- | --- | --- |
| 2026-08-06 | Created Vite + React base project and added Tailwind CSS and Lucide icons. | Complete |
| 2026-08-06 | Added responsive splash screen, onboarding flow, and dashboard navigation shell. | Complete |
| Future | Add API service layer and real dashboard content. | Planned |

## Planned areas

| Area | Current state | Next step |
| --- | --- | --- |
| Splash | Complete | Add final logo artwork when supplied. |
| Onboarding | Complete frontend flow | Connect form submission and plan generation API. |
| Dashboard | Navigation shell only | Add API-backed loading, empty, and error states. |
| Artwork | Placeholder iconography | Replace with graphics from the design team. |

See [CODE_GUIDE.md](./CODE_GUIDE.md) for a beginner-friendly tour of the code.
