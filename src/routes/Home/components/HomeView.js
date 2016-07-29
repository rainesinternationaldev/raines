import React from 'react'
import SignupBar from '../../../components/SignupBar';
import splashImage from '../assets/city.png'
import classes from './HomeView.scss';
import moment from 'moment';
import {Link} from 'react-router';
import {bindActionCreators} 	from 'redux';
import * as actionCreators  	from '../../../actions/posts';
import {connect} 							from 'react-redux';

class HomeView extends React.Component {
  constructor(props) {
		super(props);

    this.state = {
      categories: {
        306:  'All Posts',
        307:  'Career Transition',
        44:   'CEO',
        825:  'Consulting',
        862:  'Diversity',
        27:   'Interview Tips',
        446:  'Offers',
        264:  'Startups'
      }
    }
	}

  componentWillMount() {
    this.props.actions.fetchPosts()
    console.log(this.props.wordpress.posts)
  }

  render() {
    const posts = this.props.wordpress.posts;
    let featuredPost;
    let secondPost;
    let thirdPost;
    let fourthPost;
    let imgSrc;
    if (posts.length) {
      const mainPost = posts[0];
      const contentStr = mainPost.content.rendered;
      const el = $('<div></div>');
      el.html(contentStr);
      imgSrc = $('img', el)[0].src;

      featuredPost = posts[0]; // this may change
      secondPost = posts[1];
      thirdPost = posts[2];
      fourthPost = posts[3];
    }

    let mostRecentPosts = posts.slice(0, 3);

    return (
      <div className={classes.home}>
        <div className={`${classes.inner} col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12`}>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <hr className={classes.hr}/>
            <img
              className={classes.splashImage}
              src={splashImage}/>
          </div>
          <div className={`${classes.banner} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <hr/>
            <div className={classes.center}>
              <h3>Well-Established. Well-Connected. Well-Informed.</h3>
            </div>
          </div>
          <SignupBar/>
          <div className={`${classes.featured} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <div className={`${classes.featuredArticles} col-lg-9 col-md-9 col-sm-9 col-xs-12`}>
              <h5>Featured Insights</h5>
              <hr />
              {
                posts.length && imgSrc ?
                <div>
                  <div className={`${classes.imageContainer} col-lg-8 col-md-8 col-sm-8 col-xs-12`}>
                    <img className={classes.featuredImage} src={imgSrc}/>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <Link to={`/article/${featuredPost.id}-${formatTitle(featuredPost.title.rendered)}`}>
                      <h4>{decodeEntities(featuredPost.title.rendered)}</h4>
                    </Link>
                    <p className="date-preview">{moment(featuredPost.date).format('MMMM YYYY')}</p>
                    <p>{decodeEntities(featuredPost.excerpt.rendered)}</p>
                  </div>
                </div>
                : ""
              }
            </div>
            <div className={`${classes.mostRecent} col-lg-3 col-md-3 col-sm-3 col-xs-12`}>
              <h5>Most Recent</h5>
              <hr/>
              {
                posts.length ?
                mostRecentPosts.map((post) => {
                  return (
                    <div className={classes.article}>
                      <p className={classes.topicPreview}>{this.state.categories[post.categories[0]]}</p>
                      <Link to={`/article/${post.id}-${formatTitle(post.title.rendered)}`}>
                        <h4>{decodeEntities(post.title.rendered)}</h4>
                      </Link>
                    </div>
                  )
                }) : ""
              }
            </div>
            {
              // <div className={`${classes.end} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
              //   <hr/>
              // </div>
            }
          </div>
          <div className={`${classes.perspectives} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <h5>New Perspectives</h5>
            <hr/>
            <div className={`${classes.article} col-lg-4 col-md-4 col-sm-4 col-xs-12`}>
              <img className={classes.perspectiveImage} src="https://images.unsplash.com/photo-1430609098125-581618d0482f?format=auto&amp;auto=compress&amp;dpr=2&amp;crop=entropy&amp;fit=crop&amp;w=1274&amp;h=849&amp;q=80"/>
              <h6>Responding to the global refuge crisis</h6>
            </div>
            <div className={`${classes.article} col-lg-4 col-md-4 col-sm-4 col-xs-12`}>
              <img className={classes.perspectiveImage} src="https://images.unsplash.com/photo-1430609098125-581618d0482f?format=auto&amp;auto=compress&amp;dpr=2&amp;crop=entropy&amp;fit=crop&amp;w=1274&amp;h=849&amp;q=80"/>
              <h6>Responding to the global refuge crisis</h6>
            </div>
            <div className={`${classes.article} col-lg-4 col-md-4 col-sm-4 col-xs-12`}>
              <img className={classes.perspectiveImage} src="https://images.unsplash.com/photo-1430609098125-581618d0482f?format=auto&amp;auto=compress&amp;dpr=2&amp;crop=entropy&amp;fit=crop&amp;w=1274&amp;h=849&amp;q=80"/>
              <h6>Responding to the global refuge crisis</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function decodeEntities(s){
    var str, temp = document.createElement('p');
    temp.innerHTML = s;
    str = temp.textContent || temp.innerText;
    temp = null;
    str = str.replace(/\[|\]/g, '');
    return str;
}

function formatTitle(s) {
  return decodeEntities(s).split(' ').join('-');
}

const mapStateToProps = (state) => ({
  wordpress: state.wordpress
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);