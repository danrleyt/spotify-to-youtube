import React from 'react';

export const List = props => {
  return (
    <div>
      <ul>
        {props.list.map(item => {
          return (
            <li>
              <div>
                {`${item.name} - ${item.artists[0].name}`}
                <iframe
                  id="ytplayer"
                  type="text/html"
                  width="640"
                  height="360"
                  src="http://www.youtube.com/embed/"
                  frameborder="0"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
