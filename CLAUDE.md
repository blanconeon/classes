# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — production build
- `npm run preview` — preview the production build locally
- `npm run lint` — run Oxlint (config in `.oxlintrc.json`)

There is no test suite configured in this repository.

## Architecture

This is a small React 19 + Vite learning project (not a production app). It is a single, deliberately annotated demo of **prop drilling**, structured as a three-level component chain:

- `src/App.jsx` — top level. Owns all state (`message`) and the state-updating method (`changeMessage`). Passes both down as props.
- `src/Parent.jsx` — middle level. Pure pass-through: does not use `message` or `onButtonClick` itself, just forwards them to `Child` unchanged. This is the crux of the prop-drilling illustration.
- `src/Child.jsx` — bottom level. Actually consumes the props: renders `message` and wires `onButtonClick` to a button's `onClick`.

Data/callback flow is strictly one-way down (`App` → `Parent` → `Child`) via props, and state changes flow back up only through the callback prop (`Child`'s button calls `App.changeMessage`, which updates `App`'s state and re-renders the whole chain).

Each component file contains a trailing block comment explaining its role in the pattern — when editing these files, keep that teaching commentary in sync with the code, since the comments are the point of the example.
