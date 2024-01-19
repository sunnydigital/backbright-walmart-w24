module.exports = {
    'getAllUsers' : (req, res) => {
        res.status(200).send(usersDB);
    },

    'createNewUser' : (req, res) => {
        console.log(req.body)
        const {username, firstName, lastName, age} = req.body;
    
        if(!username || !firstName || !lastName){
            res.status(400).send('Forms cannot be empty');
            return
        }
    
        // insert into database
        let newUser = {
            userName : username,
            firstName : firstName,
            lastName : lastName,
            age : age
        };
    
        usersDB.push(newUser);
    
        // send a response to the client
        res.status(200).send(usersDB);
    },
    'updateUser' : (req, res) => {

        const {name} = req.params;
        const {username} = req.body;
    
        if(!username){
            res.status(400).send('User not found');
            return
        }
        const userToBeUpdated = usersDB.filter(el => el.username = name);
        userToBeUpdated[0].username = username;
        res.status(200).send('Successfully updated user');
    },

    'deleteUser' : (req, res) => {
        const {username} = req.params;
        usersDB.filter((el, index, arr) => {
            if(el.username === username){
                arr.splice(index, 1)
                res.status(200).send('Succesffuly deleted user');
                return
            }
        })
        res.status(400).send('User not found');
    }
}