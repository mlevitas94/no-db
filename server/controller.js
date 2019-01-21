const axios = require('axios')

var heroes = [

];

id = heroes.length +1;

axios.get('https://overwatch-api.net/api/v1/hero')
.then(response => {
    heroes = response.data[0];
    console.log(heroes)
})


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
                if(body["name"] !== ""){
                    hero["name"] = body["name"];
                }
                if(body["role"] !== ""){
                    hero["role"] = body["role"];
                }
            }

            return hero
        })



        res.status(200).send(heroes)

        
    },

    deleteHero: (req, res) => {
        console.log(req.params.id)
        heroes = heroes.filter(hero => 
        req.params.id !== ":" + hero["id"])

        res.status(200).send(heroes)
    }

}
