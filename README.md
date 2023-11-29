# Finetuning a Model on Replicate

[Official Replicate Documentation](https://replicate.com/docs/guides/fine-tune-a-language-model)

1. [Create a model](https://replicate.com/create)

2. Create a training data file.

For an instruction tuned model like [llama-2-7b-chat](https://replicate.com/meta/llama-2-7b-chat).

```jsonl
{
  "prompt": "Why did the chicken cross the road?",
  "completion": "To get to the other side."
}
```

For a "base" completion model like [llama-2-7b](https://replicate.com/meta/llama-2-7b).

```jsonl
{
  "text": "Why did the chicken cross the road? To get to the other side."
}
```

3. Upload the training file with `upload-file.js` and save the data url for the next step. (This is not required if you host your data file elsewhere.)

4. Run `finetune-model.js` with the model you created, your training data url, and the model you want to finetune.

```js
const destination = 'shiffman/your-model';
const trainingDataUrl = 'your-training-data-ur';
const modelOwner = 'meta';
const modelName = 'llama-2-7b';
const modelVersion = '77dde5d6c56598691b9008f7d123a18d98f40e4b4978f8a72215ebfc2553ddd8';
```

5. Test the model with `test-model.js`.
