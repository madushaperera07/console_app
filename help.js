const chalk = require('chalk');
const fs = require('fs');



const addApp = (name, age ,contact)=>{
                const dataset = dataLoad();
                const length = dataset.length;
                console.log(length)

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


module.exports = {
    add_x:addApp
}