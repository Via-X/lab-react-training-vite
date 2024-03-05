import React, {useState} from 'react'

const greetingList = [
  {
    country: "en",
    greet: "Hello"
  },
  { 
    country: "de",
    greet: "Hallo"
  }, 
  {
    country: "fr",
    greet: "Bonjour"
  }
];

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordWeak, setPasswordWeak] = useState(true)
  const [nationality, setNationality] = useState(greetingList[0]);
  
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const handleEmailInput = (e) => {
    setEmailValid(validateEmail(e.target.value));
    setEmail(e.target.value)
  };

  const handlePasswordInput = (e) => {
    if(e.target.value.length > 9){
      setPasswordWeak(false);
    }

    setPassword(e.target.value)
  
  };

  const handleNationalitySelect = (e) => {
    switch (e.target.value) {
      case "en":
        setNationality(greetingList[0]);
        break;
      case "de":
        setNationality(greetingList[1]);
        break;
      case "fr":
        setNationality(greetingList[2]);
        break;
      default:
          console.log("nationality assignement error");
    }
    // console.log("nationality: ", nationality.greet)
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const newSignUp = {email, password, nationality};

    console.log("Submitted: ", nationality, newSignUp);

    setEmail("");
    setPassword("");
    setNationality("");
  }

  return (
    <div>
      <form className="signup" onSubmit={handleSubmit}>
        <label>Email</label>
        <input 
          className='emailInput'
          type="email" 
          name="email" 
          value={email} 
          onChange={handleEmailInput}
          style={{borderColor: emailValid ? 'green' : 'red'}}
        />
        {emailValid ? <p style={{color: "green"}}> You typed a valid email</p> : <p style={{color: "red"}}> email invalid</p>}

        <label>Password</label>
        <input 
          className='passwordInput'
          type="password" 
          name="password" 
          value={password} 
          onChange={handlePasswordInput}
          style={{borderColor: passwordWeak ? 'red' : 'green'}}
        />
        {passwordWeak ? <p style={{color: "red"}}> password is week </p> : <p style={{color: "green"}}> password is good</p>}
        <label>Nationality</label>
        <select value={nationality} onChange={handleNationalitySelect}>
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
        <button className="signupbutton" type="submit">Sign Up</button>
      </form>
      <div>
        {nationality.greet} <br />
        Your email address is: {email} <br />
        {emailValid ? <p>Your email address is correct</p> : <p>email is not correct</p>}
      </div>
    </div>
  )
}

