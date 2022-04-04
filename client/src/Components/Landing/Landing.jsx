import './Landing.css';
import Button from '../Button/Button'
import { Component } from 'react';
import LogInForm from '../LogInForm/LogInForm';
import AddProductForm from '../AddProductForm/AddProductForm';

class Landing extends Component {
  state = {
    isLogIn: false,
  }
  handleLogIn = () => {
    this.setState((previousState) => ({
      isLogIn: !previousState.isLogIn,
    }));
  };

  render (){
    const { isLogIn } = this.state;
    return (
      <div className='welcome-container'>
        <div className='left-container'>
          <h1 className='main-text'>Hello! What would you like to buy?</h1>
          <p className='website-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
          < Button text='Start Shopping' />
          <span className='between-tow-component'>&emsp;</span>
          < Button text='Log In Seller' handleOnClick={this.handleLogIn}/>
          {isLogIn? (
          < AddProductForm handleOnClick={this.handleLogIn}/>
          ): (
            null
            )}
        </div>
        <div className='right-container'>
          <img src="../assets/landing-img.png" alt="main img in the website " />
        </div>
      </div>
    )
  }

}
export default Landing;