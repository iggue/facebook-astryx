# Zero-Styling Architecture

*Exploration — January 2026*

## Context

Responding to AI + design system adherence problems identified in `ai-design-system-gaps.md`. Core insight: enforcement beats suggestion. If arbitrary values have nowhere to go, they can't exist.

---

## Concept

**Invert the usual pattern.** Instead of "styled by default, override as needed," use:

1. **Zero styling on components** — Components ship with no inline styles, no utility classes, no style props
2. **Theme file as single source of truth** — All styling controlled through centralized theme configuration
3. **Swizzling for flexibility** — Explicit opt-out for structural and behavioral customization

---

## Why This Works for AI

| Problem | How Zero-Styling Addresses It |
|---------|-------------------------------|
| Arbitrary values (`mt-[13px]`) | No style props = nowhere for arbitrary values to go |
| Drift across sessions | Theme file is the constraint; components are stateless shells |
| Context window degradation | Theme is a single file, easy to include in context |
| No enforcement | Compile-time enforcement — invalid tokens don't exist |

**Note on documentation**: Research confirms that JSDoc/comments are not reliably read by LLMs. Type constraints reduce errors by >50% where documentation has no measurable effect. This reinforces the zero-styling approach: **constrain via types, not docs**.

**Note on reactive enforcement**: Types are guardrails for iteration, not first-try guidance. Research shows LLMs get code right only 46-65% on first attempt; the value of types is enabling instant error→fix loops. This means XDS should optimize for:
1. **Clear error messages** — Help AI understand what went wrong
2. **Narrow valid options** — Fewer choices = faster convergence
3. **No silent failures** — Every violation should surface immediately

---

## Open Questions

### Theme File Structure
- Token-based (colors, spacing scales)?
- Component-based (Button.primary.background)?
- Both with inheritance?

### Swizzle Granularity
- Full component replacement?
- Slot-level swizzling (e.g., just the icon area of a button)?

### AI + Swizzled Components
- When someone swizzles, they lose enforcement
- Can swizzled components remain "theme-aware"?
- How do we prevent AI from going off-rails in swizzled code?

---

## Related
- `ai-design-system-gaps.md` — Problem analysis this responds to
