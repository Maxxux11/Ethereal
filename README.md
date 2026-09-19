 # Etheral

Tienda de ropa con estética celestial y moderna, construida con Next.js, Tailwind y Supabase.

## Configurar Supabase

1. Crea un proyecto en [Supabase](https://supabase.com/).
2. Copia `.env.example` como `.env.local` y completa la URL y la publishable key desde **Project Settings > API**.
3. Ejecuta `supabase/schema.sql` completo en el **SQL Editor** de Supabase.
4. Registra una cuenta desde `/admin` y promuévela a admin con este SQL:

```sql
update public.profiles
set role = 'admin'
where id = (select id from auth.users where email = 'admin@etheral.com');
```

## Desarrollo local

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
## Desarrollo local
# or
bun dev
Ejecuta el servidor de desarrollo:

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
Abre [http://localhost:3000](http://localhost:3000). Las rutas principales son `/`, `/registro` y `/admin`.

La aplicación se actualiza automáticamente al editar sus archivos.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
