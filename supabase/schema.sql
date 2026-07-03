-- Run this once in the Supabase SQL Editor (Dashboard -> SQL Editor -> New query)
-- before running scripts/generate-seed-sql.mjs's output.

create table public.categories (
  id text primary key,
  name text not null,
  icon text not null default '',
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table public.products (
  id integer generated always as identity primary key,
  name text not null,
  category text not null references public.categories(id) on update cascade on delete restrict,
  description text not null default '',
  image text not null default '',
  features text[] not null default '{}',
  specifications jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index products_category_idx on public.products(category);

alter table public.categories enable row level security;
alter table public.products enable row level security;

create policy "categories_public_read" on public.categories for select to anon, authenticated using (true);
create policy "products_public_read" on public.products for select to anon, authenticated using (true);
create policy "categories_authenticated_write" on public.categories for all to authenticated using (true) with check (true);
create policy "products_authenticated_write" on public.products for all to authenticated using (true) with check (true);

insert into storage.buckets (id, name, public, file_size_limit)
values ('product-images', 'product-images', true, 5242880) on conflict (id) do nothing;

create policy "product_images_public_read" on storage.objects for select to anon, authenticated using (bucket_id = 'product-images');
create policy "product_images_authenticated_insert" on storage.objects for insert to authenticated with check (bucket_id = 'product-images');
create policy "product_images_authenticated_update" on storage.objects for update to authenticated using (bucket_id = 'product-images') with check (bucket_id = 'product-images');
create policy "product_images_authenticated_delete" on storage.objects for delete to authenticated using (bucket_id = 'product-images');
