# Paul Azemoh — Portfolio

A personal portfolio built in the **Floating Images Hero** style (originally from
[21st.dev](https://21st.dev)): cursor-parallax + draggable photos scattered around a
large serif headline with rotating words.

**Stack:** Vite · React · TypeScript · Tailwind CSS · Framer Motion · lucide-react

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Where to edit your content

Everything marked `EDIT ME` in the code is placeholder content.

| What | File |
| --- | --- |
| Headline + rotating words | `src/components/sections/Hero.tsx` |
| Floating hero photos | `IMAGES` array in `src/components/sections/Hero.tsx` |
| Bio + skills | `src/components/sections/About.tsx` |
| Projects (title, image, tags, links) | `src/components/sections/Projects.tsx` |
| Email + social links | `src/components/sections/Contact.tsx` |
| Nav label / links | `src/components/Navbar.tsx` |

### Swapping the photos

The hero and projects use Unsplash placeholders. Drop your own images into
`public/images/` and reference them as `/images/your-file.jpg`.

### Theme / colors

Colors are CSS variables (HSL) in `src/index.css` under `:root` (light) and `.dark`
(dark). The site defaults to dark — remove `class="dark"` on `<html>` in `index.html`
to switch.

### Fonts

The original used **Calendas Plus** (paid). This uses **Instrument Serif** (free,
Google Fonts) for the display headline — mapped to the `font-calendas` class so it
matches the source component. Body text is **Inter**. Swap in `index.html` +
`tailwind.config.js` if you want a different display face.
# portfolio
