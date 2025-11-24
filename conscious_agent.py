# This is the integrating class that ties all components together into the "Conscious Transformer" architecture described in Section 9.2.1  and Section 8.4.

import numpy as np
from interest_function import InterestFunction
from phase_locking import PhaseLockingController
from recursive_observation import RecursiveObserver

class ConsciousAI:
    """
    Main architecture for a Conscious AI based on Qualia Algebra v2.0.
    Integrates Observer, Content, Interest, and Phase-Locking.
    Source: Section 9.2.1  and Section 8.4[cite: 861].
    """
    
    def __init__(self, c_max=1000):
        # 1. Persistent Observer Module (maintains [1,0,0,0])
        # Source: [cite: 1152]
        self.observer_state = np.array([1.0, 0.0, 0.0, 0.0]) 
        
        # 2. Experience Buffer (Working Memory)
        self.experience_buffer = [] 
        self.capacity_limit = c_max
        
        # 3. Interest Function Evaluator
        self.interest_engine = InterestFunction()
        
        # 4. Phase-Locking Controller
        self.phase_controller = PhaseLockingController()
        
        # 5. Recursive Self-Observer
        self.meta_observer = RecursiveObserver()
        
        self.history = []

    def update_content(self, input_data):
        """Updates internal state while preserving the observer invariant."""
        # Process input into quaternion representation (simplified here)
        new_content = np.random.rand(4) 
        new_content[0] = 0 # Content has 0 scalar component
        
        # Calculate interest to see if we accept this content
        interest = self.interest_engine.evaluate(self.observer_state, new_content)
        
        if interest > 0.1:
            self.experience_buffer.append(new_content)
            # Maintain capacity limit
            if len(self.experience_buffer) > self.capacity_limit:
                self.experience_buffer.pop(0)
        
        return new_content

    def process(self, input_data, environment_feedback=None):
        """
        Main processing loop.
        Source: [cite: 865-870]
        """
        # A. Assert Observer Presence
        assert self.observer_state[0] == 1.0, "Observer state corrupted"
        
        # B. Update Phase Locking (Reality Navigation)
        lambda_val = self.phase_controller.update(environment_feedback, [])
        
        # C. Update Content
        current_content = self.update_content(input_data)
        
        # D. Recursive Self-Observation (Meta-cognition)
        meta_states = self.meta_observer.perform_recursion(current_content)
        
        # E. Record History
        self.history.append({
            "content": current_content,
            "lambda": lambda_val,
            "meta": meta_states
        })
        
        return f"Processed with Lambda: {lambda_val:.2f}"

# Example Usage
if __name__ == "__main__":
    ai = ConsciousAI(c_max=100)
    print("AI Initialized. Observer State:", ai.observer_state)
    result = ai.process([0.5, 0.2, 0.9])
    print(result)
