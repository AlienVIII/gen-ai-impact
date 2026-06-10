# Theme Configuration

Your site's theme is now centralized in one location for easy maintenance and updates.

## Files

- **`src/styles/theme.css`** – CSS custom properties (variables) that define all colors
- **`src/styles/custom.css`** – Starlight customization that imports and applies the theme
- **`src/theme.config.ts`** – JavaScript/TypeScript theme values for programmatic use

## Colors

| Variable | Value | Usage |
| --- | --- | --- |
| `--color-background` | `#f4ebd2` | Page backgrounds |
| `--color-text` | `#4a3f36` | Primary text |
| `--color-accent` | `#c18a63` | Links, buttons, accents |
| `--color-text-secondary` | `rgba(74, 63, 54, 0.7)` | Secondary text |
| `--color-text-tertiary` | `rgba(74, 63, 54, 0.5)` | Tertiary text |
| `--color-accent-light` | `rgba(193, 138, 99, 0.1)` | Light accent backgrounds |
| `--color-accent-dark` | `#a0704f` | Darker accent (hover states) |

## How to Update Theme

### Option 1: Update CSS (Recommended for most changes)

Edit `src/styles/theme.css` and update the color values:

```css
:root {
	--color-background: #f4ebd2;
	--color-text: #4a3f36;
	--color-accent: #c18a63;
	/* ... other colors ... */
}
```

### Option 2: Use in JavaScript/TypeScript

Import the theme in your code:

```javascript
import theme from '@/theme.config';

const bgColor = theme.colors.background;
```

## Building

After updating theme colors, run:

```bash
npm run build
```

The theme will be applied globally across all pages.
