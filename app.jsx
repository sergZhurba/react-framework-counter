
var ImageCounter = function (props) {
    return (
        <div className="image-counter">
            <div className="count">{props.count}</div>
            <img src={'img/' + props.imageURL} onClick={props.onCount}/>
        </div>
    );
}


var Hero = React.createClass({
    getInitialState: function () {
        return {
           count: 0
        };
    },
    handleClick: function () {
        this.setState({ count: this.state.count + 1 });
    },
    render: function() {
        return (
            <div className="containeer">
                <ImageCounter imageURL={this.props.imageURL} count={this.state.count} onCount={this.handleClick} />
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
            </div>
        );
    }
});

var App = React.createClass({
    render: function () {
        return (
            <div>
                {this.props.heroes.map(function (hero) {
                    return <Hero key={hero.id}
                                 title={hero.title}
                                 subtitle={hero.subtitle}
                                 imageURL={hero.imageURL} />
                })}
            </div>
        );
    }
});

var data = [
    {
        id: 1,
        title: 'React',
        subtitle: 'Library for creating UI',
        imageURL: 'react.png'
    },
    {
        id: 2,
        title: 'Angular 4',
        subtitle: 'Other framework for creating UI',
        imageURL: 'angular.png'
    },
    {
        id: 3,
        title: 'Ember',
        subtitle: 'Framework for creating ambition web-aplication',
        imageURL: 'Ember.png'
    },
    {
        id: 4,
        title: 'Vue',
        subtitle: 'Progressive framework for ambition one',
        imageURL: 'vue.png'
    }
];

const place = document.getElementById('root');

ReactDOM.render(
             <App heroes={data} />,
    place);