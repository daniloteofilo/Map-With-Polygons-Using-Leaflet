import { useState } from 'react';
import './styles.css';
import ShowPassIcon from '../../asserts/images/showPass.png';
import HiddenPassIcon from '../../asserts/images/hiddenPass.png';

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [validationEmail, setValidationEmail] = useState('')
  const [validationPassword, setValidationPassword] = useState('')
  const [inputType, setInputType] = useState('password')
  const [iconContent, setIconContent] = useState(HiddenPassIcon)
  const [styleBody, setStyleBody] = useState('styleBody3')
  const [bgImageInside, setBgImageInside] = useState('formStyle3')
  const [buttonSubmitStyle, setButtonSubmitStyle] = useState('buttonSubmit1')

  const handleEmailChange = (event) => {
   setEmail(event.target.value)
  }

  const handleValidationEmail = (event) => {
    if (email.includes('@')){
      setValidationEmail('')
    }
     else if (email===''){
      setValidationEmail('')
    }
    else {
      setValidationEmail('Email inválido')
    }
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }
  const handleValidationPassword = (event) => {
    if (password.length > 5){
      setValidationPassword('')
    } else if (password===''){
      setValidationPassword('')
    }
    else {
      setValidationPassword('Minimo 6 caracteres')
    }
  }

  const changeInputType = () => {
    if(inputType==='password') {
      setInputType('text')
      setIconContent(ShowPassIcon)
    }
    else {
      setInputType('password')
      setIconContent(HiddenPassIcon)
    }
  }
  const confirm = () => {
    let error = document.getElementById('messageError');

    // verificação para acesso
    if (email === 'elysios@email.com' && password === 'elysios'){
        (window.location.href = './home')
    }else if(email ==='' || password === ''){
        error.innerHTML = 'Email ou senha não pode ser vazio'
    }else {
        error.innerHTML = 'Email ou senha incorreta'
    };
  }
  const changeStyleBody = () => {
     if (styleBody==='styleBody1' && bgImageInside==='formStyle1' && buttonSubmitStyle ==='buttonSubmit1'){
        setStyleBody('styleBody2')
        setBgImageInside('formStyle2')
        setButtonSubmitStyle('buttonSubmit2')
     }else if (styleBody==='styleBody2' && bgImageInside==='formStyle2' && buttonSubmitStyle ==='buttonSubmit2'){
        setStyleBody('styleBody3')
        setBgImageInside('formStyle3')
        setButtonSubmitStyle('buttonSubmit1')
     }else if (styleBody==='styleBody3' && bgImageInside==='formStyle3'){
        setStyleBody('styleBody1')
        setBgImageInside('formStyle1')
     }
  }
  const changeStyleBodyReturn = () => {
    if (styleBody==='styleBody1' && bgImageInside==='formStyle1'){
       setStyleBody('styleBody3')
       setBgImageInside('formStyle3')
    }else if (styleBody==='styleBody2' && bgImageInside==='formStyle2' && buttonSubmitStyle ==='buttonSubmit2'){
       setStyleBody('styleBody1')
       setBgImageInside('formStyle1')
       setButtonSubmitStyle('buttonSubmit1')
    }else if (styleBody==='styleBody3' && bgImageInside==='formStyle3' && buttonSubmitStyle ==='buttonSubmit1'){
       setStyleBody('styleBody2')
       setBgImageInside('formStyle2')
       setButtonSubmitStyle('buttonSubmit2')
    }
 }
  return (
    <body className={styleBody}>
        <div style={{display:'flex', justifyContent:'space-evenly', width:'100%'}}>
            <div onClick={changeStyleBodyReturn} className='buttonLeftChangeStyle'></div>
            <h2>Mude o estilo da página</h2>
            <div onClick={changeStyleBody} className='buttonRightChangeStyle'></div>
        </div>
        
        <div className={bgImageInside}>
            <h1>Login</h1>
            <form className='formLogin'>
                <div className='width50'>
                <label>
                    <p className='noMarginBottom'>Email:</p>
                    <p className='messageError'>
                    {validationEmail}
                    </p>
                    <input className='inputLogin' type='email' placeholder='Digite seu email' value={email} onChange={handleEmailChange} onBlur={handleValidationEmail} />
                </label>
                </div>
                <div className='width50'>
                <label>
                    <p className='noMarginBottom'>Senha:</p>
                    <p className='messageError'>
                    {validationPassword}
                    </p>
                    <div className='inputPassContainer'>
                    <input className='inputPass' type={inputType} placeholder='Digite sua senha' value={password} onChange={handlePasswordChange} onBlur={handleValidationPassword}/>
                    <img 
                        onClick={changeInputType} 
                        className='iconPass' 
                        src={iconContent} 
                        alt='a' 
                    />
                    </div>
                </label>
                </div>
                <div onClick={confirm} className={buttonSubmitStyle}></div>
                <div>
                    <p id='messageError' className='messageError'></p>
                </div>
                <div>
                    <p className='registerButton'>Não possui uma conta?<a className='registerButtonEffect' href='/register'>Cadastre-se</a></p>
                </div>
            </form>
        </div>
    </body>
  );
}

export default LoginPage;
