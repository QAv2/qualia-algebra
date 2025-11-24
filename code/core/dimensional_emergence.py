# This script implements Theorem 5 to calculate the maximum perceivable dimensions ($n_{max}$) based on observer capacity.

# Based on: Qualia Algebra v2.0
# Author: Joseph Vanhorn
# License: CC BY 4.0

import numpy as np
import matplotlib.pyplot as plt

def calculate_n_max(c_max, k_overhead=100):
    """
    Calculates maximum perceivable dimensions based on observer capacity.
    Formula: n_max = sqrt(C_max / k)
    
    [cite_start]Source: Theorem 5 (Qualia Algebra v2.0) [cite: 682-683]
    """
    if c_max <= 0:
        return 0
    return np.sqrt(c_max / k_overhead)

def predict_dimensionality(system_name, c_max):
    """Prints prediction for a specific system."""
    n = calculate_n_max(c_max)
    print(f"System: {system_name}")
    print(f"  C_max: {c_max}")
    print(f"  Predicted Dimensions (n_max): {n:.2f}")
    print(f"  Likely Topology: {int(n)}D Space")
    return n

if __name__ == "__main__":
    # [cite_start]Test cases from Table 2 [cite: 1114]
    systems = [
        ("C. elegans", 7),
        ("Bee", 32),
        ("Human", 1000),
        ("GPT-4", 7e6)
    ]
    
    print("--- Dimensional Emergence Predictions ---")
    for name, cap in systems:
        predict_dimensionality(name, cap)
        print("-" * 30)
