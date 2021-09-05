export const copyTextToClipboard = (value: string) => {
  const el = document.createElement('textarea');

  el.style.position = 'fixed';
  el.style.left = '-9999px';
  el.style.top = '-9999px';
  el.value = value;

  document.body.appendChild(el);

  el.select();

  document.execCommand('copy');
  document.body.removeChild(el);
};
