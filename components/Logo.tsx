export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="6" y="22" width="21" height="12" rx="2.5" fill="currentColor" />
      <rect x="13" y="8" width="21" height="12" rx="2.5" fill="currentColor" />
    </svg>
  );
}

// Mark + wordmark lockup, font-independent — mirrors the mathlon app's
// MathlonMark.tsx. The wordmark is baked-in Inter 600 glyph outlines
// (extracted from the real webfont — fonts.gstatic.com Inter v20, weight
// 600, latin subset — via opentype.js), not a live <span>. A live text
// wordmark only renders correctly once/if Inter has loaded, which caused a
// brief font-fallback flash (and slight width jump) on first paint here.
// Baking real paths makes every usage identical and immune to font timing.
//
// Geometry: mark's native art is 28 wide x 26 tall. "mathlon" in Inter 600
// at 24px has real ink bounds (from the font's own glyf/hmtx tables) of
// y: -17.46 to 0.27 (17.73 tall) and advance width 94.14. The mark is
// scaled uniformly (one factor, both axes) so its 26-unit-tall art becomes
// exactly 17.73 tall, then translated so its bottom edge sits exactly on
// the text baseline (y=19.46 in a 21.73-unit-tall viewBox). `size` scales
// the whole unit (it lines up with the old wordmark's font-size).
const LOCKUP_VIEW_WIDTH = 121.23;
const LOCKUP_VIEW_HEIGHT = 21.73;
const LOCKUP_BASELINE_Y = 19.46;
const LOCKUP_MARK_SCALE = 0.6819;
const LOCKUP_MARK_TOP = 1.73;
const LOCKUP_TEXT_X = 27.09;
const LOCKUP_ASCENT = 17.46; // used only to convert the `size` prop to a scale factor

const MATHLON_WORDMARK_PATH =
  'M4.66 0L1.62 0L1.62-13.10L4.48-13.10L4.59-9.95L4.37-9.95Q4.65-11.12 5.24-11.86Q5.84-12.60 6.63-12.96Q7.42-13.31 8.29-13.31Q9.70-13.31 10.58-12.42Q11.45-11.53 11.81-9.80L11.45-9.80Q11.72-10.97 12.37-11.75Q13.02-12.53 13.92-12.92Q14.81-13.31 15.83-13.31Q17.02-13.31 17.95-12.80Q18.89-12.28 19.44-11.29Q19.99-10.30 19.99-8.84L19.99 0L16.95 0L16.95-8.37Q16.95-9.59 16.28-10.15Q15.61-10.71 14.67-10.71Q13.95-10.71 13.41-10.39Q12.87-10.08 12.58-9.52Q12.29-8.96 12.29-8.23L12.29 0L9.32 0L9.32-8.51Q9.32-9.50 8.70-10.11Q8.07-10.71 7.10-10.71Q6.43-10.71 5.88-10.41Q5.32-10.10 4.99-9.50Q4.66-8.91 4.66-8.03L4.66 0M26.88 0.27Q25.64 0.27 24.64-0.18Q23.65-0.63 23.07-1.51Q22.50-2.39 22.50-3.68Q22.50-4.79 22.92-5.52Q23.33-6.25 24.04-6.68Q24.75-7.11 25.64-7.34Q26.53-7.56 27.49-7.65Q28.63-7.78 29.34-7.87Q30.06-7.97 30.39-8.18Q30.73-8.39 30.73-8.84L30.73-8.89Q30.73-9.54 30.47-9.99Q30.21-10.44 29.70-10.68Q29.19-10.92 28.44-10.92Q27.68-10.92 27.12-10.69Q26.57-10.45 26.21-10.08Q25.86-9.70 25.70-9.27L22.88-9.84Q23.26-11 24.07-11.76Q24.88-12.52 26-12.89Q27.12-13.27 28.43-13.27Q29.36-13.27 30.30-13.05Q31.24-12.83 32.03-12.32Q32.81-11.80 33.29-10.93Q33.77-10.07 33.77-8.75L33.77 0L30.86 0L30.86-1.80L30.74-1.80Q30.45-1.25 29.94-0.78Q29.43-0.30 28.67-0.02Q27.91 0.27 26.88 0.27M27.67-1.99Q28.62-1.99 29.30-2.37Q29.99-2.74 30.37-3.36Q30.75-3.97 30.75-4.70L30.75-6.25Q30.60-6.13 30.24-6.02Q29.88-5.92 29.44-5.84Q29-5.75 28.58-5.70Q28.15-5.64 27.86-5.60Q27.18-5.51 26.63-5.30Q26.07-5.09 25.76-4.71Q25.45-4.32 25.45-3.71Q25.45-3.15 25.74-2.77Q26.03-2.39 26.53-2.19Q27.02-1.99 27.67-1.99M35.63-13.10L43.07-13.10L43.07-10.71L35.63-10.71L35.63-13.10M37.49-3.43L37.49-16.22L40.54-16.22L40.54-3.69Q40.54-2.98 40.84-2.64Q41.14-2.31 41.84-2.31Q42.05-2.31 42.39-2.36Q42.74-2.41 42.95-2.46L43.43-0.11Q42.93 0.05 42.40 0.11Q41.87 0.18 41.39 0.18Q39.50 0.18 38.50-0.76Q37.49-1.70 37.49-3.43M48.53-7.68L48.53 0L45.48 0L45.48-17.46L48.48-17.46L48.48-9.87L48.16-9.87Q48.71-11.57 49.78-12.42Q50.85-13.27 52.45-13.27Q53.80-13.27 54.81-12.69Q55.83-12.12 56.38-11.02Q56.94-9.91 56.94-8.33L56.94 0L53.88 0L53.88-7.86Q53.88-9.18 53.20-9.93Q52.52-10.68 51.33-10.68Q50.52-10.68 49.89-10.32Q49.25-9.97 48.89-9.30Q48.53-8.62 48.53-7.68M60.18-17.46L63.22-17.46L63.22 0L60.18 0L60.18-17.46M72.14 0.27Q70.23 0.27 68.82-0.58Q67.42-1.43 66.65-2.95Q65.88-4.46 65.88-6.48Q65.88-8.52 66.65-10.05Q67.42-11.58 68.82-12.42Q70.23-13.27 72.14-13.27Q74.06-13.27 75.47-12.42Q76.88-11.58 77.64-10.05Q78.41-8.52 78.41-6.48Q78.41-4.46 77.64-2.95Q76.88-1.43 75.47-0.58Q74.06 0.27 72.14 0.27M72.14-2.20Q73.21-2.20 73.92-2.78Q74.63-3.35 74.97-4.32Q75.32-5.30 75.32-6.49Q75.32-7.70 74.97-8.67Q74.63-9.64 73.92-10.22Q73.21-10.79 72.14-10.79Q71.07-10.79 70.38-10.22Q69.68-9.64 69.33-8.68Q68.99-7.71 68.99-6.49Q68.99-5.30 69.33-4.32Q69.68-3.35 70.38-2.78Q71.07-2.20 72.14-2.20M84.12-7.68L84.12 0L81.07 0L81.07-13.10L83.95-13.10L84-9.87L83.75-9.87Q84.30-11.57 85.37-12.42Q86.44-13.27 88.04-13.27Q89.39-13.27 90.40-12.69Q91.41-12.12 91.96-11.02Q92.52-9.91 92.52-8.33L92.52 0L89.47 0L89.47-7.86Q89.47-9.18 88.79-9.93Q88.11-10.68 86.92-10.68Q86.11-10.68 85.48-10.32Q84.84-9.97 84.48-9.30Q84.12-8.62 84.12-7.68';

export function LogoLockup({
  size = 22,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const scale = size / LOCKUP_ASCENT;
  return (
    <svg
      width={LOCKUP_VIEW_WIDTH * scale}
      height={LOCKUP_VIEW_HEIGHT * scale}
      viewBox={`0 0 ${LOCKUP_VIEW_WIDTH} ${LOCKUP_VIEW_HEIGHT}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g transform={`translate(0 ${LOCKUP_MARK_TOP}) scale(${LOCKUP_MARK_SCALE})`}>
        <rect x="6" y="14" width="21" height="12" rx="2.5" fill="currentColor" />
        <rect x="13" y="0" width="21" height="12" rx="2.5" fill="currentColor" />
      </g>
      <g transform={`translate(${LOCKUP_TEXT_X} ${LOCKUP_BASELINE_Y})`} fill="currentColor">
        <path d={MATHLON_WORDMARK_PATH} />
      </g>
    </svg>
  );
}
