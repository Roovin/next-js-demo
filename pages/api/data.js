import  * as fs  from 'fs';
export default function handler (req, res) {
    fs.readFile("json/blogData.json", "utf-8", (err, data) => {
        console.log(req.query);
        // console.log(data);
        res.status(200).json(JSON.parse(data));
    })
}