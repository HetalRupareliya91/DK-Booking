# 📊 Reports

## Data model

| Field | Type |
|-------|------|
| id | string |
| title | string |
| period | string |
| revenue | number |
| tickets | number |
| createdAt | ISO date |

## REST API

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | /api/reports | public (supports `q`, `page`, `limit`) |
| GET | /api/reports/:id | public |
| POST | /api/reports | admin, agent |
| PUT | /api/reports/:id | admin, agent |
| DELETE | /api/reports/:id | admin |

## Screens

- Customer: `/reports` and `/reports/:id`
- Admin: `/admin/reports` (table + form, card-table on mobile)
- Agent: `/agent/reports` (shareable cards)
