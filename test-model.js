import Replicate from 'replicate';
import * as dotenv from 'dotenv';
dotenv.config();

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const version = 'c36e2630dd1471609acd290f9cfeb92a47f2419f6695481b07154408ab87d3b7';
const model = 'itpnyu/sample-finetune-processing-course';

go();

async function go() {
  const input = {
    prompt: 'Drawing a circle in Processing is as easy as...',
  };
  const output = await replicate.run(`${model}:${version}`, { input });
  console.log(output.join('').trim());
}
