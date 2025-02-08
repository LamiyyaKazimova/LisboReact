import './Login.scss'


export const Login=()=>{
    const body=document.querySelector("body")
    
    function handleClick(){
        removeFunction()
    const element=document.createElement("div")
    element.style.backgroundColor="white"
    element.style.width="500px"
    element.style.height="300px"
    element.style.overflowY="auto"
    const childElement=document.createElement("p")
    childElement.textContent="Purchase the Lisbo now & make your website more excellent! Purchase the Lisbo now & make your website more excellent!Purchase the Lisbo now & make your website more excellent!"
    childElement.style.backgroundColor="green"
    childElement.style.color="white"
    childElement.style.padding="8px"
    childElement.height="50px"
    childElement.width="400px"
    const newElement=document.createElement("div")
    newElement.style.boxShadow="1px 1px 1px gray"
     newElement.style.borderRadius="10px"
    newElement.style.display="flex"
    newElement.style.flexDirection="column"
    newElement.style.margin="10px"
     newElement.style.padding="10px"
    const nameInput=document.createElement("input")
    nameInput.type="text"
    nameInput.placeholder="Name"
    nameInput.style.padding="10px"
    nameInput.style.backgroundColor="white"
    nameInput.style.borderRadius="10px"
    nameInput.style.margin="5px"
    const emailInput=document.createElement("input")
    emailInput.type="email"
    emailInput.placeholder="*Email"
    emailInput.style.padding="10px"
    emailInput.style.backgroundColor="white"
    emailInput.style.borderRadius="10px"
    emailInput.style.margin="5px"
    const questionInput=document.createElement("textarea")
    questionInput.placeholder="Question"
    questionInput.style.padding="10px"
    questionInput.style.backgroundColor="white"
    questionInput.style.borderRadius="10px"
    questionInput.style.margin="5px"
    const button=document.createElement("button")
    button.textContent="Start Chat"
    button.style.backgroundColor="green"
    button.style.color="white"
    button.style.borderRadius="10px"
    button.style.padding="10px"
    const noneButton=document.createElement("button")
    noneButton.textContent="X"
    noneButton.style.backgroundColor="green"
    noneButton.style.color="white"
    noneButton.style.fontSize="30px"
    noneButton.style.border="none"
    noneButton.style.borderRadius="10px"
    noneButton.style.padding="10px"
    noneButton.style.margin="30px"
    noneButton.style.position='sticky'
    noneButton.style.left='2%'
    noneButton.style.bottom='0'
    noneButton.onclick = () => {
        noneButton.remove(); 
        element.remove(); 
        const login = document.querySelector(".login");
        if (login) {
            login.classList.remove("none"); 
        }
    };
    
    element.style.position='sticky'
    element.style.left='2%'
    element.style.bottom='0'

    newElement.append(nameInput,emailInput,questionInput,button)
    element.append(childElement,newElement)
    body.append(element,noneButton)
    }

    function removeFunction(){
    const login=document.querySelector(".login")
    if (login) {
        login.classList.add("none"); 
    }

    }


    return(
    <div className='login' onClick={handleClick}>
   <svg  width="45px" height="44px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.0039 12C21.0039 16.9706 16.9745 21 12.0039 21C9.9675 21 3.00463 21 3.00463 21C3.00463 21 4.56382 17.2561 3.93982 16.0008C3.34076 14.7956 3.00391 13.4372 3.00391 12C3.00391 7.02944 7.03334 3 12.0039 3C16.9745 3 21.0039 7.02944 21.0039 12Z" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </div>
    )
}


