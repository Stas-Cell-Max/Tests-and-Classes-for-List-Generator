const { createDocument } = require('../lib/document');
const Header = require('../lib/components/header');
const TaskList = require('../lib/components/taskList');
const TaskListItem = require('../lib/components/taskListItem');

// Mock the components
jest.mock('../lib/components/header');
jest.mock('../lib/components/taskList');
jest.mock('../lib/components/taskListItem');

describe('document.js', () => {
  test('createDocument generates correct HTML', () => {
    // Mock the render methods of Header, TaskList, and TaskListItem
    Header.mockImplementation(() => ({ render: () => '<header>Mock Header</header>' }));
    TaskList.mockImplementation(() => ({ render: () => '<ul>Mock TaskList</ul>' }));
    TaskListItem.mockImplementation(() => ({ render: () => '<li>Mock TaskListItem</li>' }));

    // Replace this with your specific test case for createDocument
    const generatedHTML = createDocument('Test Title', [{ text: 'Task 1', priority: false }]);
    
    // Define the expected HTML based on the mocked components
    const expectedHTML = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Test Title</title>
          <link rel="stylesheet" href="../dist/style.css" />
        </head>
        <body>
          <div class="card">
            <header>Mock Header</header>
            <ul>Mock TaskList<li>Mock TaskListItem</li></ul>
          </div>
        </body>
      </html>
    `.trim();

    expect(generatedHTML.trim()).toBe(expectedHTML);
  });

  // Add more tests as needed for different scenarios in createDocument
});
