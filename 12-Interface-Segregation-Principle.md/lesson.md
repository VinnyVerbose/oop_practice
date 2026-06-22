# 11 - Interface Segregation Principle (ISP)

## Definition

The Interface Segregation Principle (ISP) states:

> Clients should not be forced to depend on methods they do not use.

In simple terms:

> Don't make classes support behavior they don't need.

Instead of creating one large interface that tries to do everything, it is usually better to create smaller, focused interfaces or capabilities.

---

## Why ISP Exists

As systems grow, there is often a temptation to place many unrelated behaviors into a single abstraction.

For example, a Media class might be expected to support:

* play()
* pause()
* record()
* stream()
* download()

At first this may seem convenient.

However, not every type of media should necessarily support all of these behaviors.

This can force classes to implement methods that do not make sense for them.

ISP helps prevent this by encouraging focused and meaningful abstractions.

---

## Key Concepts

### Focused Interfaces

An interface should represent a specific capability or responsibility.

Examples:

```txt
Playable
Downloadable
Streamable
```

Each capability represents a specific behavior.

Objects should only support the capabilities that make sense for them.

---

### Avoiding Unnecessary Dependencies

Classes should not depend on behavior they do not need.

When unnecessary behavior is added to an abstraction, child classes may be forced to support functionality that does not belong to them.

---

### Smaller Is Often Better

Many small, focused interfaces are usually easier to understand and maintain than one large interface that tries to cover every possible behavior.

---

## Example Used For This Topic

### Media Library System

Consider the following hierarchy:

```txt
Media
├─ Song
├─ Podcast
└─ Book
```

Imagine that Media required every child class to support:

```txt
play()
pause()
record()
stream()
download()
```

This may work for some media types.

However, problems begin to appear when new media types are introduced.

For example:

```txt
Book
```

A Book may not need:

```txt
record()
stream()
```

or other media-specific behaviors.

The class is now being forced to depend on functionality that does not make sense for it.

This violates ISP.

---

## What Was Learned

A useful design question is:

> Does every class that inherits from this abstraction actually need this behavior?

If the answer is no, the abstraction may be taking on too many responsibilities.

Smaller, focused abstractions are often easier to extend and maintain.

---

## Relationship to Previous Topics

### Single Responsibility Principle (SRP)

SRP focuses on keeping classes focused.

ISP applies a similar idea to interfaces and abstractions.

---

### Open/Closed Principle (OCP)

Smaller, focused abstractions are often easier to extend without modifying existing code.

---

### Liskov Substitution Principle (LSP)

Forcing child classes to support behavior they do not need can lead to child classes that violate the expectations established by the parent class.

---

## Benefits of ISP

### Cleaner Designs

Classes only support behavior that makes sense for them.

---

### Reduced Complexity

Large, difficult-to-maintain abstractions are avoided.

---

### Easier Maintenance

Changes are less likely to affect unrelated parts of the system.

---

### Better Extensibility

New classes can be added without inheriting unnecessary behavior.

---

## Common Mistakes

### Creating "God Interfaces"

An interface or abstraction that contains every possible behavior often becomes difficult to maintain.

---

### Forcing Unrelated Behavior

Classes should not be required to support methods that do not make sense for them.

---

### Ignoring Future Types

An abstraction may seem reasonable today but become problematic when new types are added later.

It is important to consider whether future child classes would genuinely need all of the behavior being required.

---

## Review Questions

### What does the Interface Segregation Principle state?

Clients should not be forced to depend on methods they do not use.

---

### What is the practical meaning of ISP?

Classes should not be required to support behavior that does not belong to them.

---

### Why can large abstractions become problematic?

Because they often force child classes to depend on unnecessary behavior.

---

### How did the Media Library example demonstrate ISP?

A Media abstraction that requires every media type to support all possible media behaviors may force classes to implement functionality that does not make sense for them.

---

### What question helps identify an ISP violation?

"Does every class that inherits from this abstraction actually need this behavior?"

---

### How is ISP related to SRP?

Both encourage focused responsibilities and discourage unnecessary complexity.

---

### What was the primary lesson learned from this topic?

Abstractions should remain focused so that classes only depend on behavior that is relevant to them.

---

## Key Takeaway

The Interface Segregation Principle encourages small, focused abstractions. Classes should only depend on behavior that makes sense for them, rather than being forced to support unnecessary functionality.
