const Userlist = [
    {
        id:1,
        name:"Sara",
        username: "sara",
        age: 27,
        nationality: "Colombia",
        friends: [
            {
                id:2,
                name:"Antonia",
                username: "anto",
                age: 2,
                nationality: "Colombia"
            },
            {
                id:3,
                name:"Miguel",
                username: "luismi",
                age: 35,
                nationality: "Colombia"
            }
        ]
    },
    {
        id:2,
        name:"Antonia",
        username: "anto",
        age: 2,
        nationality: "Colombia",
        friends: [
            {
                id:3,
                name:"Miguel",
                username: "luismi",
                age: 35,
                nationality: "Colombia"
            }
        ]
    },
    {
        id:3,
        name:"Miguel",
        username: "luismi",
        age: 35,
        nationality: "Colombia"
    }
]

module.exports = { Userlist }