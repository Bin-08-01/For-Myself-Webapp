const router = require('express').Router();
const VocabularyController = require('../Controllers/VocabularyController');
const MiddlewareController = require('../Controllers/MiddlewareController');

router.get('/view/:language',VocabularyController.getAllWords);

router.post('/add/:language',VocabularyController.addVocabulary);

module.exports = router;