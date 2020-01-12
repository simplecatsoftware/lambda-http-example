'use strict';

exports.Http = async (event) => {
    return {
        statusCode: 200,
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            event
        })
    };
};
