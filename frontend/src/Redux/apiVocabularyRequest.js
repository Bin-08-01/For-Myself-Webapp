import {getAllVocabularyFailed, getAllVocabularyStart, getAllVocabularySuccess} from './vocabularySlice';
import axios from "axios";

export const getAllVocabulary = async (language, dispatch, idUser) => {
    dispatch(getAllVocabularyStart());
    try{
        const data = await axios.post(`http://localhost:3107/v2/language/view/${language}`, {idUser: idUser});
        dispatch(getAllVocabularySuccess(data.data));
    }catch (err){
        dispatch(getAllVocabularyFailed());
    }
}