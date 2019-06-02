import './split.scss';

export const Split = ({ children }) => {
  return (
    <div className="split">{children}</div>
  );
};

export const SplitPane = ({ children, ...props }) => {
  return (
    <div className="split__pane" {...props}>{children}</div>
  );
};
