const Vocabulary = require('../models/vocabulary');

const VocabularyController = {
    getAllWords: async (req, res) => {
        try{
            const allVocabularies = await Vocabulary.find({language: req.params.language});
            res.status(200).json(allVocabularies);
        }catch(err){
            res.status(500).json(err);
        }
    },

    addVocabulary: async (req, res) => {
        try {
            const newVocabulary = await new Vocabulary({
                language: req.params.language,
                original: req.body.original,
                translate: req.body.translate,
                description: req.body.description,
            });

            const vocabulary = await newVocabulary.save();
            res.status(200).json(vocabulary);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};

module.exports = VocabularyController;