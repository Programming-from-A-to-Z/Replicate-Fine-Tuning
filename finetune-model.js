import Replicate from 'replicate';

import dotenv from 'dotenv';
dotenv.config();

const replicate = new Replicate({ auth: process.env.REPLICATE_API_TOKEN });

const destination = 'itpnyu/sample-finetune-processing-course';
const trainingDataUrl =
  'https://replicate.delivery/pbxt/JxWNa8gd3uZvUq3dCATCV1UBt7VjBf0F4YKVG4tedx7petvy/sample_data_processing_course.jsonl';
const modelOwner = 'meta';
const modelName = 'llama-2-7b';
const modelVersion = '77dde5d6c56598691b9008f7d123a18d98f40e4b4978f8a72215ebfc2553ddd8';

async function finetune() {
  const training = await replicate.trainings.create(modelOwner, modelName, modelVersion, {
    destination,
    input: {
      train_data: trainingDataUrl,
    },
  });
  console.log(`URL: https://replicate.com/p/${training.id}`);
}

finetune();
