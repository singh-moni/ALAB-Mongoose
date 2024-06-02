const {Schema, model} = require('../config/db-connection');

const gradeSchema = new Schema({

    class_id:{
        type: Number,
        required:true
    },

    student_id:{
        type: Number,
        required: true
    },

    scores: [Number]
        
    
        
    

})
module.exports = model('Grade', gradeSchema);