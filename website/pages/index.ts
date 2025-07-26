import { h } from '@webtaku/h';
import { readFileSync } from 'fs';

const LOGO_IMAGE = readFileSync('./assets/logo.png').toString('base64');

function createIndexPage() {
  return h(
    'body.bg-gray-950.text-gray-300.sl-theme-dark',
    h(
      'nav.bg-gray-950.shadow-md.border-b.border-gray-800',
      h(
        'div.container.mx-auto.px-4.py-3.flex.justify-between.items-center',
        h(
          'a.flex.items-center.space-x-2',
          { href: 'index.html' },
          h('img.h-8.w-8.mr-4', {
            src: `data:image/png;base64,${LOGO_IMAGE}`,
            alt: 'Logo',
          }),
          h('span.text-xl.text-white', 'King Crown DAO')
        ),
        h(
          'div.hidden.md:flex.space-x-4',
          h('a.text-gray-300.hover:text-white', { href: '#about' }, '소개'),
          h('a.text-gray-300.hover:text-white', { href: '#collection' }, '컬렉션'),
          h('a.text-gray-300.hover:text-white', { href: '#gallery' }, '갤러리'),
          h('a.text-gray-300.hover:text-white', { href: '#community' }, '커뮤니티')
        )
      )
    ),

    // Header
    h('header.relative.h-[75vh].min-h-[25rem].w-full.overflow-hidden.bg-black.border-b.border-gray-800',
      h('div.absolute.top-0.left-0.h-full.w-full.bg-black.opacity-50.z-10'),
      h('video.absolute.top-0.left-0.w-full.h-full.object-cover.z-0',
        {
          playsInline: true,
          autoplay: true,
          muted: true,
          loop: true,
        },
        h('source', { src: '/videos/hero.mp4', type: 'video/mp4' })
      ),
      h('div.container.mx-auto.px-4.h-full.relative.z-20',
        h('div.flex.h-full.text-center.items-center.justify-center',
          h('div.w-full.text-white',
            h('h1.text-5xl.md:text-6xl.font-bold', 'King Crown DAO', {
              style: { fontFamily: 'Trajan Pro' },
            }),
            h('p.text-lg.md:text-xl.leading-relaxed.mt-4', '킹크라운다오는 Kaia 기반 NFT, KCD Kongz 홀더들이 모인 DAO입니다.')
          )
        )
      )
    ),

    // Main
    h('main.text-white.py-12',
      // 소개
      h('main.text-white.py-12', { id: 'about' },
        h('div.container.mx-auto.px-4',
          h('h2.text-4xl.font-bold.text-center.mb-16.text-gray-300', 'King Crown DAO 소개'),

          h('div.grid.grid-cols-1.md:grid-cols-3.gap-8',
            h('div.bg-gray-900.p-6.md:p-8.rounded-lg.text-center.shadow-lg',
              h('div.text-6xl.mb-4', '🏛️', { style: { fontFamily: 'Tossface' } }),
              h('h3.text-xl.font-bold.text-gray-300.mb-4', '분산형 거버넌스'),
              h('p.text-base.text-gray-300.leading-relaxed',
                '저희 DAO는 KCD Kongz 보유자가 커뮤니티에 영향을 미치는 중요한 결정에 대해 투표권을 갖는 민주적 원칙에 따라 운영됩니다.'
              )
            ),

            h('div.bg-gray-900.p-6.md:p-8.rounded-lg.text-center.shadow-lg',
              h('div.text-6xl.mb-4', '⚡', { style: { fontFamily: 'Tossface' } }),
              h('h3.text-xl.font-bold.text-gray-300.mb-4', '카이아 블록체인'),
              h('p.text-base.text-gray-300.leading-relaxed',
                '빠르고 효율적인 Kaia 블록체인을 기반으로 구축되어 모든 DAO 작업에 낮은 수수료와 빠른 거래 시간을 제공합니다.'
              )
            ),

            h('div.bg-gray-900.p-6.md:p-8.rounded-lg.text-center.shadow-lg',
              h('div.text-6xl.mb-4', '🎨', { style: { fontFamily: 'Tossface' } }),
              h('h3.text-xl.font-bold.text-gray-300.mb-4', 'NFT 커뮤니티'),
              h('p.text-base.text-gray-300.leading-relaxed',
                'KCD Kongz NFT 보유자는 우리 커뮤니티의 핵심을 이루며, 독점적인 혜택과 거버넌스 참여 권한을 가집니다.'
              )
            )
          )
        ),
      ),

      // 컬렉션
      h('main.text-white.py-12', { id: 'collection' },
        h('div.container.mx-auto.px-4',

          h('h2.text-4xl.font-bold.text-center.mb-4.text-gray-300', 'KCD Kongz 컬렉션'),

          h('p.text-center.text-lg.text-gray-300.mb-16', 'King Crown DAO에 멤버십을 부여하는 Kaia 블록체인의 독점 NFT 컬렉션'),

          h('div.flex.flex-col.md:flex-row.justify-center.items-center.gap-8.mb-16',
            h('div.text-center',
              h('p.text-3xl.font-bold.text-gray-300', '3,000'),
              h('p.text-gray-400', '총 공급량')
            ),
            h('div.text-center',
              h('p.text-3xl.font-bold.text-gray-300', '100%'),
              h('p.text-gray-400', '민팅됨')
            ),
            h('div.text-center',
              h('p#unique-holders.text-3xl.font-bold.text-gray-300', h('sl-spinner')),
              h('p.text-gray-400', '유니크 홀더')
            )
          ),

          h('div.grid.grid-cols-1.md:grid-cols-3.gap-8',

            h('div.bg-gray-900.p-6.rounded-lg.text-center.shadow-lg',
              h('h3.text-lg.font-bold.text-gray-300.mb-2', '거버넌스 권리'),
              h('p.text-base.text-gray-300', '제안에 투표하고 DAO의 미래를 형성하세요')
            ),

            h('div.bg-gray-900.p-6.rounded-lg.text-center.shadow-lg',
              h('h3.text-lg.font-bold.text-gray-300.mb-2', '독점 액세스'),
              h('p.text-base.text-gray-300', 'Mate 앱 채널 및 커뮤니티 이벤트에 대한 액세스')
            ),

            h('div.bg-gray-900.p-6.rounded-lg.text-center.shadow-lg',
              h('h3.text-lg.font-bold.text-gray-300.mb-2', '커뮤니티 기여'),
              h('p.text-base.text-gray-300', '활발한 기여와 참여에 대해 보상을 받으세요')
            )
          )
        ),
      ),

      // 갤러리
      h('main.text-white.py-12', { id: 'gallery' },
        h('div.container.mx-auto.px-4',

          h('h2.text-4xl.font-bold.text-center.mb-16.text-gray-300', 'NFT 갤러리'),

          h('div.grid.grid-cols-2.md:grid-cols-4.gap-4.mt-2',
            h('div.bg-gray-800.p-2.rounded',
              h('img.rounded.mb-2', {
                src: 'https://pub-b5f5f68564ba4ce693328fe84e1a6c57.r2.dev/kingcrowndao-kongz/146b3e2f-d5ff-46f5-a099-d110e03a275c.png',
                alt: 'NFT #0'
              }),
              h('p.text-center.text-sm.text-gray-300', 'KCD Kongz #0')
            ),
            h('div.bg-gray-800.p-2.rounded',
              h('img.rounded.mb-2', {
                src: 'https://pub-b5f5f68564ba4ce693328fe84e1a6c57.r2.dev/kingcrowndao-kongz/e4db5006-7d44-49a3-9096-9f4f53cc7c5f.png',
                alt: 'NFT #1'
              }),
              h('p.text-center.text-sm.text-gray-300', 'KCD Kongz #1')
            ),
            h('div.bg-gray-800.p-2.rounded',
              h('img.rounded.mb-2', {
                src: 'https://pub-b5f5f68564ba4ce693328fe84e1a6c57.r2.dev/kingcrowndao-kongz/7b45850d-d448-44b5-b8ec-569f4d8ad213.png',
                alt: 'NFT #2'
              }),
              h('p.text-center.text-sm.text-gray-300', 'KCD Kongz #2')
            ),
            h('div.bg-gray-800.p-2.rounded',
              h('img.rounded.mb-2', {
                src: 'https://pub-b5f5f68564ba4ce693328fe84e1a6c57.r2.dev/kingcrowndao-kongz/336eecdb-6c6d-44e6-864f-428240661100.png',
                alt: 'NFT #3'
              }),
              h('p.text-center.text-sm.text-gray-300', 'KCD Kongz #3')
            )
          ),

          h('div.text-center.mt-4',
            h('a.bg-gray-700.text-white.px-4.py-2.rounded.hover:bg-gray-600', '더보기', {
              href: 'https://opensea.io/collection/kcd-kongz',
              target: '_blank',
            })
          )
        ),
      ),

      // 커뮤니티
      h('main.text-white.py-12', { id: 'community' },
        h('div.container.mx-auto.px-4',
          h('h2.text-4xl.font-bold.text-center.mb-4.text-gray-300', '커뮤니티'),
          h('p.text-center.text-lg.text-gray-300.mb-8', 'King Crown DAO는 멤버 간 소통, 협업, 이벤트 등 다양한 커뮤니티 활동을 지원합니다.'),
          h('div.flex.justify-center.space-x-4',
            h('a.bg-yellow-500.text-black.px-6.py-3.rounded.hover:bg-yellow-400', {
              href: 'https://matedevdao.github.io/mate-app/',
              target: '_blank',
              rel: 'noopener noreferrer'
            }, 'Mate 앱 채널 참여'),
            h('a.bg-sky-500.text-white.px-6.py-3.rounded.hover:bg-sky-400', {
              href: 'https://x.com/kingcrowndao',
              target: '_blank',
              rel: 'noopener noreferrer'
            }, '𝕏 팔로우')
          )
        )
      ),
    ),
    h(
      'footer.bg-gray-950.border-t.border-gray-800.mt-16',
      h(
        'div.container.mx-auto.px-4.py-6.text-center.text-gray-500.text-sm.space-y-2',
        h(
          'div',
          `${new Date().getFullYear()} King Crown DAO. Open Source under the MIT License.`
        ),
      )
    ),

    h('script', `
      fetch('https://api.matedevdao.workers.dev/nft-holder-count?address=0xF967431fb8F5B4767567854dE5448D2EdC21a482')
        .then(response => response.json())
        .then(data => {
          document.getElementById('unique-holders').textContent = data.holderCount;
        });
    `),
  );
}

export { createIndexPage };
