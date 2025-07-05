import React from 'react';
import { connect } from 'react-redux';

const Body = () => {
  return (
    <div>
        <div>Number:{}</div>
        <button> Add</button>
        <button> Sub</button>
    </div>
  )
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = {
    add:()=>{},
    remove:()=>{},
}

export default connect(mapStateToProps,mapDispatchToProps)(Body);
