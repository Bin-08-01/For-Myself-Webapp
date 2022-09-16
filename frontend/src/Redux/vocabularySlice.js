import {createSlice} from "@reduxjs/toolkit";

const vocabularySlice = createSlice({
    name: "vocabulary",
    initialState: {
        vocabulary: {
            isFetching: false,
            allVocabulary: null,
            error: false
        }
    },

    reducers: {
        getAllVocabularyStart: state => {
            state.vocabulary.isFetchin = true;
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
        }
    }
});

export const{
    getAllVocabularyStart,
    getAllVocabularySuccess,
    getAllVocabularyFailed,
} = vocabularySlice.actions;

export default vocabularySlice.reducer;