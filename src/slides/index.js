import Intro from './01-intro';
import ExecutiveSummary from './02-executive-summary';
import JQueryVSReact01 from './03-jquery-vs-react';
import JQueryVSReact02 from './04-jquery-vs-react';
import JQueryVSReact03 from './05-jquery-code';
import JQueryVSReact04 from './06-react-code';
import Limitations from './07-limitations';
import ReactContext from './08-context';
import Redux01 from './09-redux.js';
import Redux02 from './10-redux.js';
import Unstated from './11-unstated.js';
import Mobx from './12-mobx.js';
import Conclusion from './13-conclusion.js';

export default [
  Intro,
  ExecutiveSummary(),
  ExecutiveSummary(1),
  JQueryVSReact01,
  JQueryVSReact02,
  JQueryVSReact03,
  JQueryVSReact04,
  ExecutiveSummary(2),
  Limitations,
  ExecutiveSummary(3),
  ReactContext,
  ExecutiveSummary(4),
  Redux01,
  Redux02,
  ExecutiveSummary(5),
  Unstated,
  Mobx,
  Conclusion
];
