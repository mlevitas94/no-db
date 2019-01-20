var heroes = [{
    "id": 1,
    "name": "Ana",
    "role": "Support"

},
{
    "id": 2,
    "name": "Reaper",
    "role": "Damage"

},
{
    "id": 3,
    "name": "Widowmaker",
    "role": "Damage"
}

];

id = heroes.length +1;


module.exports = {
    getHeroes : (req, res) => {
        res.status(200).send(heroes)
    },

    addHero : (req,res) => {
        const newId = heroes[heroes.length-1].id+1;

        const newHero = {
            "id": id,
            "name": req.body["name"],
            "role": req.body["role"]

        }

        id++;

        heroes.push(newHero);
        res.status(200).send(heroes)
    },

    editHero : (req, res) => {
        const {body} = req;

        heroes = heroes.map((hero) => {
            if(hero["id"] === body["id"]){
                hero["name"] = body["name"];
                hero["role"] = body["role"]
            }

            return hero
        })



        res.status(200).send(heroes)

        
    }

}