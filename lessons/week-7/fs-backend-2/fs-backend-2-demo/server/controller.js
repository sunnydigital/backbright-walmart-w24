const housesDB = require('./houses.JSON')

let globalID = 4

module.exports = {
    'getHouses' : (req, res) => {
        res.status(200).send(housesDB)
    },

    'deleteHouse': (req, res) => {
        const { id } = req.params
        housesDB.filter((ele, index, arr) => {
            if( ele.id === id ) {
                arr.splice(index, 1)
                res.status(200).send('Successfully deleted house');
                return
            }
        })
        res.status(400).send('House not found')
    },

    'createHouse': (req, res) => {
        const { location, area, bedrooms, bathrooms, other } = req.body;

        let newHouse = {
            id: globalID,
            address,
            price,
            imageURL,
        }
        housesDB.push(newHouse);
         res.status(200).send(housesDB)
        globalID++
    },

    'updateHouse': (req, res) => {
        const { id } = req.params;
        const { type } = req.body;

        if( !id ) {
            res.status(400).send('House not found')
            return
        }
        const houseToBeUpdated = housesDB.filter(ele => ele.id = id)
        houseToBeUpdated[0].type = type > 0 ? houseToBeUpdated[0].type + 10000: houseToBeUpdated[0].type - 10000;
        res.status(200).send('Successfully updated house')
    }
}