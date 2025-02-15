import * as fs from 'fs'
export default function jsonData (req, res) {
    fs.readdir("json", (err, data)=>{
        console.log(data);
        res.status(200).json(data);
    });
}