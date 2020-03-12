sequelize migration:generate --name add-column-invoice  --migrations-path ./app/db/migrations
rename 20200312034737-create-table-invoice.js to 20200312034737-create-table-invoice.ts
npm run build
sequelize db:migrate