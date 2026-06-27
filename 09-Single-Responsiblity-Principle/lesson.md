# 08 - Single Responsibility Principle (SRP)

## Definition

The Single Responsibility Principle (SRP) states:

> A class should have one primary responsibility and one primary reason to change.

In simple terms:

> A class should focus on doing one job well.

When a class takes on multiple responsibilities, it becomes more difficult to understand, maintain, and modify.

---

## Why SRP Exists

As applications grow, it is tempting to place unrelated behavior into a single class.

For example, a Movie class might:

* Store movie information
* Play movies
* Save movies to a database
* Send recommendation emails

While this may seem convenient at first, it causes the class to become responsible for multiple unrelated concerns.

Changes to one responsibility can affect code related to another responsibility.

SRP helps prevent classes from becoming overly complex by encouraging focused responsibilities.

---

## Key Concepts

### Responsibility

A responsibility is a job or concern that belongs to a class.

Examples:

* Managing movie data
* Playing media
* Sending emails
* Saving data

Each responsibility should ideally belong to the class best suited to perform that job.

---

### Reason to Change

A useful way to identify responsibilities is to ask:

> Why might this class need to change?

If a class has many unrelated reasons to change, it may have too many responsibilities.

---

### Focused Design

Classes become easier to understand when their purpose can be described clearly in a single sentence.

Examples:

```txt id="yol2xt"
Movie represents movie information.

MoviePlayer plays movies.

EmailService sends emails.

MovieRepository stores movies.
```

Each class has a focused purpose.

---

## Example Used For This Topic

### Movie System

Consider the following responsibilities:

* Representing movie information
* Playing movies
* Saving movies
* Sending recommendation emails

At first glance, it may seem reasonable to place all of these behaviors inside a Movie class.

However, these responsibilities are unrelated.

A better design separates them:

```txt id="lgc42q"
Movie
```

Responsible for:

```txt id="fw75nt"
Representing movie information
```

---

```txt id="1otm9e"
MoviePlayer
```

Responsible for:

```txt id="rgg3kx"
Playing movies
```

---

```txt id="smv57t"
EmailService
```

Responsible for:

```txt id="8g0ttz"
Sending recommendation emails
```

---

```txt id="mk7n9v"
MovieRepository
```

Responsible for:

```txt id="6iz3g7"
Saving and loading movies
```

Each class has one primary responsibility.

---

## Examples From Previous Projects

### Library

The Library was responsible for:

```txt id="xgq2g7"
Managing books
```

The Library did not create books.

The Library did not send emails.

The Library focused on managing its collection.

---

### ShoppingCart

The ShoppingCart was responsible for:

```txt id="1h23ko"
Managing cart items
```

The ShoppingCart did not create products.

The ShoppingCart did not process payments.

Its responsibility was limited to managing the cart.

---

### Playlist

The Playlist was responsible for:

```txt id="xbv1ob"
Managing media
```

The Playlist did not create songs or podcasts.

Its job was simply to manage media items.

---

## What Was Learned

A useful question emerged throughout these projects:

> Whose job is this?

Before adding a method to a class, it is important to ask whether that behavior truly belongs to the class.

Keeping responsibilities focused results in cleaner and more maintainable designs.

---

## Benefits of SRP

### Easier Maintenance

Smaller, focused classes are easier to understand and modify.

---

### Reduced Complexity

Each class has a clear purpose.

Developers spend less time figuring out what a class is responsible for.

---

### Improved Reusability

Classes with focused responsibilities are easier to reuse in other parts of an application.

---

### Better Organization

Responsibilities are clearly separated rather than mixed together.

---

## Common Mistakes

### Putting Unrelated Behavior Into One Class

A class should not become a dumping ground for unrelated functionality.

---

### Ignoring Reasons to Change

If a class would need modification for many unrelated reasons, it may have multiple responsibilities.

---

### Adding Methods Without Considering Ownership

Before adding behavior to a class, ask:

> Does this responsibility belong here?

---

## Review Questions

### What is the Single Responsibility Principle?

A class should have one primary responsibility and one primary reason to change.

---

### What is a responsibility?

A job or concern that belongs to a class.

---

### What is meant by "one reason to change"?

A class should only need modification when its primary responsibility changes.

---

### Why is it a problem for a Movie class to also send emails and save data?

Because those are separate responsibilities that introduce additional reasons for the class to change.

---

### What responsibility belongs to MoviePlayer?

Playing movies.

---

### What responsibility belongs to EmailService?

Sending emails.

---

### What responsibility belongs to MovieRepository?

Saving and loading movies.

---

### What question helps identify whether a responsibility belongs to a class?

"Whose job is this?"

---

### What was the primary lesson learned from previous projects?

Classes become easier to understand and maintain when they focus on a single responsibility.

---

## Key Takeaway

The Single Responsibility Principle encourages classes to focus on one job. Before adding new behavior to a class, ask whether that responsibility truly belongs there.
