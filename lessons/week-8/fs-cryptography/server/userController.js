const bcrypt = require('bcryptjs')

const database = [
  {
    email: 'sallybonnet@yahoo.com',
    passwordHash: 'g16b3r!$h',
    destiny: 'becoming the new Santa'
  },
]

const destinies = [
  'become a well-respected bartender',
  'cure cancer',
  'become a bear whisperer',
  'become a hoarder',
  'become the lead in a high-budget film, filling in for Henry Cavill when he unexpectedly goes MIA',
  'summit Everest',
  'become the next Bruce Willis',
]

module.exports = {
  signup : (req, res) => {
    const { email, password } = req.body
    let destiny = destinies[Math.floor(Math.random()*items.length)];
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);
    const newUser = {
      email: email,
      password: passwordHash,
      destiny: destiny
    }
    database.append(newUser)
    console.log(`New user name: ${newUser}`)
    res.status(200).send({success: true})

  },
  login : (req, res) => {
      const { email, password } = req.body
      let entry
      for ( let i = 0; i < database.length; i++ ) {
        if ( database[i].email === email ) {
          entry = database[i]
          break
        }
      }
      if( !entry ) {
        res.status(400).send({success: false, message: 'Invalid username'})
      }
      else if ( bcrypt.compareSync(password, userData.passwordHash) ) {
        res.status(200).send({success: true, destiny: entry.destiny})
      }
      else {
        res.status(400).send({success: false, message: 'Invalid password'})
      }
  }
}