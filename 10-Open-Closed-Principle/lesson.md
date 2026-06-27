# 09 - Open/Closed Principle (OCP)

## Definition

The Open/Closed Principle (OCP) states:

> Software should be open for extension but closed for modification.

In simple terms:

> We should be able to add new behavior without constantly changing code that already works.

The goal is to design systems that can grow by adding new functionality rather than repeatedly modifying existing classes.

---

## Why OCP Exists

As applications grow, new requirements are constantly introduced.

Examples:

* New media types
* New payment methods
* New notification types
* New user roles

If every new feature requires modifying existing classes, the risk of introducing bugs increases.

The Open/Closed Principle encourages designs that allow new functionality to be added while minimizing changes to stable, working code.

---

## Key Concepts

### Extension

Extension means adding new functionality to a system.

Examples:

* Adding a new media type
* Adding a new notification type
* Adding a new payment option

The system grows by adding new pieces.

---

### Modification

Modification means changing existing code.

While modification is sometimes necessary, frequent changes to existing classes increase complexity and risk.

OCP encourages minimizing these changes whenever possible.

---

### Stable Foundations

Well-designed classes often act as stable foundations that can support new functionality without needing significant changes themselves.

---

## Example Used For This Topic

### Media Library System

Consider a Library that manages media.

The Library was designed around:

```txt id="q0w4e2"
Media
```

rather than a specific media type.

Examples of media include:

```txt id="y90n6s"
Song
Podcast
```

Later, additional media types could be added:

```txt id="c3klu7"
Book
Movie
Audiobook
```

The important observation is that the Library itself does not need major changes.

New media types can be added by extending the system.

---

## What Was Learned

A system becomes easier to maintain when new functionality can be added without constantly modifying existing code.

Instead of designing a Library that only understands one specific type of media, the Library was designed around the broader Media concept.

This allowed new media types to be introduced without redesigning the Library.

---

## Benefits of OCP

### Reduced Risk

Code that already works does not need to be modified as frequently.

This reduces the likelihood of introducing new bugs.

---

### Easier Expansion

New functionality can often be added by creating new classes rather than rewriting existing ones.

---

### Improved Maintainability

Stable code remains stable.

New behavior is added through extension rather than modification.

---

### Better Scalability

Systems become easier to grow as requirements change.

---

## Relationship to Previous Topics

### Inheritance

Inheritance often helps support OCP by allowing new specialized classes to be added.

Examples:

```txt id="qv9j4u"
Song is a Media

Podcast is a Media

Movie is a Media
```

---

### Polymorphism

Polymorphism allows the system to work with different media types through a shared interface.

---

### Dependency Injection

Objects can receive new types without needing to know how those objects were created.

---

### Single Responsibility Principle

Classes with focused responsibilities are easier to extend without modification.

---

## Common Mistakes

### Designing for One Specific Type

A class that only understands one concrete type often becomes difficult to extend later.

---

### Modifying Existing Code for Every New Feature

If adding a new feature always requires changing existing classes, the design may not be following OCP effectively.

---

### Confusing Extension With Duplication

Extending a system does not mean copying and pasting existing code.

It means adding new functionality while preserving existing behavior.

---

## Review Questions

### What does the Open/Closed Principle state?

Software should be open for extension but closed for modification.

---

### What is meant by extension?

Adding new functionality to a system.

---

### What is meant by modification?

Changing existing code.

---

### Why is excessive modification risky?

Because changing working code increases the chance of introducing bugs.

---

### How did the Media Library demonstrate OCP?

New media types could be added without requiring major changes to the Library itself.

---

### Why was designing around Media helpful?

Because it allowed many different media types to be supported through a common abstraction.

---

### What was the primary lesson learned from the Media Library example?

Systems become easier to maintain when new functionality can be added through extension rather than repeated modification of existing code.

---

## Key Takeaway

The Open/Closed Principle encourages designing systems that can grow by adding new functionality while minimizing changes to existing, stable code.
