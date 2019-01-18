var heroes = [{
    "id": 1,
    "name": "Ana",
    "role": "Support"

},
{
    "id": 2,
    "name": "Reaper",
    "role": "Damage"

}

];


module.exports = {
    getHeroes : (req, res) => {
        res.status(200).send(heroes)
    },

    addHero : (req,res) => {
        const newId = heroes[heroes.length-1].id+1;

        const newHero = {
            "id": newId,
            "name": req.body["name"],
            "role": req.body["role"]

        }

        heroes.push(newHero);
        res.status(200).send(heroes)
    },



}