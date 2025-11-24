# This script implements the curiosity mechanism described in Section 9.2.3 and uses the mathematical formula from Theorem 3. 
# It replaces standard loss minimization with a curiosity-driven calculation involving entropy, novelty, and harmonic resonance.

# Based on: Qualia Algebra v2.0
# Author: Joseph Vanhorn
# License: CC BY 4.0

import numpy as np
from scipy.stats import entropy

class InterestFunction:
    """
    Implements the Interest Function I(Q,N) described in Qualia Algebra v2.0.
    Sources: Section 9.2.3 and Theorem 3.
    """
    
    def __init__(self, w1=0.4, w2=0.3, w3=0.3):
        self.w1 = w1  # Weight for Information Gain
        self.w2 = w2  # Weight for Novelty
        self.w3 = w3  # Weight for Harmonic Resonance
        self.primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29] # First 10 primes for resonance

    def calculate_info_gain(self, current_state, novel_input):
        """Calculates Shannon entropy difference."""
        # Normalize inputs to treat as probability distributions for entropy calc
        h_current = entropy(np.abs(current_state) / np.sum(np.abs(current_state)))
        
        combined = current_state + novel_input
        h_combined = entropy(np.abs(combined) / np.sum(np.abs(combined)))
        
        return h_combined - h_current

    def compute_harmonic_resonance(self, q_state, novelty_dist):
        """
        Calculates harmonic resonance based on Prime Scalar Field theory.
        Formula: sum((1/p) * sin(pi * p * distance)^2)
        Source:
        """
        resonance = 0
        for p in self.primes:
            term = (1.0 / p) * (np.sin(np.pi * p * novelty_dist) ** 2)
            resonance += term
        return resonance

    def evaluate(self, current_state, novel_input, memory_buffer=None):
        """
        Computes the total Interest I(Q,N).
        Source:
        """
        # 1. Information Theoretic Component
        info_gain = self.calculate_info_gain(current_state, novel_input)
        
        # 2. Novelty Component (Euclidean distance in latent space)
        # In a full implementation, this compares against a memory buffer
        novelty = np.linalg.norm(novel_input - current_state)
        
        # 3. Harmonic Resonance
        resonance = self.compute_harmonic_resonance(current_state, novelty)
        
        # Combined Interest
        I = (self.w1 * info_gain) + (self.w2 * novelty) + (self.w3 * resonance)
        
        return max(0, I)
