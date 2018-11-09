import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getProfile } from './actions';
import { search_change_text , getUser } from './actions';
import ProjectsList from './ProjectsList';
import { 
    Tabs,
    Tab, 
    Grid, 
    Cell, 
    Card, 
    CardTitle, 
    CardText, 
    CardActions, 
    Button, 
} from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 }
  }

  componentWillMount(){
    {this.props.getProfile()}
  }

  // onSearchChanged(text) {
  //   this.props.searchChanged(text);
  // }
  // onSearchPressed(text, sort, order, lang, perpage) {
  //     this.props.searchPressed(text, sort, order, lang, perpage)
  // }
  // onSortChanged(text) {
  //     this.props.sortChanged(text)
  // }
  // onLangChanged(text) {
  //     this.props.languageChanged(text)
  // }
  // onOrderChanged(text) {
  //     this.props.orderChanged(text)
  // }
  // onMaxPageChanged(text) {
  //     this.props.perpageChanged(text)
  // }

  onInputChange(term){
    this.props.search_change_text(term);
  }

  onPressKey(term){
      this.props.getUser(term);
  }
  
  renderSearch() {
    if(this.props.loading === false){
      return(
        <div>
          <h3> Found Data Repository = {this.props.data.items.length}</h3>
          <div className="projects-grid">
            {this.renderListUsers()}
          </div>
        </div>
      )
    }
  }

  renderData() {
    if(this.state.activeTab === 0){
      return(
        <ProjectsList/>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div>
        <Grid>
          <Cell col={10}>
            <div className="body-projects">
              <div>
                <input 
                  className="search-bar" 
                  value = {this.props.term}
                  onChange={(value)=>this.onInputChange(value.target.value)} 
                  placeholder="Seach"
                />
              </div>
              {"\n"}{"\n"}
            </div>
          </Cell>
          <Cell col={2}>
            <div>
              <button 
                className="button-search button2"
                onClick = {(value)=>this.onPressKey(value.target.value)}
                value = {this.props.term}
              > 
              Search
              </button>
            </div>
          </Cell>
        </Grid>
        <Grid>
          <Cell col={12}>
            {this.renderSearch()}
          </Cell>
        </Grid>
        </div>
              
          
      ) 
    }  
  }

  renderListUsers() {
    return _.map((this.props.data.items), (item) => {
      return(
          <Card shadow={5} style={{minWidth: '450', margin: '35px'}}>
            <CardTitle style={{color: '#fff', alignItems: 'center' }}>
            <img 
                style={{width: '300px',height: '200px'}}  
                src={item.owner.avatar_url}  />
                
            </CardTitle>
            <CardText>
              {item.description}
            </CardText>
            <CardActions border>
              <Button 
                colored 
                onClick={()=> window.open(item.owner.html_url)}
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
    return(
      <div>
        <Tabs 
          activeTab={this.state.activeTab} 
          onChange={(tabId) => this.setState({ activeTab: tabId })} ripple
        >
          <Tab>Project</Tab>
          <Tab>Search</Tab>
        </Tabs>
        
        <Grid>
          <Cell col={12}>
            <div className="content">{this.renderData()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = ({profiles}) =>{

  const { term, data , loading } = profiles;

 return { term ,  data , loading  };
};



export default connect(mapStateToProps,{ 
  search_change_text,
  getUser,
  getProfile
})(Projects);