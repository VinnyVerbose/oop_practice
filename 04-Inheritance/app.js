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

class Warrior extends Character{
    constructor(name, health, attackPower){
        super(name, health, attackPower)
            this.shieldDefensePower = .5;
            this.isBlocking = false;
    }

    toggleShieldBlock(){
        this.isBlocking = !this.isBlocking;
    }

    takeDamage(amount){
        if(this.isAlive()){
            if(this.isBlocking){
                this.health = (this.health - amount) + (this.shieldDefensePower * amount);
                this.toggleShieldBlock();
            } else {
                this.health -= amount;
            }
        }
        
        if(this.health < 0){
            this.health = 0;
        }
    }
}

const warrior = new Warrior('Vinny', 100, 10);

console.log(warrior) // Warrior {name: 'Vinny', health: 100, attackPower: 10, shieldDefensePower: 0.5, isBlocking: false}
