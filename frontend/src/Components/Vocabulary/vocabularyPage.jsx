import "./vocabularyPage.css";
import {Link} from "react-router-dom";


const VocabularyPage = () => {

    return (
        <div className={"vocabulary-page-container"}>
            <h3 className={"choose-language-title"}>Language:</h3>
            <div className={"flashcard-container"}>
                <Link to={'/view?language=english'} className={"language-flashcard"}>
                    <div className={"image-language"}>
                        <img src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg" alt=""/>
                    </div>
                    <div className={"name-language"}>
                        <p>English</p>
                    </div>
                </Link>
                <Link to={'/view?language=france'} className={"language-flashcard"}>
                    <div className={"image-language"}>
                        <img src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg" alt=""/>
                    </div>
                    <div className={"name-language"}>
                        <p>France</p>
                    </div>
                </Link>
            </div>

        </div>
    )
};

export default VocabularyPage;
