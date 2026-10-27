# Architecture

```
frontend (React + Vite)
 ├─ pages/            customer pages        -> /movies, /events, /seats ...
 ├─ pages/admin/      admin panel           -> /admin/*
 ├─ pages/agent/      agent panel           -> /agent/*
 ├─ layouts/          User / Admin / Agent shells (desktop sidebar, mobile drawer + tab bar)
 └─ router/registry   auto-routes every page that exports `meta`

backend (Node + Express)
 ├─ routes/           auto-mounted, each exports { path, router }
 ├─ controllers/      request handlers
 ├─ models/           collection wrappers over db/store
 ├─ validators/       field validation per module
 └─ data/*.json       seed data (JSON file store)
```

Roles: **user** books tickets, **agent** books on behalf of customers and earns commission, **admin** manages everything.
Every screen is responsive: desktop layout above 768px, mobile layout (bottom tab bar, card tables, drawer menu) below.
