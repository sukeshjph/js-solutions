const data = require("../data.js");

module.exports = async function (context, req) {

    try {
        context.log('JavaScript HTTP trigger function processed a request.');

        const param1 = req.query?.param1 || null;
        const param2 = req.query?.param2 || null;
        const param3 = req.query?.param3 || null;

        if (!param1 || !param2 || !param3) {
            context.res = {
                status: 200,
                body: "Parameters missing",
            };

        }

        else {
            const filteredData = data[param1][param2][param3];
            context.res = {
                status: 200,
                body: filteredData,
            };
        }
    } catch (error) {
        context.log(`Server Error: ${error}`);
        context.res = {
            status: 500,
            body: `Server Error: ${error}`
        }

    }




};