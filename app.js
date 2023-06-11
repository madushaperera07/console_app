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


yargs.command({
    command: "list",
    describe:"list all guest",
    handler:function(){
        req.list_x()
    }
})

yargs.command({
    command: "read",
    describe:"read a guest",
    builder:{
        id:{
            describe:"ID",
            demandOption:true,
            type: yargs.number
        }
    },
    handler:function(argv){
        req.read_x(argv.id)
    }
})

yargs.command({
    command: "delete",
    describe:"delete a guest",
    builder:{
        id:{
            describe:"ID",
            demandOption:true,
            type: yargs.number
        }
    },
    handler:function(argv){
        req.delete_x(argv.id)
    }
})

yargs.parse()
