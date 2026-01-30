# 🦅 Anvesh (अन्वेष)

> **An automated intelligence engine that hunts for high-value businesses with zero online presence.**

![Python](https://img.shields.io/badge/Python-3.12+-blue.svg)
![FastAPI](https://img.shields.io/badge/FastAPI-0.128+-green.svg)
![Playwright](https://img.shields.io/badge/Playwright-Automation-orange.svg)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue.svg)

**Anvesh** is a monorepo containing:

*   **[Automation Server](./automation-server)**: The core Python/FastAPI backend and scraping engine.
*   **[Web Portal](./web-portal)**: The frontend dashboard and documentation site (Coming Soon).

## 🚀 Quick Start

### Docker (Recommended)
Run the full stack (backend + database) from the root:
```bash
docker compose up --build
```
API available at [http://localhost:8000](http://localhost:8000)

### Local Development (Backend)
Navigate to the server directory:
```bash
cd automation-server
uv sync
cp .env.example .env.local
uv run uvicorn app.main:app --reload
```

## 📚 Documentation

See [Automation Server Docs](./automation-server/docs) for API details.

## 🇮🇳 Made in Bharat

Anvesh is built to empower freelancers and small agencies worldwide by providing professional-grade tools at zero cost.

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.
