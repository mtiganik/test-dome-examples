import React from 'react';


// React is loaded and is available as React and ReactDOM
// imports should NOT be used
const CommentList = (props) => {
    return (<div>
        <form>
          <input type="text" />
          <input type="button" value="Post" />
        </form>
        <ul>
        </ul>
      </div>);
  }
  

  export default CommentList;
//   document.body.innerHTML = "<div id='root'></div>";
  
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(<CommentList />);
  
//   setTimeout(() => {
//     var input = document.querySelector("input[type='text']");
//     input.value = "test";
//     input._valueTracker.setValue("");
//     input.dispatchEvent(new Event('change', { bubbles: true }));
  
//     setTimeout(() => {
//       document.querySelector("input[type='button']").click();
//       setTimeout(() => {
//         console.log(document.getElementsByTagName("ul")[0].innerHTML);
//       });
//     });
//   });