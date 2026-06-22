# 03 - Composition

## Definition

Composition is an OOP relationship where one object contains or is made up of other objects.

In simple terms:

> Composition describes a "has-a" relationship.

Examples:

* A Library has Books.
* A ShoppingCart has CartItems.
* A CartItem has a Product.

Composition allows complex objects to be built from simpler objects.

---

## Why Composition Exists

As applications grow, objects often need to work together.

Instead of creating one large object that contains all the data and behavior itself, composition allows responsibilities to be divided among smaller objects.

Composition helps:

* Organize related objects
* Reuse existing classes
* Reduce duplication
* Create more flexible designs
* Keep responsibilities focused

---

## Key Concepts

### Has-A Relationship

Composition is usually identified by asking:

> Does this object have another object?

Examples:

```txt
ShoppingCart has CartItems
CartItem has a Product
```

This is composition.

---

### Building Larger Objects

Composition allows larger systems to be built from smaller pieces.

Instead of one object doing everything, each object handles its own responsibility.

The larger object coordinates those smaller objects.

---

### Reuse

Composition allows existing objects to be reused in different situations.

A Product can exist independently.

A CartItem can contain a Product.

A ShoppingCart can contain CartItems.

Each object has a focused purpose.

---

## Example From This Course

### Shopping Cart Application

This topic was explored through the Shopping Cart project.

The project contained three classes:

* Product
* CartItem
* ShoppingCart

The relationships were:

```txt
ShoppingCart
    has
CartItems

CartItem
    has
Product
```

The ShoppingCart did not store raw product information directly.

Instead, it stored CartItem objects.

The CartItem did not duplicate product information.

Instead, it contained a Product object.

This is composition.

---

## What Was Learned

One important lesson from this project was that objects can be composed together to form larger systems.

Instead of storing separate values for:

* name
* price
* quantity

inside a ShoppingCart, those responsibilities were divided among multiple objects.

This made the design easier to understand and maintain.

---

## Composition vs Duplication

Without composition, information often gets duplicated.

For example, a ShoppingCart could store:

```txt
name
price
quantity
```

for every item directly.

Instead, composition allows a CartItem to contain a Product.

This keeps product information in one place and reduces duplication.

---

## Common Mistakes

### Storing Raw Data Instead of Objects

A common mistake is storing plain values when an object already exists to represent that information.

If a Product object exists, it is often better to store the Product object than to duplicate its data elsewhere.

---

### Giving One Object Too Many Responsibilities

Composition works best when each object has a focused responsibility.

Examples:

```txt
Product
    represents a product

CartItem
    represents a product and quantity

ShoppingCart
    manages cart items
```

Each class has a clear purpose.

---

### Confusing Composition and Inheritance

Composition answers:

> Has-a?

Inheritance answers:

> Is-a?

Examples:

```txt
ShoppingCart has CartItems
```

Composition.

```txt
Product is not a ShoppingCart
```

Therefore inheritance would not make sense here.

---

## Review Questions

### What is composition?

Composition is a relationship where one object contains or is made up of other objects.

---

### What type of relationship does composition describe?

A "has-a" relationship.

---

### Why is composition useful?

It allows larger systems to be built from smaller, focused objects.

---

### In the Shopping Cart project, what objects were composed together?

ShoppingCart contained CartItems, and CartItems contained Products.

---

### Why did CartItem contain a Product instead of duplicating product information?

To avoid duplication and keep product data in one place.

---

### What question can help identify composition?

"Does this object have another object?"

---

### What was the primary lesson learned from the Shopping Cart project?

Complex systems can be built by combining smaller objects that each have a focused responsibility.

---

## Key Takeaway

Composition allows larger objects and systems to be built from smaller objects through "has-a" relationships, creating designs that are easier to understand, maintain, and extend.
