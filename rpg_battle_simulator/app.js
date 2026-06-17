/*

Project 4 — RPG Battle Simulator
Step 1 — Character

Create a class that represents a character in the game.

It should store:

A name
Current health
Attack power

It should be able to:

Attack another character
Take damage
Report whether it is still alive
Design Goal

This project introduces a new OOP concept:

Objects interacting with other objects.

Up until now you've mostly had objects managing their own state or collections of other objects.

In this project, one object will directly invoke behavior on another object.

Think about:

What information a character needs to know about itself.
What should happen when a character attacks another character.
Which object should be responsible for reducing health.
What should happen when health reaches zero or below.
Questions to Consider

Before coding, decide:

Should health ever become negative?
Should a dead character be allowed to attack?
What should the method that checks if a character is alive return?
Which class should enforce the rules of being alive or dead?

Once you've designed and implemented the Character class, we'll test it and then move on to introducing enemies and a battle manager.

*/

class Character{
    constructor(name, health, attackPower){
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
    }

    attack(enemy){
        if(this.isAlive()){
            enemy.takeDamage(this.attackPower);
        }
    }

    takeDamage(amount){
        if(this.isAlive()){
            this.health -= amount;
        }
        
        if(this.health < 0){
            this.health = 0;
        }
    }

    isAlive(){
        return this.health > 0;
    }
}

/*

New OOP Concept: Specialized Characters

Right now every character behaves identically.

What if we wanted:

Warrior → can use shieldBlock()
Mage → can use castSpell()
Archer → can use shootArrow()

Would you:

Keep adding methods to Character

or

Create new classes that build on Character

This is where inheritance enters the picture.

Before we go there, I'd like you to make one more small class:

Step 2 — Battle

Create a Battle class.

It should store:

fighter1
fighter2

And have methods such as:

fightRound()
isFinished()
getWinner()

The goal is for the Battle object to manage the fight instead of you manually calling attacks from outside.

That's another important OOP idea:

Move responsibility into the object that owns it.

Try designing the Battle class yourself before writing any code. Think about what information it should own and what responsibilities belong there.

*/


class Battle{
    constructor(fighter1, fighter2){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
    }

    fightRound(){
        while(this.isFinished()){
            this.fighter1.attack(this.fighter2);
            this.fighter2.attack(this.fighter1);
        }
        this.getWinner();
    }

    isFinished(){
        return this.fighter1.health > 0 && this.fighter2.health > 0 ? true : false;
    }

    getWinner(){
        if(this.fighter1.health > 0){
            return this.fighter1;
        }
        return this.fighter2;
    }
}