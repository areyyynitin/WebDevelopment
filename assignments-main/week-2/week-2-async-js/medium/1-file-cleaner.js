const fs = require('fs');


const cleanFile = (filePath) => {

    fs.readFile(filePath , 'utf-8' , (err , data) => {
        if(err){
            console.log("Error while reading a file" ,err);
            return;
        }

        const cleanedContent = data.replace(/\s+/g, ' ').trim();

        fs.writeFile(filePath , cleanedContent , 'utf-8' , (err , data) => {
            if(err){
                console.log('Error while writing a file');
            }
            console.log('File cleaned successfully')
        })
    })
}

cleanFile('1-file-cleaner.md');