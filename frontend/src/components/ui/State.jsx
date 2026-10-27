export const Loader = () => <div className="state loader"><span className="spinner" /> Loading...</div>;
export const ErrorBox = ({ message }) => <div className="state state-error">⚠ {message}</div>;
export const Empty = ({ label = 'Nothing here yet' }) => <div className="state">{label}</div>;
