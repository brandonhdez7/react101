function Comment(props) {
    return (
    <div className="Comment">
        <div className="UserInfo">
            <img className="Avatar"
                src={props.data.author.avatarUrl}
                alt={props.data.author.name}
            />
            <div className="UserInfo-name">
                {props.data.author.name}
            </div>
        </div>
        <div className="Comment-body">
            <h1>{props.commentHeading}</h1>
            <div className="Comment-text">{props.data.text}</div>
            <div className="Comment-date">
                {formatDate(props.data.date)}
            </div>
        </div>
        <div className="UserBadges">
            <div className="badge">{props.data.userBadge[0]}</div>
            <div className="badge">{props.data.userBadge[1]}</div>
            <div className="badge">{props.data.userBadge[2]}</div>
        </div>
    </div>
    );
   }