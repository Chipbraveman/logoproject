// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import Watermark from 'image-watermark';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  try {
    const tobeWatermaked = req.body;
    console.log(tobeWatermaked);

    const options = {
      text: 'Your logo',
      color: 'rgba(0, 0, 0, 0.7)',
      align: 'dia1',
    };

    const watermarkedImages = await Promise.all(
      tobeWatermaked.map(async (img) => {
        const response = await axios.get(img, { responseType: 'arraybuffer' });
        const filename = path.basename(img);
        // console.log("path:" + __dirname + "--------name----" + filename);
        const filepath = path.join(__dirname, 'images', filename);
        const dir = path.dirname(filepath);
        // console.log(dir);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(filepath, response.data);
        console.log(response.data);

        return new Promise((resolve, reject) => {
          Watermark.embedWatermarkWithCb(filepath, options, function (err, outputPath) {
            if (err) {
              console.error(err);
              reject(err);
            } else {
              console.log('Successfully embedded watermark');
              console.log(outputPath);
              resolve(outputPath);
            }
          });
        });
      })
    );

    res.status(200).json({ success: watermarkedImages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
