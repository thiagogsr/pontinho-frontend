import React from "react";
import { connect } from "react-redux";
import { resetFlash } from "./actions";
import { Message, Messages } from "./styled";

const Flash = ({ messages, resetFlash }) => {
  if (messages.length > 0) {
    setTimeout(() => {
      resetFlash(messages);
    }, 5000);

    return (
      <Messages>
        {messages.map((message, index) => (
          <Message key={index} type={message.type}>
            {message.text}
          </Message>
        ))}
      </Messages>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state.flash.messages,
  };
};

const mapDispatchToProps = {
  resetFlash,
};

export default connect(mapStateToProps, mapDispatchToProps)(Flash);
