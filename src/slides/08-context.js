import React from 'react';

import { Slide } from 'spectacle';

import '../browser-frame.css';

export default (
  <Slide bgColor="primary" padding="100px" className="full-height">
    <div className="browser-frame">
      <div className="titlebar">
        <span className="icon icon-0" />
        <span className="icon icon-1" />
        <span className="icon icon-2" />
        <div className="title">React Context</div>
      </div>
      <div className="toolbar">
        <input type="text" value="https://codesandbox.io/s/jz229ojj0w" disabled />
      </div>
      <iframe
        title="exemple 1 avec iframe"
        src="https://codesandbox.io/embed/jz229ojj0w"
        style={{
          width: '100%',
          border: 'none',
          flex: 1
        }}
      />
    </div>
  </Slide>
);
