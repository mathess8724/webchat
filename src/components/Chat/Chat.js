import React, { useEffect } from 'react';
import './Chat.scss';



function Chat() {
    let msgs = [{msg:'sent gggggggggggggggggg gggggggg ggggggggggggggggggggg', msgType:'sent'},
                    {msg:'received ffffff fddddd ddddddd dddddd fffffffffffffffffffffff', msgType:'received'},
                    {msg:'sent', msgType:'sent'}
];
    

    useEffect(() => {
        
    }, [])

  
    

    return(

        <div className="chatBody">           
            <div className="chatContainer">
                <div className="pannelContainer">                    
                    <div className="searchContainer">
                        search                        
                    </div>                    
                    <div className="messagesListContainer">  
                        messages list                      
                    </div>
                        <div className="pannelButtonContainer">
                            pannel butons
                        </div>
                </div>
                <div className="messagesContainer">
                    <div className="chatHeader">
                        <div className="headerName">
                            name
                        </div>
                        <div className="headerDelIco">
                            delete icone
                        </div>
                    </div>
                    <div className="messagesArea">
                      
                      {
                          msgs.map((msg,index) => (
                            
                            <div className="msgContenaire" style={  msg.msgType === 'received' ? {justifyContent:'flex-start'} :  {justifyContent:'flex-end'}}>
                            <div className={msg.msgType === 'received' ? 'msgReceived' : 'msgSent'}>
                               {msg.msg}
                               
                            </div>
                        </div> 
                          ))
                      }        
                    </div>
                    <div className="messagesInputContainer">
                        <textarea  className='msgInput' name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
            </div>            
        </div>


    )




}


export default Chat;