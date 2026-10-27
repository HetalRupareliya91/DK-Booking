# 🔔 Notifications

## Data model

| Field | Type |
|-------|------|
| id | string |
| title | string |
| channel | string |
| audience | string |
| date | date |
| createdAt | ISO date |

## REST API

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | /api/notifications | public (supports `q`, `page`, `limit`) |
| GET | /api/notifications/:id | public |
| POST | /api/notifications | admin, agent |
| PUT | /api/notifications/:id | admin, agent |
| DELETE | /api/notifications/:id | admin |

## Screens

- Customer: `/notifications` and `/notifications/:id`
- Admin: `/admin/notifications` (table + form, card-table on mobile)
- Agent: `/agent/notifications` (shareable cards)
