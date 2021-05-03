const rimraf = require('rimraf');
const { mediaMaker } = require('./mediaMaker');

const GENERATE_MEDIA_PATH = 'C:\\Users\\tmd-pc\\Videos\\TESTING';

mediaMaker(GENERATE_MEDIA_PATH);

// REMOVE TEST FOLDER

// rimraf.sync(GENERATE_MEDIA_PATH);
