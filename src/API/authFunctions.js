


 const signup = (email,password,dispatch)=>{
    async (email, password) =>{
 console.log('HMMZ')
        try{
        let response = await fetch(baseURL+'/signup',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({email:"nbabilssaaaaaoa3asti.soyasstaa@agmaial.com", password:"dreaamon44"})
        }) ; 
        
        let json = await response.json();
        const token = json.token;
        console.log(token)
    }catch(err) {
        dispatch(addError('HMM'))
    }}}
        

/*
fetch('https://mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue'
  })
