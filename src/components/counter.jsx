import React, { Component } from 'react';
class Counter extends Component {
    state={
        count: 0,
        tags:[]
    }
    // for leanning purpose only; we prefer using classes
    styles = {
        fontSize:30,
        fontWeight:"bold"
    }
    renderTags(){
        if (this.state.tags.length === 0) return <p>There are no tags</p>
       return  <ul>{this.state.tags.map(tag=> <li key={tag}>{tag}</li>)}</ul>
    }
    handleIncrememt =()=>{
        this.setState({count:this.state.count+1})
    }
    render() { 
        let classes = this.getButtonClasses();
        return (
        <div>
            <span style={this.styles} className={classes}>{this.formatCount()}</span>
            <button onClick={this.handleIncrememt} className='btn btn-sm btn-primary'>Increment</button>
            {this.state.tags.length === 0 && "Please create a new tag"}
            {this.renderTags()}
        </div>)
    }

    getButtonClasses() {
        let classes = "m-2 btn btn-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count=== 0 ? "ZERO" : count; 
    
    }
     
}


export default Counter;