function calcAbilityMod(ability:number){
    ability = Math.floor(ability / 2) - 5

    return ability
}


export {calcAbilityMod}