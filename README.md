# NIRAKSHAN AI

NIRAKSHAN AI is an infrastructure project monitoring interface for identifying delivery risk, explaining key signals, raising early warnings, and guiding follow-up action.

## Features

- Dashboard with portfolio health, risk summary and early-warning alerts
- Searchable, filterable project portfolio with 12 realistic fictional projects
- Detailed project risk view with cost, timeline, progress and milestone indicators
- Risk and warning workspace with filters and project actions
- Data-driven analytics charts
- Local data-grounded assistant with working suggested questions
- Configurable prototype risk layers kept separate from presentation components

## Stack

React, TypeScript, Vite, Recharts, and CSS.

## Run locally

```bash
npm install
npm run dev
```

Build a production bundle with `npm run build`.

## Project structure

```
src/
  data/projects.ts    # project model and fictional local dataset
  main.tsx            # application views and reusable UI components
  styles.css          # responsive product styling
```

## Future backend and ML integration

The present data and risk logic are local prototypes only. The application is structured so the project dataset can be replaced with a FastAPI/PostgreSQL service and the risk layer can later consume approved cost-overrun, delay, implementation-risk, anomaly-detection and explainability services. Environment variables should be used for any future external service endpoints; no keys or secrets are included.
