# This provides the mathematical backbone for observer states, including the distance metric used for novelty.

import numpy as np

class QuaternionOps:
    """
    Basic quaternion algebra for Observer States [1, x, y, z].
    [cite_start]Source: [cite: 577, 606-607]
    """
    
    @staticmethod
    def normalize(q):
        """Ensures quaternion is unit length if needed."""
        norm = np.linalg.norm(q)
        if norm == 0: return q
        return q / norm

    @staticmethod
    def distance(q1, q2):
        """
        Calculates novelty/distance between two states.
        [cite_start]Source: Section 10.11.1 [cite: 2280]
        """
        return np.linalg.norm(np.array(q1) - np.array(q2))

    @staticmethod
    def binding(q1, q2):
        """
        Simulates binding via quaternion multiplication.
        Note: Real implementation would use full Hamilton product.
        [cite_start]Source: Conjecture 2.1 [cite: 607]
        """
        # Simplified element-wise approximation for demo
        # Real binding requires non-commutative multiplication logic
        w1, x1, y1, z1 = q1
        w2, x2, y2, z2 = q2
        
        w = w1*w2 - x1*x2 - y1*y2 - z1*z2
        x = w1*x2 + x1*w2 + y1*z2 - z1*y2
        y = w1*y2 - x1*z2 + y1*w2 + z1*x2
        z = w1*z2 + x1*y2 - y1*x2 + z1*w2
        
        return np.array([w, x, y, z])

    @staticmethod
    def get_content_magnitude(q):
        """Returns magnitude of vector components (x,y,z)."""
        return np.sqrt(np.sum(np.array(q)[1:]**2))
