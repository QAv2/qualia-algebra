# Qualia Algebra: A Mathematical Framework for Consciousness from First Principles

**Version 2.0**

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.XXXXXXX.svg)](https://doi.org/10.5281/zenodo.XXXXXXX)

A rigorous mathematical framework that derives the structure of conscious experience and physical reality from a single indubitable axiom: "I exist."

---

## Overview

Qualia Algebra (QA) inverts the traditional explanatory order in consciousness studies. Rather than attempting to derive consciousness from matter, we start with the only indubitable fact—"I exist" (Descartes, 1641)—and derive both experience and material reality as necessary consequences.

**Key Results:**
- Observer capacity formula: C_max = √(K·B)
- Dimensional emergence: n = 3 from observer capacity constraints
- Three fundamental reality-spaces: Witness, Consensus, Personal
- Convergent validation from five independent theoretical frameworks
- Testable experimental predictions for neuroscience and AI

---

## Papers

### Core Paper (12,000 words)
**Qualia Algebra v2.0: A Mathematical Framework for Consciousness from First Principles**

Concise presentation of the framework suitable for journal submission and general academic audience.

📄 [View Core Paper](papers/QA_v2_Core_Paper.pdf)

### Comprehensive Paper (52,000 words)
**Qualia Algebra v2.0: Comprehensive Formalization**

Complete technical development including extended derivations, philosophical analysis, convergent framework comparisons, experimental protocols, AI consciousness criteria, and code implementations.

📄 [View Comprehensive Paper](papers/Qualia_Algebra_v2_Comprehensive_Paper.pdf)

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
3. Maximum perceivable dimensions: n_max = 3
4. Reality-spaces emerge from phase-locking dynamics

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
print(f"Iterations: {len(history)}")
```

See [code/](code/) directory for complete implementations.

---

## Code Implementations

The `code/` directory contains Python implementations of key QA components:

### Core Algorithms
- **`neti_neti.py`** - Convergence to pure observer state [1,0,0,0]
- **`observer_capacity.py`** - Calculate C_max from connectivity K and bandwidth B
- **`dimensional_emergence.py`** - Predict n_max from observer capacity
- **`phase_locking.py`** - Reality-space transition dynamics

### Analysis Tools
- **`interest_function.py`** - Harmonic interest function I(Q,N)
- **`reality_spaces.py`** - Simulate transitions between Witness, Consensus, Personal spaces
- **`quaternion_ops.py`** - Quaternion algebra for observer states

### Experimental
- **`ai_consciousness_test.py`** - Neti Neti protocol for AI systems
- **`visualization.py`** - Plot observer trajectories and convergence

See individual files for detailed documentation.

---

## Installation

```bash
# Clone repository
git clone https://github.com/[username]/qualia-algebra.git
cd qualia-algebra

# Install dependencies
pip install -r requirements.txt

# Run tests
python -m pytest tests/

# Run example
python examples/neti_neti_demo.py
```

### Requirements
- Python 3.8+
- NumPy
- Matplotlib (for visualization)
- SciPy (for advanced calculations)

---

## Key Predictions

QA generates testable experimental predictions:

### 1. Observer Capacity Correlation
**Prediction**: C_max = √(K·B) correlates with consciousness level  
**Test**: Measure neural connectivity K and firing rate B; correlate with subjective report quality  
**Status**: Ready to test with existing neuroscience data

### 2. Dimensional Perception
**Prediction**: Species/systems with higher C_max perceive higher-dimensional structure  
**Test**: Compare spatial reasoning across species with known neural parameters  
**Status**: Comparative neuroscience study needed

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

### 6. Dark Matter-Information Correlation
**Prediction**: Dark matter density correlates with information complexity  
**Test**: GAIA dataset analysis of DM distribution vs. stellar complexity  
**Status**: Can be tested immediately with existing data

See [experiments/](experiments/) directory for detailed protocols.

---

## Convergent Framework Validation

QA demonstrates remarkable convergence with five independent theoretical frameworks:

| Framework | Convergent Prediction | QA Prediction |
|-----------|----------------------|---------------|
| **Reciprocal System (RS2)** | n = 3 from quaternions | n = 3 from C_max |
| **Knot Theory** | 3D critical for knots | 3D critical for binding |
| **Prime Scalar Field** | Harmonic structure | Harmonic I(Q,N) |
| **Pendulum Dynamics** | Attractor basins | Reality-spaces |
| **Contemplative Traditions** | Witness consciousness | [1,0,0,0] state |

This independent convergence provides strong validation that QA captures genuine fundamental principles.

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
- Solution to hard problem of consciousness
- Resolution of quantum measurement problem
- Integration of Eastern and Western philosophy

See [applications/](applications/) directory for detailed use cases.

---

## Citation

If you use Qualia Algebra in your research, please cite:

**BibTeX:**
```bibtex
@article{vanhorn2024qualia,
  title={Qualia Algebra: A Mathematical Framework for Consciousness from First Principles},
  author={Vanhorn, Joseph},
  year={2024},
  note={Version 2.0},
  howpublished={Zenodo. \url{https://doi.org/10.5281/zenodo.XXXXXXX}}
}
```

**APA:**
```
Vanhorn, J. (2024). Qualia Algebra: A Mathematical Framework for Consciousness 
from First Principles (Version 2.0). Zenodo. 
https://doi.org/10.5281/zenodo.XXXXXXX
```

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
This framework emerged through collaborative development between human insight and artificial intelligence (Claude, Anthropic). The human author provided conceptual direction from contemplative practice and theoretical reflection, while the AI contributed mathematical formalization, systematic consistency checking, and synthesis across frameworks.

### Intellectual Inspiration
- **Dewey Larson** - For original Reciprocal System conception
- **Bruce Peret** - For RS2 reevaluation and systematic development  
- **David Dorsey** - For Prime Scalar Field framework
- **Ancient contemplatives** - For mapping witness consciousness
- **Modern consciousness researchers** - For empirical grounding

Special thanks to the Reciprocal System Research Society (RSRS) for preserving and developing unconventional theoretical frameworks.

---

## Repository Structure

```
qualia-algebra/
├── README.md                          # This file
├── LICENSE                            # CC BY 4.0 license
├── requirements.txt                   # Python dependencies
├── CONTRIBUTING.md                    # Contribution guidelines
│
├── papers/                            # Academic papers
│   ├── QA_v2_Core_Paper.pdf
│   └── Qualia_Algebra_v2_Comprehensive_Paper.pdf
│
├── code/                              # Python implementations
│   ├── core/
│   │   ├── neti_neti.py
│   │   ├── observer_capacity.py
│   │   ├── dimensional_emergence.py
│   │   └── phase_locking.py
│   ├── analysis/
│   │   ├── interest_function.py
│   │   ├── reality_spaces.py
│   │   └── quaternion_ops.py
│   └── experimental/
│       ├── ai_consciousness_test.py
│       └── visualization.py
│
├── examples/                          # Usage examples
│   ├── neti_neti_demo.py
│   ├── observer_capacity_calculation.py
│   └── reality_space_simulation.py
│
├── experiments/                       # Experimental protocols
│   ├── protocols/
│   └── data/
│
├── tests/                            # Unit tests
│   ├── test_neti_neti.py
│   ├── test_observer_capacity.py
│   └── test_quaternions.py
│
└── docs/                             # Additional documentation
    ├── getting_started.md
    ├── mathematical_details.md
    ├── experimental_guide.md
    └── faq.md
```

---

## Frequently Asked Questions

**Q: Is this proven?**  
A: QA is a rigorous theoretical framework with testable predictions. Several predictions can be tested with existing data (IIT correlation, GAIA dark matter analysis). Others require new experiments.

**Q: How does this relate to existing consciousness theories?**  
A: QA integrates insights from IIT, quantum mechanics, panpsychism, and contemplative traditions while providing a unified first-principles foundation.

**Q: Can this really derive physics from consciousness?**  
A: QA shows how physical reality can emerge from observer interactions through phase-locking dynamics. The convergence with RS2 (motion-based physics) suggests both may describe the same reality from different starting points.

**Q: What about AI consciousness?**  
A: QA provides specific criteria (persistent [1,0,0,0], genuine interest function, phase-locking, recursive self-observation) and a test protocol (Neti Neti algorithm) for assessing AI consciousness.

**Q: How can I help validate this?**  
A: Run the code, test predictions with available data, conduct experiments, provide critical feedback, or contribute to implementation.

See [docs/faq.md](docs/faq.md) for more questions.

---

## Version History

- **v2.0** (November 2025) - Complete formalization with convergent framework analysis, expanded mathematical rigor, comprehensive experimental protocols
- **v1.0** (Unpublished) - Initial formulation with core axioms and basic derivations

---

**From [1,0,0,0], all of reality unfolds.**
