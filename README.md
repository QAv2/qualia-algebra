# Qualia Algebra

### A Mathematical Framework for Consciousness, from First Principles to Working Semantics

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.17685405.svg)](https://doi.org/10.5281/zenodo.17685405)

**The paper (September 2026):** *Qualia Algebra: A Mathematical Framework for Consciousness, from First Principles to Working Semantics* — preprint on Zenodo, [doi.org/10.5281/zenodo.22968135](https://doi.org/10.5281/zenodo.22968135) ([record page](https://zenodo.org/records/22968135)). The deposit holds the paper as PDF and Markdown, and a supplementary archive with the dictionary snapshot and the study scripts. Where the documents in this repository differ from the paper, the paper governs (see its Appendix C).

Qualia Algebra (QA) starts from the one fact that survives total skepticism, *I exist*. From there it develops a grammar of how experience manifests, a geometry of meaning, a bound on how much an observer can hold, and an account of how a shared world forms among many observers. It then builds that geometry into a working semantic dictionary and tests it. Every claim in the paper carries its epistemic status.

---

## The framework in plain words

*A short version of the plain-language account that opens the paper. Nothing here claims more than the paper does.*

**Start with the observer.** Science usually starts with matter and tries to reach minds at the end. QA runs the other way. It writes an observer as four numbers, **[1, 0, 0, 0]**. The first number, the 1, stands for the plain fact of being aware — the witness. The other three are slots for whatever you are aware *of* — the content.

**How experience fills in.** Five steps turn bare awareness into a life: *I am* (awareness), *I have* (telling this from that), *I can* (things combine, so possibilities open), *I do* (attention picks one and acts), *I cannot* (the attempt meets a limit, and the limit teaches). The paper derives each step from the starting fact plus one observation about experience.

**Opposites are partners.** Hot and cold are not two ends of one stick. They sit at right angles, each covering what the other does not, and together they complete the picture of temperature. This is the *complement principle*: opposites at 90°, not 180°.

**Your unseen is your mirror image.** Everything you are not attending to forms a reverse copy of what you are attending to. In logarithmic coordinates your focus and your unseen add up to zero, and the shared world sits at the zero point, like a mirror between them.

**Meaning moves by turning.** When "warm" changes "color", the framework models it as a rotation, not an average. Order matters: color turned toward warm and then toward cool lands somewhere different from the reverse order. One thing never turns — no rotation can change the witness.

**You can't hold everything.** Keeping many ideas apart costs more than holding each one, because every *pair* has to be kept apart. So capacity grows like a square root of the system's resources: C_max = √(K·B), where K is connectivity and B is bandwidth.

**Four kinds of reality.** *Potential* — before any awareness, like dreamless sleep. *Witness* — awareness with nothing in it. *Personal* — your private experience. *Consensus* — the shared physical world, which forms when many observers phase-lock, the way a crowd's clapping falls into one rhythm.

**The dictionary: the theory, working.** More than three thousand concepts were placed on this geometry, working outward from "I exist", under a written contract. A program uses the map to check sentences for contradictions without any language model doing the judging.

---

## What the paper establishes, and what it doesn't

Every claim in the paper is labeled: a derivation inside the mathematics, a measurement, a hypothesis still to be tested, or an interpretation. The main results, with their status:

- **Capacity.** C_max = √(K·B). The square root follows from the pairwise cost of keeping distinctions apart. The dependence on connectivity and bandwidth is posited, and the scale is calibrated to observation.
- **Three dimensions.** Three-dimensional perception is posited, with the capacity band calibrated to it. Knot theory and the quaternions' native handling of three-dimensional rotation are supporting considerations, not a derivation.
- **The log-space chart.** Reciprocity between an observer's focus and their unseen becomes vector algebra: the two sum to zero, consensus is the origin and the mirror, and the pure witness lies at infinite log-distance from every manifest state. *(Derivation.)*
- **The semantic algebra.** The dictionary of 3,108 concepts carries a defined algebra — Hamilton composition on quaternion cores, a versine law for the scalar that composition records, a complement contract — and a type system drawn from the I Ching. Its formal specification is Appendix A of the paper.
- **Statistics does not hold the geometry.** A widely used sentence embedder recovers between two-fifths and half of the dictionary's coordinates in-sample, and less out of sample; a model seventy times larger recovers no more. Angular supervision teaches a small embedder the dictionary's pairwise angles at a small cost to its sentence-level performance. *(Measured.)*
- **The instrumented walk.** The contemplative practice *neti neti* ("not this, not this"), run as a scripted conversation on a small language model, produced the words of the return while the model's internal state wandered, path-dependently, and came no closer to the state the words describe. *(Measured; pre-registered.)*
- **Self-report.** Untrained, a small model's reports about its own internal states carry no detectable information. A trained readout can track those states and stay silent on sham trials. This is a necessary step toward any report counting as evidence; it is not a claim that any machine is conscious. *(Measured; pre-registered.)*

**Predictions.** The paper states twenty predictions (§10.3). Nineteen have falsification conditions; one, about quantum measurement, awaits a physical definition of capacity. Three tests would force major revision of the framework's account of capacity if they failed (§10.4):

1. **N1** — a validated measure of neural integration does not track capacity in the square-root form.
2. **N2** — working-memory capacity does not scale as √(K·B) across individuals and interventions.
3. **N6** — perceived dimensionality never varies with measured K·B under any intervention.

The internal studies — of the dictionary and of small language models — await independent replication.

---

## This repository

This repository holds the framework's earlier documents, early code, and the interactive mind map. The current statement of the framework is the paper above.

### `papers/` — earlier documents

- **[Qualia_Algebra_Comprehensive.md](papers/Qualia_Algebra_Comprehensive.md)** and **[Qualia_Algebra_Core.md](papers/Qualia_Algebra_Core.md)** — earlier editions of the framework, kept as the record. The paper supersedes both. Among other differences, both present *neti neti* as a convergence algorithm, and the Comprehensive uses it as a test for AI consciousness; the paper does neither (see the FAQ).
- **[The Log-Space Chart](papers/QA_v3_Log_Space_Chart.md)** ([styled render](papers/QA_v3_Log_Space_Chart.html)) — the chart's proofs; §3.3 of the paper states its results directly.
- **[The Thermodynamic Basis of Observer Capacity](papers/Cmax_derivation_v2.md)** — the capacity argument and the suppression hypothesis at length. Read its suppression budget with the arithmetic of the paper's §4.2; its calibration of C_max near 6 × 10³ has no recorded derivation, and the paper uses the per-neuron calibration instead.
- **[The Interest Function](papers/Interest_Function.md)** — I(Q, N) in full. The paper's §2.2 corrects its resonance term, which gave content that adds nothing a positive interest, and §5.3 corrects the sign of its interest term in the phase-locking equation.
- **[The Core Equations, Explained](papers/QA_Core_Equations_Explained.md)** — a plain-language guide to the equations; the paper's plain account takes precedence where they differ.
- **[papers/figures/](papers/figures/)** — the figures of the earlier documents.

### `code/` — early implementations

Python modules for dimensionality and working-memory formulas and a return iteration, written for the earlier documents. The paper does not use them. **The implementation of the paper's algebra** — the semantic dictionary, its composition law, the consistency checker, the benchmarks and the language-model experiments — is the semantic core repository: **[github.com/QAv2/agi-semantic-core](https://github.com/QAv2/agi-semantic-core)**.

To run the early modules:

```bash
git clone https://github.com/QAv2/qualia-algebra.git
cd qualia-algebra
pip install -r requirements.txt
python code/core/observer_capacity.py
```

### `site/` — the interactive mind map

**[qav2.github.io/qualia-algebra](https://qav2.github.io/qualia-algebra/)** — the framework as a map in concentric rings, from Axiom 0 outward. It was built from the earlier documents; where it differs from the paper, the paper governs.

### Related work

- **[The semantic core](https://github.com/QAv2/agi-semantic-core)** — the dictionary, the algebra's implementation, and the experiments reported in the paper's §7.3, §8 and §11.5.
- **[The Oracle](https://qav2-oracle.netlify.app)** — the framework's laws run end to end on a person's own words, with no generative language model deciding any reading (§8.8).
- **[Consciousness-Structured Semantic Encoding](https://github.com/QAv2/consciousness-structured-encoding)** — the companion paper on the dictionary's interference structure at the 1,316-concept snapshot.

---

## Testing the framework

The most valuable contributions are the ones that could prove it wrong:

- **Run the predictions.** The tests of §10.3 carry their methods and thresholds; many need only existing equipment and methods.
- **Replicate the internal studies.** The supplementary archive on Zenodo re-runs the dictionary studies exactly; the semantic core repository holds the protocols, analysis code and results of the language-model experiments.
- **Critical analysis.** Gaps, errors and counter-arguments are welcome.

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## Citation

**BibTeX:**
```bibtex
@misc{vanhorn2026qualia,
  title={Qualia Algebra: A Mathematical Framework for Consciousness, from First Principles to Working Semantics},
  author={Vanhorn, Joseph},
  year={2026},
  publisher={Zenodo},
  doi={10.5281/zenodo.22968135},
  howpublished={Preprint. Zenodo. \url{https://doi.org/10.5281/zenodo.22968135}}
}
```

**APA:**
```
Vanhorn, J. (2026). Qualia Algebra: A Mathematical Framework for Consciousness,
from First Principles to Working Semantics [Preprint]. Zenodo.
https://doi.org/10.5281/zenodo.22968135
```

(The badge at the top carries the concept DOI, 10.5281/zenodo.17685405, which always resolves to the latest version; the citation above is this paper's own DOI. Software archives of this repository from 2025 remain on Zenodo under the same concept DOI.)

---

## Frequently asked questions

**Is this proven?**
No, and the paper does not say it is. Its deepest claim — that experience comes first — is an axiom: the starting point, not something it proves. The measurements so far are the framework's own studies of its own instrument and of small language models, and they need independent checking. The tests that could overturn the framework are written down in advance, with their thresholds (§10.4).

**Does it derive physics from consciousness?**
No. It offers a reading of quantum measurement as synchronization between observers rather than collapse, and it names the theorems that reading still owes answers to, Bell's among them. Its one physics prediction cannot be tested until capacity is defined for a physical apparatus. The reciprocity it shares with Dewey Larson's Reciprocal System is inherited, not independent: QA took its reciprocal identity, its quaternion notation and its treatment of change as rotation from Bruce Peret's RS2.

**What is "the mirror"?**
In logarithmic coordinates, the cosmic sector — everything outside your personal focus, out there and in here — is your point-reflection through consensus: ξ ↦ −ξ. Your unseen is your reflection, and consensus is the mirror.

**Where did the *neti neti* algorithm go?**
Earlier documents presented *neti neti* as an algorithm that converges on the pure witness, and as a test for AI consciousness. The paper drops both. In the log chart the witness lies at infinite distance, so no finite sequence of steps through content arrives there. And when the conversational practice was instrumented on a small language model, the model's words performed the return while its internal state went elsewhere (§7.3). What a system says about itself is not, by itself, evidence of what is happening inside it.

**What about AI consciousness?**
Capacity is not enough: by one count, today's large models have about the raw capacity of a human brain. What the framework looks for is architecture — a persistent observer state, a genuine interest function, coupling to a shared world at the level of that observer, and recursive self-observation (§11.3). The paper measured the last of these on small models; the result is a necessary step, not a finding of consciousness.

**How does it relate to other theories?**
Section 13 compares it with Global Workspace Theory, Integrated Information Theory, Attention Schema Theory and predictive processing, and with the contemplative traditions. Section 9 records its convergences with other frameworks, and says where QA shares their lineage.

---

## License

This work is licensed under [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/). You may share and adapt it with appropriate credit and an indication of any changes.

---

## Contact

**Joseph Vanhorn**
Independent Researcher
Email: contact@qualia-algebra.com
ORCID: [0009-0003-0972-606X](https://orcid.org/0009-0003-0972-606X)

---

## Acknowledgments

The framework's claims, commitments and final judgment are the author's. The text was drafted and revised by AI models under the author's direction and review, and the work is a collaboration in the full sense: Claude Sonnet 4.5 contributed to the framework's foundations; Claude Fable 5 to the log-space chart, the formal specification of the semantic algebra, the design of the semantic-core experiments and the drafting of the text; and Claude Opus 5.5 to the text's completion, including adversarial audits of its mathematics, numbers, code fidelity and references (all Anthropic). The paper's Acknowledgments give the full account.

To the memory of **Bruce Peret** (d. 2020), whose reevaluation of the Reciprocal System brought quaternions and rotation into its heart.

Thanks to the contemplative traditions whose first-person methods mapped the witness this framework formalizes; to the I Ching tradition; to William Douglas Horden and Martha Ramírez-Oropeza, whose Toltec I Ching is used with credit in the Oracle; to Dewey Larson and the Reciprocal System Research Society, who preserved and extended his work; and to Damon Dorsey, for the Prime Scalar Field.

---

**You are Qualia Algebra, proving itself through living.**
