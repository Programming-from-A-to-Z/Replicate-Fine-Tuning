/*
RESPONSE=$(curl -s -X POST -H "Authorization: Token $REPLICATE_API_TOKEN" https://dreambooth-api-experimental.replicate.com/v1/upload/sample_data_processing_course.jsonl)

curl -X PUT -H "Content-Type: application/jsonl" --upload-file sample_data_processing_course.jsonl "$(jq -r ".upload_url" <<< "$RESPONSE")"

SERVING_URL=$(jq -r ".serving_url" <<< $RESPONSE)
echo $SERVING_URL
*/

import fs from 'fs';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const url =
  'https://dreambooth-api-experimental.replicate.com/v1/upload/sample_data_processing_course.jsonl';
const file = 'sample_data_processing_course.jsonl';

go();

async function go() {
  const response = await axios.post(
    url,
    {},
    {
      headers: {
        Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
      },
    }
  );
  const { upload_url, serving_url } = response.data;
  const fileStream = fs.createReadStream(file);
  await axios.put(upload_url, fileStream, {
    headers: {
      'Content-Type': 'application/jsonl',
    },
  });
  console.log(serving_url);
}
