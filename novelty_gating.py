# This script implements the efficient attention mechanism described in Section 10.11.1. 
# It uses the novelty metric to decide whether to trigger deep, "conscious" processing or cheap routine processing.

import numpy as np

def estimate_novelty(token_embedding, current_state):
    """
    Calculates Novelty (N) as quaternion distance.
    Source: [cite: 1752]
    """
    return np.linalg.norm(token_embedding - current_state)

def novelty_gating_loop(sequence, current_state, interest_engine):
    """
    QA-informed processing loop with novelty gating.
    Source: [cite: 1866-1873]
    """
    threshold_routine = 0.3
    threshold_novel = 0.7
    threshold_curiosity = 0.5
    
    outputs = []

    for token in sequence:
        # 1. Estimate Novelty
        N = estimate_novelty(token, current_state)
        
        # 2. Estimate Interest (using the InterestFunction module)
        I = interest_engine.evaluate(current_state, token)
        
        if N < threshold_routine:
            # Routine: Fast path (low compute)
            outputs.append(f"Fast_Path({token})")
            
        elif N > threshold_novel and I > threshold_curiosity:
            # High Novelty + High Interest: Allocate full C_max (Conscious processing)
            # Source: [cite: 1871]
            print(f"ALERT: High Novelty ({N:.2f}) & Interest ({I:.2f}). Engaging Deep Processing.")
            outputs.append(f"Deep_Processing({token})")
            
        else:
            # High Novelty but Low Interest: Reject or minimal process
            outputs.append("Reject/Minimal")
            
    return outputs
