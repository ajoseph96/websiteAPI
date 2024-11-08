

const {NODE_ENV = "production"} = process.env;
// const{} = require("webpack");
const {resolve} = require("path");



module.exports = function (env){
    // const onBuildEndScripts = [];
   

    // if (NODE_ENV !== "production"){
    //     //add dev script
    // }

    
    // const plugins = [
    //     const {}
    // ];

    return{
        entry: "./src/app.ts",
        target: "node",
        mode: NODE_ENV,
        optimization: {
            nodeEnv: false,
        },
        module: {
            rules:[{
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            ],
        },
        output: {
            path: resolve (__dirname, "dist"),
            filename: "app.js",
        },
    };
}