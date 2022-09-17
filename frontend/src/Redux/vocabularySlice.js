import {createSlice} from "@reduxjs/toolkit";

const vocabularySlice = createSlice({
    name: "vocabulary",
    initialState: {
        vocabulary: {
            isFetching: false,
            allVocabulary: null,
            error: false,
            success: false,
            result: null
        },
    },

    reducers: {
        getAllVocabularyStart: state => {
            state.vocabulary.isFetching = true;
        },
        getAllVocabularySuccess: (state, actions) => {
            state.vocabulary.isFetching = false;
            state.vocabulary.allVocabulary = actions.payload;
            state.vocabulary.error = false;
        },
        getAllVocabularyFailed: (state) => {
            state.vocabulary.error = true;
            state.vocabulary.isFetching = false;
            state.vocabulary.allVocabulary = null;
        },

        addVocabularyStart: (state) => {
            state.vocabulary.isFetching = true;
        },
        addVocabularySuccess: state => {
            state.vocabulary.isFetching = false;
            state.vocabulary.success = true;
            state.vocabulary.error = false;
        },
        addVocabularyFailed: state => {
            state.vocabulary.isFetching = false;
            state.vocabulary.error = true;
            state.vocabulary.success = false;
        },

        updateVocabularyStart: state => {
            state.vocabulary.isFetching = true;
        },
        updateVocabularySuccess: state => {
            state.vocabulary.isFetching = false;
            state.vocabulary.success = true;
            state.vocabulary.error = false;
        },
        updateVocabularyFailed: state => {
            state.vocabulary.isFetching = false;
            state.vocabulary.error = true;
            state.vocabulary.success = false;
        },

        searchOneVocabularyStart: state => {
            state.vocabulary.isFetching = true;
        },
        searchOneVocabularySuccess: (state, actions) => {
            state.vocabulary.success = true;
            state.vocabulary.isFetching = false;
            state.vocabulary.result = actions.payload;
        },
        searchOneVocabularyFailed: (state) => {
            state.vocabulary.isFetching = false;
            state.vocabulary.error = true;
            state.vocabulary.success = false;
            state.vocabulary.result = null;
        },

        deleteVocabularyStart: state => {
            state.vocabulary.isFetching = true;
        },
        deleteVocabularySuccess: state => {
            state.vocabulary.isFetching = false;
            state.vocabulary.success = true;
            state.vocabulary.error=false;
        },
        deleteVocabularyFailed: state => {
            state.vocabulary.isFetching = false;
            state.vocabulary.error = true;
            state.vocabulary.success = false;
        }
    }
});

export const {
    getAllVocabularyStart,
    getAllVocabularySuccess,
    getAllVocabularyFailed,
    addVocabularyStart,
    addVocabularySuccess,
    addVocabularyFailed,
    updateVocabularyStart,
    updateVocabularySuccess,
    updateVocabularyFailed,
    searchOneVocabularyStart,
    searchOneVocabularySuccess,
    searchOneVocabularyFailed,
    deleteVocabularyStart,
    deleteVocabularySuccess,
    deleteVocabularyFailed,
} = vocabularySlice.actions;

export default vocabularySlice.reducer;