# 04 - Inheritance

## Definition

Inheritance is an OOP relationship where one class acquires the properties and behavior of another class.

In simple terms:

> Inheritance describes an "is-a" relationship.

Examples:

* A Warrior is a Character.
* A Mage is a Character.

The child class inherits the common functionality of the parent class and can add or modify behavior as needed.

---

## Why Inheritance Exists

Without inheritance, similar classes often contain duplicated code.

For example, if Warrior and Mage both need:

* name
* health
* attack power
* attack()
* takeDamage()
* isAlive()

then that code would need to be written multiple times.

Inheritance allows common functionality to be defined once and shared among related classes.

This helps:

* Reduce duplication
* Improve maintainability
* Create logical class hierarchies
* Allow specialized behavior to build upon shared behavior

---

## Key Concepts

### Parent Class

The parent class contains the common properties and behavior shared by multiple related classes.

The parent represents the more general concept.

---

### Child Class

A child class inherits functionality from the parent class.

The child can:

* Use inherited behavior
* Add new behavior
* Modify existing behavior

The child represents a more specialized concept.

---

### Is-A Relationship

A useful design question is:

> Is this object a specialized version of another object?

Examples:

```txt id="4q6w7n"
Warrior is a Character
Mage is a Character
```

These are inheritance relationships.

---

## Example From This Course

### RPG Battle Simulator

This topic was explored through the RPG Battle Simulator project.

The project introduced a Character class.

The Character class contained common functionality such as:

* name
* health
* attack power
* attacking
* taking damage
* determining whether a character is alive

Later, specialized character types were introduced:

* Warrior
* Mage

Both Warrior and Mage inherited the common functionality from Character.

This prevented duplication and allowed specialized behavior to be added where needed.

---

## What Was Learned

One important lesson from this project was that inheritance should model a real relationship.

The question was not:

> Can inheritance be used here?

The question was:

> Is this object a specialized version of another object?

A Warrior is a Character.

A Mage is a Character.

Therefore inheritance made sense.

---

## Extending Behavior

Inheritance allows child classes to gain additional abilities.

For example:

* Warrior gained blocking behavior.
* Mage gained spell-casting behavior.

These abilities were added without rewriting the common functionality inherited from Character.

---

## Common Mistakes

### Using Inheritance for Everything

Not every relationship should use inheritance.

Inheritance should only be used when an "is-a" relationship exists.

---

### Creating Artificial Hierarchies

Just because two objects are related does not mean inheritance is appropriate.

The relationship should make sense conceptually.

---

### Forgetting the Parent's Responsibility

The parent class should contain the shared functionality.

The child class should focus on what makes it unique.

---

## Review Questions

### What is inheritance?

Inheritance is a relationship where one class acquires properties and behavior from another class.

---

### What type of relationship does inheritance describe?

An "is-a" relationship.

---

### What is a parent class?

A class that contains common functionality shared by related child classes.

---

### What is a child class?

A class that inherits functionality from a parent class and may add or modify behavior.

---

### Why was Character a good parent class?

Because Warrior and Mage both shared common character functionality such as health, attack power, attacking, and taking damage.

---

### Why were Warrior and Mage good child classes?

Because both are specialized types of Character.

---

### What question helps determine whether inheritance should be used?

"Is this object a specialized version of another object?"

---

### What was the primary lesson learned from the RPG Battle Simulator?

Inheritance is most useful when it models a real "is-a" relationship and allows common functionality to be shared among specialized classes.

---

## Key Takeaway

Inheritance allows related classes to share common functionality through an "is-a" relationship, reducing duplication while allowing specialized behavior to be added where needed.
