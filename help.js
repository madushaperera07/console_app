const chalk = require('chalk');
const fs = require('fs');



const addApp = (name, age ,contact)=>{
                const dataset = dataLoad();
                const length = dataset.length;

                let id = length + 1;
                
                dataset.push({
                id,
                Name : name,
                Age : age,
                Contact : contact
            });
            saveData(dataset);

    
    console.log(chalk.blue("Data added!")) 
}
const saveData = (dataset) => {
    const ourData = JSON.stringify(dataset)
    fs.writeFileSync("saveData.json", ourData)
}

const dataLoad = () =>{
    try{
        const dataBaffer = fs.readFileSync("saveData.json")
        const datas = JSON.parse(dataBaffer)
        return datas;
    }catch(e){
        return [];
    }
}

const listApp = ()=>{
    console.log(chalk.yellow("Data List"))
    const dataset = dataLoad();
    dataset.forEach(element => {
        console.log(element)
    });
}

const readApp = (id)=>{
    const dataset = dataLoad();
    const findData = dataset.find((findData) =>{
        return findData.id === id;
    })

    if(findData){
        console.log(chalk.white("Read data"))
        console.log(findData)
    }else{
        console.log(chalk.white.inverse(`No Record Found ${id}`))
    }
    
}

const deleteApp = (id)=>{
    const dataset = dataLoad();
    const newdataset = dataset.filter((newdataset)=>{
        return newdataset.id!== id
    })

    if( dataset.length > newdataset.length){
        saveData(newdataset)
        console.log(chalk.red("Delete" , id))
    }else{
        console.log(`No Record Found ${id}`)
    }
}


module.exports = {
    add_x:addApp,
    list_x:listApp,
    read_x:readApp,
    delete_x:deleteApp
}