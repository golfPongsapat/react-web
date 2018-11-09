import React, { Component } from 'react';
import '../App.css';
import { getProfile } from './actions'
import { connect } from 'react-redux'
import _ from 'lodash'
import { 
    Card, 
    CardTitle, 
    CardText, 
    CardActions, 
    Button
} from 'react-mdl';

class ProjectsList extends Component {
    constructor(props){
        super(props)
        this.state = { status: null };
    }

    componentWillMount(){
        {this.props.getProfile()}
    }

    renderData(){
            return(
                <div className="projects-grid">
                    {this.renderListProfile()}
                </div>

                
            )
        
    }


    renderListProfile(){
        console.log(this.props.userdata)
        return _.map((this.props.userdata), (item) => {
            return(
                <Card shadow={5} style={{minWidth: '450', margin: '35px'}}>
                    <CardTitle style={{color: '#fff', background: 'center / cover' }}>
                    <img 
                        style={{width: '300px',height: '200px',alignItems: 'center'}}  
                        src={item.owner.avatar_url}  />
                        
                    </CardTitle>
                    <CardText>
                        {item.description}
                    </CardText>
                    <CardActions border>
                    <Button 
                        colored 
                        onClick={()=> window.open(item.html_url)}
                    >
                        Open
                    </Button>
                    {item.owner.login}
                    </CardActions>
                </Card>
            )
        })
    }


    render() {
   
      return (
        <div>
            {this.renderData()}
        </div>
      );
    }

   
}
  

const mapStateToProps = ({ profiles }) =>{

    const { userdata  } = profiles;

   return { userdata  };
};



export default connect(mapStateToProps,{ 
    getProfile
})(ProjectsList);