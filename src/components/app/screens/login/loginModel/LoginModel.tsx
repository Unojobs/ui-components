
import React from "react";
import { Button,Modal,Input,HStack ,UnojobsLogo,Text, Google,CustomButton, Linkedin} from "src";
import './loginModalStyle.css';
import { Form,Input as AntDInput } from "antd";
export const LoginModal=()=> {
    const [modalVisible, setModalVisible] = React.useState(false);
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    return <>
        <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} initialFocusRef={initialRef} finalFocusRef={finalRef}>
          <Modal.Content>
            <Modal.CloseButton />
            <Modal.Body>
            <div className="modalBody">
            <div className="headerParent">
                <div className="modalTopContent">
                <div className="unoLogo"><UnojobsLogo/>
                    </div>
                    <div className="heading">
                <Text fontSize="4xl">Join Us</Text>
                </div>
                    </div>
                <div className="modalSocialMediaParent">
                    <div className="joinUsing">
                        <Text>Join using</Text>
                        </div>
                    <div className="modalIconsDiv">
                    <CustomButton
                      height={'48px'}
                      width={'46px'}
                      p="0px"
                      pt="10px"
                    
                      border={'1px solid #D9E6FD'}
                    //   onClick={() => loginWithGoogle()}
                      backgroundColor="#F3F3F3"
                      color="#111111"
                      icon={<Google />}
                    >
               
                    </CustomButton>

                    <CustomButton
                      height={'48px'}
                      width={'46px'}
                      p="0px"
                      pt="10px"
                    
                      border={'1px solid #D9E6FD'}
                    //   onClick={() => loginWithGoogle()}
                      backgroundColor="#F3F3F3"
                      color="#111111"
                      icon={<Linkedin />}
                    >
               
                    </CustomButton>
                   
                    </div>
                    <div className="orText">
                <Text>OR</Text>
                </div>
                    </div>
            </div>
            
            {/* <Modal.Body> */}
            <div className="modalMainContent">
           <Form>
           <Form.Item
                    name="Email"
                    // label="Email"
                    rules={[{ required: true }]}
                  >
                    <div style={{paddingBottom:'10px'}} className="inputLable">Email</div>
                    <AntDInput
                      type="email"
                      className="username"
                      placeholder="Input your email"
                    />
                  </Form.Item>
                  
                  <Form.Item
                    // name="Password"
                    // label="Password"
                    rules={[{ required: true, min: 8 }]}
                  >
                        <div style={{paddingBottom:'10px'}} className="inputLable">Password</div>
                    <AntDInput.Password
                      className="password"
                      placeholder="Input your password"
                    />
                  </Form.Item>{' '}

                  <Form.Item>
                    <CustomButton
                  
                      htmlType="submit"
                      width='400px'
                      onClick={() => {
                        // loginButton();
                      }}
                    >
                    Join
                    </CustomButton>
                  </Form.Item>
           </Form>
          
           </div>
           </div>
           </Modal.Body>
        
            {/* </Modal.Body> */}
            {/* <Modal.Footer>
              <Button.Group space={2}>
                <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                setModalVisible(false);
              }}>
                  Cancel
                </Button>
                <Button onPress={() => {
                setModalVisible(false);
              }}>
                  Save
                </Button>
              </Button.Group>
            </Modal.Footer> */}
          </Modal.Content>
        </Modal>
        <HStack space="4" justifyContent="center" alignItems="center">
          <Button onPress={() => {
          setModalVisible(!modalVisible);
        }}>
            Open Modal
          </Button>
          <Input w="32" ref={finalRef} placeholder="Enter the OTP" _light={{
          placeholderTextColor: "blueGray.700"
        }} _dark={{
          placeholderTextColor: "blueGray.100"
        }} />
        </HStack>
      </>;
  }