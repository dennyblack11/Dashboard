import React, { useState } from 'react'
import styled from 'styled-components';
import {CgMenuGridO} from "react-icons/cg"
import {AiOutlineSetting} from "react-icons/ai"
import {RxQuestionMark} from "react-icons/rx"
import {AiOutlineSearch} from "react-icons/ai"
import {VscMegaphone} from "react-icons/vsc"
import {RxCross1} from "react-icons/rx"
import {FaCircle} from "react-icons/fa"

const Dashboardhead = () => {

  const [show, setShow] = useState (false)
  const Toggle = () => {
    setShow (!show);
  }
  return (
    <Container>
      <Wrapper>
        <Holder>
        <Menu>
          <CgMenuGridO/>
        </Menu>
        <h3>To Do</h3>
        </Holder>

        <InputHold>
        <SearchHold>
          <AiOutlineSearch/>
        </SearchHold>
        <input type = "text" placeholder='Search'/>
        </InputHold>
        <IconHold>

          <DropDown1>
          <One onClick={Toggle}><AiOutlineSetting/></One>
          {show? 
          (<Card>
            <Parent style={{color: 'black'}}>
              <Top>
                <h5>Settings</h5>
                <Cross><RxCross1/></Cross>
              </Top>
              <p>General</p>
              <Texts>
              <Text>Confirm before deleting</Text>
              <Hold>
                <HoldInput><CirIcon><FaCircle/></CirIcon></HoldInput>
                <OnText>On</OnText>
              </Hold>  
              </Texts>           
              <Texts>
              <Text>Add new tasks on top</Text>
              <Hold>
                <HoldInput><CirIcon><FaCircle/></CirIcon></HoldInput>
                <OnText>On</OnText>
              </Hold>  
              </Texts>           
              <Texts>
              <Text>Move starred tasks to top</Text>
              <Hold>
                <HoldInput><CirIcon><FaCircle/></CirIcon></HoldInput>
                <OnText>On</OnText>
              </Hold>  
              </Texts>           
              <Texts>
              <Text>Play completion sound</Text>
              <Hold>
                <HoldInput><CirIcon><FaCircle/></CirIcon></HoldInput>
                <OnText>On</OnText>
              </Hold>  
              </Texts>           
              <Texts>
              <Text>Show right-click menus</Text>
              <Hold>
                <HoldInput><CirIcon><FaCircle/></CirIcon></HoldInput>
                <OnText>On</OnText>
              </Hold>  
              </Texts>           
              <Texts>
              <Text>Turn on remainder notifications</Text>
              <Hold>
                <HoldInput><CirIcon><FaCircle/></CirIcon></HoldInput>
                <OnText>On</OnText>
              </Hold>  
              </Texts>           
              <Texts>
              <Text>Show tasks that seem important in My Day</Text>
              <Hold>
                <HoldInput><CirIcon><FaCircle/></CirIcon></HoldInput>
                <OnText>On</OnText>
              </Hold>  
              </Texts>           
              <Texts>
              <Text>Turn on night mode</Text>
              <Hold>
                <HoldInput><CirIcon><FaCircle/></CirIcon></HoldInput>
                <OnText>On</OnText>
              </Hold>  
              </Texts>
              <p>Smart lists</p>
              <Texts>
              <Text>Important</Text>
              <Hold>
                <HoldInput><CirIcon><FaCircle/></CirIcon></HoldInput>
                <OnText>On</OnText>
              </Hold>  
              </Texts>
              <Texts>
              <Text>Planned</Text>
              <Hold>
                <HoldInput><CirIcon><FaCircle/></CirIcon></HoldInput>
                <OnText>On</OnText>
              </Hold>  
              </Texts>
              <Texts>
              <Text>All</Text>
              <Hold>
                <HoldInputOff><CirIconOff><FaCircle/></CirIconOff></HoldInputOff>
                <OffText>Off</OffText>
              </Hold>  
              </Texts>
              <Texts>
              <Text>Completed</Text>
              <Hold>
                <HoldInputOff><CirIconOff><FaCircle/></CirIconOff></HoldInputOff>
                <OffText>Off</OffText>
              </Hold>  
              </Texts>
              <Texts>
              <Text>Assigned to me</Text>
              <Hold>
                <HoldInput><CirIcon><FaCircle/></CirIcon></HoldInput>
                <OnText>On</OnText>
              </Hold>  
              </Texts>
              <Texts>
              <Text>Auto-hide empty smart lists</Text>
              <Hold>
                <HoldInputOff><CirIconOff><FaCircle/></CirIconOff></HoldInputOff>
                <OffText>Off</OffText>
              </Hold>  
              </Texts>
              <Texts>
              <Text>Show Due Today tasks in My Day</Text>
              <Hold>
                <HoldInput><CirIcon><FaCircle/></CirIcon></HoldInput>
                <OnText>On</OnText>
              </Hold>  
              </Texts>
              <p>Connected apps</p>
              <Texts>
              <Text>Planner</Text>
              <Hold>
                <HoldInput><CirIcon><FaCircle/></CirIcon></HoldInput>
                <OnText>On</OnText>
              </Hold>
              <TextBelow>Tasks assigned to you in Planner</TextBelow>
              </Texts>
              <p>Notifications</p>
              <Texts>
              <Text>Email</Text>
              <Hold>
                <HoldInput><CirIcon><FaCircle/></CirIcon></HoldInput>
                <OnText>On</OnText>
              </Hold>
              <TextBelow>Get notificated when a list is shared with you</TextBelow>
              </Texts>
              <p></p>

            </Parent>
          </Card>): null}
          </DropDown1>



          <Two><RxQuestionMark/></Two>
          <Three><VscMegaphone/></Three>
          <Circle><circle>WP</circle></Circle>
        </IconHold>
      </Wrapper>
    </Container>
  )
}

export default Dashboardhead;

const TextBelow = styled.div`
font-size: 12px;
margin-top: 5px;
` 

const OffText = styled.div`
margin: 3px 3px 0px;`

const OnText = styled.div`
margin: 5px 5px 0px;`

const HoldInputOff = styled.div`
height: 15px;
width: 35px;
padding: 2px 3px;
background-color: #fff;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: flex-start;
margin-top: 8px;
border: 1px solid grey;
`
const HoldInput = styled.div`
height: 15px;
width: 35px;
padding: 2px 3px;
background-color: #1d3fd7;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: flex-end;
margin-top: 10px;
`

const CirIconOff = styled.div`
color: #928f8f;
font-size: 15px;
`


const CirIcon = styled.div`
color: #fff;
font-size: 15px;
`

const Hold = styled.div`
display: flex;
align-items: center;
margin-top: -3px;
`

const Text = styled.div`
margin-top: 14px;
font-size: 14px;
font-weight: 600;
`

const Texts = styled.div`
width: 330px;
height: 100%;
/* background-color: yellowgreen; */
display: flex;
flex-direction: column;
justify-content: center;
`

const Top = styled.div`
width: 330px;
height: 60px;
display: flex;
justify-content: space-between;
align-items: center;
h5{
  font-size: 20px;
  font-weight: 600;
}
`

const Cross = styled.div`
font-size: 17px;
`

const Parent = styled.div`
width: 300px;
/* background-color: #f34c4c; */
position: absolute;
/* display: flex; */
justify-content: space-between;
align-items: center;
p{
  font-size: 18px;
  font-weight: 600;
}
`

const Card = styled.div`
width: 350px;
height: 90vh;
background-color: #fff;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
display: flex;
justify-content: center;
position: absolute;
top: 41px;
right: -25px;
overflow-y: auto;
overflow-x: hidden;
`

const DropDown1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`

const Circle = styled.div`
circle{
width: 30px;
height: 30px;
border-radius: 100px;
border: 1px solid #fff;
display: flex;
justify-content: center;
align-items: center;
color: #fff;
font-size: 15px;
font-weight: 600;
margin-left: 30px;
}


`

const Three = styled.div`
font-size: 20px;
margin-left: 30px;

`

const Two = styled.div`
font-size: 20px;
margin-left: 30px;

`

const One = styled.div`
font-size: 20px;
/* margin-left: 10px; */
position: absolute;
&:hover{
  width: 50px;
  height: 50px;
  background-color: rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

`

const IconHold = styled.div`
display: flex;
color: #fff;
align-items: center;
cursor: pointer;
position: absolute;
left: 87%;
`

const SearchHold = styled.div`
width: 40px;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
color: #2564cF;
font-size: 20px;
position: absolute;
cursor: pointer;
`

const InputHold = styled.div`
display: flex;
height: 32px;
width: 400px;
background-color: #f52e2e;
border-radius: 5px;
overflow: hidden;
position: absolute;
left: 30%;
input{
  flex: 1;
  height: 100%;
  border: none;
  outline: none;
  padding-left: 35px;
}
`

const Holder = styled.div`
display: flex;
justify-content: center;
align-items: center;
h3{
  color: #fff;
  margin-left: 27px;
}
`

const Menu = styled.div`
font-size: 25px;
color: #fff;
`

const Wrapper = styled.div`
width: 98%;
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
`

const Container = styled.div`
width: 100%;
height: 50px;
background-color: #2564CF;
display: flex;
justify-content: center;
`


// import React from 'react';
// import styled from 'styled-components';
// import { CgMenuGridO } from "react-icons/cg"
// import { AiOutlineSetting } from "react-icons/ai"
// import { RxQuestionMark } from "react-icons/rx"
// import { AiOutlineSearch } from "react-icons/ai"
// import {VscMegaphone} from "react-icons/vsc"

// const Header = () => {
//   return (
//     <div>
//         <Container>
//         <Wrapper>
//             <Holder>
//                 <Menu>
//                     <CgMenuGridO/>
//                 </Menu>
//                 <h3>To Do</h3>
//             </Holder>

//             <Inputhold>
//                 <Searchhold>
//                     <AiOutlineSearch/>
//                 </Searchhold>
//                 <input type="text"placeholder='Search'/>
//             </Inputhold>
//             <IconHold>
//             <One><AiOutlineSetting/></One>
//             <Two><RxQuestionMark/></Two>
//             <Three><VscMegaphone/></Three>
//             <Circle>WP</Circle>
//             </IconHold>
//         </Wrapper>
//         </Container>
//     </div>
//   )
// }

// export default Header;


// const One = styled.div`
// font-size: 20px;
// margin-left: 30px;
// &:hover{
//     height: 50px;
//     width: 50px;
//     background-color: rgba(0,0,0,0.1);
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }`

// const Two = styled.div`
// font-size: 20px;
// margin-left: 30px;
// &:hover{
//     height: 50px;
//     width: 50px;
//     background-color: rgba(0,0,0,0.1);
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }`

// const Three = styled.div`
// font-size: 20px;
// margin-left: 30px;
// &:hover{
//     height: 50px;
//     width: 50px;
//     background-color: rgba(0,0,0,0.1);
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }
// `


// const Circle = styled.div`
// width: 30px;
// height: 30px;
// border-radius: 100px;
// border: 1px solid #fff;
// display: flex;
// align-items: center;
// justify-content: center;
// color: #fff;
// font-size: 14px;
// font-weight: 600;
// margin-left: 30px;
// &:hover{
//     height: 50px;
//     width: 50px;
//     background-color: rgba(0,0,0,0.1);
//     justify-content: center;
//     align-items: center;
// }`

// const IconHold = styled.div`
//     display: flex;
//     color: #fff;
//     align-items: center;
//     cursor: pointer;
// `

// const Searchhold = styled.div`
// width: 40px;
// height: 100px;
// display: flex;
// justify-content: center;
// align-items: center;
// color: #2564cF;
// font-size: 20px;
// `
// const Inputhold = styled.div`
// display: flex;
// height: 32px;
// width: 380px;
// background-color: #fff;
// border-radius: 5px;
// overflow: hidden;
// cursor: pointer;
// input{
//     flex: 1;
//     height: 100%;
//     border: none;
//     outline: none;
//     padding-left: 20px;
// }
// `
// const Wrapper = styled.div`
// height: 100%;
// width: 98%;
// background-color: #2564CF;
// display: flex;
// align-items: center;
// justify-content: space-between;
// `
// const Container = styled.div`
// height: 50px;
// width: 100%;
// background-color: #2564CF;
// position: fixed;
// display: flex;
// align-items: center;
// justify-content: center;
// `
// const Holder = styled.div`
// display: flex;
// align-items: center;
// h3{
//     color: #fff;
//     margin-left: 40px;
// }`

// const Menu = styled.div`
// color: #fff;
// font-size: 28px;
// /* margin-top: 5px; */
// `