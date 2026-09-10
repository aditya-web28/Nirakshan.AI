# NIRAKSHAN AI — Presentation

## Project Information

- **Project Name:** NIRAKSHAN AI
- **Tagline:** Predict. Monitor. Act.
- **Problem Statement ID:** SIH26103
- **Problem Statement:** Use case on web-based integrated project-monitoring platform
- **Organization:** Ministry of Statistics and Programme Implementation (MoSPI)
- **Category:** Software
- **Theme:** Smart Automation

## Problem

Infrastructure projects can face:

- Cost overruns
- Time delays
- Implementation risks
- Milestone slippages
- Financial and physical progress gaps
- Difficulty in identifying emerging risks early

Traditional monitoring mainly focuses on current and past project status.

NIRAKSHAN AI aims to support a shift toward predictive and proactive project monitoring.

## Proposed Solution

NIRAKSHAN AI is a web-based project intelligence and early-warning platform designed to help monitoring teams identify projects that may require attention.

The platform provides:

- Project risk scoring
- Cost overrun risk analysis
- Time overrun risk analysis
- Implementation risk monitoring
- Early warning alerts
- Risk-driver analysis
- Project benchmarking
- Analytics and visualizations
- AI-assisted project intelligence

## Key Features

### 1. Project Dashboard

Provides an overall view of monitored projects, including:

- Project cost
- Revised cost
- Expenditure
- Physical progress
- Expected progress
- Risk score
- Risk level

### 2. Project Risk Scoring

Projects are assigned a risk score based on relevant project indicators.

Risk categories include:

- Cost Risk
- Time Risk
- Implementation Risk

### 3. Early Warning System

Highlights projects that may require monitoring or intervention.

The system is intended to help identify warning signals before problems become severe.

### 4. Explainable Risk Analysis

Instead of showing only a risk score, the platform explains:

- Why a project is considered risky
- Which factors are contributing to the risk
- What action may be considered

### 5. Analytics

Provides visual analysis of:

- Project performance
- Cost trends
- Progress
- Risk distribution
- Project-level indicators

### 6. NIRAKSHAN AI Assistant

An AI-assisted interface for project intelligence queries such as:

- Which projects are at high risk?
- Why is this project risky?
- Which projects are showing delays?
- What are the major risk drivers?

## Technology Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS

### Data Visualization

- Interactive dashboard visualizations
- Project analytics charts

### Planned Predictive Analytics

- Python
- Scikit-learn
- XGBoost
- Statistical forecasting
- SHAP-based explainability

### Planned Backend

- FastAPI
- PostgreSQL

## Architecture

The proposed architecture connects project monitoring data with predictive analytics and the dashboard layer.

The system is designed to use historical and current project information to generate:

- Cost risk predictions
- Time risk predictions
- Implementation risk indicators
- Project risk scores
- Early warnings
- Recommended actions

See:

`docs/architecture.md`

for the detailed architecture description.

## Data Context

The problem statement references PAIMANA and historical OCMS project-monitoring data.

The current prototype uses sample/demo data for interface and workflow demonstration.

Future versions can connect to authorized project-monitoring data sources through appropriate APIs or data pipelines.

## Expected Impact

NIRAKSHAN AI is intended to support monitoring teams by helping them:

1. Identify high-risk projects earlier.
2. Understand the drivers behind project risk.
3. Prioritize projects requiring attention.
4. Monitor cost and schedule risks.
5. Support proactive decision-making.
6. Reduce dependence on purely retrospective monitoring.

## Current Prototype Status

The current version demonstrates the frontend dashboard, project monitoring workflow, risk visualization, analytics and AI-assistant interface.

Predictive ML models, backend services and authorized PAIMANA/OCMS data integration are planned components of the extended system.

No live government data or confidential credentials are included in this repository.
