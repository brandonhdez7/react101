// every react componets must return a single dom element

function Card(props){
    console.log(props)
    const name = props.name;
    const title = props.title;
    const image = props.image;
    const saleOn =  true;
    return(
        // <div className="row">
            <div className="col s2">
                <div className="card hoverable small">
                    <div className="card-image">
                        <img src={props.data.image} />
                    </div>
                    <div className="card-content">
                        <p>{props.data.course}</p>
                        <p>{props.data.instructor}</p>
                    </div>
                    <div className="card-action">
                        <a href="#">${saleOn ? 9.99 : 59.99}</a>
                    </div>
                </div>
            </div>    
        // </div>
    )
}