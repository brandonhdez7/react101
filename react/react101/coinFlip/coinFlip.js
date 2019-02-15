class CoinFlip extends React.Component{
//     the first thing we do in any class
    constructor(props){
    // in order to get the cool stuff that is react.Component..Component
        super(props)
        // react doesnt care bout heads or tails
        this.heads = "buffalo-nickel-heads.jpg"
        this.tails = "buffalo-nickel-tails.png"
        this.coin = [
            this.heads,
            this.tails
        ]
        // state is Special . React cares about states a lot 
        this.state = {
            image: this.coin[0]
        }
        this.flipCoin = this.flipCoin.bind(this)
    }

    flipCoin(){
        // any time state changes render method runs
        console.log("flip coin ran!!")
        // you never change/mutate state directly. 
        // that is reacts job.. you will kill your app
        let coinSide = Math.round(Math.random()); //0,1
        this.setState({
            image: this.coin[coinSide] 
        })
        // never do this 
        // this.state.image = this.coin[coinSide]
    }

    // local class method
    // every class components, must have a render 
    render(){
        // this is my job to render a single DOM element
        // where you like it or not render will run after the contructor
        return(
            <div className="coin-flip">
            <button onClick={this.flipCoin}>Flip</button>
                <img src={this.state.image} />
            </div>
        )
    }
}