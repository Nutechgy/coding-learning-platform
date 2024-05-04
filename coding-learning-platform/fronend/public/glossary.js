const glossary = [
    {
      term: "Array",
      definition: "An ordered collection of values.",
      language: "JavaScript",
    },
    {
      term: "Function",
      definition: "A reusable block of code.",
      language: "JavaScript",
    },
    // Add more terms as needed
  ];
  
  // Sort glossary alphabetically
  glossary.sort((a, b) => a.term.localeCompare(b.term));
  
  // Render glossary in sections
  const renderGlossary = () => {
    const languages = {};
  
    // Group terms by language
    glossary.forEach((item) => {
      if (!languages[item.language]) {
        languages[item.language] = [];
      }
      languages[item.language].push(item);
    });
  
    // Render sections for each language
    let html = '';
    for (const [language, terms] of Object.entries(languages)) {
      html += `<div class="language-section">`;
      html += `<h2>${language}</h2>`;
      html += `<ul>`;
      terms.forEach((item) => {
        html += `<li><strong>${item.term}</strong>: ${item.definition}</li>`;
      });
      html += `</ul>`;
      html += `</div>`;
    }
  
    document.getElementById('glossary').innerHTML = html;
  };
  
  // Initial render
  renderGlossary();
  