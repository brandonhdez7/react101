function Header(props){
    return(
        <div className="header">
            <h1>{props.title}</h1>
        </div>
    )
}
function Counter(props){
    return(
    <div className="counter">
    <div className="buttons">
        <button className="minus waves-effect waves-light btn" >-</button>
        <button className="plus waves-effect waves-light btn">+</button>
    </div>
        <div className="player-score">0</div>
    </div>
    )
}

function Player(props){
    return(
    <div className="player">
        <div className="player-name">{props.name}</div>
        <Counter />
    </div>
    )
}





// Application is uppercase.. which means is a component

// all components,without excepton must return a single dom element
function Application(props){
    return(
        <div className="container">
            <div className="board">
                <div className="title">
                    < Header title={props.title}/>
                </div>
                <div className="players">
                    <div className="player1">
                        <Player name="Ryan"/>
                    </div>
                    <div className="player2">
                        <Player name="Brian"/>
                    </div>
                </div>
            </div>
        </div>
    )
}


// ReactDOM.render puts react stuff in the DOM
// it takes to Arg 
// 1.what
// 2.where
ReactDOM.render(
    <Application title="ping pong Tournament"/>,
    document.getElementById('root')
);