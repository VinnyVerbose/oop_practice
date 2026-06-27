# 07 - Dependency Injection

## Definition

Dependency Injection is the practice of providing an object with the objects it needs rather than having it create those objects itself.

In simple terms:

> Objects should receive their dependencies instead of creating them internally.

A dependency is simply another object that an object needs in order to perform its job.

---

## Why Dependency Injection Exists

When objects create all of their own dependencies, they become responsible for too many things.

For example, imagine a Library that creates every Book it stores.

The Library would now be responsible for:

* Managing books
* Creating books

This mixes responsibilities together.

A better design is for Books to be created elsewhere and then provided to the Library.

This allows the Library to focus on managing books rather than creating them.

---

## Key Concepts

### Dependency

A dependency is an object that another object needs in order to do its job.

Examples:

* A Library depends on Book objects.
* A ShoppingCart depends on Product objects.
* A Playlist depends on Media objects.

---

### Receiving Dependencies

Instead of creating dependencies internally, an object receives them from the outside.

This keeps responsibilities focused and makes objects more reusable.

---

### Collaboration

Dependency Injection is really about objects working together.

Each object performs its own responsibility and collaborates with other objects when needed.

---

## Examples From This Course

### Library Project

The Library did not create Books.

Instead:

```txt id="kj0g7w"
Book created elsewhere
        ↓
Library receives Book
```

The Library's responsibility was managing books, not creating them.

---

### ShoppingCart Project

The ShoppingCart did not create Products.

Instead:

```txt id="l9i6ki"
Product created elsewhere
          ↓
ShoppingCart receives Product
```

The ShoppingCart's responsibility was managing products in the cart.

---

### Music Library Project

The Playlist did not create Media objects.

Instead:

```txt id="93h4kg"
Song created elsewhere
Podcast created elsewhere
          ↓
Playlist receives Media
```

The Playlist's responsibility was managing media, not creating it.

---

## What Was Learned

A common pattern emerged throughout multiple projects:

Objects worked best when they focused on their own responsibilities and received the objects they needed from elsewhere.

The Library managed books.

The ShoppingCart managed products.

The Playlist managed media.

None of them were responsible for creating the objects they managed.

---

## Benefits of Dependency Injection

### Clear Responsibilities

Each object focuses on a single job.

Examples:

```txt id="c3y1v9"
Book represents a book.

Library manages books.
```

```txt id="w6z4np"
Product represents a product.

ShoppingCart manages products.
```

---

### Reusability

Objects become easier to reuse because they are not tied to creating specific dependencies.

---

### Flexibility

New object types can often be introduced without modifying existing classes.

---

### Easier Testing

Objects can be given different dependencies during testing without changing their internal logic.

---

## Common Mistakes

### Creating Dependencies Internally

A common mistake is allowing an object to create everything it needs itself.

This often causes the object to take on responsibilities that do not belong to it.

---

### Mixing Responsibilities

An object should generally either manage something or create it, but not both.

Combining these responsibilities often leads to tightly coupled designs.

---

### Forgetting Ownership

Receiving an object does not mean owning the responsibility for creating that object.

It only means using that object to perform a task.

---

## Review Questions

### What is Dependency Injection?

Dependency Injection is the practice of providing an object with the objects it needs instead of having it create those objects itself.

---

### What is a dependency?

A dependency is an object that another object relies on to perform its job.

---

### Why is Dependency Injection useful?

It helps separate responsibilities, improve flexibility, and make objects easier to reuse and test.

---

### Why didn't the Library create its own Books?

Because the Library's responsibility was managing books, not creating them.

---

### Why didn't the ShoppingCart create its own Products?

Because the ShoppingCart's responsibility was managing products, not creating them.

---

### Why didn't the Playlist create its own Media?

Because the Playlist's responsibility was managing media, not creating media.

---

### What was the primary lesson learned from the projects?

Objects should focus on their own responsibilities and receive the objects they need from elsewhere.

---

## Key Takeaway

Dependency Injection allows objects to focus on their own responsibilities by receiving the objects they depend on rather than creating those objects themselves.
