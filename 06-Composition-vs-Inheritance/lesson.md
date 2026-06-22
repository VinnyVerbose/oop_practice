# 06 - Composition vs Inheritance

## Definition

Composition and Inheritance are two different ways of creating relationships between classes and objects.

### Inheritance

Inheritance describes an:

> "is-a" relationship.

Examples:

* A Song is a Media.
* A Podcast is a Media.

A child class inherits properties and behavior from a parent class.

---

### Composition

Composition describes a:

> "has-a" relationship.

Examples:

* A Playlist has Media.
* A Library has Books.
* A ShoppingCart has CartItems.

An object contains or owns other objects.

---

## Why This Topic Exists

One of the most common mistakes in OOP is using inheritance for relationships that should be composition.

When designing a system, it is important to identify the actual relationship between objects.

The goal is not to ask:

> Can inheritance be used here?

The goal is to ask:

> What is the relationship between these objects?

Understanding this distinction leads to cleaner and more flexible designs.

---

## Key Concepts

### The "Is-A" Test

A useful way to identify inheritance is to ask:

> Is this object a specialized version of another object?

Examples:

```txt id="ec0m0m"
Song is a Media

Podcast is a Media
```

Because these statements are true, inheritance is appropriate.

---

### The "Has-A" Test

A useful way to identify composition is to ask:

> Does this object contain or own another object?

Examples:

```txt id="7ej3wc"
Playlist has Media

Library has Books

ShoppingCart has CartItems
```

Because these statements are true, composition is appropriate.

---

## Example From This Course

### Music Library Project

This topic was explored through the Music Library project.

The project contained:

* Media
* Song
* Podcast
* Playlist

---

### Inheritance Relationship

The following relationship used inheritance:

```txt id="uvh4q6"
Media
├─ Song
└─ Podcast
```

Song and Podcast inherited common properties from Media.

The shared properties included:

* name
* author

The specialized properties included:

* genre (Song)
* category (Podcast)

Inheritance was appropriate because:

```txt id="8rtqlm"
Song is a Media

Podcast is a Media
```

---

### Composition Relationship

The following relationship used composition:

```txt id="8b5znh"
Playlist
    has
Media
```

A Playlist stores Media objects.

A Playlist is not a Song.

A Playlist is not a Podcast.

Instead, it contains them.

Composition was appropriate because:

```txt id="0rf2fk"
Playlist has Media
```

---

## What Was Learned

The most important lesson from this project was that inheritance and composition solve different problems.

Inheritance is useful when an object is a specialized version of another object.

Composition is useful when an object contains, owns, or manages other objects.

Choosing the correct relationship makes systems easier to understand and extend.

---

## Why Composition Is Often Preferred

Inheritance creates a strong relationship between classes.

Changes to a parent class can affect every child class.

Composition is often more flexible because objects can be combined in different ways without creating additional class hierarchies.

This does not mean inheritance is bad.

It means inheritance should only be used when an actual "is-a" relationship exists.

---

## Common Mistakes

### Using Inheritance for Everything

Not every relationship should be modeled with inheritance.

Just because two objects are related does not mean one should inherit from the other.

---

### Ignoring the Actual Relationship

The best design usually becomes obvious when the relationship is identified correctly.

Ask:

> Is it a specialized version of another object?

or

> Does it contain another object?

---

### Creating Unnecessary Class Hierarchies

Inheritance should simplify a design, not complicate it.

If a relationship is really "has-a", composition is often the better choice.

---

## Review Questions

### What type of relationship does inheritance describe?

An "is-a" relationship.

---

### What type of relationship does composition describe?

A "has-a" relationship.

---

### Why was Song modeled using inheritance?

Because a Song is a specialized type of Media.

---

### Why was Podcast modeled using inheritance?

Because a Podcast is a specialized type of Media.

---

### Why was Playlist modeled using composition?

Because a Playlist contains Media objects rather than being a type of Media.

---

### What question helps identify inheritance?

"Is this object a specialized version of another object?"

---

### What question helps identify composition?

"Does this object contain or own another object?"

---

### What was the primary lesson learned from the Music Library project?

Choosing between composition and inheritance depends on the relationship between the objects being modeled.

---

## Key Takeaway

Use inheritance when an object is a specialized version of another object. Use composition when an object contains, owns, or manages another object.
