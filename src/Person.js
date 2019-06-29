import  React from 'react';

class Person extends React.Component {
    constructor(props){
        super(props);
    }

render () {
    return(
        <div>
            <img src={this.props.img} />
            <h1 >{this.props.ism}</h1>
            <h3 >{this.props.abc}</h3>

        </div>   
    );
  };
}
export default Person



