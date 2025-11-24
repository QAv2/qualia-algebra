# This script simulates the transitions between Witness, Consensus, and Personal spaces based on phase-locking dynamics.

# Based on: Qualia Algebra v2.0
# Author: Joseph Vanhorn
# License: CC BY 4.0

import numpy as np

class RealitySpaceSimulator:
    """
    Simulates transitions between Witness, Consensus, and Personal spaces.
    [cite_start]Source: Table 1 and Figure 3 [cite: 744-772]
    """
    
    def __init__(self):
        self.spaces = {
            "Witness": {"lambda_range": (0.0, 0.1), "content_range": (0.0, 0.1)},
            "Personal": {"lambda_range": (0.2, 0.7), "content_range": (0.1, 1.0)},
            "Consensus": {"lambda_range": (0.8, 1.0), "content_range": (0.8, 1.0)}
        }

    def identify_space(self, lambda_val, content_mag):
        """Determines current reality-space based on parameters."""
        # Simple heuristic classification
        if lambda_val < 0.2 and content_mag < 0.2:
            return "Witness Space"
        elif lambda_val > 0.8:
            return "Consensus Space"
        else:
            return "Personal Space"

    def update_state(self, current_lambda, current_content, delta_t=0.1):
        """
        Evolves state based on Phase-Locking Equation.
        dPsi/dt = -grad(I) + lambda(Psi_cons - Psi)
        [cite_start]Source: [cite: 771]
        """
        # Simplified simulation of dynamics
        # If lambda is high, content pulls toward 1.0 (Consensus reality)
        # If lambda is low, content decays or fluctuates (Personal/Witness)
        
        target_content = 1.0 if current_lambda > 0.5 else 0.0
        
        # Rate of change
        change = current_lambda * (target_content - current_content)
        
        new_content = current_content + (change * delta_t)
        return max(0.0, min(1.0, new_content))

if __name__ == "__main__":
    sim = RealitySpaceSimulator()
    print(f"Lambda=0.05, Content=0.01 -> {sim.identify_space(0.05, 0.01)}")
    print(f"Lambda=0.90, Content=0.95 -> {sim.identify_space(0.9, 0.95)}")
    print(f"Lambda=0.40, Content=0.60 -> {sim.identify_space(0.4, 0.6)}")
