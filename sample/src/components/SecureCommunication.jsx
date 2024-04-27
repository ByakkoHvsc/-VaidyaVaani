// SecureCommunication.jsx
import React, { useState, useEffect } from 'react';
import { app } from '../firebase';
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import './SecureCommunication.css'; // Import your CSS file for styling

const auth = getAuth(app);
const firestore = getFirestore(app);
const recipientId = 'O3zMXMdS1rfU2pdDA50YdtkpKH82';

function SecureCommunication() {
  const [currentUser, setCurrentUser] = useState(null);
  const [chats, setChats] = useState([]);
  const [messageText, setMessageText] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    // Clean up listener on unmount
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (currentUser) {
      const q = query(collection(firestore, 'messages'), orderBy('timestamp', 'desc'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const updatedChats = snapshot.docs.map((doc) => doc.data());
        setChats(updatedChats);
      });

      return () => unsubscribe();
    }
  }, [currentUser]);

  const sendMessage = async () => {
    if (currentUser && messageText.trim() !== '') {
      try {
        await addDoc(collection(firestore, 'messages'), {
          message: messageText,
          timestamp: new Date(),
          sender: currentUser.displayName || currentUser.email,
          recipientId: recipientId, 
        });
        setMessageText('');
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    currentUser ? (
      <div className="chat-container">
        <h1>Chat</h1>
        <div className="messages">
          {chats.map((chat, index) => (
            <div key={index} className={`message ${chat.sender === currentUser.displayName ? 'own' : 'other'}`}>
              <p>{chat.sender}: {chat.message}</p>
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Type your message..."
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
          />
          <button onClick={() => sendMessage(recipientId)}>Send</button>

        </div>
      </div>
    ) : (
      <p>Please login to access secure communication.</p>
    )
  );
}

export default SecureCommunication;
