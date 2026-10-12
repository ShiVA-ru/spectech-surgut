# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Two confirmed segments: private customers and companies in Surgut and the Khanty-Mansi Autonomous Okrug (ХМАО) who need construction/special equipment for a task. They arrive looking for a machine, check what is available, and contact the owner.

## Product Purpose
Business-card website ("визитка") for an individual entrepreneur renting out special equipment (спецтехника) in Surgut and ХМАО. Success: a visitor sees what equipment is offered and knows how to reach the owner. There is no online ordering, form, or calculator.

## Positioning
Not yet articulated beyond local service in Surgut and ХМАО ("Надежная техника для ваших задач"). Differentiators versus competitors are undecided; do not invent any.

## Operating Context
Site is deployed manually via Docker (node server, port 3000). Currently in maintenance mode (`isMaintenance = true` in `+layout.svelte`), showing only contacts and requisites until launch.

## Capabilities and Constraints
- Catalog of equipment: mini tracked excavator (bucket 0.5 m³), front loader (3 t), crane manipulator (5 t), tow truck (5 t). Detail pages at `/equipment/[id]`.
- Catalog is currently a static JS array; a database (Postgres/Drizzle) and an admin/management interface are planned but not built.
- Prices are not published.
- Language: Russian.
- Stack: SvelteKit, adapter-node, TailwindCSS v4, bun.

## Brand Commitments
Seller identity: ИП Мастеров Денис Иванович, ИНН 8602026226, ОГРНИП 313860224700058. Contacts are centralized in `src/lib/contacts.js` (phone, email info@spectech-surgut.ru, address г. Сургут, ул. Иосифа Каролинского, д. 9).

## Evidence on Hand
Equipment photos in `static/images/catalog/` and a hero excavator photo. No testimonials, case studies, client lists, or pricing exist; do not fabricate them.

## Product Principles
- Truthful and minimal: show only real equipment, contacts, and requisites.
- Contact is one tap away: the phone number is the primary conversion path.
- Serve both private and corporate customers without splitting the site.
- Content should be maintainable once the catalog moves to a database.
