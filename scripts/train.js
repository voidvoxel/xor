const { readFileSync, writeFileSync } = require('fs');


const brain = require('brain.js');
const path = require('path');


const samples = require("../samples");


function train () {
    const model = new brain.NeuralNetworkGPU();

    model.train(samples);

    const modelJSON = model.toJSON();

    writeFileSync(
        path.resolve(
            path.join(
                __dirname,
                "..",
                "components",
                "xor.json"
            )
        ),
        JSON.stringify(modelJSON),
        'utf-8'
    );
}


train();
