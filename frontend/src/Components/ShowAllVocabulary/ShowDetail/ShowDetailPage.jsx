import "./ShowDetail.css";

const ShowDetailPage = (props) => {
    return (
        <div className={"show-detail-container"}>
            Hello {props.dataFromParent}
        </div>
    )
};

export default ShowDetailPage;
