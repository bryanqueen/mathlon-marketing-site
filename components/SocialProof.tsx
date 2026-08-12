/**
 * Playful notebook-style "who it's for" section.
 * Inline hand-drawn doodle illustrations for each audience.
 */
export function SocialProof() {
  return (
    <section className="section social-proof" id="stories" aria-labelledby="social-heading">
      <div className="social-proof-inner">
        <div className="audience-intro">
          <h2 className="section-heading audience-heading" id="social-heading">
            <span className="audience-heading-doodle" aria-hidden>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" stroke="#1e6bb8" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="24" cy="24" r="8" fill="#1e6bb8" fillOpacity="0.2" />
              </svg>
            </span>
            Built for the moment you&apos;re stuck
          </h2>
          <p className="section-body">
            Beta is still opening. Until then — this is who Mathlon is for, and what the free demo is
            meant to feel like.
          </p>
        </div>

        <div className="audience-list" role="list">
          {/* Students — late-night study doodle */}
          <div className="audience-row" role="listitem" style={{ "--accent": "#1e6bb8", "--bg": "#e8f4fd" } as React.CSSProperties}>
            <div className="audience-row-card">
              <div className="audience-row-index" aria-hidden>01</div>
              <div className="audience-row-illo" aria-hidden>
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="doodle-student">
                  {/* Moon */}
                  <circle cx="60" cy="28" r="16" stroke="#1e6bb8" strokeWidth="2" strokeDasharray="3 3" />
                  <circle cx="52" cy="24" r="12" fill="#e8f4fd" />
                  {/* Stars */}
                  <path d="M85 18l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#1e6bb8" fillOpacity="0.3" />
                  <path d="M30 38l1.5 3.5 3.5 1.5-3.5 1.5L30 48l-1.5-3.5L25 43l3.5-1.5z" fill="#1e6bb8" fillOpacity="0.2" />
                  {/* Book */}
                  <rect x="35" y="55" width="50" height="35" rx="2" stroke="#1e6bb8" strokeWidth="2" fill="white" />
                  <line x1="60" y1="55" x2="60" y2="90" stroke="#1e6bb8" strokeWidth="1.5" strokeDasharray="2 2" />
                  <path d="M38 62h18M38 68h14M38 74h16" stroke="#1e6bb8" strokeWidth="1" strokeLinecap="round" />
                  <path d="M64 62h18M64 68h14M64 74h16" stroke="#1e6bb8" strokeWidth="1" strokeLinecap="round" />
                  {/* Coffee cup */}
                  <path d="M92 70h12l-2 18h-10z" stroke="#1e6bb8" strokeWidth="1.5" fill="white" />
                  <path d="M104 75a5 5 0 0 1 0 8" stroke="#1e6bb8" strokeWidth="1.5" fill="none" />
                  {/* Steam */}
                  <path d="M96 65c0-3 3-3 3-6s3 0 3-3" stroke="#1e6bb8" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
                  {/* Zzz */}
                  <path d="M18 80l6-2-4-4h6" stroke="#1e6bb8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
                </svg>
              </div>
              <div className="audience-row-content">
                <div className="audience-row-label">
                  <span className="audience-who">Students</span>
                  <span className="audience-line">Exam week, midnight, still stuck</span>
                </div>
                <p className="audience-row-body">The problem that won&apos;t click and no tutor free at 11pm. Talk it out — Mathlon draws every step until it does.</p>
              </div>
              <div className="audience-row-doodle" aria-hidden>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Relearners — path/stepping stones doodle */}
          <div className="audience-row" role="listitem" style={{ "--accent": "#2d8a5e", "--bg": "#e8f5ed" } as React.CSSProperties}>
            <div className="audience-row-card">
              <div className="audience-row-index" aria-hidden>02</div>
              <div className="audience-row-illo" aria-hidden>
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="doodle-relearner">
                  {/* Stepping stones path */}
                  <ellipse cx="25" cy="90" rx="14" ry="6" stroke="#2d8a5e" strokeWidth="2" fill="white" />
                  <ellipse cx="50" cy="78" rx="14" ry="6" stroke="#2d8a5e" strokeWidth="2" fill="white" />
                  <ellipse cx="75" cy="66" rx="14" ry="6" stroke="#2d8a5e" strokeWidth="2" fill="white" />
                  <ellipse cx="100" cy="54" rx="14" ry="6" stroke="#2d8a5e" strokeWidth="2" fill="white" />
                  {/* Dotted path connecting stones */}
                  <path d="M25 90Q38 84 50 78Q62 72 75 66Q88 60 100 54" stroke="#2d8a5e" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                  {/* Compass rose */}
                  <circle cx="28" cy="30" r="20" stroke="#2d8a5e" strokeWidth="2" fill="white" />
                  <circle cx="28" cy="30" r="16" stroke="#2d8a5e" strokeWidth="1" strokeDasharray="2 2" />
                  <path d="M28 14l2 12M28 46l-2-12M12 30l12-2M44 30l-12 2" stroke="#2d8a5e" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="28" cy="30" r="3" fill="#2d8a5e" fillOpacity="0.3" />
                  {/* Arrow */}
                  <path d="M95 30l8-4v8z" fill="#2d8a5e" fillOpacity="0.3" />
                  <line x1="85" y1="30" x2="100" y2="30" stroke="#2d8a5e" strokeWidth="1.5" strokeDasharray="2 2" />
                  {/* Small bushes */}
                  <circle cx="15" cy="95" r="5" fill="#2d8a5e" fillOpacity="0.15" />
                  <circle cx="105" cy="58" r="4" fill="#2d8a5e" fillOpacity="0.1" />
                </svg>
              </div>
              <div className="audience-row-content">
                <div className="audience-row-label">
                  <span className="audience-who">Relearners</span>
                  <span className="audience-line">Coming back after years away</span>
                </div>
                <p className="audience-row-body">Algebra from a decade ago doesn&apos;t have to mean a textbook alone. Ask out loud. Interrupt. Go as slow as you need.</p>
              </div>
              <div className="audience-row-doodle" aria-hidden>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                </svg>
              </div>
            </div>
          </div>

          {/* The curious — magnifying glass + question marks doodle */}
          <div className="audience-row" role="listitem" style={{ "--accent": "#b85a1e", "--bg": "#fdf4e8" } as React.CSSProperties}>
            <div className="audience-row-card">
              <div className="audience-row-index" aria-hidden>03</div>
              <div className="audience-row-illo" aria-hidden>
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="doodle-curious">
                  {/* Magnifying glass */}
                  <circle cx="50" cy="48" r="28" stroke="#b85a1e" strokeWidth="2.5" fill="white" />
                  <circle cx="50" cy="48" r="22" stroke="#b85a1e" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="70" y1="68" x2="95" y2="93" stroke="#b85a1e" strokeWidth="4" strokeLinecap="round" />
                  {/* Question marks */}
                  <path d="M18 25c0-5 4-9 9-9s9 4 9 9c0 4-3 6-6 8v4" stroke="#b85a1e" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.4" />
                  <circle cx="24" cy="44" r="1.5" fill="#b85a1e" opacity="0.4" />
                  {/* Sparkles */}
                  <path d="M92 22l1.5 4 4 1.5-4 1.5L92 33l-1.5-4-4-1.5 4-1.5z" fill="#b85a1e" fillOpacity="0.3" />
                  <path d="M15 70l1 2.5 2.5 1-2.5 1L15 77l-1-2.5-2.5-1 2.5-1z" fill="#b85a1e" fillOpacity="0.2" />
                  {/* Lightbulb filament */}
                  <circle cx="50" cy="44" r="12" stroke="#b85a1e" strokeWidth="1" strokeDasharray="2 2" opacity="0.3" />
                  <path d="M46 42c2-3 8-3 10 0" stroke="#b85a1e" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
                  <line x1="50" y1="38" x2="50" y2="42" stroke="#b85a1e" strokeWidth="1" opacity="0.3" />
                </svg>
              </div>
              <div className="audience-row-content">
                <div className="audience-row-label">
                  <span className="audience-who">The curious</span>
                  <span className="audience-line">When &ldquo;why?&rdquo; keeps coming</span>
                </div>
                <p className="audience-row-body">Not an answer dump — a conversation on a shared whiteboard, so you leave understanding the move, not just copying it.</p>
              </div>
              <div className="audience-row-doodle" aria-hidden>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
