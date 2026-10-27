# 🎭 Plays

## Data model

| Field | Type |
|-------|------|
| id | string |
| title | string |
| language | string |
| venue | string |
| date | date |
| price | number |
| createdAt | ISO date |

## REST API

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | /api/plays | public (supports `q`, `page`, `limit`) |
| GET | /api/plays/:id | public |
| POST | /api/plays | admin, agent |
| PUT | /api/plays/:id | admin, agent |
| DELETE | /api/plays/:id | admin |

## Screens

- Customer: `/plays` and `/plays/:id`
- Admin: `/admin/plays` (table + form, card-table on mobile)
- Agent: `/agent/plays` (shareable cards)
