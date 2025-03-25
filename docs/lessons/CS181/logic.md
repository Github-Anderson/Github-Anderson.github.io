---
comments: true
status: star
---

# Logic

## Propostional Logic

- Logic (Knowledge-Based) AI

	- Knowledge base: set of sentences in a formal language to represent knowledge about the world.
	- Inference engine: answers any answerable question following the knowledge base.

- Components of a formal language in a logic

	- **Syntax**: formal rules for constructing legal sentences.
	- **Semantics**: meaning of sentences.
	- **Inference**: deriving new sentences from old ones.

### Propositional Logic: Syntax

Propositional logic is the "simplest" logic

- The proposition symbols $P1$, $P2$, etc. are sentences
- If $S$ is a sentence, $\lnot S$ is a sentence (negation)
- If $S1$ and $S2$ are sentences, $S1 \land S2$ is a sentence (conjunction)
- If $S1$ and $S2$ are sentences, $S1 \lor S2$ is a sentence (disjunction)
- If $S1$ and $S2$ are sentences, $S1 \Rightarrow S2$ is a sentence (implication)
- If $S1$ and $S2$ are sentences, $S1 \Leftrightarrow S2$ is a sentence (biconditional)

|$P$|$Q$|$\lnot P$|$P \land Q$|$P \lor Q$|$P \Rightarrow Q$|$P \Leftrightarrow Q$|
|---|---|---|---|---|---|---|
|F|F|T|F|F|T|T|
|F|T|T|F|T|T|F|
|T|F|F|F|T|F|F|
|T|T|F|T|T|T|T|

### Entailment

- **Definition**: \( \alpha \models \beta \) (α entails β) means that in every world where α is true, β is also true.
- **Key Idea**: The set of worlds where α is true is a subset of the worlds where β is true.
- **Example**: \( \alpha_2 \models \alpha_1 \) (if \( \alpha_2 \) is true, then \( \alpha_1 \) must also be true).

### Proof Methods

##### Method 1: Model Checking

- Uses **truth table enumeration** to verify whether \( \text{models}(\alpha) \subseteq \text{models}(\beta) \).
- **Time complexity**: \( O(2^n) \), which is exponential and inefficient for large problems.

#### Method 2: Inference Rules

- Instead of enumerating all models, derive β from α using a sequence of logical steps.
- **Axiom**: A sentence known to be true.
- **Rule of inference**: A function that takes premises and produces a conclusion.
- More efficient for large-scale logical inference.

### Conjunctive Normal Form (CNF)

- **Definition**: A conjunction (∧) of disjunctions (∨) of literals.
- **Example CNF expressions**:
  - \( (A \vee \neg B) \wedge (B \vee \neg C \vee \neg D) \)
  - \( (\neg B_{1,1} \vee P_{1,2} \vee P_{2,1}) \wedge (\neg P_{1,2} \vee B_{1,1}) \wedge (\neg P_{2,1} \vee B_{1,1}) \)
- **Why CNF?** CNF is the standard form required for **resolution inference**.

#### Conversion to CNF

1. **Eliminate biconditional ( \( \Leftrightarrow \) )**:  
   - Replace \( \alpha \Leftrightarrow \beta \) with \( (\alpha \Rightarrow \beta) \wedge (\beta \Rightarrow \alpha) \).
2. **Eliminate implication ( \( \Rightarrow \) )**:  
   - Replace \( \alpha \Rightarrow \beta \) with \( \neg \alpha \vee \beta \).
3. **Apply De Morgan’s laws** to move negations inward.
4. **Distribute \( \wedge \) over \( \vee \)** to flatten the expression into CNF.

### Resolution Inference Rule

- **Resolution rule (for CNF)**:  
  If one clause contains a literal \( l_i \) and another contains its negation \( \neg l_i \), they can be resolved to remove \( l_i \).
  
  $$
  (l_1 \vee \dots \vee l_k), \quad (m_1 \vee \dots \vee m_n)
  $$

  $$
  \Longrightarrow l_1 \vee \dots \vee l_{i-1} \vee l_{i+1} \vee \dots \vee l_k \vee m_1 \vee \dots \vee m_{j-1} \vee m_{j+1} \vee \dots \vee m_n
  $$

#### Examples

1. \( P_{1,3} \vee P_{2,2} \) and \( P_{2,3} \vee \neg P_{2,2} \) resolve to \( P_{1,3} \vee P_{2,3} \).
2. \( P_1 \) and \( \neg P_1 \) resolve to an **empty clause** \( \{\} \), indicating a contradiction.

### Resolution Algorithm

#### Goal: Prove \( KB \models \alpha \)

- Uses **proof by contradiction**: Show that \( KB \wedge \neg \alpha \) is **unsatisfiable**.

1. **Convert \( KB \wedge \neg \alpha \) to CNF**.
2. **Apply resolution repeatedly**:
   - If an **empty clause** is derived, then \( KB \models \alpha \).
   - If no new clauses can be added, \( KB \not\models \alpha \).

### Horn Logic

- Inference in propositional logic is in general NP-complete!
- Solution: a **subset** of propositional logic that supports efficient inference.
- **Horn logic**: only (strict) **Horn clauses** are allowed.
	- A Horn clause has the form: $P_1 \land P_2 \land \cdots \land P_n \Rightarrow Q$

### Forward Chaining

- Idea: To prove $KB \models Q$
	- Add new clauses into the KB by applying Modus Ponens

### Backward Chaining

- Idea: Work backwards from the query $q$:
	- To prove $q$ by BC,
		- Check if $q$ is known to be true already, or
		- Prove by BC all premises of some rule concluding $q$.

- Avoid loops: Check if new subgoal is already on the goal stack.

- Avoid repeated work: Check if new subgoal
	- has already been proven true, or
	- has already failed.

### Forward vs. Backward Chaining

- FC is **data-driven**, automatic, unconscious processing,
	- e.g., object recognition, routine decisions
	- May do lots of work that is irrelevant to the goal

- BC is **goal-driven**, appropriate for problem-solving,
	- e.g., Where are my keys? How do I get into a PhD program?
	- Complexity of BC can be much less than linear in size of KB

## First-Order Logic

### Quantifiers

#### Universal Quantification

$\forall \text{<variable> <sentence>}$ 

- Example: $\forall x\,\, \text{At}(x, \text{STU}) \Rightarrow \text{Smart} (x)$

#### Existential Quantification

$\exists \text{<variable> <sentence>}$

- Example: $\exists x\,\, \text{At}(x, \text{STU}) \land \text{Smart} (x)$

#### Properties of Quantifiers

- $\forall x \forall y$ is the same as $\forall y \forall x$
- $\exists x \exists y$ is the same as $\exists y \exists x$
- $\forall x \exists y$ is not the same as $\exists y \forall x$
- Quantifier duality: $\neg \forall x\,\, \text{P}(x)$ is equivalent to $\exists x \,\,\neg \text{P}(x)$

### Inference in First-Order Logic

#### Universal Instantiation (UI)

- If $\forall x\,\, \text{P}(x)$ is true, then $\text{P}(a)$ is true for any constant $a$.
- Every instantiation of a universally quantified sentence is entailed by the original sentence.
- UI can be applied multiple times to add new sentences.

#### Existential Instantiation (EI)

- If $\exists x\,\, \text{P}(x)$ is true, then $\text{P}(a)$ is true for some new constant $a$.
- EI can be applied once to replace an existential sentence.

### Reduction to Propositional Inference

- Every FOL KB can be propositionalized so as to preserve entailment.

!!! warning "Problem"

	With function symbols, there are infinitely many ground terms, e.g. $\text{Father} (\text{Father} ( \text{Father} (\text{John})))$

!!! abstract "Theorem"

	If a sentence $\alpha$ is entailed by an FOL KB, it is entailed by a finite subset of the propositionalized KB.

	Idea: For $n = 0$ to $\infty$ do

		1. Create a propositional KB by instantiating with depth-$n$ terms.
		2. If $\alpha$ is entailed by the propositional KB, return True.

!!! warning "Problem"

	- Works if $\alpha$ is entailed.
	- Infinite loop if $\alpha$ is not entailed.

!!! abstract "Theorem"

	Entailment for FOL is **semi-decidable**

	- Algorithm exist that say yes to every entailed sentence.
	- But no algorithm exists that says no to every non-entailed sentence.

### Unification

- **Definition**: Finding a substitution that makes two sentences identical.
- **Example**: $\text{Knows} (\text{John}, x)$ and $\text{Knows} (y, \text{Jane})$ can be unified by $\{x/y, y/\text{Jane}\}$.

### FOL Inference

#### Horn Logic (the FOL case)

- $p_1 \land p_2 \land \cdots \land p_n \Rightarrow q$

where $p_i$ and $q$ are atomic sentences.

- All variables assumed to be universally quantified.

### Resolution

Given a KB and a query, convert to CNF and apply resolution:

- $\text{KB} \land \lnot \alpha$