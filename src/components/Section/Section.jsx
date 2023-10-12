export const Section = ({ title, children }) => {
  return (
    <div>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
};
