# 02 - Encapsulation

## Definition

Encapsulation is the practice of keeping an object's data and the rules that govern that data together inside the object.

In simple terms:

> The object that owns the data should also be responsible for protecting and managing that data.

Instead of allowing outside code to freely modify an object's state, the object provides methods that control how changes are made.

---

## Why Encapsulation Exists

Without encapsulation, any part of a program can directly change an object's data.

This can lead to:

* Invalid data
* Broken business rules
* Unexpected behavior
* Difficult debugging

Encapsulation helps ensure that an object remains in a valid state by placing important rules inside the object that owns the data.

---

## Key Concepts

### State

State is the data currently stored inside an object.

Examples:

* A book's title
* A book's author
* Whether a book has been read

State describes the current condition of an object.

---

### Business Rules

Business rules are restrictions that determine what changes are allowed.

Examples:

* A library should only contain books.
* A book can be marked as read.
* Invalid objects should not be added to a collection of books.

Encapsulation keeps these rules close to the data they protect.

---

### Ownership

A useful design question is:

> Which object owns this data?

The object that owns the data should usually be responsible for enforcing the rules related to that data.

---

## Example From This Course

### Library App

This topic was explored through the Library project.

The project contained two classes:

* Book
* Library

The Library owned a collection of books.

Because the Library owned that collection, it became responsible for protecting it.

For example:

* Only valid Book objects should be added.
* Invalid objects should be rejected.
* The Library should control how books are added, removed, and searched.

Instead of relying on outside code to enforce these rules, the Library enforced them itself.

This is encapsulation.

---

## What Was Learned

One important lesson from this project was that owning data also means owning the responsibility for keeping that data valid.

The Library did not simply store anything that was passed into it.

It verified that the object being added was actually a Book.

This prevented the Library from entering an invalid state.

---

## Common Mistakes

### Allowing Invalid Data

An object should not accept data that breaks its rules.

For example, a Library should not allow non-Book objects to be stored in its collection.

---

### Putting Rules Outside the Object

Bad design often looks like:

> Outside code checks all the rules before modifying an object.

Good design places those rules inside the object that owns the data.

---

### Treating Objects as Data Containers

Objects should do more than store information.

They should also protect and manage that information.

---

## Review Questions

### What is encapsulation?

Encapsulation is the practice of keeping data and the rules that govern that data together inside the object that owns it.

---

### Why is encapsulation useful?

It helps prevent invalid state and keeps business rules organized in a predictable location.

---

### What is state?

State is the data currently stored inside an object.

---

### What is a business rule?

A restriction that determines what changes are allowed to an object's state.

---

### Which object should usually enforce rules about a piece of data?

The object that owns the data.

---

### Why should a Library validate that only Book objects are added?

Because the Library owns the collection of books and is responsible for keeping that collection valid.

---

### What was the primary encapsulation lesson from the Library project?

Owning data means owning the responsibility for protecting and validating that data.

---

## Key Takeaway

Encapsulation means that an object is responsible not only for storing its data, but also for enforcing the rules that keep that data valid.
