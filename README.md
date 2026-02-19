# DOSArchive

A web archive of my father's (Yasser Awad) DOS programming work from the 1990s. 15 programs written in Assembly, C, and C++ — running in your browser via WebAssembly emulation.

**[View the archive](https://projects.deadpackets.pw/DOSArchive/)**

## Tech Stack

- **[Astro](https://astro.build/)** — Static site generator
- **[js-dos v8](https://js-dos.com/)** — DOSBox emulator compiled to WebAssembly
- **GitHub Actions** — Automated build and deployment to GitHub Pages

## Project Structure

```
src/
  data/programs.ts     — Metadata for all 15 programs
  layouts/             — Shared page layout with CRT aesthetic
  components/          — Reusable UI components (cards, emulator, filters)
  pages/               — Gallery, program detail, timeline, terminal, about
  styles/              — Global CSS + CRT effects (scanlines, glow, bezel)
scripts/
  build-bundles.mjs    — Creates .jsdos bundles from programs/
programs/              — Original DOS program files (source of truth)
public/
  images/              — Program screenshots
  bundles/             — Generated .jsdos bundles (gitignored, built in CI)
```

## Development

```bash
npm install
npm run dev          # Build bundles + start dev server
npm run build        # Production build
npm run preview      # Preview production build
```

## Programs Included

| Program | Year | Language | Description |
|---------|------|----------|-------------|
| ARABART Demo | 1991 | Assembly | Arabic graphics library showcase |
| ARABART Editor | 1991 | Assembly | Interactive Arabic text editor |
| ARABART Commercial | 1991 | Assembly | Animated store advertisement |
| Digi-Test | 1993 | C++, Assembly | Digital circuit simulator |
| Text Editor (GUI) | 1993 | C | Interview assignment editor |
| Text Editor (Demo) | 1993 | C | Windows-inspired text editor |
| Formula Solver | 1992 | Assembly | BCD floating point calculator |
| KVC Antivirus | 1993 | C, Assembly | Antivirus for the Koko virus |
| Kemyam Names | 1993 | C, Assembly | Graduation project splash screen |
| Arabic Basmallah | 1991 | Assembly | Islamic phrase demo |
| Port Said CS | 1993 | C, Assembly | PCS boot screen |
| Port Said IT | 1991 | Assembly | Government screensaver |
| The Brave Sun | 1993 | C, Assembly | Award-winning educational software |
| TAHER | 1991 | Assembly | Calligraphic Arabic splash screen |
| WINKEY | 1992 | Assembly | Windowing library demo |

## License

MIT
