import React, { useState } from 'react'
import Jitsi from 'react-jitsi'

 
 const App = () => {
 

  const jitsiContainerId = "jitsi-container-id";
  const [jitsi, setJitsi] = React.useState({});
  const [displayName, setDisplayName] = useState('')
  const [roomName, setRoomName] = useState('')
  const [password, setPassword] = useState('')
  const [onCall, setOnCall] = useState(false)
 
  const loadJitsiScript = () => {
    let resolveLoadJitsiScriptPromise = null;

    const loadJitsiScriptPromise = new Promise((resolve) => {
      resolveLoadJitsiScriptPromise = resolve;
    });

    const script = document.createElement("script");
    script.src = "https://meet.jit.si/libs/lib-jitsi-meet.min.js";
    script.async = true;
    script.onload = resolveLoadJitsiScriptPromise
    document.body.appendChild(script);
    

    return loadJitsiScriptPromise;
  };

  const initialiseJitsi = async () => {
    if (!window.JitsiMeetExternalAPI) {
      await loadJitsiScript();
    }

    const _jitsi = new window.JitsiMeetExternalAPI("meet.jit.si", {
      parentNode: document.querySelector('#meet'),
      devices: {
        audioInput: '<deviceLabel>',
        audioOutput: '<deviceLabel>',
        videoInput: '<deviceLabel>'
    },
    });

    setJitsi(_jitsi)
    
  };

  React.useEffect(() => {
    initialiseJitsi();
    
    return () => jitsi?.dispose?.();
  }, []);

  const handleAPI = (JitsiMeetAPI) => {
    JitsiMeetAPI.executeCommand('toggleVideo')
  }
  return <div id="meet" style={{ height: 720, width: "100%" }} />;
  
  return onCall
    ? (
      <Jitsi containerStyle={{ width: '1200px', height: '800px' }}
      
        roomName="ämit"
        displayName="amit"
        password={password}
        // loadingComponent={Loader}
        onAPILoad={handleAPI} 
      />)
    : (
      <>
      
        <h1>Crate a Meeting</h1>
        <input type='text' placeholder='Room name' value={roomName} onChange={e => setRoomName(e.target.value)} />
        <input type='text' placeholder='Your name' value={displayName} onChange={e => setDisplayName(e.target.value)} />
        <button onClick={() => setOnCall(true)}> Let&apos;s start!</button>
      </>
    )
 
}

export default App;