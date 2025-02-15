import fs from 'fs'
import path from 'path'
import getConfig from 'next/config'

export default function handler (req, res) {
    // console.log(res);
    
  const { serverRuntimeConfig } = getConfig();

  console.log(serverRuntimeConfig);

  const dirRelativeToPublicFolder = 'multiImage'
  // console.log(dirRelativeToPublicFolder)

  const dir = path.join(serverRuntimeConfig.PROJECT_ROOT, './public/', dirRelativeToPublicFolder);

  // console.log(dir);

  const filenames = fs.readdirSync(dir);

  // console.log(filenames);

  const images = filenames.map(name => path.join('/', dirRelativeToPublicFolder, name))

  // console.log(images)



  res.status(200).json(images)

  // res.statusCode = 200
  // res.json(images);
  // console.log(res)
}