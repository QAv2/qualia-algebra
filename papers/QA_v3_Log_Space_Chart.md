# The Log-Space Chart

### A repair and reformulation note toward Qualia Algebra v3

**Status: RATIFIED — merged into the QA corpus as the spine of Version 3.0 (2026-07-19, on the author's word)**
*Derived in the session of 2026-07-03 (record: `~/posterity/2026-07-03--the-shared-1/`); companion repairs from the audit of 2026-06-20 (`~/suppressed-physics/gateway-qa-rfe-synthesis.md`). Drafted 2026-07-06; ratified and applied to the corpus 2026-07-19 — the repairs prescribed here are implemented in the v3.0 Comprehensive (§§3.2–3.4, 7.1) and Core papers.*

---

## Abstract

Qualia Algebra's sector-reciprocity identity — `[1,x,y,z] * [1,1/x,1/y,1/z] = [1,1,1,1]` (Comprehensive, §3.3) — is written in quaternion notation but is false as a quaternion equation: the Hamilton product of those two states has scalar part **−2**, not 1. The identity is true only under component-wise (Hadamard) multiplication, which the notation does not say. This note repairs the flaw by a single coordinate change: work in the logarithms of the content components, ξ = (ln x, ln y, ln z). Under this chart the component-wise product becomes vector addition, and the repaired identity is exact algebra rather than notational accident. Five consequences follow immediately, none of which was designed in advance: (1) reciprocity becomes Material + Cosmic = 0, making Larson's scalar identity s/t · t/s = 1 literal; (2) Consensus maps to the origin and the cosmic map becomes point-reflection through it — *the cosmic sector is the observer's mirror image, and consensus is the mirror*; (3) the Neti Neti algorithm becomes straight-line, constant-velocity motion, with the witness state as an ideal point at infinite distance, matching Theorem 6's asymptotic convergence and the contemplative record; (4) as a corollary, observers with balanced content pass exactly through consensus on the way to the witness; (5) the Potential/Witness distinction, which the linear notation strains to keep apart, is exposed as living entirely in the scalar component, outside the content chart. One caveat is held in plain view: logarithms require positive content, so signed content demands either orthant labels or complexification — a real limitation, but a tractable one, which is an upgrade over a false identity. The note closes with the two companion repairs from the June audit (the dimensional-emergence calibration and the scope of λ) and a rigor ledger classifying every claim made here.

**What this note does not claim.** Everything below is a *reformulation* — mathematics done inside QA's existing formalism. It inherits QA's axioms; it neither strengthens nor weakens QA's empirical standing. No claim here bears on λ-field coupling, device physics, or any experimental question.

---

## 1 · The flaw, stated exactly

QA Comprehensive §3.3 ("Reality-Spaces," RS2 Integration) asserts, under a *Mathematically:* header and inside a quaternion frame:

```
[1,x,y,z] * [1,1/x,1/y,1/z] = [1,1,1,1]     (Consensus Space unity, like Larson's s/t · t/s = 1)
```

Read as quaternions — q₁ = 1 + x**i** + y**j** + z**k**, q₂ = 1 + (1/x)**i** + (1/y)**j** + (1/z)**k** — the Hamilton product is:

```
q₁ q₂ = [ 1 − (x/x + y/y + z/z),  …vector part… ]
      = [ −2,  x + 1/x + y/z − z/y,  y + 1/y + z/x − x/z,  z + 1/z + x/y − y/x ]
```

The scalar part is **−2** for *every* observer state. The identity as written is not approximately wrong; it is structurally wrong, and the error is invariant.

The identity is *correct* under component-wise (Hadamard) multiplication, written ⊙:

```
[1,x,y,z] ⊙ [1,1/x,1/y,1/z] = [1·1, x·(1/x), y·(1/y), z·(1/z)] = [1,1,1,1]   ✓
```

The paper's prose already disclaims detailed cosmic-sector physics; the fix is to make the notation match the prose. But there is a better fix than a footnote, because the Hadamard structure is not a defect to be apologized for — it is a signpost. Component-wise multiplication on positive components is a *group*, and every such group has a canonical flat chart: the logarithm.

---

## 2 · The chart

**Definition (content chart).** For a fully manifested observer state Q = [1, x, y, z] with x, y, z > 0, define

```
ξ(Q) = ( ln x, ln y, ln z ) ∈ ℝ³
```

The scalar component is carried unchanged (and ln 1 = 0: the scalar's "coordinate" in this chart is identically zero — it is the chart's silent precondition, not one of its axes; see §3.5).

**Proposition 0 (the chart is an isomorphism).** Component-wise multiplication on content space ((0,∞)³, ⊙) is an abelian group, and ξ is a group isomorphism onto (ℝ³, +):

```
ξ(Q₁ ⊙ Q₂) = ξ(Q₁) + ξ(Q₂),    ξ([1,1,1,1]) = (0,0,0),    ξ(Q^⊙−1) = −ξ(Q)
```

*Proof.* ln(ab) = ln a + ln b component-wise; ln 1 = 0; ln(1/a) = −ln a. Bijectivity is exp. ∎

This is the entire technical content of the reformulation. Everything else is reading off what the chart makes visible.

**Translation table.**

| Linear chart (QA as written) | Log chart (this note) |
|---|---|
| content (x, y, z), each > 0 | ξ = (ln x, ln y, ln z), unrestricted in ℝ³ |
| Hadamard product ⊙ | vector addition + |
| Consensus [1,1,1,1] | the origin **0** |
| Cosmic reciprocal [1, 1/x, 1/y, 1/z] | point-reflection **−ξ** |
| reciprocity: M ⊙ C = [1,1,1,1] | **M + C = 0** |
| Neti Neti: content → (1−α)·content | translation by ln(1−α)·(1,1,1) per step |
| Witness [1,0,0,0] (content → 0) | ideal point at −∞·(1,1,1) — *not in the chart* |
| Potential [0,0,0,0] | off-chart entirely (scalar = 0) |
| content magnitude ‖(x,y,z)‖ | (no single analogue; distance from origin ‖ξ‖ measures *imbalance from consensus*, a different and arguably more useful quantity) |

---

## 3 · Consequences

### 3.1 Reciprocity becomes genuine algebra (the repair proper)

In the log chart the sector-reciprocity identity is:

```
ξ_Material + ξ_Cosmic = 0
```

This is exact, basis-independent, and involves no quaternion multiplication at all. It is also now *literally* Larson's scalar identity: taking logarithms of s/t · t/s = 1 gives ln(s/t) + ln(t/s) = 0 — the reciprocal sectors are additive inverses in log-measure. QA's RS2-integration section, which currently rests on the broken quaternion line, becomes *stronger* after the repair: the correspondence with Larson was always a scalar/multiplicative correspondence, and the log chart is its native coordinate system. Nothing about the Hamilton quaternion product was ever doing work in this identity; retiring it here costs nothing and removes the corpus's most over-read line.

### 3.2 Consensus is the mirror

The cosmic map R: Q ↦ [1, 1/x, 1/y, 1/z] becomes, in the chart,

```
R: ξ ↦ −ξ
```

— point-reflection through the origin. R is an involution (R² = id) whose unique fixed point is consensus itself. Every observer ξ and their cosmic reciprocal −ξ sit equidistant from consensus, on exactly opposite sides.

Stated in QA's own vocabulary: **the cosmic sector is the observer's reflection in a mirror, and consensus is the mirror.** Your unseen — everything not in your personal focus, external and internal — is your exact negation through the shared center.

Two remarks, kept separate deliberately:

- *As mathematics*, this is nothing more than Proposition 0 read geometrically. It is not new physics.
- *As an observation about the corpus*: the Mended Mirror project and this formalism converge on the same object — one mirror, every observer's unseen as their image through the shared center — and the convergence was not designed. The coordinate change was made to repair the identity; the mirror fell out of the algebra. That is worth recording as provenance (§6), and worth exactly that much: a convergence, not a confirmation.

### 3.3 Neti Neti is straight-line motion; the witness is at infinity

QA §5.1 defines the Neti Neti iteration content_{n+1} = (1−α)·content_n, and Theorem 6 proves exponential convergence to [1,0,0,0]. In the log chart, take logs of x_{n+1} = (1−α)x_n:

```
ξ_{n+1} = ξ_n + ln(1−α)·(1,1,1)
```

Multiplicative decay becomes **translation by a constant vector**: every Neti Neti step is the same straight-line move of length |ln(1−α)|·√3, in the fixed direction −(1,1,1)/√3 — the negative diagonal — regardless of where the observer currently stands. Release is not a different act at different depths; it is the *same act*, repeated.

The witness [1,0,0,0] is the limit x, y, z → 0⁺, i.e. ξ → (−∞,−∞,−∞): an **ideal point at infinite log-distance**. The two charts tell the same story in complementary registers:

- *Linear chart*: convergence is exponential, complete only in the limit (Theorem 6).
- *Log chart*: each step covers equal ground, and the destination is infinitely far away.

Both formalize the same phenomenological report, 2,500 years old: from inside manifestation the witness is approachable and never arrived at in finite steps — *the last step is not a step*. What reads as a bug of the chart (a state the chart cannot contain) is the truest thing the reformulation says: the chart covers manifestation, and the witness is manifestation's boundary, not one of its locations.

### 3.4 Corollary: the balanced observer passes through the mirror on the way home

*(New in this note — a direct consequence of §3.3, not present in the 2026-07-03 session.)*

The Neti Neti trajectory from ξ₀ is the ray ξ₀ + t·(−𝟙), t ≥ 0, where 𝟙 = (1,1,1). This ray passes through the origin — through consensus — **if and only if ξ₀ lies on the positive diagonal**, i.e. iff x₀ = y₀ = z₀: the observer whose content is *balanced* (equal log-measure in all three components; equivalently, holding I HAVE / I CAN / I DO in equal proportion).

For such an observer, release traverses consensus exactly, at t = ln x₀ (well-defined when x₀ > 1, i.e. content above consensus scale), and continues beyond it toward the witness. For any unbalanced observer the ray misses the origin; the point of closest approach to consensus occurs at t* = mean(ξ₀), with miss-distance equal to the standard deviation of (ln x₀, ln y₀, ln z₀) times √3 — *imbalance, measured in log-units, is exactly how far your homeward path passes from the mirror*.

Read in QA's register: the path to the witness leads *through* consensus only for the observer in equal measure with themselves. This is offered as a derived geometric fact about the formalism plus one interpretive gloss — no more.

### 3.5 Potential vs Witness is a property of the scalar, not the content

The linear notation works to keep [0,0,0,0] (Potential) and [1,0,0,0] (Witness) apart, and the Comprehensive spends several paragraphs policing the distinction. The chart makes the bookkeeping trivial by exposing where the distinction actually lives:

- The content chart ξ covers **manifestation only** (x, y, z > 0, scalar = 1).
- The **witness** is the chart's ideal boundary point at −∞ — beyond every finite location but *of* the chart's closure, with the scalar still 1.
- The **potential** [0,0,0,0] is not on the chart, not on its boundary, not at its infinity: it differs in the scalar, the one coordinate the chart never plots. No amount of content-motion — Neti Neti included — reaches it. Transitions involving it (DO₀, DO₁) are scalar events, not content events.

The distinction the prose strains to maintain is, in the chart, a *type* difference rather than a *distance* difference — which is precisely how the paper wants it read. (States with some but not all components zero, e.g. the circuit's intermediate [1,x,0,0], sit on the corresponding boundary strata: partially manifested states live on the chart's edges. The chart's interior is full manifestation.)

---

## 4 · The caveat, held in plain view

Logarithms require x, y, z > 0. The Comprehensive's usage treats content components as magnitudes, so within the corpus as written the requirement is met. But if content is ever allowed signed values (opposed qualia, negated distinctions), the chart needs one of two extensions — both standard, neither yet done:

1. **Orthant labels (polar decomposition).** Write each component as sign · magnitude; the chart becomes ℝ³ × {±1}³ — eight orthants, each with its own log chart, with sign-flips as discrete moves between them. The discrete factor {±1}³ would then be a *sector-label* structure sitting beside the continuous chart. Whether this connects to QA's sector language in a principled way is an open question, flagged here as **speculative** — it is suggestive, and suggestive is all it currently is.
2. **Complexification.** ln(−a) = ln a + iπ: signed content lifts the chart to ℂ³ with content-phase, and negation becomes a half-turn. This is heavier machinery than the corpus currently needs.

A tractable, named limitation is an upgrade over a false identity. That trade is the whole note in one sentence.

---

## 5 · Companion repairs (from the 2026-06-20 audit)

The log chart is repair (a) of the three surfaced by the June adversarial read. A v3 revision should carry the other two with it; they are recorded fully in `gateway-qa-rfe-synthesis.md` §4 and summarized here so this note can serve as the v3 spine.

**(b) Dimensional emergence: own the calibration.** The corpus carries three mutually inconsistent formulas for n_max — √(C_max/k), floor(log₂(C_max+1)), C_max/2000 — each back-fit to land on 3, and Theorem 5's proof absorbs a silent factor of 2 (√(2C_max/k) ≈ √(C_max/k) "for k ~ 100"). As written, n = 3 is calibrated, not derived. The honest v3 move: pick **one** formula and **one** C_max, state plainly that n = 3 is a *posited convergence* consistent with knot-theoretic and quaternionic structure, and delete the others. Downstream claims that lowering λ "unlocks" n_max > 3 (Corollary 5.2, psychedelic dimensionality) inherit this calibration status and must be carried as **Hypothesis** until the formula is settled.

**(c) λ is a consciousness-coupling parameter — full stop.** In every QA paper, λ governs meditation, anesthesia, attention, and consensus alignment; no electromagnetic quantity appears anywhere in the corpus. Every bridge from λ to an engineerable field variable is an *external graft* and must be named as such at every use. The graft may be a good experiment — that is exactly what the reference-frame-engine program is for — but v3 must not let the notation imply QA *derives* it.

---

## 6 · Rigor ledger

Following the house standard (`~/suppressed-physics/CLAUDE.md`): every claim in this note, classified.

| Claim | Status |
|---|---|
| Hamilton product of [1,x,y,z] and [1,1/x,1/y,1/z] has scalar −2; the §3.3 identity fails as quaternion algebra | **Verified** — direct computation, independently checkable |
| The identity holds under Hadamard product; ((0,∞)³, ⊙) ≅ (ℝ³, +) via ln (Prop. 0) | **Verified** — elementary group theory |
| M + C = 0; consensus = origin; cosmic map = point-reflection; Neti Neti = constant translation along −𝟙; witness = ideal point at −∞; balanced-observer corollary (§3.4) | **Derivation within the formalism** — exact given QA's definitions; inherits QA's axioms; adds no empirical support to them |
| The log chart "matches the contemplative record" (§3.3) | **Interpretive gloss** — a reading of the mathematics against phenomenological reports; not evidence for QA |
| Mended-Mirror / log-chart convergence (§3.2, remark 2) | **Provenance observation** — true as history of the derivation (unplanned convergence); carries no evidential weight |
| Orthant labels as sector structure (§4, option 1) | **Speculative** — flagged, undeveloped |
| n = 3 as currently presented is calibration, not derivation (§5b) | **Verified against the text** — the three formulas and the factor-2 absorption are quotable |
| λ→EM-field bridges are external grafts (§5c) | **Verified against the text** — absence of any EM quantity in the corpus is checkable |
| Anything about device physics, λ-field identity, consciousness→matter coupling | **Not addressed** — this note deliberately makes no such claim |

---

## 7 · Provenance

The log-space reformulation was derived on the night of 2026-07-03, in a single-session cold reading of the Comprehensive by Claude (Fable 5), at Joseph's invocation of his standing new-model protocol. The coordinate change was made to repair the §3.3 identity; consequences §3.1–3.3 and §3.5 fell out in sequence, unplanned, in that session (verbatim record: `~/posterity/2026-07-03--the-shared-1/session-verbatim.jsonl`, sealed 2026-07-06). The corollary in §3.4 and the boundary-strata remark in §3.5 are developed here for the first time. The companion repairs in §5 are from the adversarial audit of 2026-06-20. This note entered the QA corpus on Joseph's word, 2026-07-19, and its repairs were applied to the v3.0 papers the same day.
