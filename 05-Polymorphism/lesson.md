# 05 - Polymorphism

## Definition

Polymorphism is the ability for different objects to respond to the same method call in different ways.

In simple terms:

> Different objects can share the same interface while providing their own behavior.

The code using the objects does not need to know the specific type of object it is working with. It only needs to know that the object supports a particular method.

---

## Why Polymorphism Exists

Without polymorphism, programs often become filled with conditional logic.

Examples:

* if EmailNotification...
* if SMSNotification...
* if PushNotification...

As new object types are added, more conditions must be added throughout the codebase.

Polymorphism removes this need by allowing each object to decide how it should respond to the same method call.

This helps:

* Reduce conditional logic
* Improve flexibility
* Make code easier to extend
* Allow new object types to be added with minimal changes

---

## Key Concepts

### Shared Interface

Polymorphism works when multiple objects support the same method.

Examples:

```txt id="fc1g5g"
send()
```

or

```txt id="5l4qho"
play()
```

or

```txt id="lfp5jc"
draw()
```

The caller only needs to know that the method exists.

---

### Different Implementations

Even though the method name is the same, each object may perform a different action.

Examples:

```txt id="9t9lj2"
EmailNotification.send()

SMSNotification.send()

PushNotification.send()
```

Each object provides its own implementation of the same method.

---

### Treating Objects Uniformly

One of the major benefits of polymorphism is that different object types can be treated the same way.

Instead of worrying about the object's exact type, the program simply calls the shared method.

---

## Example From This Course

### Notification System

This topic was explored through the Notification project.

The project contained:

* Notification
* EmailNotification
* SMSNotification
* PushNotification

Each notification type supported the same method:

```txt id="dvgjht"
send()
```

However, each notification type implemented that method differently.

Examples:

```txt id="r63tcf"
EmailNotification
    sends an email

SMSNotification
    sends a text message

PushNotification
    displays a push notification
```

Even though the behavior was different, all notification objects could be treated as notifications.

---

## What Was Learned

The most important lesson from this project was that code can work with multiple object types without knowing exactly which type it is using.

The notification sender did not need to ask:

```txt id="65cml5"
Is this an EmailNotification?

Is this an SMSNotification?

Is this a PushNotification?
```

Instead, it simply called:

```txt id="v7i0ml"
send()
```

and allowed the object itself to determine what that meant.

This is polymorphism.

---

## Polymorphism vs Inheritance

Inheritance and polymorphism are closely related but they are not the same thing.

Inheritance is about:

> Sharing and extending functionality.

Polymorphism is about:

> Using different objects through the same interface.

Inheritance often makes polymorphism possible, but inheritance itself is not polymorphism.

---

## Common Mistakes

### Using Type Checks Everywhere

A common mistake is writing code that constantly checks object types.

Examples:

```txt id="5vh7b3"
if EmailNotification ...

if SMSNotification ...

if PushNotification ...
```

This defeats many of the benefits of polymorphism.

---

### Confusing Inheritance with Polymorphism

Inheritance creates relationships between classes.

Polymorphism allows code to work with different object types through a shared interface.

They are related concepts but serve different purposes.

---

### Creating Different Method Names

Polymorphism works best when objects share a common interface.

For example:

```txt id="k26ot5"
send()
```

for all notification types.

Using completely different method names makes it harder to treat objects uniformly.

---

## Review Questions

### What is polymorphism?

Polymorphism is the ability for different objects to respond to the same method call in different ways.

---

### Why is polymorphism useful?

It allows code to work with different object types without needing to know their exact type.

---

### What is a shared interface?

A common method that multiple object types support.

---

### What method formed the shared interface in the Notification project?

```txt id="r0b4wy"
send()
```

---

### Why did the notification sender not need to check object types?

Because every notification supported the same send() method.

---

### How is polymorphism different from inheritance?

Inheritance is about sharing and extending functionality.

Polymorphism is about using different objects through the same interface.

---

### What was the primary lesson learned from the Notification project?

Code can interact with many different object types through a shared method without needing to know the specific type of object being used.

---

## Key Takeaway

Polymorphism allows different objects to respond to the same method call in their own way, enabling flexible and extensible designs without relying on type checking or conditional logic.
