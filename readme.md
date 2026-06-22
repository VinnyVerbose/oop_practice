# Object-Oriented Programming in JavaScript

This repository documents my journey learning Object-Oriented Programming (OOP) in JavaScript through a series of focused lessons and small projects.

The goal of this repository is not to provide production-ready applications, but to build a solid understanding of OOP concepts through practical implementation and reflection.

Each topic contains:

* `lesson.md` — Notes, definitions, explanations, and review questions.
* `app.js` — My implementation of the concepts discussed in the lesson.

---

# Learning Objectives

The goals of this repository are:

* Understand the four pillars of Object-Oriented Programming
* Learn how objects collaborate within applications
* Understand composition and inheritance
* Learn Dependency Injection
* Learn and apply the SOLID principles
* Build a foundation for designing maintainable software systems

---

# Topics Covered

| Topic                                      | Project / Example               |
| ------------------------------------------ | ------------------------------- |
| 01 - Classes & Objects                     | BankAccount                     |
| 02 - Encapsulation                         | Library                         |
| 03 - Composition                           | ShoppingCart                    |
| 04 - Inheritance                           | RPG Character System            |
| 05 - Polymorphism                          | Notification System             |
| 06 - Composition vs Inheritance            | Music Library                   |
| 07 - Dependency Injection                  | Library, ShoppingCart, Playlist |
| 08 - Single Responsibility Principle (SRP) | Movie System Design             |
| 09 - Open/Closed Principle (OCP)           | Media Library                   |
| 10 - Liskov Substitution Principle (LSP)   | Media Library                   |
| 11 - Interface Segregation Principle (ISP) | Media Library                   |
| 12 - Dependency Inversion Principle (DIP)  | Media Library                   |
| 13 - Abstraction                           | Library                         |

---

# The Four Pillars of OOP

## Encapsulation

Keeping data and the rules that govern that data together inside the object that owns it.

## Abstraction

Exposing what an object can do while hiding how it does it.

## Inheritance

Allowing a class to inherit properties and behavior from another class.

## Polymorphism

Allowing different objects to respond to the same method call in different ways.

---

# SOLID Principles

## Single Responsibility Principle (SRP)

A class should have one primary responsibility and one primary reason to change.

## Open/Closed Principle (OCP)

Software should be open for extension but closed for modification.

## Liskov Substitution Principle (LSP)

Child classes should be usable anywhere their parent class is expected.

## Interface Segregation Principle (ISP)

Classes should not be forced to depend on behavior they do not need.

## Dependency Inversion Principle (DIP)

Depend on abstractions rather than concrete implementations.

---

# Key Lessons Learned

Throughout these projects, several themes appeared repeatedly:

* Objects should own and protect their own state.
* Classes should have focused responsibilities.
* Composition is often preferable to inheritance.
* Objects should collaborate rather than do everything themselves.
* Abstractions help reduce complexity.
* Designing relationships between objects is often more important than writing syntax.

---

# Repository Structure

```txt
Topic/
├── lesson.md
└── app.js
```

The lesson file contains the theory and explanations.

The application file contains my implementation and experimentation with the concepts discussed.

---

# Next Steps

The concepts in this repository provide a foundation for:

* Design Patterns
* Application Architecture
* Framework Development
* Scalable Software Design

Understanding these topics makes it easier to reason about larger applications and the design decisions made by professional software engineers.
