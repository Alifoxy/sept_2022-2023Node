const fs =require('fs');
const path =require('path');


fs.mkdir(path.join(__dirname, 'main' ),(error) => {
    if (error) throw new Error(error.message)
})

for (let i = 1; i <= 5; i++) {
    fs.mkdir(path.join(__dirname,'main',`dir ${i}` ),(error) => {
        if (error) throw new Error(error.message)
    })
    fs.appendFile(path.join(__dirname,'main',`file ${i}.txt` ),`text ${i}`,(error) => {
        if (error) throw new Error(error.message)
    })
}


fs.readdir(path.join(__dirname, 'main' ),(error, data) => {
    if (error) throw new Error(error.message)
    console.log(data);
})