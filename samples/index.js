const { readFileSync } = require('fs');
const path = require('path');


let samples = JSON.parse(
    readFileSync(
        path.resolve(
            path.join(
                __dirname,
                "xor.json"
            )
        ),
        'utf-8'
    )
);


samples = samples.map(
    (value) => (
        {
            input: value,
            output: [ value[0] ^ value[1] ]
        }
    )
);


module.exports = samples;
