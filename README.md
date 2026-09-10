# NIRAKSHAN AI — Predict. Monitor. Act.

AI-powered predictive analytics and early-warning platform for infrastructure project monitoring.


WEBSITE DEMO LINK: **https://nirakshan-ai.onrender.com/**

---

## 1. Project Information

**Project Title:** NIRAKSHAN AI

**PS ID:** SIH26103

**PS Title:** Use case on web-based integrated project-monitoring platform

**Category:** Software

**Theme:** Smart Automation

**Organization:** Ministry of Statistics and Programme Implementation (MoSPI)

---

## 2. Problem Statement

Large infrastructure projects need continuous monitoring of cost, expenditure, timelines, milestones and physical progress.

The existing project-monitoring ecosystem contains valuable historical and current project information, but there is an opportunity to move beyond monitoring past and present status toward predicting future risks.

The challenge is to identify projects that may experience:

- Cost overruns
- Time overruns
- Implementation risks
- Delays and emerging bottlenecks

early enough so that appropriate corrective action can be considered.

NIRAKSHAN AI addresses this challenge through predictive analytics, project risk scoring, early-warning alerts and explainable project intelligence.

---

## 3. Proposed Solution

NIRAKSHAN AI is a web-based project intelligence and early-warning platform designed around project-monitoring data.

The platform analyzes project-level information such as cost, expenditure, timelines and progress to provide:

- Project risk scoring
- Cost overrun risk assessment
- Time overrun risk assessment
- Implementation risk identification
- Early-warning alerts
- Project benchmarking
- Risk-driver analysis
- Project health monitoring
- AI-assisted project intelligence

The objective is to help monitoring teams identify potentially high-risk projects earlier and support data-driven decision-making.

The platform is designed as a predictive and prescriptive layer that can complement existing project-monitoring systems.

---

## 4. Key Features

### Project Dashboard

- Overall project portfolio view
- Total project count
- High, medium and low-risk projects
- Cost-risk indicators
- Delay-risk indicators
- Project health overview

### Project Risk Scoring

- Overall project risk score
- Risk classification
- Cost risk
- Time/delay risk
- Implementation risk

### Early Warning System

- Identification of potentially high-risk projects
- Risk alerts
- Risk severity indicators
- Early identification of possible cost and schedule problems

### Explainable Risk Analysis

For a selected project, NIRAKSHAN AI provides:

- Why the project is considered risky
- Key risk drivers
- Cost and progress indicators
- Recommended actions

### Analytics

- Cost analysis
- Progress analysis
- Delay analysis
- Project benchmarking
- Risk distribution
- Project-level trends

### NIRAKSHAN AI Assistant

An AI-assisted interface for project intelligence queries such as:

- Which projects are at high risk?
- Why is this project risky?
- Which projects have cost risks?
- Which projects are delayed?
- What action should be considered for a risky project?

---

## 5. Technology Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS

### Data Visualization

- Chart-based project analytics
- Interactive dashboard components

### AI / Machine Learning — Planned Architecture

- Python
- scikit-learn
- XGBoost
- SHAP
- Statistical forecasting methods

### Backend — Planned Architecture

- Python
- FastAPI

### Database — Planned Architecture

- PostgreSQL

### Deployment

- GitHub
- Render

The current prototype uses sample/demo data for demonstrating the platform workflow. Future versions can connect the predictive layer with authorized PAIMANA/OCMS datasets and backend services.

Environment variables should be used for future external service endpoints and credentials. No API keys, passwords or secrets are included in this repository.

---

## 6. Architecture

The proposed architecture separates the user interface, data layer, predictive analytics and AI assistant.

```
                         NIRAKSHAN AI
                              |
                              v
                       Web Dashboard
                              |
          +-------------------+-------------------+
          |                   |                   |
          v                   v                   v
   Project Monitoring    Risk Analytics     AI Assistant
          |                   |                   |
          +-------------------+-------------------+
                              |
                              v
                     Backend / API Layer
                              |
                              v
                    Project Data Repository
                              |
          +-------------------+-------------------+
          |                   |                   |
          v                   v                   v
    Historical Data     Current Data       Project Variables
          |                   |                   |
          +-------------------+-------------------+
                              |
                              v
                  Predictive Analytics Layer
                              |
          +-------------------+-------------------+
          |                   |                   |
          v                   v                   v
     Cost Risk           Time Risk       Implementation Risk
                              |
                              v
                       Risk Score + Alerts
                              |
                              v
                    Recommended Actions
```


---


## 7. Repository Structure

The repository contains the project source code, documentation, presentation material and demo resources.

---

## 8. Documentation

- `submission/PRESENTATION.md` — Project presentation
- `submission/DEMO.md` — Demo guide
- `docs/architecture.md` — System architecture

---

## 9. Screenshots

Screenshots of the NIRAKSHAN AI prototype are included in the `submission` folder.

---

## 10. Current Prototype

The current version demonstrates the project monitoring dashboard, project details, risk analysis, analytics and NIRAKSHAN AI Assistant interface.

The prototype uses sample/demo data.

---

## 11. Deployment

**Live Demo:** https://nirakshan-ai.onrender.com/

---

## 12. Project Status

**Working Prototype**

Planned extensions include predictive ML models, backend services and authorized PAIMANA/OCMS data integration.


                                                                                            




