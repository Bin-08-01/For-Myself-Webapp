import {useNavigate, useSearchParams} from "react-router-dom";
import "./style.css";
import {useDispatch, useSelector} from "react-redux";
import {addVocabulary, updateVocabulary} from "../../Redux/apiVocabularyRequest";
import {useState} from "react";

const AddVocabulary = () => {
    const [original, setOriginal] = useState("");
    const [translate, setTranslate] = useState("");
    const [description, setDescription] = useState("");
    const [wordType, setWordType] = useState("");
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const idUser = useSelector(state => state.auth.login?.currentUser.user._id);
    const vocabulary = useSelector(state => state.vocabulary.vocabulary.result?.allVocabularies);
    const idWord = searchParams.get('id');
    const language = searchParams.get('language');

    const upcaseFirstLetter = (str)=>{
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newVocabulary = {
            language: language,
            original: upcaseFirstLetter(original),
            wordType: wordType,
            translate: upcaseFirstLetter(translate),
            description: upcaseFirstLetter(description),
            idUser: idUser,
        }
        if(!idWord){
            addVocabulary(dispatch, navigate, newVocabulary, language);
        }else{
            updateVocabulary(dispatch,navigate, newVocabulary, idWord, language);
        }
    }
    return (
        <div className={"add-vocabulary-container"}>
            <div className={"form-add-vocabulary-container"}>
                <form onSubmit={handleSubmit} className={"form-add-vocabulary"}>
                    <h1 className={"title-form"}>{idWord ? ("Edit") : (`Add ${searchParams.get('language')}`)}</h1>
                    <p>Original</p>
                    <input type="text" onChange={e => setOriginal(e.target.value)} placeholder={idWord?(`${vocabulary.original}`):("Original")}/>
                    <p>Word Type</p>
                    <select name="wordType" id="word-type-select" onChange={(e)=>setWordType(e.target.value)}>
                        <option value="">--Select--</option>
                        <option value="adj">Adjective</option>
                        <option value="adv">Adverb</option>
                        <option value="conj">Conjunctions</option>
                        <option value="n">Noun</option>
                        <option value="pre">Prepositions</option>
                        <option value="v">Verb</option>
                    </select>
                    <p>Translate</p>
                    <input type="text" name={'translate'} onChange={e => setTranslate(e.target.value)} placeholder={idWord?(`${vocabulary.translate}`):("Translated")}/>
                    <p>Description</p>
                    <input type="text" name={'description'} onChange={e => setDescription(e.target.value)} placeholder={idWord?(`${vocabulary.description}`): ('Description')}/>
                    <button type={"submit"}>{idWord ? ("Edit") : "Add"}</button>
                </form>
            </div>
        </div>
    )
};

export default AddVocabulary;
