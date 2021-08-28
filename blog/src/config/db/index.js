const mongoose = require('mongoose');

async function connect() {

        try {
            await mongoose.connect('mongodb://localhost:27017/F8_Education_dev', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true
            });

            console.log('Connect successfully!!!!')
        } catch (error) {
            
            console.log('Connect Failure !!!!')
        }

}


module.exports = { connect };