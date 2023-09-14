// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const Dalle_API_KEY =
  "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";

  const promptText = req.body.promptText;
  console.log(promptText);

  // const promptText = `sophisticated and elegant logo for 'Happy' concept in 'Food' industry in blue and green color.
  //             logo design type is 'Iconic and Pictorial'. Only use well-known English word.`;

  const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
    apiKey: Dalle_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  
  const response = await openai.createImage({
    prompt: promptText,
    n: 4,
    size: "512x512",
  });

  // const ai_logo = response.data.data[0].url;
  const logoArrs = response.data.data;      ///this is response data which is array with url:value format for each item
  res.status(200).json({ success: logoArrs });
  // console.log(logoArrs);
  // res.status(500).json({ error: 'server pending' });
}