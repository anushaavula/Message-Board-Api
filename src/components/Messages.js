import React from 'react' 
import { connect } from 'react-redux'
import MessageForm from './MessageForm'
import MessageItem from './MessageItem'

class Messages extends React.Component {

    render(){
        return (
            <div>
                <h1>Messages - { this.props.messages.length } </h1>
                
                   {
                       this.props.messages.map((message) => {
                        return <MessageItem 
                        key={message.id} 
                        id={message.id} 
                        body={message.body} 
                        createdAt={message.createdAt} />
                       })
                   }

                <MessageForm />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

export default connect(mapStateToProps)(Messages)