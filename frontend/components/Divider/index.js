import './divider.scss';

export default ({ theme, narrow }) => {
  const themeClass = theme ? ` divider--${theme}` : '';
  const narrowClass = narrow ? ' divider--narrow' : '';
  return (
    <div className={`divider${themeClass}${narrowClass}`} />
  );
};
