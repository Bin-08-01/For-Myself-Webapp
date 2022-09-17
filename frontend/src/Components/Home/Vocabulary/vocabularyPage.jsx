
import {Link} from "react-router-dom";


const VocabularyPage = () => {

    return (
        <div>
            Vocabulary
            <Link to={'/view?language=english'}>English</Link>
            <Link to={'/view?language=france'}>France</Link>

        </div>
    )
};

export default VocabularyPage;
