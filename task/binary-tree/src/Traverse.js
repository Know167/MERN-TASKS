import React from 'react'

const Traverse=(props)=> {
    // console.log(props.node.value);
  if (props.node !== null) {
    return (
      <div>
        <div
          style={{
            width: "20px",
            height: "20px",
            marginLeft: "50%",
            marginBottom: "7px",
            border: "2px solid black",
            borderRadius: "5px",
          }}>
          {props.node && props.node.value}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}>
          <div style={{ marginRight: "5px" }}>
            {props.node.left && <Traverse node={props.node.left} />}
          </div>
          <div>{props.node.right && <Traverse node={props.node.right} />}</div>
        </div>
      </div>
    );
  }
}

export default Traverse
