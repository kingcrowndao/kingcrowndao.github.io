import { h } from '@webtaku/h';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { createIndexPage } from './pages/index';

type Page = {
  filename: string;
  title: string;
  content: string;
};

const pages: Page[] = [
  {
    filename: 'index.html',
    title: 'King Crown DAO',
    content: createIndexPage()
  }
];

function renderPage(title: string, body: string) {
  return '<!DOCTYPE html>' + h(
    'html.dark', { lang: 'en' },
    h(
      'head',
      '<meta charset="UTF-8">',
      h('meta', {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0'
      }),
      h('title', title),
      h('script', { src: 'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4' }),
      h('link', {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.1/cdn/themes/dark.css'
      }),
      h('link', { rel: 'stylesheet', href: 'styles.css' }),
      h('script', {
        type: 'module',
        src: 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.1/cdn/shoelace-autoloader.js'
      }),
    ),

    // body content
    body,
  );
}

for (const page of pages) {
  const html = renderPage(page.title, page.content);
  writeFileSync(join(__dirname, `../public/${page.filename}`), html);
  console.log(`✅ ${page.filename} generated.`);
}