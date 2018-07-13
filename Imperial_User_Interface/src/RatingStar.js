/*import StarRating from 'react-native-star-rating';
 
class RatingStar extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      starCount: this.props.rate
    };
  }
 
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
 
  render() {
    return (
      <StarRating
        disabled={false}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
      />
    );
  }
}
 
export default RatingStar;