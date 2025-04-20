const testCharacter = {
    name: "Lancelot",
    Background: "Noble",
    img: "",
    profBonus: 2,
    skillProf: [
        {title: "Athletics", profiency: 1},
        {title: "Animal Handling", profiency: 1},
        {title: "Acrobatics", profiency: 0},
        {title: "Arcana", profiency: 0},
        {title: "Deception", profiency: 0},
        {title: "History", profiency: 0},
        {title: "Insight", profiency: 0},
        {title: "Intimidation", profiency: 0},
        {title: "Investigation", profiency: 0},
        {title: "Medicine", profiency: 0},
        {title: "Nature", profiency: 0},
        {title: "Perception", profiency: 0},
        {title: "Performance", profiency: 0},
        {title: "Persuasion", profiency: 0},
        {title: "Religion", profiency: 0},
        {title: "Sleight of Hand", profiency: 0},
        {title: "Stealth", profiency: 0},
        {title: "Survival", profiency: 0}
    ],
    class: [{ class: "Paladin", Subclass: "Oath of Vengance", level: 2 }],
    feats: [{
        title: "Polearm Master",
        description: 
        `You gain the following benefits.

Ability Score Increase. Increase your Dexterity or Strength by 1, to a maximum of 20.

Pole Strike. Immediately after you take the Attack action and attack with a Quarterstaff , a Spear, or a weapon that has the Heavy and Reach properties, you can use a Bonus Action to make a melee attack with the opposite end of the weapon. The weapon deals Bludgeoning damage, and the weapon's damage die for this attack is a d4.

Reactive Strike. While you're holding a Quarterstaff, a Spear, or a weapon that has the Heavy and Reach properties, you can take a Reaction to make one melee attack against a creature that enters the reach you have with that weapon.`,
        source: "PHB p.206"
    }],
    features: [{
        title: "Lay on hands",
        description: `Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you finish a Long Rest. With that pool, you can restore a total number of Hit Points equal to five times your Paladin level.

As a Bonus Action, you can touch a creature (which could be yourself) and draw power from the pool of healing to restore a number of Hit Points to that creature, up to the maximum amount remaining in the pool.

You can also expend 5 Hit Points fr`,
        source: "Paladin",
        reference: "PHB p.109"
    }]
}

export default testCharacter;