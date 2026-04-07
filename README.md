# Estate Sale Tales

Website for "Estate Sale Tales" by Susan Callicott — a book of true, funny stories from 20+ years of estate liquidation at Lucy & Ethel Estate Sales in Dallas/Fort Worth.

## Tech Stack

- **Framework:** Astro 6 (static HTML, zero client-side JavaScript)
- **Content:** Markdown with frontmatter via Astro content collections
- **Styling:** Global CSS with custom properties, Google Fonts (Lora + Inter)
- **SEO:** Auto-generated sitemap (@astrojs/sitemap), JSON-LD structured data
- **Design:** Warm light theme with serif typography — consumer book site aesthetic

## Development

```bash
npm install
npm run dev      # Start dev server
npm run build    # Build static site (output: dist/)
npm run preview  # Preview production build
```

## Site Architecture

```
estatesaletales.com/
├── /                → Homepage (featured stories, reviews, book CTA)
├── /book            → Book sales page (Amazon link, reviews, schema)
├── /about           → Susan Callicott bio, Lucy & Ethel Estate Sales
├── /stories         → Story index grouped by category
│   └── /stories/[slug]  → Individual story pages (9 published)
├── /guides          → Educational content hub
│   └── /guides/[slug]   → Individual guide pages (5 published)
├── /newsletter      → Email signup
├── /press           → Press kit for media
└── /404             → Friendly error page
```

## Content

### Stories (src/content/stories/)

9 stories across 5 categories: Weird Finds, Animal Encounters, Awkward Moments, Valuable Discoveries, Behind the Scenes.

Each story has frontmatter: title, excerpt, category, readTime, date, optional contributor info, and inBook flag.

### Guides (src/content/guides/)

5 educational guides that serve as SEO anchor content, each weaving in anecdotes from the book.

### Adding New Content

**New story:**
```bash
# Create src/content/stories/your-slug.md with frontmatter:
---
title: "Your Story Title"
excerpt: "One-two sentence hook."
category: "Weird Finds"
readTime: "4 min read"
date: "April 2026"
inBook: true
---

Your story content here...
```

**New guide:**
```bash
# Create src/content/guides/your-slug.md with frontmatter:
---
title: "Your Guide Title"
excerpt: "One-two sentence description."
readTime: "8 min read"
date: "April 2026"
---

Your guide content here...
```

## SEO Strategy

### Product & Audience

**Product:** Book of true, funny stories from 20+ years in estate liquidation (4.8 stars on Amazon)

**Target audience:** People fascinated by the weird, funny, and human side of estate sales — the same people who watch Antiques Roadshow, Storage Wars, and American Pickers.

**Funnel:** Google search → entertaining story/guide → "want more?" → book purchase on Amazon

### Keyword Research (April 2026)

2,542 keywords researched across 6 batches with DataForSEO enrichment. Full reports in `../seo-tools/scripts/keyword-data/seo-report-estatesaletales-2026-04.md`.

### Content Strategy: Three Layers

**Layer 1 — Educational Anchor Content (high volume, brings curious audience)**

| Content | Target Keywords | Monthly Volume |
|---------|----------------|---------------|
| What Is an Estate Sale? | what is an estate sale, how does an estate sale work, what does an estate sale mean | 15,300 |
| How Estate Sales Actually Work | how estate sales work, how to have an estate sale, how to set up an estate sale | 1,800 |
| Estate Sale vs Garage Sale | estate sale vs garage sale, moving sale vs garage sale | 1,100 |
| How Much Do Companies Charge? | how much does estate sale company charge | 590 |
| How to Price Estate Sale Items | how to price estate sale items, how to price yard sale items | 540 |

**Layer 2 — Story Content (entertainment, showcases the book)**

| Story | Target Keywords | Audience |
|-------|----------------|----------|
| Weirdest Things Found in Houses | weird things found in houses, weird things found in old houses | Curiosity seekers |
| Does Estate Sale Mean Someone Died? | does estate sale mean someone died, why do estate sales happen | Question askers |
| Most Valuable Things People Throw Away | what sells at estate sales, what sells best | Treasure hunters |
| What Happens to Unsold Items | what happens to unsold estate sale items | Behind-the-scenes curious |
| Estate Sale Horror Stories | (long-tail, viral potential) | Entertainment seekers |
| Strangest Collections | weird things found in houses | Curiosity seekers |
| Snake, Goose, Naked Man stories | (long-tail) | Book sample content |

**Layer 3 — Crossover Content (future, bridges entertainment audiences)**

Target audience overlap with treasure hunting TV shows (260/mo), garage sale mysteries book readers, antique hunting enthusiasts.

### SEO Implementation

**Structured Data (JSON-LD):**
- Homepage: Book + WebSite schemas
- /book: Book schema with aggregateRating (4.8/5, 8 reviews), author, Amazon offer URL
- /about: Person schema for Susan Callicott
- Stories: Article schema with author, datePublished
- Guides: Article schema with author, datePublished
- All pages: BreadcrumbList (via Astro)

**On-Page SEO:**
- Every page has unique title tag, meta description, canonical URL
- OG and Twitter Card tags on all pages
- Auto-generated sitemap via @astrojs/sitemap
- Static HTML (Astro) — zero JavaScript, instant crawlability
- Semantic heading hierarchy (one H1 per page)
- Story/guide content uses `prose` class with proper heading structure

**Internal Linking:**
- Every story ends with book CTA linking to /book
- Every guide ends with book plug linking to /book
- Related stories (same category) shown at bottom of each story
- Related guides shown at bottom of each guide
- Homepage features latest stories
- Navigation links to /stories, /guides, /book on every page

### Content Calendar

| Timeframe | Content | Goal |
|-----------|---------|------|
| **Published** | 9 stories, 5 guides, 8 pages | Foundation |
| **Month 2** | 5 new stories + "How to Find Estate Sales" guide | Expand library |
| **Month 3** | 5 new stories + "Are Estate Sales Worth It?" guide | More long-tail coverage |
| **Month 4** | 5 new stories + crossover entertainment content | Audience expansion |
| **Ongoing** | 2-3 stories + 1 guide per month | Sustained growth |

### Traffic Projections

| Content Cluster | Est. Monthly Traffic (6 months) |
|----------------|--------------------------------|
| "What is an estate sale" + related guides | 500-1,000 |
| Educational how-to articles | 300-500 |
| Weird finds / funny stories | 100-300 |
| Entertainment crossover | 100-200 |
| **Total estimated** | **1,000-2,000** |

At 2% conversion to book purchases: 20-40 book sales/month from organic search.

### Social Media Strategy

Estate sale stories are inherently shareable. Each published story should be:
- Shared on Facebook (existing Estate Sale Tales page)
- Posted as short-form content on TikTok/Instagram Reels
- Cross-posted to Reddit (r/EstateSales, r/ThriftStoreHauls)

The "weird things found in houses" content category is viral-ready — TikTok has millions of views on estate sale find videos.

## Book Info

- **Title:** Estate Sale Tales
- **Author:** Susan Callicott
- **Business:** Lucy & Ethel Estate Sales, Dallas/Fort Worth, TX
- **Amazon:** https://www.amazon.com/Estate-Sale-Tales-Susan-Callicott-ebook/dp/B0D2DPC1Y1/
- **Rating:** 4.8 out of 5 stars
- **Formats:** Paperback, Kindle
