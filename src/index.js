const { readFileSync } = require('fs');


const brain = require('brain.js');
const path = require('path');


const model = new brain.NeuralNetworkGPU();

const modelPath = path.resolve(
    path.join(
        __dirname,
        "..",
        "components",
        "xor.json"
    )
);

const modelJSON = JSON.parse(
    readFileSync(
        modelPath,
        'utf-8'
    )
);

model.fromJSON(modelJSON);


function run (...input) {
    // Get the neural network's prediction.
    let output = model.run(input);

    // Round the output.
    output = Math.round(output);

    // Return the output.
    return output;
}


module.exports = run;
