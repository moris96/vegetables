const React = require('react');

class Index extends React.Component{
    render(){
        const {vegetables} = this.props
        return(
            <div>
                <h1>Vegetable Index Page</h1>
                <ul>
                    {
                        vegetables.map((vegetable) => {
                            const {name, color, readyToEat} = vegetable
                            return (
                                <li key={vegetable._id}>
                                    <a href={`/vegetables/${vegetable._id}`}>
                                    {name}</a> is {color}
                                    
                                     <br/>
                                    {
                                        readyToEat? 
                                        'It\'s ready to eat':
                                        'It\'s not ready to eat'
                                    }
                                    <br/>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index