
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

      let currentlyDisplayed = this.state.numDisplayed;
      let newlyDisplayed = currentlyDisplayed + 10;

      this.setState({
        numDisplayed: newlyDisplayed
      });
      
      setTimeout(() => {
        this.props.placements.slice(currentlyDisplayed, newlyDisplayed).forEach((placement, i) => {
          $(`.placement-${i+currentlyDisplayed}`).click(() => {
            $(`.description-${i+currentlyDisplayed}`).slideToggle('fast');
          })
        })

      }, 100);
    }

    this.state = {
      numDisplayed: 10
    }
  }

  componentDidMount() {
    if (!this.props.placements.length) {
      this.props.actions.fetchPlacements()
        .then(() => {
          return this.props.placements.forEach((placement, i) => {
            $(`.placement-${i}`).click(() => {
              $(`.description-${i}`).slideToggle('fast');
            })
          })
        })
        .then(() => {
          return this.props.actions.fetchPlacements(100, 10);
        })
        .then(() => {
          this.props.placements.forEach((placement, i) => {
            $(`.placement-${i+10}`).click(() => {
              $(`.description-${i+10}`).slideToggle('fast');
            })
          })
        })
        ;
    } else {
      this.props.placements.forEach((placement, i) => {
        $(`.placement-${i}`).click(() => {
          $(`.description-${i}`).slideToggle('fast');
        })
      })
    }
  }
  render() {
    const placements = this.props.placements;
    if (placements.length) {
      placements.forEach((placement, i) => {
        let split = placement.title.rendered.split(',');
        placement.title.head = utils.decodeEntities(split.slice(0, split.length - 1).join(','));
        placement.title.tail = utils.decodeEntities(split[split.length - 1]);
      })
    }
    let displayedPlacements = placements.slice(0, this.state.numDisplayed);

    return (
      <div className={classes.placements}>
        <div className={`${classes.inner} col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12`}>
          <hr className={classes.mainDivider}/>
          {
            displayedPlacements.length ?
            displayedPlacements.map((placement, i) => {
              return (
                <div className={`${classes.placement} col-lg-12 col-md-12 col-sm-12 col-xs-12 placement-${i}`} key={i}>
                  <p className={`${classes.date} date-${i}`}>{moment(placement.date).format('MMMM YYYY')}</p>
                  <h1>{placement.title.head}</h1><h4>{placement.title.tail}</h4>
                  <div className={`${classes.description} description-${i} col-lg-8 col-lg-offset-2`}>
                    <div dangerouslySetInnerHTML={{__html: placement.content.rendered}}></div>
                  </div>
                  {
                    i === displayedPlacements.length - 1 ?
                      "" : <hr/>
                  }
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