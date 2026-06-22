# 01 - Classes and Objects

## Definition

A class is a blueprint used to create objects.

An object is an instance created from a class. Objects contain data and behavior that represent a specific thing in a program.

A class defines what an object should look like. An object is the actual thing created from that definition.

---

## Why Classes Exist

Without classes, developers often create many objects that share the same structure and behavior.

Classes allow us to define that structure once and create many objects from it.

Classes help:

* Organize related data and behavior
* Reduce duplication
* Create consistent object structures
* Model real-world concepts

---

## Key Concepts

### Properties

Properties are pieces of data stored on an object.

Examples:

* owner
* balance
* title
* author
* health

Properties describe the current state of an object.

---

### Methods

Methods are functions that belong to an object.

Examples:

* deposit()
* withdraw()
* attack()
* markRead()

Methods define what an object can do.

---

### Instances

An instance is a specific object created from a class.

One class can create many instances.

For example:

* Vinny's bank account
* Sarah's bank account
* John's bank account

These are separate instances created from the same BankAccount class.

---

## Example From This Course

Topic Project:

BankAccount

The BankAccount class represented:

Properties:

* owner
* balance

Methods:

* deposit()
* withdraw()
* getBalance()

The important lesson was that each account maintains its own state.

Changing one account does not automatically change another account.

---

## Reference vs Instance

One of the most important discoveries during this topic was understanding references.

Two separately created objects are independent.

However, two variables can point to the same object.

When that happens, both variables reference the same underlying data.

Changes made through one reference are visible through the other.

This is because objects are reference types in JavaScript.

---

## Common Mistakes

### Confusing Classes and Objects

A class is the blueprint.

An object is the thing created from the blueprint.

---

### Forgetting Assignment

Calculating a value is not the same thing as storing it.

A value must be assigned back to a property if you want the object's state to change.

---

### Assuming Objects Are Copied

Assigning one object variable to another does not create a copy.

Instead, both variables point to the same object unless a copy is explicitly created.

---

## Review Questions

### What is the difference between a class and an object?

A class is a blueprint.

An object is an instance created from that blueprint.

---

### What is an instance?

An instance is a specific object created from a class.

---

### What is the difference between a property and a method?

Properties store data.

Methods define behavior.

---

### Why do classes reduce duplication?

A class defines structure and behavior once, allowing many objects to be created from the same definition.

---

### Why can two objects created from the same class contain different data?

Each instance maintains its own state.

---

### Why can changing one variable sometimes affect another variable?

Because both variables may reference the same object.

---

## Key Takeaway

A class is a blueprint for creating objects. Each object created from that blueprint has its own state and behavior, while object references can allow multiple variables to point to the same underlying object.
