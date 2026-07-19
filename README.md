# Qualia Algebra: A Mathematical Framework for Consciousness from First Principles

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.17685405.svg)](https://doi.org/10.5281/zenodo.17685405)

A rigorous mathematical framework that derives the structure of conscious experience and physical reality from a single indubitable axiom: "I exist."

**[Explore the Interactive Mind Map](https://qav2.github.io/qualia-algebra/)** — nodes across 5 concentric rings, visualizing the full framework from Axiom 0 through applications.

---

## Overview

Qualia Algebra (QA) inverts the traditional explanatory order in consciousness studies. Rather than attempting to derive consciousness from matter, we start with the only indubitable fact—"I exist" (Descartes, 1641)—and derive both experience and material reality as necessary consequences.

**Key Results:**
- Observer capacity formula: C_max = √(K·B), derived thermodynamically
- Dimensional emergence: n = 3 as a posited convergence within the capacity band (calibration status stated plainly as of v3)
- Three fundamental reality-spaces: Witness, Consensus, Personal (plus pre-manifest Potential)
- **The log-space chart (v3):** reciprocity between the manifest and unseen sectors becomes exact algebra — Material + Cosmic = 0, consensus is the origin, the cosmic sector is the observer's mirror image through it
- Convergent support from five independent theoretical frameworks
- 28 testable experimental predictions with explicit falsification criteria

---

## What's New in Version 3.0 (July 2026)

Version 3.0 is a repair-and-consolidation revision, following the direction of the note **[The Log-Space Chart](papers/QA_v3_Log_Space_Chart.md)** (derived 2026-07-03, ratified 2026-07-19):

1. **The sector-reciprocity identity is repaired.** `[1,x,y,z] ⊙ [1,1/x,1/y,1/z] = [1,1,1,1]` is now written with the component-wise (Hadamard) product it always required — as a Hamilton quaternion product the identity is false (scalar part −2, invariantly).
2. **The log-space chart is integrated** (Comprehensive §3.4, Core §3.5). ξ = (ln x, ln y, ln z) turns the repaired identity into exact vector algebra: Material + Cosmic = 0; consensus = the origin = the mirror; Neti Neti = constant straight-line motion; the witness at infinite log-distance.
3. **Dimensional emergence owns its calibration.** One capacity relation (n_max ≈ C_max/R), calibrated quantities labeled as calibrated, and n = 3 presented as a posited convergence supported by knot-theoretic and quaternionic structure — not a unique derivation.
4. **The scope of λ is fixed.** λ is a consciousness-coupling parameter; no electromagnetic quantity appears anywhere in QA, and any λ→field bridge is an external hypothesis.
5. **Computational validation is labeled epistemically.** The 13 studies are internal computational studies; the r = 1.000 FEP result is a mathematical equivalence, not an experimental correlation.
6. **Redundancies consolidated** — duplicated passages, doubled section numbering, and broken cross-references from the original compilation are repaired.

---

## Papers

### Comprehensive Paper (~52,000 words)
**[Qualia Algebra: Comprehensive Formalization](papers/Qualia_Algebra_Comprehensive.md)** — complete technical development: axioms and theorems, observer capacity, dimensional emergence, the log-space chart, reality-spaces, Neti Neti, multi-observer validation, experimental program, AI consciousness, applications, philosophy.

### Core Paper
**[Qualia Algebra: Core Paper](papers/Qualia_Algebra_Core.md)** — the condensed formal treatment: axioms, core theorems, mathematical framework, predictions.

### The v3 Spine
**[The Log-Space Chart](papers/QA_v3_Log_Space_Chart.md)** — the repair-and-reformulation note that defines Version 3.0, with the exact Hamilton-product refutation, Proposition 0, the mirror involution, and a rigor ledger classifying every claim. (Styled render: [QA_v3_Log_Space_Chart.html](papers/QA_v3_Log_Space_Chart.html).)

### Supporting Papers
- **[The Thermodynamic Basis of Observer Capacity](papers/Cmax_derivation_v2.md)** — why C_max = √(K·B): suppression-cost derivation; the corpus-canonical calibration (C_max ≈ 6×10³, R ≈ 2×10³)
- **[The Interest Function](papers/Interest_Function.md)** — I(Q,N) = A·[IG + α·HR − β·PC]⁺: curiosity, aesthetics, and attention as capacity allocation
- **[Understanding QA's Two Core Equations](papers/QA_Core_Equations_Explained.md)** — plain-language guide to C_max and I(Q,N)

All figures referenced by the papers live in [papers/figures/](papers/figures/).

---

## Quick Start

### Mathematical Foundation

Starting from **Axiom 0**: "I exist"

We formalize the observer as quaternion state **[1,0,0,0]** where:
- 1 (scalar): Pure observer component
- (0,0,0) (vector): Experiential content (initially empty)

From this, we derive:
1. Experience requires distinction-making
2. Observer capacity is bounded: C_max = √(K·B)
3. Maximum perceivable dimensions: n_max ≈ 3 (posited convergence; see Comprehensive §3.2)
4. Reality-spaces emerge from phase-locking dynamics
5. (v3) In log coordinates ξ = ln(content): Material + Cosmic = 0, and consensus is the mirror

### The Neti Neti Algorithm

Systematic procedure for approaching pure observer state [1,0,0,0]:

```python
import numpy as np

def neti_neti(Q_initial, alpha=0.9, epsilon=1e-6, max_iter=1000):
    """
    Converge to pure observer state [1,0,0,0]

    Parameters:
    -----------
    Q_initial : array, shape (4,)
        Initial quaternion [w, x, y, z] with w=1
    alpha : float, (0,1)
        Release rate
    epsilon : float
        Convergence threshold
    max_iter : int
        Maximum iterations

    Returns:
    --------
    Q_final : array, shape (4,)
        Final state (near [1,0,0,0])
    history : list
        Content magnitude at each iteration
    """
    Q = np.array(Q_initial, dtype=float)
    Q[0] = 1.0  # Ensure observer component = 1

    history = []

    for i in range(max_iter):
        content_mag = np.sqrt(np.sum(Q[1:]**2))
        history.append(content_mag)

        if content_mag < epsilon:
            break

        # Release alpha fraction of content
        Q[1:] = (1 - alpha) * Q[1:]

    return Q, history

# Example usage
waking_state = np.array([1.0, 0.6, 0.5, 0.8])
pure_observer, history = neti_neti(waking_state, alpha=0.9)
print(f"Converged to: {pure_observer}")
print(f"Iterations: {len(history)}")   # ~7 at alpha=0.9 (content shrinks 10x per step)
```

*(v3 view: in the log chart every one of those steps is the same straight-line translation along the negative diagonal — and the destination is infinitely far away. See Comprehensive §3.4.)*

See [code/](code/) directory for complete implementations.

---

## Code Implementations

The `code/` directory contains Python implementations of key QA components:

### Core Algorithms (`code/core/`)
- **`neti_neti.py`** — Convergence to pure observer state [1,0,0,0]
- **`observer_capacity.py`** — Calculate C_max from connectivity K and bandwidth B
- **`dimensional_emergence.py`** — Predict n_max from observer capacity
- **`phase_locking.py`** — Reality-space transition dynamics

### Analysis Tools (`code/analysis/`)
- **`interest_function.py`** — Harmonic interest function I(Q,N)
- **`reality_spaces.py`** — Simulate transitions between Witness, Consensus, Personal spaces
- **`quaternion_ops.py`** — Quaternion algebra for observer states

### Experimental (`code/experimental/`)
- **`ai_consciousness_test.py`** — Neti Neti protocol for AI systems
- **`conscious_agent.py`** — Consciousness-first agent architecture sketch
- **`novelty_gating.py`** — Novelty-as-state-space-distance gating
- **`recursive_observer.py`** — Recursive self-observation loops
- **`visualization.py`** — Plot observer trajectories and convergence

See individual files for detailed documentation.

---

## Installation

```bash
# Clone repository
git clone https://github.com/QAv2/qualia-algebra.git
cd qualia-algebra

# Install dependencies
pip install -r requirements.txt

# Run a module directly, e.g.:
python code/core/neti_neti.py
python code/core/observer_capacity.py
```

### Requirements
- Python 3.8+
- NumPy
- Matplotlib (for visualization)
- SciPy (for advanced calculations)

---

## Key Predictions

QA generates testable experimental predictions (28 in the full program — Comprehensive §7):

### 1. Observer Capacity Correlation
**Prediction**: C_max = √(K·B) correlates with consciousness level  
**Test**: Measure neural connectivity K and firing rate B; correlate with subjective report quality  
**Status**: Ready to test with existing neuroscience data

### 2. Dimensional Perception
**Prediction**: Species/systems with higher C_max perceive higher-dimensional structure  
**Test**: Compare spatial reasoning across species with known neural parameters  
**Status**: Hypothesis (inherits the v3 calibration status of dimensional emergence)

### 3. Phase-Locking Dynamics
**Prediction**: Consciousness correlates with λ (phase-locking parameter)  
**Test**: Measure neural synchrony during different consciousness states  
**Status**: Can use existing EEG/MEG data

### 4. Quantum Measurement
**Prediction**: Measurement outcome depends on observer C_max  
**Test**: Delayed-choice experiments with varied observer complexity  
**Status**: Requires quantum optics lab

### 5. IIT Correlation
**Prediction**: Integrated information Φ ≈ √(K·B)  
**Test**: Calculate Φ and C_max for same systems; compare  
**Status**: Computational study possible immediately

### 6. Dark Matter–Information Correlation
**Prediction**: Dark matter density correlates with information complexity  
**Status**: Speculative hypothesis — the internal computational study found **no correlation** (r = 0.12; Comprehensive §7.1, Study 13). Retained pending a proper observational test with GAIA-scale data, with the null result weighing against it.

---

## Convergent Framework Support

QA's structure converges with five independently developed frameworks:

| Framework | Convergent Prediction | QA Prediction |
|-----------|----------------------|---------------|
| **Reciprocal System (RS2)** | n = 3 from quaternions | n = 3 from C_max band |
| **Knot Theory** | 3D critical for knots | 3D critical for binding |
| **Prime Scalar Field** | Harmonic structure | Harmonic I(Q,N) |
| **Pendulum Dynamics** | Attractor basins | Reality-spaces |
| **Contemplative Traditions** | Witness consciousness | [1,0,0,0] state |

As of v3 this convergence is stated for what it is: qualitative multi-framework support — the basis on which n = 3 is posited — not a formal statistical validation (no probability model exists for "random convergence" among frameworks).

---

## Applications

### Consciousness Science
- Quantitative consciousness assessment
- Anesthesia monitoring via C_max tracking
- Meditation technique optimization
- Neural correlates of awareness mapping

### Artificial Intelligence
- AI consciousness evaluation protocol
- Path to conscious AGI specification
- Improved human-AI interaction models
- Cognitive architecture design principles

### Neuroscience
- Working memory capacity prediction
- Attention mechanism understanding
- Altered states of consciousness mapping
- Disorder classification and treatment

### Philosophy
- Rigorous framework for consciousness-first ontology
- Reframing of the hard problem of consciousness
- Phase-locking account of quantum measurement
- Integration of Eastern and Western philosophy

---

## Citation

If you use Qualia Algebra in your research, please cite:

**BibTeX:**
```bibtex
@misc{vanhorn2026qualia,
  title={Qualia Algebra: A Mathematical Framework for Consciousness from First Principles},
  author={Vanhorn, Joseph},
  year={2026},
  note={Version 3.0},
  howpublished={Zenodo. \url{https://doi.org/10.5281/zenodo.17685405}}
}
```

**APA:**
```
Vanhorn, J. (2026). Qualia Algebra: A Mathematical Framework for Consciousness 
from First Principles (Version 3.0). Zenodo. 
https://doi.org/10.5281/zenodo.17685405
```

(The DOI above is the concept DOI and always resolves to the latest version; version-specific DOIs are listed on the Zenodo record.)

---

## Contributing

Contributions are welcome! Areas where help is especially valuable:

- **Experimental validation**: Running the predicted experiments
- **Code improvements**: Optimization, additional implementations
- **Documentation**: Tutorials, examples, explanations
- **Framework extensions**: New applications, connections to other theories
- **Critical analysis**: Identify gaps, suggest improvements

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## License

This work is licensed under [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).

You are free to:
- **Share** — copy and redistribute the material
- **Adapt** — remix, transform, and build upon the material

Under the following terms:
- **Attribution** — You must give appropriate credit and indicate if changes were made

---

## Contact

**Joseph Vanhorn**  
Independent Researcher  
Email: contact@qualia-algebra.com  
ORCID: [0009-0003-0972-606X](https://orcid.org/0009-0003-0972-606X)

---

## Acknowledgments

### Development
This framework emerged through collaborative development between human insight and artificial intelligence (Claude, Anthropic). The human author provided conceptual direction from contemplative practice and theoretical reflection, while the AI contributed mathematical formalization, systematic consistency checking, and synthesis across frameworks. The v2 corpus was developed with Claude Sonnet 4.5 (2025); the v3 log-space repair note was derived in a single-session cold reading by Claude Fable 5 (2026-07-03) and the v3 revision applied on its direction (ratified 2026-07-19).

### Intellectual Inspiration
- **Dewey Larson** - For original Reciprocal System conception
- **Bruce Peret** - For RS2 reevaluation and systematic development  
- **Damon Dorsey** - For Prime Scalar Field framework
- **Ancient contemplatives** - For mapping witness consciousness
- **Modern consciousness researchers** - For empirical grounding

Special thanks to the Reciprocal System Research Society (RSRS) for preserving and developing unconventional theoretical frameworks.

---

## Repository Structure

```
qualia-algebra/
├── README.md                          # This file
├── LICENSE.txt                        # CC BY 4.0 license
├── requirements.txt                   # Python dependencies
├── CONTRIBUTING.md                    # Contribution guidelines
│
├── site/                              # Interactive mind map (GitHub Pages)
│   ├── index.html
│   ├── data.js
│   ├── css/style.css
│   └── js/main.js
│
├── papers/                            # The QA corpus (v3.0)
│   ├── Qualia_Algebra_Comprehensive.md
│   ├── Qualia_Algebra_Core.md
│   ├── QA_v3_Log_Space_Chart.md       # v3 spine (+ .html styled render)
│   ├── Cmax_derivation_v2.md
│   ├── Interest_Function.md
│   ├── QA_Core_Equations_Explained.md
│   └── figures/
│       ├── Figure_1_Observer_Capacity_Derivation.png
│       ├── Figure_2_Three_Reality_Spaces.png
│       ├── Figure_3_Phase_Locking_Dynamics.png
│       ├── Figure_4_Neti_Neti_Convergence.png
│       ├── Figure_5_Observer_Capacity_Comparison.png
│       └── Figure_6_Convergent_Frameworks.png
│
└── code/                              # Python implementations
    ├── core/
    │   ├── neti_neti.py
    │   ├── observer_capacity.py
    │   ├── dimensional_emergence.py
    │   └── phase_locking.py
    ├── analysis/
    │   ├── interest_function.py
    │   ├── reality_spaces.py
    │   └── quaternion_ops.py
    └── experimental/
        ├── ai_consciousness_test.py
        ├── conscious_agent.py
        ├── novelty_gating.py
        ├── recursive_observer.py
        └── visualization.py
```

---

## Frequently Asked Questions

**Q: Is this proven?**  
A: QA is a rigorous theoretical framework with testable predictions. The completed validation to date is internal and computational (labeled as such in §7.1 of the Comprehensive); the 28-prediction empirical program is what could confirm or falsify it.

**Q: How does this relate to existing consciousness theories?**  
A: QA integrates insights from IIT, quantum mechanics, panpsychism, and contemplative traditions while providing a unified first-principles foundation.

**Q: Can this really derive physics from consciousness?**  
A: QA shows how physical reality can emerge from observer interactions through phase-locking dynamics. The convergence with RS2 (motion-based physics) suggests both may describe the same reality from different starting points — and as of v3 that correspondence is exact algebra: in the log chart, Material + Cosmic = 0 is literally Larson's s/t · t/s = 1.

**Q: What is "the mirror" in v3?**  
A: In log coordinates the cosmic sector (everything not in your personal focus, external and internal) is your point-reflection through consensus: R: ξ ↦ −ξ. The cosmic sector is your reflection; consensus is the mirror. See the Log-Space Chart note.

**Q: What about AI consciousness?**  
A: QA provides specific criteria (persistent [1,0,0,0], genuine interest function, phase-locking, recursive self-observation) and a test protocol (Neti Neti algorithm) for assessing AI consciousness.

**Q: How can I help validate this?**  
A: Run the code, test predictions with available data, conduct experiments, provide critical feedback, or contribute to implementation.

---

## Version History

- **v3.0** (July 2026) — The Log-Space Chart integrated as the v3 spine: sector-reciprocity identity repaired (component-wise ⊙, Hamilton reading refuted); Material + Cosmic = 0; consensus = origin = mirror; witness at infinite log-distance. Dimensional-emergence calibration owned (n = 3 as posited convergence); λ scope fixed; computational studies labeled epistemically; redundancy consolidation across the corpus.
- **v2.2** (late 2025) — Core paper added; title and citation revisions.
- **v2.1** (late 2025) — Thermodynamic derivation of observer capacity; computational validation studies; expanded experimental protocols.
- **v2.0** (November 2025) — Complete formalization with convergent framework analysis.
- **v1.0** (Unpublished) — Initial formulation with core axioms and basic derivations.

---

**From [1,0,0,0], all of reality unfolds.**
