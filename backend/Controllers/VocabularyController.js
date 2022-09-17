const Vocabulary = require('../models/vocabulary');

const VocabularyController = {
    getAllWords: async (req, res) => {
        try{
            const idUser = req.body.idUser;
            const allVocabularies = await Vocabulary.find({language: req.params.language, idUser});
            res.status(200).json({allVocabularies, idUser});
        }catch(err){
            res.status(500).json(err);
        }
    },

    findOneWord: async (req, res)=>{
        try {
            const idWord = req.params.id;
            const allVocabularies = await Vocabulary.findOne({_id: idWord});
            res.status(200).json({allVocabularies});
        }catch (err){
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
                idUser: req.body.idUser,
            });

            const vocabulary = await newVocabulary.save();
            res.status(200).json(vocabulary);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    
    updateVocabulary: async (req, res)=>{
        try{
            await Vocabulary.findByIdAndUpdate(req.params.id, {
                original: req.body.original,
                translate: req.body.translate,
                description: req.body.description,
            });
            res.status(200).json("Update successfully");
        }catch(err){
            res.status(500).json(err);
        }
    }
    ,

    deleteVocabulary: async (req, res)=>{
        try{
            await Vocabulary.findByIdAndDelete(req.params.id);
            res.status(200).json("Delete vocabulary successfully");
        }catch(err){
            res.status(500).json(err);
        }
    }
};

module.exports = VocabularyController;