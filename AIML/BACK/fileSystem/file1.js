//const fs = require('fs');
//const data = fs.readFileSync("./data.txt","utf-8");
//console.log(data);

//fs.appendFileSync("./data1.txt", " work from the another file","utf-8");
//fs.renameSync("./data3.txt", "./data5.txt");
//console.log(data);
//fs.unlinkSync("./data5.txt")


const fs = require('fs');
const data = fs.readFileSync("./data.txt","utf-8");
console.log(data);
if(data.match("H"))
{
    const newData = data.replace("H", "ABES");
    fs.writeFileSync("./data.txt", newData, "utf-8")
}

