import React from 'react';

function Results(props) {

    return (
      <section>
        <pre>{props.data ? JSON.stringify(props.data,null, 2) : null}</pre>
      </section>
    );
  
}

export default Results;
