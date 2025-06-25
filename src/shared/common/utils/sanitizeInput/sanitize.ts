//인풋 value의 XSS / SQL injection 대응
export default function sanitizeIntput(inputValue:string){
  const noScript = inputValue.replace(/<script.*?>.*?<\/script>/gi, '');

  const noSpecialChars = noScript.replace(/<[^>]*>?/gm, '');
  const secapeHtmlChars = escapeHtml(noSpecialChars);
  return secapeHtmlChars.trim();
}

export function escapeHtml(input: string): string {
  return input.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      case "'":
        return '&#39;';
      default:
        return char;
    }
  });
}