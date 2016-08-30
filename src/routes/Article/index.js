import React from 'react'
import classes from './Article.scss'
import moment from 'moment';
import {Link} from 'react-router';
import {bindActionCreators} 	from 'redux';
import * as actionCreators  	from '../../actions/posts';
import {connect} 							from 'react-redux';
import utils from '../utils';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';
import printerIcon from './assets/printer-icon.png';

export class Article extends React.Component {
  constructor(props) {
    super(props);

    this.displayPrintPreview = window.print;

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
      },
      location: null
    }
  }

  componentWillMount() {
    const articleId     = this.props.location.pathname.slice(9).split('-')[0];
    const currentPost   = this.props.wordpress.currentPost;
    const cachedArticle = currentPost && currentPost.id == articleId;
    this.setState({ location: this.props.location.pathname });

    // Prevent re-fetching already fetched articles
    if (!cachedArticle) this.props.actions.fetchPost(articleId);
    if (this.props.wordpress && !this.props.wordpress.posts.length) {
      this.props.actions.fetchPosts();
    }
  }

  componentDidUpdate() {
    if (this.state.location !== this.props.location.pathname) {
      this.setState({ location: this.props.location.pathname });

      const articleId     = this.props.location.pathname.slice(9).split('-')[0];
      const currentPost   = this.props.wordpress.currentPost;
      const cachedArticle = currentPost && currentPost.id == articleId;
      if (!cachedArticle) this.props.actions.fetchPost(articleId);

      this.forceUpdate();
    }
  }

  render() {
    
    const {
      FacebookShareButton,
      LinkedinShareButton,
      TwitterShareButton
    } = ShareButtons;

    const FacebookIcon = generateShareIcon('facebook');
    const TwitterIcon = generateShareIcon('twitter');
    const LinkedinIcon = generateShareIcon('linkedin');

    const post = this.props.wordpress.currentPost;
    let contentStr;
    let imgSrc;
    let title;
    let date;
    let textContent;
    let excerpt;
    if (post && post.id) {
      contentStr = post.content.rendered;
      const el = $('<div></div>');
      el.html(contentStr);

      /**
       * Detect whether the article's introductory block
       * is an image. If so, slice it out of the content
       * string and use it as the image source. Otherwise,
       * use a stock photo as a feature and and generate
       * the entire content string.
       */
      const firstPar = $('p', el)[0];
      const child = $(firstPar).children();
      if (child.is('img')) {
        imgSrc = $('img', el)[0].src;
        textContent = contentStr.split('</p>').slice(1).join('');
      } else {
        imgSrc = "https://images.unsplash.com/photo-1430609098125-581618d0482f?format=auto&amp;auto=compress&amp;dpr=2&amp;crop=entropy&amp;fit=crop&amp;w=1274&amp;h=849&amp;q=80";
        textContent = contentStr;
      }

      title = utils.decodeEntities(post.title.rendered);
      date = moment(post.date).format('MMMM YYYY');
      excerpt = utils.decodeEntities(post.excerpt.rendered);
    }

    const posts = this.props.wordpress.posts;
    let mostRecentPosts;
    if (posts.length) {
      mostRecentPosts = posts.slice(0, 5);
    }

    let currentLocation = window.location.href;
    currentLocation = 'https://mysterious-brook-13530.herokuapp.com/'

    return (
      <div className={classes.article}>
        <div className={`${classes.inner} col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12`}>
          {
            post && post.id ?
            <div className={`${classes.splashArticle} col-lg-9 col-md-9 col-sm-9 col-xs-12`}>
              <div className={`${classes.imageContainer} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
                <img className={classes.featuredImage} src={imgSrc}/>
              </div>
              <div className={`${classes.socialMediaShare} socialMediaShare col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
                <div className={classes.socialMediaShareButton}>
                  <FacebookShareButton
                    title={title}
                    url={currentLocation}
                    media={imgSrc}
                    description={excerpt}>
                    <FacebookIcon size={32} round={true} />
                  </FacebookShareButton>
                </div>
                <div className={classes.socialMediaShareButton}>
                  <TwitterShareButton
                    title={title}
                    url={currentLocation}
                    media={imgSrc}
                    description={excerpt}>
                    <TwitterIcon size={32} round={true} />
                  </TwitterShareButton>
                </div>
                <div className={classes.socialMediaShareButton}>
                  <LinkedinShareButton
                    title={title}
                    url={currentLocation}
                    media={imgSrc}
                    description={excerpt}>
                    <LinkedinIcon size={32} round={true} />
                  </LinkedinShareButton>
                </div>
                <div className={classes.socialMediaShareButton}>
                  <img
                    className={classes.printerIcon}
                    src={printerIcon}
                    onClick={this.displayPrintPreview}/>
                </div>
              </div>
              <div className={`${classes.textBody} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
                <h4>{title}</h4>
                <p className="date-preview">{date}</p>
                <div dangerouslySetInnerHTML={{__html: textContent}}></div>
              </div>
            </div> : ""
          }
          <div className={`${classes.mostRecent} mostRecent col-lg-3 col-md-3 col-sm-3 col-xs-12`}>
            <h5>Recent Articles</h5>
            <hr/>
            {
              mostRecentPosts ?
              mostRecentPosts.map((post, i) => {
                return (
                  <div className={classes.article} key={i}>
                    <p className={classes.topicPreview}>{this.state.categories[post.categories[0]]}</p>
                    <Link to={`/article/${post.id}-${utils.formatTitle(post.title.rendered)}`}>
                      <h4>{utils.decodeEntities(post.title.rendered)}</h4>
                    </Link>
                  </div>
                )
              }) : ""
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  wordpress: state.wordpress
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);