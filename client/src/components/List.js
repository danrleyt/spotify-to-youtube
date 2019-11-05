import React from 'react';

export const List = props => {
  return (
    <div>
      <ul>
        {props.list.map(item => {
          return <li>{`${item.name} - ${item.artists[0].name}`}</li>;
        })}
      </ul>
    </div>
  );
};
