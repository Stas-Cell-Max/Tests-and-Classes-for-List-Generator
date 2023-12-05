const { createDocument } = require('../lib/document');

test('createDocument generates correct HTML', () => {
    const title = "Test Title";
    const tasks = [
      { text: 'Mock Task 1', priority: false },
      { text: 'Mock Task 2', priority: true },
    ];
  
    const generatedHTML = createDocument(title, tasks).trim();
  
    const expectedHTML = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>${title}</title>
          <link rel="stylesheet" href="../dist/style.css" />
        </head>
        <body>
          <div class="card">
            ${new Header().render()} <!-- Update if Header.render() has content -->
            ${new TaskList(tasks.map(task => new TaskListItem([task.text], task.priority))).render()}
          </div>
        </body>
      </html>
    `.trim();
  
    expect(generatedHTML).toBe(expectedHTML);
  });
  