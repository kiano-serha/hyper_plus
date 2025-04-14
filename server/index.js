import express from 'express'
import axios from 'axios'
import bodyParser from 'body-parser';
import cors from 'cors'
import Together from 'together-ai'

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/test", async (req, res) => {
    const ollamaResponse = await callOllama(req.body.prompt);
    return res.json({ message: ollamaResponse });
})

async function callOllama(prompt) {
    try {
        const together = new Together({apiKey: '7d626ecde4ff33e23e2b315942d4f04d2ee6c4b570355dba48c5568f0e565848'});

        const response = await together.chat.completions.create({
            messages: [{ "role": "user", "content": prompt }],
            model: "meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8"
        });

        console.log(response.choices[0].message.content)
        // const response = await axios.post('http://localhost:11434/api/generate', {
        //     model: 'hf.co/RichardErkhov/m42-health_-_Llama3-Med42-8B-gguf:latest',
        //     prompt: prompt,
        //     stream: false
        // });
        // conseol.log(response.choices[0].message.content);
        return response.choices[0].message.content;
        // return response.data.response.trim();
    } catch (error) {
        console.error('Error calling Ollama:', error.message);
    }
}

app.listen(3000, function (error) {
    if (error) {
        console.log("something went wrong");
    } else {
        console.log("server is listening...");
    }
})