# 10 - Liskov Substitution Principle (LSP)

## Definition

The Liskov Substitution Principle (LSP) states:

> Objects of a child class should be usable anywhere objects of the parent class are expected.

In simple terms:

> A child class should honor the promises made by its parent class.

If a class inherits from another class, it should behave in a way that makes sense wherever the parent class is used.

---

## Why LSP Exists

Inheritance creates an expectation.

When a class inherits from a parent class, other parts of the system assume that the child class can be used anywhere the parent class can be used.

If that assumption is not true, inheritance may introduce bugs and unexpected behavior.

LSP helps ensure that inheritance relationships are meaningful and reliable.

---

## Key Concepts

### Substitutability

Substitutability means:

> If a system expects a parent class, a child class should work correctly in its place.

Examples:

```txt id="w6f4n2"
Media
├─ Song
└─ Podcast
```

If a Library works with Media, it should also work with Song and Podcast.

---

### Honoring Expectations

Parent classes establish expectations about what their child classes can do.

Child classes should not violate those expectations.

When a child behaves in a way that contradicts the parent, problems can occur.

---

### Meaningful Inheritance

Inheritance should represent a genuine relationship.

A child class should truly behave like a specialized version of the parent class.

---

## Example Used For This Topic

### Media Library System

Consider the following hierarchy:

```txt id="g7h8k9"
Media
├─ Song
└─ Podcast
```

The Library was designed to work with:

```txt id="b5r4n1"
Media
```

Because Song and Podcast inherit from Media, they should be usable anywhere Media is expected.

For example:

```txt id="k3m8q2"
Library accepts Media
```

Therefore:

```txt id="n2v6t4"
Library should accept Song

Library should accept Podcast
```

without requiring special handling.

This satisfies LSP.

---

## What Was Learned

Inheritance alone does not guarantee a good design.

A child class must also behave in a way that makes sense wherever the parent class is expected.

The question is not only:

> Is this an "is-a" relationship?

It is also:

> Can this child truly be used anywhere the parent is expected?

If the answer is no, the inheritance relationship may be flawed.

---

## Example of an LSP Violation

Imagine a class hierarchy where:

```txt id="q9w4z7"
Media
├─ Song
└─ BrokenPodcast
```

Suppose the Library expects all Media objects to contain valid media information.

If BrokenPodcast fails to provide that information or behaves differently than expected, code that works with Media may fail when given a BrokenPodcast.

This violates LSP because the child class cannot properly substitute for the parent class.

---

## Benefits of LSP

### Reliable Inheritance

Inheritance becomes safer and easier to reason about.

---

### Reduced Special Cases

Code does not need extra checks for specific child classes.

---

### Better Polymorphism

Polymorphism works more effectively when child classes can genuinely stand in for their parent classes.

---

### Easier Maintenance

Systems become easier to extend when inheritance relationships remain consistent.

---

## Relationship to Previous Topics

### Inheritance

Inheritance introduces parent and child classes.

LSP helps verify that the inheritance relationship actually makes sense.

---

### Polymorphism

Polymorphism depends on child classes behaving correctly when used through the parent interface.

LSP helps make this possible.

---

### Open/Closed Principle

Well-designed inheritance hierarchies support extension without requiring constant modification.

LSP helps ensure those hierarchies remain reliable.

---

## Common Mistakes

### Using Inheritance for Convenience

Just because two classes share some behavior does not mean inheritance is appropriate.

---

### Violating Parent Expectations

A child class should not behave in a way that contradicts the assumptions established by the parent class.

---

### Ignoring Substitutability

If code must constantly check which child class it is dealing with, the inheritance hierarchy may not satisfy LSP.

---

## Review Questions

### What does the Liskov Substitution Principle state?

Objects of a child class should be usable anywhere objects of the parent class are expected.

---

### What is substitutability?

The ability to replace a parent object with a child object without breaking the system.

---

### Why is LSP important?

It helps ensure that inheritance relationships are reliable and meaningful.

---

### How did the Media Library example demonstrate LSP?

The Library worked with Media objects and could also work with Song and Podcast objects without requiring special handling.

---

### What question helps evaluate an inheritance relationship?

"Can this child class truly be used anywhere the parent class is expected?"

---

### What was the primary lesson learned from this topic?

Inheritance should create child classes that genuinely behave like specialized versions of the parent class.

---

## Key Takeaway

The Liskov Substitution Principle ensures that child classes can reliably stand in for their parent classes. If a child cannot be used wherever the parent is expected, the inheritance relationship may be flawed.
