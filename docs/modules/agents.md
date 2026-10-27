# 🧑‍💼 Agents

## Data model

| Field | Type |
|-------|------|
| id | string |
| name | string |
| email | string |
| agency | string |
| commissionPct | number |
| active | boolean |
| createdAt | ISO date |

## REST API

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | /api/agents | public (supports `q`, `page`, `limit`) |
| GET | /api/agents/:id | public |
| POST | /api/agents | admin, agent |
| PUT | /api/agents/:id | admin, agent |
| DELETE | /api/agents/:id | admin |

## Screens

- Customer: `/agents` and `/agents/:id`
- Admin: `/admin/agents` (table + form, card-table on mobile)
- Agent: `/agent/agents` (shareable cards)
