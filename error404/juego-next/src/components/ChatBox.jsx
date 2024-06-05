import React, { useEffect, useState } from 'react';
import { useChannel } from 'ably/react';
import styles from './ChatBox.module.css';

export default function ChatBox() {
  let inputBox = null;
  let messageEnd = null;

  const [messageText, setMessageText] = useState('');
  const [receivedMessages, setMessages] = useState([]);
  const [availableResources, setAvailableResources] = useState({ wood: 100, stone: 100 });
  const [resourceAmount, setResourceAmount] = useState({ wood: 0, stone: 0 });
  const [warning, setWarning] = useState('');
  const messageTextIsEmpty = messageText.trim().length === 0;

  const { channel, ably } = useChannel('chat-demo', (message) => {
    const history = receivedMessages.slice(-199);
    setMessages([...history, message]);
  });

  const sendChatMessage = (messageText, resourceType = null, amount = 0) => {
    if (resourceType) {
      if (availableResources[resourceType] < amount) {
        setWarning('Not enough ${resourceType} available!');
        return;
      } else {
        setAvailableResources((prevResources) => ({
          ...prevResources,
          [resourceType]: prevResources[resourceType] - amount,
        }));
        setWarning('');
      }
    }

    const messageData = resourceType
      ? { type: 'resource', resource: resourceType, amount: amount }
      : { type: 'text', text: messageText };

    channel.publish({ name: 'chat-message', data: messageData });
    setMessageText('');
    inputBox.focus();
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    sendChatMessage(messageText);
  };

  const handleKeyPress = (event) => {
    if (event.charCode !== 13 || messageTextIsEmpty) {
      return;
    }
    sendChatMessage(messageText);
    event.preventDefault();
  };

  const handleSendResource = (resourceType) => {
    const amount = parseInt(resourceAmount[resourceType], 10);
    if (isNaN(amount) || amount <= 0) {
      setWarning('Please enter a valid amount.');
      return;
    }
    sendChatMessage('', resourceType, amount);
  };

  const messages = receivedMessages.map((message, index) => {
    const author = message.connectionId === ably.connection.id ? 'me' : 'other';
    if (message.data.type === 'text') {
      return (
        <span key={index} className={styles.message} data-author={author}>
          {message.data.text}
        </span>
      );
    } else if (message.data.type === 'resource') {
      return (
        <span key={index} className={styles.message} data-author={author}>
          {author} sent {message.data.amount} {message.data.resource}
        </span>
      );
    }
  });

  useEffect(() => {
    messageEnd.scrollIntoView({ behaviour: 'smooth' });
  });

  return (
    <div className={styles.chatHolder}>
      <div className={styles.chatText}>
        {messages}
        <div
          ref={(element) => {
            messageEnd = element;
          }}
        ></div>
      </div>
      <form onSubmit={handleFormSubmission} className={styles.form}>
        <textarea
          ref={(element) => {
            inputBox = element;
          }}
          value={messageText}
          placeholder="Escribe un mensaje..."
          onChange={(e) => setMessageText(e.target.value)}
          onKeyPress={handleKeyPress}
          className={styles.textarea}
        ></textarea>
        <button type="submit" className={styles.button} disabled={messageTextIsEmpty}>
          Enviar
        </button>
      </form>
      <div className={styles.resourceButtons}>
        <div className={styles.resourceInput}>
          <label>
            Madera:
            <input
              type="number"
              value={resourceAmount.wood}
              min="0"
              onChange={(e) =>
                setResourceAmount({ ...resourceAmount, wood: e.target.value })
              }
            />
          </label>
          <button onClick={() => handleSendResource('wood')} className={styles.button}>
            Enviar Madera
          </button>
        </div>
        <div className={styles.resourceInput}>
          <label>
            Piedra:
            <input
              type="number"
              value={resourceAmount.stone}
              min="0"
              onChange={(e) =>
                setResourceAmount({ ...resourceAmount, stone: e.target.value })
              }
            />
          </label>
          <button onClick={() => handleSendResource('stone')} className={styles.button}>
            Enviar Piedra
          </button>
        </div>
      </div>
      {warning && <div className={styles.warning}>{warning}</div>}
      <div className={styles.resourcesAvailable}>
        Available Resources - Wood: {availableResources.wood}, Stone: {availableResources.stone}
      </div>
    </div>
  );
}