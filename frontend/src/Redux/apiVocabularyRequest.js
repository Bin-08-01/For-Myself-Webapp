import {
    addVocabularyFailed,
    addVocabularyStart,
    addVocabularySuccess, deleteVocabularyFailed, deleteVocabularyStart, deleteVocabularySuccess,
    getAllVocabularyFailed,
    getAllVocabularyStart,
    getAllVocabularySuccess, searchOneVocabularyFailed,
    searchOneVocabularyStart, searchOneVocabularySuccess,
    updateVocabularyFailed,
    updateVocabularyStart,
    updateVocabularySuccess
} from './vocabularySlice';
import axios from "axios";

export const getAllVocabulary = async (language, dispatch, idUser) => {
    dispatch(getAllVocabularyStart());
    try{
        const data = await axios.post(`/v2/language/view/${language}`, {idUser: idUser});
        dispatch(getAllVocabularySuccess(data.data));
    }catch (err){
        dispatch(getAllVocabularyFailed());
    }
}

export const addVocabulary = async (dispatch, navigate, newVocabulary, language)=>{
    dispatch(addVocabularyStart());
    try {
        await axios.post(`/v2/language/add/${language}`, newVocabulary);
        dispatch(addVocabularySuccess());
        navigate(`/view?language=${language}`);
    }catch (err){
        dispatch(addVocabularyFailed());
    }
}

export const findVocabulary = async (dispatch, idVocabulary)=>{
    dispatch(searchOneVocabularyStart());
    try {
        const data = await axios.post(`/v2/language/search/${idVocabulary}`);
        dispatch(searchOneVocabularySuccess(data.data));
    }catch (err){
        dispatch(searchOneVocabularyFailed());
    }
}

export const updateVocabulary = async (dispatch, navigate, vocabulary, id, language) =>{
    dispatch(updateVocabularyStart());
    try {
        await axios.post(`/v2/language/update/${id}`, vocabulary);
        dispatch(updateVocabularySuccess());
        navigate(`/view?language=${language}`);
    }catch (err){
        dispatch(updateVocabularyFailed());
    }
}

export const deleteVocabulary = async (dispatch, navigate,id, language) =>{
    dispatch(deleteVocabularyStart());
    try {
        await axios.delete(`/v2/language/delete/${id}`);
        dispatch(deleteVocabularySuccess());
        navigate(`/view?language=${language}`);
    }catch (err){
        dispatch(deleteVocabularyFailed());
    }
}