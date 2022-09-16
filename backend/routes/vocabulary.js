const router = require('express').Router();
const VocabularyController = require('../Controllers/VocabularyController');
const MiddlewareController = require('../Controllers/MiddlewareController');

router.post('/view/:language',VocabularyController.getAllWords);

router.post('/add/:language',VocabularyController.addVocabulary);

router.post('/update/:id', VocabularyController.updateVocabulary);

router.delete('/delete/:id', VocabularyController.deleteVocabulary);

module.exports = router;