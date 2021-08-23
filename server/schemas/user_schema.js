// Define schema
var Schema = mongoose.Schema;

var UserModelSchema = new Schema({
  a_string: String,
  a_date: Date
});

// Compile model from schema
var UserModel = mongoose.model('user', UserModelSchema );