import {useDispatch, useSelector} from "react-redux";
import {getAllVocabulary} from "../../../Redux/apiVocabularyRequest";
import {Link, useSearchParams} from "react-router-dom";
import {useEffect} from "react";

const VocabularyPage = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const idUser = useSelector(state=>state.auth.login?.currentUser.user._id);
    useEffect(()=>{
        getAllVocabulary( searchParams.get('language'), dispatch, idUser);
    }, [searchParams.get('language')]);
    const x = useSelector(state=> state.vocabulary.vocabulary.allVocabulary.allVocabularies);
    return (
        <div>
            Vocabulary
            <Link to={'?language=english'}>English</Link>
            <Link to={'?language=france'}>France</Link>
            {searchParams.get('language') ? (<table border={"1"} width={"100%"}>
                <thead>
                <tr>
                    <th>Nghĩa gốc</th>
                    <th>Dịch</th>
                </tr>
                </thead>
                <tbody>
                {x?.map((eachs)=>{
                    return (
                        <tr className={eachs._id} key={eachs._id}>
                            <td><p>{eachs.original}</p></td>
                            <td><p>{eachs.translate}</p></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>)
                : (<div></div>)}
        </div>
    )
};

export default VocabularyPage;
