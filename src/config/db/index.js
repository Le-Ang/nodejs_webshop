const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/nodejs_website_demo', {
        });
        console.log('Connect successfully')
    } catch (error) {
        console.log('Connect failure')
    }
}

module.exports = { connect }