export const formatResponse = (text: string) => {
  const lines = text.split('\n');
  let formattedText = '';
  let inCodeBlock = false;
  let currentStep = 0;

  lines.forEach((line) => {
    // Handle step headers
    if (line.match(/^Step \d+:/i)) {
      currentStep++;
      formattedText += `<step-${currentStep}>${line.trim()}</step-${currentStep}>\n`;
    }
    // Handle code blocks
    else if (line.trim().startsWith('```')) {
      if (!inCodeBlock) {
        formattedText += `<code-block-${currentStep}>\n`;
        inCodeBlock = true;
      } else {
        formattedText += `</code-block-${currentStep}>\n`;
        inCodeBlock = false;
      }
    }
    // Handle notes
    else if (line.trim().startsWith('Note:') || line.trim().startsWith('Additional Notes:')) {
      formattedText += `<note>${line.trim()}</note>\n`;
    }
    // Handle regular text and code content
    else {
      if (inCodeBlock) {
        formattedText += `${line}\n`;
      } else {
        formattedText += `${line.trim()}\n`;
      }
    }
  });

  return formattedText.trim();
};