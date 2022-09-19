import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {deleteVocabulary, findVocabulary, getAllVocabulary} from "../../Redux/apiVocabularyRequest";
import {useEffect} from "react";
import './style.css';

const ShowAllVocabulary = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const idUser = useSelector(state => state.auth.login?.currentUser.user._id);
    const navigate = useNavigate();
    const language = searchParams.get('language');
    useEffect(() => {
        getAllVocabulary(searchParams.get('language'), dispatch, idUser);
    }, [searchParams.get('language')]);
    const x = useSelector(state => state.vocabulary.vocabulary.allVocabulary.allVocabularies);

    const handleEdit = (e) => {
        const id = e.target.id;
        findVocabulary(dispatch, id);
        navigate(`/edit?language=${language}&id=${id}`);
    }

    const handleDelete = (e) => {
        const id = e.target.id;
        navigate('/delete');
        deleteVocabulary(dispatch, navigate, id, language);
    }


    return (
        <div>
            <h1>{searchParams.get('language')}</h1>
            <Link to={`/add?language=${searchParams.get('language')}`}>Add</Link>
            {(searchParams.get('language')) ? (
                    <table border={"1"} width={"100%"}>
                        <thead>
                        <tr>
                            <th>Nghĩa gốc</th>
                            <th>Dịch</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {x?.map((eachs) => {
                            return (
                                <tr className={eachs._id} key={eachs._id}>
                                    <td><p>{eachs.original}</p></td>
                                    <td><p>{eachs.translate}</p></td>
                                    <td>
                                        <span id={eachs._id} onClick={handleEdit}>Edit</span>
                                    </td>
                                    <td><p onClick={handleDelete} id={eachs._id}>Delete</p></td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>)
                : (<div></div>)}
        </div>
    )
};

export default ShowAllVocabulary;
