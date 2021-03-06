import React, { useEffect, useState } from "react";
import axios from "axios";

//  I want this component to know the two users, and have all the messages between them.
const Conversation = ({
  conversation
}) => {
  // useEffect(() => {
  //   console.log("inside useEffect Conversation.js");
  //   //set conversation state
  // }, [conversation]);
  return (
    <div>
      {conversation.map((message) => {
        return <div>{message.body} {message.createdAt}</div>;
      })}
    </div>
  );
};

export default Conversation;
