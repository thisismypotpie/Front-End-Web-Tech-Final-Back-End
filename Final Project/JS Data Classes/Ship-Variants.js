const ship_types = {
    Small: 'small',
    Medium: 'medium',
    LargeOneCard: 'largeOneCard',
    LargeTwoCard: 'largeTwoCard'
}

class ship{
    constructor(ship_type, ship_name, attack, agility, shields, hull, maneuvers)
    {
        if(!ship_type)
        {
            throw new Error('Incorrect Ship type: '+ship_type);

        }
        //constant ship info
        this.ship_type = ship_type;
        this.ship_name = ship_name;
        this.attack = attack;
        this.agility = agility;
        this.shields = shields;
        this.hull = hull;
        this.maneuvers = maneuvers;
    }
}

class LargeShipOneCard extends ship{
    constructor(ship_type, ship_name, attack, agility, shields, hull, maneuvers, energy)
    {
        super(ship_type, ship_name, attack, agility, shields, hull, maneuvers);
        this.energy = energy;
    }
}

class LargeShipTwoCards extends LargeShipOneCard{
    constructor(ship_type, ship_name, attack, agility, shields, hull, maneuvers, energy, aft_agility, aft_hull, aft_shields, crippled_attack, crippled_energy)
    {
        super(ship_type, ship_name, attack, agility, shields, hull, maneuvers);
        this.energy = energy;
        this.aft_agility = aft_agility;
        this.aft_hull = aft_hull;
        this.aft_shields = aft_shields;
        this.crippled_attack = crippled_attack;
        this.crippled_energy = crippled_energy;
    }
}