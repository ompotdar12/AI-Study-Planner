# Aura AI Code Guide

This guide explains how the first version of Aura AI is arranged and how React moves between screens.

## The overall flow

The browser starts at `src/main.jsx`. React uses that file to place the `App` component into the page. `src/app/App.jsx` then decides what the user sees:

1. It starts with the splash screen.
2. After a short delay, it switches to onboarding.
3. Completing or skipping onboarding switches to the dashboard navigation shell.

React remembers the current screen with `useState`. Changing that value makes React redraw only the parts that need updating—there is no full-page browser reload.

## Folder guide

| Location | What it contains | Why it exists |
| --- | --- | --- |
| `src/main.jsx` | React startup file. | It mounts the app into `index.html`. |
| `src/app/App.jsx` | Top-level screen controller. | Keeps the main product flow in one small, clear place. |
| `src/features/splash/` | Splash screen component. | A feature folder isolates splash-specific code. |
| `src/features/onboarding/` | The onboarding wizard component. | Keeps form steps and their state together. |
| `src/features/dashboard/shared/` | Sidebar and header shell. | It will be reused when dashboard pages are added. |
| `src/shared/components/` | Small reusable building blocks. | Examples: Aura logo mark and progress bar. |
| `src/styles/globals.css` | Global Tailwind import plus reusable component classes. | Shared styles live here instead of being duplicated. |

## How the onboarding works

`OnboardingFlow.jsx` stores three kinds of information with `useState`:

- `step`: which onboarding screen is active.
- `goal`: whether the learner selected exams or college.
- `chosenSubjects` and `exam`: the buttons the learner selected.

The `next` function adds one to `step`. When it reaches the final step, it calls `onComplete`, a function supplied by `App.jsx`. That is how the child onboarding component tells its parent to show the dashboard.

The design uses ordinary HTML `button`, `label`, `input`, and `select` elements. This gives keyboard and screen-reader support as a starting point. Styles include visible keyboard focus and touch-friendly control sizes.

## Styling approach

Tailwind CSS is imported in `globals.css`. Most visual styles are placed directly next to the relevant JSX using Tailwind utility classes, which makes it easy to see a component’s layout while reading it. A few repeated patterns—such as the primary button and icon button—use small CSS component classes to avoid copy-paste.

The responsive layout uses Tailwind breakpoints:

- On phones, onboarding takes the full viewport and the dashboard menu slides in from the left.
- On larger screens (`lg`), onboarding becomes two full-height columns and the dashboard sidebar stays visible.
- Elements that do not fit small screens, such as the header search bar, are hidden until there is enough room.

This is why no layout is placed inside a fake phone frame or a fixed-size central window.

## Adding the backend later

The frontend currently keeps onboarding choices in the browser only. When the backend is ready, add `src/services/api/client.js` for shared API requests and feature-specific files such as `onboarding.js`. Components should call those services rather than calling `fetch` directly. The API base address should come from `import.meta.env.VITE_API_URL`.

## Files you will probably edit next

- `OnboardingFlow.jsx` to add or change onboarding questions.
- `DashboardShell.jsx` when adding the real dashboard home content.
- `globals.css` when adjusting shared colours, buttons, focus states, or input styling.
- `README.md` after every meaningful project change so the update tables stay accurate.
