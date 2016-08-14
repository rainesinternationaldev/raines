import React from 'react';
import classes from './Placements.scss';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../../actions/placements';
import {connect} from 'react-redux';
import moment from 'moment';
import utils from '../utils';
import { ViewMore } from './ViewMore';

class Placements extends React.Component {
  constructor(props) {
    super(props);

    this.displayMorePlacements = () => {
      console.log('displaying more placements')
    }
  }

  componentDidMount() {
    if (!this.props.placements.length) {
      this.props.actions.fetchPlacements()
        .then(() => {
          this.props.placements.forEach((placement, i) => {
            $(`.date-${i}`).click(() => {
              console.log('toggling')
              $(`.description-${i}`).slideToggle('fast');
            })
          })
        });
    } else {
      this.props.placements.forEach((placement, i) => {
        $(`.date-${i}`).click(() => {
          console.log('toggling')
          $(`.description-${i}`).slideToggle('fast');
        })
      })
    }
  }
  render() {
    const placements = this.props.placements;
    
    return (
      <div className={classes.placements}>
        <div className={`${classes.inner} col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12`}>
          <hr/>
          {
            placements.length ?
            placements.map((placement, i) => {
              return (
                <div className={`${classes.placement} col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12`} key={i}>
                  <p className={`${classes.date} date-${i}`}>{moment(placement.date).format('MMMM YYYY')}</p>
                  <h1>{utils.decodeEntities(placement.title.rendered)}</h1>
                  <div className={`${classes.description} description-${i}`}>
                    <div dangerouslySetInnerHTML={{__html: placement.content.rendered}}></div>
                  </div>
                </div>
              )
            }) : ""
          }
          <ViewMore viewMore={this.displayMorePlacements}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  placements: state.wordpress.placements
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Placements);