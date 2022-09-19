
import {Link} from "react-router-dom";


const VocabularyPage = () => {

    return (
        <div className={"vocabulary-page-container"}>
            Language:
            <div>
                <Link to={'/view?language=english'}>English</Link>
            </div>
            <div>
                <Link to={'/view?language=france'}>France</Link>
            </div>

        </div>
    )
};

export default VocabularyPage;
