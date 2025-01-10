export const formatResponse = (text: string) => {
  // First, check if the response is just a number or very short
  if (!isNaN(Number(text)) || text.length < 10) {
    return `<note>Please provide a specific command or task you'd like help with in Termux.</note>`;
  }

  const lines = text.split('\n');
  let formattedText = '';
  let inCodeBlock = false;
  let currentStep = 0;

  lines.forEach((line) => {
    // Handle step headers
    if (line.match(/^Step \d+:|^\d+\./i)) {
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
    else if (line.trim().toLowerCase().startsWith('note:') || line.trim().toLowerCase().startsWith('additional notes:')) {
      formattedText += `<note>${line.trim()}</note>\n`;
    }
    // Handle regular text and code content
    else {
      if (inCodeBlock) {
        formattedText += `${line}\n`;
      } else if (line.trim()) {  // Only add non-empty lines
        formattedText += `${line.trim()}\n`;
      }
    }
  });

  // If no steps were found, wrap the entire response in a note
  if (currentStep === 0) {
    return `<note>Please provide a specific command or task you'd like help with in Termux.</note>`;
  }

  return formattedText.trim();
};