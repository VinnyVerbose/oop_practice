# 12 - Dependency Inversion Principle (DIP)

## Definition

The Dependency Inversion Principle (DIP) states:

> High-level modules should not depend on low-level modules. Both should depend on abstractions.

In simple terms:

> Depend on general concepts rather than specific implementations.

Instead of building systems around specific classes, we build them around shared abstractions that multiple classes can satisfy.

---

## Why DIP Exists

As applications grow, new types of objects are often introduced.

If a class depends directly on specific implementations, every new type may require modifications to existing code.

This creates tightly coupled systems that become harder to maintain and extend.

DIP helps reduce coupling by encouraging classes to depend on abstractions rather than concrete implementations.

---

## Key Concepts

### High-Level Modules

High-level modules contain important business logic and coordinate the behavior of the system.

Examples:

```txt id="zj5tq1"
Library

Playlist

ShoppingCart
```

These classes manage and organize other objects.

---

### Low-Level Modules

Low-level modules are the concrete objects used by high-level modules.

Examples:

```txt id="j9d0rf"
Song

Podcast

Book

Movie
```

These classes represent specific implementations.

---

### Abstractions

An abstraction represents a more general concept.

Examples:

```txt id="j6sl7q"
Media
```

Rather than depending directly on Song or Podcast, other classes can depend on Media.

This allows many different implementations to be used interchangeably.

---

## Example Used For This Topic

### Media Library System

Consider the following hierarchy:

```txt id="3nvz0g"
Media
├─ Song
├─ Podcast
├─ Book
└─ Movie
```

The Playlist was designed to work with:

```txt id="2a5u0x"
Media
```

rather than a specific media type.

This means the Playlist can manage:

```txt id="rzm51n"
Song

Podcast

Book

Movie
```

without needing to know the exact type.

The Playlist depends on the abstraction.

This follows DIP.

---

## What Was Learned

A useful design question is:

> Am I depending on a specific implementation or a general concept?

Designs become more flexible when classes depend on broader abstractions rather than concrete implementations.

This allows new implementations to be introduced with minimal changes to existing code.

---

## Dependency Injection vs Dependency Inversion

These concepts are related but not identical.

### Dependency Injection

Answers:

> How does an object receive its dependencies?

Examples:

```txt id="4m0j0t"
Library receives Book

ShoppingCart receives Product

Playlist receives Media
```

---

### Dependency Inversion

Answers:

> What should an object depend on?

Examples:

```txt id="9t2z3f"
Playlist depends on Media
```

rather than:

```txt id="n8j7xv"
Playlist depends on Song
```

Dependency Injection is often used to help implement Dependency Inversion, but they are separate concepts.

---

## Benefits of DIP

### Reduced Coupling

Classes become less dependent on specific implementations.

---

### Improved Flexibility

New implementations can be introduced without modifying existing classes.

---

### Better Maintainability

Changes to one implementation are less likely to affect unrelated parts of the system.

---

### Easier Extension

Systems become easier to grow as requirements evolve.

---

## Relationship to Previous Topics

### Inheritance

Inheritance allows multiple implementations to share a common abstraction.

---

### Polymorphism

Different implementations can be used through the same abstraction.

---

### Open/Closed Principle (OCP)

Depending on abstractions makes systems easier to extend without modification.

---

### Liskov Substitution Principle (LSP)

Child classes should be usable anywhere the abstraction is expected.

---

## Common Mistakes

### Depending on Specific Implementations

A class that depends directly on a concrete implementation often becomes difficult to extend.

---

### Ignoring Abstractions

When abstractions exist, they should often be used as the dependency instead of a specific implementation.

---

### Confusing DIP with Dependency Injection

Dependency Injection is a technique for providing dependencies.

Dependency Inversion is a design principle about what those dependencies should be.

---

## Review Questions

### What does the Dependency Inversion Principle state?

High-level modules should not depend on low-level modules. Both should depend on abstractions.

---

### What is the practical meaning of DIP?

Depend on general concepts rather than specific implementations.

---

### What is an abstraction?

A general concept that can be implemented by multiple concrete classes.

---

### How did the Media Library demonstrate DIP?

The Playlist depended on Media rather than depending directly on Song, Podcast, Book, or Movie.

---

### Why is depending on Media better than depending on Song?

Because additional media types can be introduced without modifying the Playlist.

---

### How is Dependency Injection different from Dependency Inversion?

Dependency Injection focuses on how dependencies are provided.

Dependency Inversion focuses on what types of dependencies should be used.

---

### What was the primary lesson learned from this topic?

Systems become more flexible when they depend on abstractions rather than concrete implementations.

---

## Key Takeaway

The Dependency Inversion Principle encourages classes to depend on abstractions instead of specific implementations. This reduces coupling and makes systems easier to extend, maintain, and reuse.
