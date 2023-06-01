const yargs = require("yargs")
const req = require("./help")


yargs.command({
    command: "add",
    describe:"To add a guest",
    builder:{
            name:{
            describe:"Name",
            demandOption:true,
            type:"string"
        },
            age:{
            describe:"Age",
            demandOption:true,
            type : yargs.number
        },
            contact:{
            describe:"Contact No",
            demandOption:true,
            type: yargs.number
        }
    },
    handler:function(argv){
        req.add_x(argv.name , argv.age , argv.contact)
    }
})


yargs.parse()
