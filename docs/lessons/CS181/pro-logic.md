---
comments: true
status: star
---

# Propositional Logic

### Logic

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