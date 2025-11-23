"""
Observer Capacity Calculator
============================

Calculate C_max = √(K·B) where:
- K = connectivity (number of potential distinction interactions)
- B = bandwidth (rate of distinction-making per unit time)

Based on: Qualia Algebra v2.0
Author: Joseph Vanhorn
License: CC BY 4.0
"""

import numpy as np
import matplotlib.pyplot as plt
from typing import Tuple, Optional


def observer_capacity(K: float, B: float) -> float:
    """
    Calculate maximum observer capacity
    
    The observer capacity formula C_max = √(K·B) determines the maximum
    number of distinctions an observer can maintain simultaneously.
    
    Parameters
    ----------
    K : float
        Connectivity - number of potential distinction interactions
        Examples:
        - Human neurons: K ~ 10^4 synaptic connections
        - Simple organisms: K ~ 10^2
        - AI systems: K ~ number of parameters
    B : float
        Bandwidth - rate of distinction-making per unit time (Hz)
        Examples:
        - Human neurons: B ~ 100 Hz (action potential frequency)
        - Simple organisms: B ~ 10 Hz
        - AI systems: B ~ operations per second
        
    Returns
    -------
    C_max : float
        Maximum observer capacity (number of simultaneous distinctions)
        
    Notes
    -----
    Physical correlates:
    - Human: K ~ 10^4, B ~ 100 Hz → C_max ~ 10^3
    - This predicts working memory ~ √(10^3/10) ~ 10 items
    - Matches Miller's 7±2 limit accounting for overhead
    
    The formula derives from:
    1. n orthogonal distinctions require n(n-1)/2 correlations maintained
    2. Total cost: k·n²/2 ≤ C_max
    3. Solving: n ≤ √(2C_max/k)
    4. For large systems: C_max ~ √(K·B) from info theory
    
    Examples
    --------
    >>> # Human observer
    >>> C_human = observer_capacity(K=1e4, B=100)
    >>> print(f"Human C_max: {C_human:.0f} distinctions")
    Human C_max: 1000 distinctions
    
    >>> # Simple organism
    >>> C_simple = observer_capacity(K=100, B=10)
    >>> print(f"Simple organism C_max: {C_simple:.0f}")
    Simple organism C_max: 32 distinctions
    """
    if K <= 0 or B <= 0:
        raise ValueError("K and B must be positive")
    
    return np.sqrt(K * B)


def dimensional_bound(C_max: float, k_overhead: float = 100) -> int:
    """
    Calculate maximum perceivable spatial dimensions
    
    n_max = √(C_max / k) where k is maintenance overhead
    
    Parameters
    ----------
    C_max : float
        Observer capacity
    k_overhead : float, default=100
        Maintenance overhead constant
        
    Returns
    -------
    n_max : int
        Maximum perceivable spatial dimensions
        
    Notes
    -----
    For humans: C_max ~ 1000, k ~ 100 → n_max ~ 3
    This explains why we perceive 3 spatial dimensions!
    
    Examples
    --------
    >>> C_human = observer_capacity(1e4, 100)
    >>> n_human = dimensional_bound(C_human)
    >>> print(f"Human perceives n_max = {n_human} dimensions")
    Human perceives n_max = 3 dimensions
    """
    if C_max <= 0 or k_overhead <= 0:
        raise ValueError("C_max and k_overhead must be positive")
    
    return int(np.sqrt(C_max / k_overhead))


def working_memory_capacity(C_max: float, maintenance_factor: float = 10) -> int:
    """
    Predict working memory capacity from C_max
    
    Working memory ~ √(C_max / maintenance_factor)
    
    Parameters
    ----------
    C_max : float
        Observer capacity
    maintenance_factor : float, default=10
        Overhead for maintaining items in working memory
        
    Returns
    -------
    items : int
        Predicted working memory capacity (items)
        
    Notes
    -----
    For humans: C_max ~ 1000 → WM ~ √(1000/10) ~ 10 items
    Matches Miller's 7±2 chunked items
    
    Examples
    --------
    >>> C = observer_capacity(1e4, 100)
    >>> wm = working_memory_capacity(C)
    >>> print(f"Working memory: {wm} items")
    Working memory: 10 items
    """
    if C_max <= 0 or maintenance_factor <= 0:
        raise ValueError("Inputs must be positive")
    
    return int(np.sqrt(C_max / maintenance_factor))


def compare_observers(
    observers: dict,
    show_plot: bool = True
) -> dict:
    """
    Compare observer capacities across different systems
    
    Parameters
    ----------
    observers : dict
        Dictionary with observer names as keys, (K, B) tuples as values
    show_plot : bool, default=True
        If True, display comparison plot
        
    Returns
    -------
    results : dict
        Dictionary with observer names as keys, C_max as values
        
    Examples
    --------
    >>> observers = {
    ...     'Human': (1e4, 100),
    ...     'Dog': (5e3, 80),
    ...     'Insect': (100, 10),
    ...     'GPT-4': (1e12, 50),
    ... }
    >>> results = compare_observers(observers)
    """
    results = {}
    
    for name, (K, B) in observers.items():
        C = observer_capacity(K, B)
        n = dimensional_bound(C)
        wm = working_memory_capacity(C)
        
        results[name] = {
            'C_max': C,
            'n_max': n,
            'working_memory': wm,
            'K': K,
            'B': B
        }
    
    if show_plot:
        fig, axes = plt.subplots(2, 2, figsize=(12, 10))
        
        names = list(observers.keys())
        C_vals = [results[n]['C_max'] for n in names]
        n_vals = [results[n]['n_max'] for n in names]
        wm_vals = [results[n]['working_memory'] for n in names]
        K_vals = [results[n]['K'] for n in names]
        B_vals = [results[n]['B'] for n in names]
        
        # Plot 1: Observer Capacity
        axes[0, 0].bar(names, C_vals, color='steelblue', alpha=0.7)
        axes[0, 0].set_ylabel('C_max', fontsize=12)
        axes[0, 0].set_title('Observer Capacity', fontsize=14, fontweight='bold')
        axes[0, 0].set_yscale('log')
        axes[0, 0].grid(True, alpha=0.3)
        
        # Plot 2: Dimensional Bound
        axes[0, 1].bar(names, n_vals, color='coral', alpha=0.7)
        axes[0, 1].set_ylabel('n_max', fontsize=12)
        axes[0, 1].set_title('Max Perceivable Dimensions', 
                            fontsize=14, fontweight='bold')
        axes[0, 1].grid(True, alpha=0.3)
        
        # Plot 3: Working Memory
        axes[1, 0].bar(names, wm_vals, color='seagreen', alpha=0.7)
        axes[1, 0].set_ylabel('Items', fontsize=12)
        axes[1, 0].set_title('Working Memory Capacity', 
                            fontsize=14, fontweight='bold')
        axes[1, 0].grid(True, alpha=0.3)
        
        # Plot 4: K vs B scatter
        axes[1, 1].scatter(K_vals, B_vals, s=200, alpha=0.6)
        for i, name in enumerate(names):
            axes[1, 1].annotate(name, (K_vals[i], B_vals[i]),
                               xytext=(10, 10), textcoords='offset points')
        axes[1, 1].set_xlabel('Connectivity K', fontsize=12)
        axes[1, 1].set_ylabel('Bandwidth B (Hz)', fontsize=12)
        axes[1, 1].set_title('K-B Parameter Space', 
                            fontsize=14, fontweight='bold')
        axes[1, 1].set_xscale('log')
        axes[1, 1].set_yscale('log')
        axes[1, 1].grid(True, alpha=0.3)
        
        plt.tight_layout()
        plt.show()
    
    return results


def print_observer_report(
    name: str,
    K: float,
    B: float,
    verbose: bool = True
):
    """
    Generate detailed report for an observer system
    
    Parameters
    ----------
    name : str
        Observer name
    K : float
        Connectivity
    B : float
        Bandwidth (Hz)
    verbose : bool
        If True, print detailed report
    """
    C = observer_capacity(K, B)
    n = dimensional_bound(C)
    wm = working_memory_capacity(C)
    
    if verbose:
        print("=" * 60)
        print(f"Observer Capacity Report: {name}")
        print("=" * 60)
        print(f"\nParameters:")
        print(f"  Connectivity (K):        {K:.2e}")
        print(f"  Bandwidth (B):           {B:.2f} Hz")
        print(f"\nCapacities:")
        print(f"  Observer Capacity:       {C:.2f} distinctions")
        print(f"  Max Dimensions:          {n}")
        print(f"  Working Memory:          {wm} items")
        print(f"\nInterpretation:")
        print(f"  Can maintain ~{C:.0f} simultaneous distinctions")
        print(f"  Perceives up to {n} spatial dimensions")
        print(f"  Working memory holds ~{wm} chunks")
        print("=" * 60)
    
    return {
        'C_max': C,
        'n_max': n,
        'working_memory': wm
    }


# Example usage
if __name__ == "__main__":
    print("\n" + "=" * 60)
    print("Observer Capacity Calculator - Example Usage")
    print("=" * 60)
    
    # Example 1: Human
    print("\nExample 1: Human Observer")
    human_results = print_observer_report(
        "Human",
        K=1e4,  # ~10,000 synaptic connections per neuron
        B=100   # ~100 Hz firing rate
    )
    
    # Example 2: Dog
    print("\nExample 2: Dog Observer")
    dog_results = print_observer_report(
        "Dog",
        K=5e3,  # Fewer synaptic connections
        B=80    # Slightly lower firing rate
    )
    
    # Example 3: Insect
    print("\nExample 3: Insect Observer")
    insect_results = print_observer_report(
        "Insect (Bee)",
        K=100,  # Much simpler neural network
        B=10    # Lower processing rate
    )
    
    # Example 4: AI System
    print("\nExample 4: Large Language Model")
    ai_results = print_observer_report(
        "GPT-4 Class Model",
        K=1e12,  # Trillion-scale parameters
        B=50     # Token generation rate
    )
    
    # Comparative analysis
    print("\n\nComparative Analysis:")
    print("-" * 60)
    observers = {
        'Human': (1e4, 100),
        'Dog': (5e3, 80),
        'Bee': (100, 10),
        'GPT-4': (1e12, 50),
        'Simple AI': (1e6, 100)
    }
    
    results = compare_observers(observers, show_plot=True)
    
    print("\nSummary Table:")
    print("-" * 60)
    print(f"{'Observer':<15} {'C_max':<12} {'n_max':<8} {'WM Items':<10}")
    print("-" * 60)
    for name, data in results.items():
        print(f"{name:<15} {data['C_max']:<12.0f} {data['n_max']:<8} {data['working_memory']:<10}")
