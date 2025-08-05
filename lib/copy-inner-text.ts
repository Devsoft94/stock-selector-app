export function copyInnerText(
  e: React.MouseEvent<HTMLElement>,
  copiedText = 'Copied!',
  duration = 3000
) {
  const el = e.currentTarget as HTMLElement;
  const originalText = el.innerText;

  navigator.clipboard
    .writeText(originalText)
    .then(() => {
      el.innerHTML = `<span class='text-green-600 font-medium'>${copiedText}</span>`;

      setTimeout(() => {
        el.innerHTML = originalText;
      }, duration);
    })
    .catch(err => {
      console.error('Failed to copy text:', err);
    });
}

/** IMPLIMENTATION
 * onClick={e => copyInnerText(e)} className="cursor-pointer"
 */
