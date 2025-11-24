# This script generates the plots found in the paper (convergence graphs and phase-space trajectories).

import matplotlib.pyplot as plt
import numpy as np

def plot_neti_neti_convergence(history, alpha_val):
    """
    Plots the exponential decay of content magnitude.
    [cite_start]Source: Figure 4 [cite: 976]
    """
    plt.figure(figsize=(10, 6))
    plt.plot(history, label=f'Release Rate (alpha)={alpha_val}', linewidth=2)
    plt.yscale('log')
    plt.xlabel('Iteration')
    plt.ylabel('Content Magnitude ||[x,y,z]|| (log scale)')
    plt.title('Neti Neti Algorithm Convergence')
    plt.grid(True, which="both", ls="-", alpha=0.2)
    plt.legend()
    plt.savefig('neti_neti_convergence.png')
    print("Saved plot to neti_neti_convergence.png")

def plot_reality_space_trajectory(lambda_history, content_history):
    """
    Plots trajectory in Lambda-Content space.
    [cite_start]Source: Figure 3D [cite: 834-854]
    """
    plt.figure(figsize=(8, 8))
    plt.scatter(lambda_history, content_history, c=range(len(lambda_history)), cmap='viridis')
    plt.colorbar(label='Time Step')
    plt.xlim(0, 1.1)
    plt.ylim(0, 1.1)
    plt.xlabel('Phase-Locking (Lambda)')
    plt.ylabel('Content Magnitude')
    plt.title('Observer Trajectory in Reality Space')
    
    # Annotate zones
    plt.text(0.1, 0.1, 'Witness', fontsize=12, bbox=dict(facecolor='yellow', alpha=0.2))
    plt.text(0.9, 0.9, 'Consensus', fontsize=12, bbox=dict(facecolor='red', alpha=0.2))
    plt.text(0.4, 0.6, 'Personal', fontsize=12, bbox=dict(facecolor='blue', alpha=0.2))
    
    plt.savefig('reality_space_trajectory.png')
    print("Saved plot to reality_space_trajectory.png")

if __name__ == "__main__":
    # Demo data
    dummy_history = [1.0 * (0.1)**(i/10) for i in range(50)]
    plot_neti_neti_convergence(dummy_history, 0.9)
